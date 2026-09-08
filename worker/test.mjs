/**
 * Self-test for the contact-form Worker.  Run:  node test.mjs
 *
 * Every case here is a hole that was actually open on 2026-09-08, when four
 * scripted spam posts reached julian@kanduit.de in two seconds: the origin
 * allowlist was computed but never enforced, the honeypot was the only
 * application-level check, and nothing rate-limited a caller.
 */
import worker from "./src/index.js";
import assert from "node:assert";

const ORIGIN = "https://kanduit.de";
const ENV = {
  CONTACT_TO: "julian@kanduit.de",
  CONTACT_FROM: "Kanduit Website <kontakt@kanduit.de>",
  ALLOWED_ORIGINS: "https://kanduit.de,https://www.kanduit.de",
  RESEND_API_KEY: "re_test",
  TURNSTILE_SECRET: "ts_secret",
};

const GOOD = {
  name: "Dr. Anna Beispiel",
  organisation: "Stadt Musterhausen",
  email: "a.beispiel@musterhausen.de",
  phone: "0211 1234567",
  message: "Wir suchen Unterstützung beim Aufbau eines Kennzahlen-Dashboards.",
  lang: "de",
  consent: true,
  "cf-turnstile-response": "tok",
};

// The real payload from 2026-09-08.
const SPAM = {
  name: "LarryFub", organisation: "Nokia", email: "s_biene@gmx.de",
  phone: "81635261394", lang: "de", consent: true,
  message: "Your future wins start with a $25000 promo code https://telegra.ph/Win-the-1000000",
  "cf-turnstile-response": "tok",
};

let sent = [];       // resend calls
let turnstileOk = true;

globalThis.fetch = async (url, opts) => {
  if (String(url).includes("turnstile")) {
    return new Response(JSON.stringify({ success: turnstileOk }), {
      headers: { "content-type": "application/json" },
    });
  }
  if (String(url).includes("api.resend.com")) {
    sent.push(JSON.parse(opts.body));
    return new Response("{}", { status: 200 });
  }
  throw new Error("unexpected fetch: " + url);
};

function post(body, { origin = ORIGIN, env = ENV, ip = "203.0.113.5", headers = {} } = {}) {
  return worker.fetch(new Request("https://form.kanduit.de", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(origin ? { Origin: origin } : {}),
      "CF-Connecting-IP": ip,
      ...headers,
    },
    body: JSON.stringify(body),
  }), env);
}

function memKV() {
  const m = new Map();
  return {
    get: async (k) => m.get(k) ?? null,
    put: async (k, v) => void m.set(k, v),
  };
}

const tests = [];
const test = (name, fn) => tests.push([name, fn]);

test("happy path sends exactly one mail", async () => {
  sent = [];
  const r = await post(GOOD);
  assert.equal(r.status, 200);
  assert.equal(sent.length, 1);
  assert.equal(sent[0].reply_to, GOOD.email);
});

test("scripted POST with no Origin is rejected (the 09-08 hole)", async () => {
  sent = [];
  const r = await post(GOOD, { origin: null });
  assert.equal(r.status, 403);
  assert.equal(sent.length, 0);
});

test("POST from a foreign origin is rejected", async () => {
  sent = [];
  const r = await post(GOOD, { origin: "https://evil.example" });
  assert.equal(r.status, 403);
  assert.equal(sent.length, 0);
});

test("Referer is accepted when Origin is absent (no-JS fallback)", async () => {
  sent = [];
  const r = await post(GOOD, { origin: null, headers: { Referer: "https://kanduit.de/kontakt/" } });
  assert.equal(r.status, 200);
  assert.equal(sent.length, 1);
});

test("missing TURNSTILE_SECRET fails closed, does not fail open", async () => {
  sent = [];
  const { TURNSTILE_SECRET, ...noSecret } = ENV;
  const r = await post(GOOD, { env: noSecret });
  assert.equal(r.status, 503);
  assert.equal(sent.length, 0);
});

test("absent turnstile token is rejected", async () => {
  sent = [];
  const { "cf-turnstile-response": _, ...noTok } = GOOD;
  const r = await post(noTok);
  assert.equal(r.status, 403);
  assert.equal(sent.length, 0);
});

test("turnstile token that fails verification is rejected", async () => {
  sent = [];
  turnstileOk = false;
  const r = await post(GOOD);
  turnstileOk = true;
  assert.equal(r.status, 403);
  assert.equal(sent.length, 0);
});

test("the actual 2026-09-08 spam payload is dropped silently", async () => {
  sent = [];
  const r = await post(SPAM);
  assert.equal(r.status, 200);          // bots learn nothing
  assert.equal(sent.length, 0);         // but nothing is delivered
});

test("a URL in the name field is dropped", async () => {
  sent = [];
  const r = await post({ ...GOOD, name: "buy https://cheap.example" });
  assert.equal(r.status, 200);
  assert.equal(sent.length, 0);
});

test("two or more links anywhere are dropped", async () => {
  sent = [];
  const r = await post({ ...GOOD, message: "see https://a.example and https://b.example" });
  assert.equal(r.status, 200);
  assert.equal(sent.length, 0);
});

test("one legitimate link is allowed through", async () => {
  sent = [];
  const r = await post({ ...GOOD, message: "Ausschreibung: https://vergabe.musterhausen.de/123" });
  assert.equal(r.status, 200);
  assert.equal(sent.length, 1);
});

test("honeypot drops silently", async () => {
  sent = [];
  const r = await post({ ...GOOD, _gotcha: "x" });
  assert.equal(r.status, 200);
  assert.equal(sent.length, 0);
});

test("missing consent is a validation error", async () => {
  sent = [];
  const r = await post({ ...GOOD, consent: false });
  assert.equal(r.status, 422);
  assert.equal(sent.length, 0);
});

test("oversized message is rejected", async () => {
  sent = [];
  const r = await post({ ...GOOD, message: "x".repeat(5001) });
  assert.equal(r.status, 422);
  assert.equal(sent.length, 0);
});

test("rate limit stops the 4-in-2-seconds burst", async () => {
  sent = [];
  const env = { ...ENV, RL: memKV() };
  const codes = [];
  for (let i = 0; i < 4; i++) codes.push((await post(GOOD, { env })).status);
  assert.deepEqual(codes, [200, 200, 200, 429]);
  assert.equal(sent.length, 3);
});

test("rate limit is per IP, not global", async () => {
  sent = [];
  const env = { ...ENV, RL: memKV() };
  for (let i = 0; i < 3; i++) await post(GOOD, { env, ip: "198.51.100.1" });
  const other = await post(GOOD, { env, ip: "198.51.100.2" });
  assert.equal(other.status, 200);
});

test("no KV binding means no rate limit, not a crash", async () => {
  sent = [];
  for (let i = 0; i < 4; i++) assert.equal((await post(GOOD)).status, 200);
  assert.equal(sent.length, 4);
});

let failed = 0;
for (const [name, fn] of tests) {
  try {
    await fn();
    console.log(`  ok    ${name}`);
  } catch (err) {
    failed++;
    console.log(`  FAIL  ${name}\n        ${err.message}`);
  }
}
console.log(`\n${tests.length - failed}/${tests.length} passed`);
process.exit(failed ? 1 : 0);
