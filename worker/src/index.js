/**
 * Kanduit contact-form Worker.
 * Receives a POST from the kanduit.de contact form and emails it to the
 * business inbox via the Resend API (EU region).
 * Accepts JSON (fetch from the site) or form-encoded (no-JS fallback).
 *
 * Anti-abuse, in the order a request meets it:
 *   1. Origin/Referer must be on ALLOWED_ORIGINS   → 403  (blocks scripted POSTs)
 *   2. Per-IP rate limit (KV, optional binding)    → 429
 *   3. Cloudflare Turnstile token must verify      → 403  (the real gate)
 *   4. Honeypot `_gotcha`                          → silent drop
 *   5. Field validation + length caps              → 422
 *   6. Link/content heuristics                     → silent drop
 *
 * Config (wrangler.jsonc → vars):
 *   CONTACT_TO         recipient inbox        (e.g. julian@kanduit.de)
 *   CONTACT_FROM       verified Resend sender (e.g. "Kanduit Website <kontakt@kanduit.de>")
 *   ALLOWED_ORIGINS    comma-separated origin allowlist (ENFORCED, not just CORS)
 * Secrets (wrangler secret put):
 *   RESEND_API_KEY     Resend API key
 *   TURNSTILE_SECRET   Turnstile secret key — REQUIRED; the Worker fails closed without it
 * Optional binding:
 *   RL                 KV namespace for per-IP rate limiting (skipped if absent)
 */

const FIELDS = ["name", "organisation", "email", "phone", "message", "lang"];

// Length caps — anything longer is abuse, not an enquiry.
const MAX_LEN = {
  name: 200, organisation: 200, email: 320, phone: 60, message: 5000, lang: 8,
};

// Per-IP rate limit (only active when the RL KV namespace is bound).
const RL_MAX = 3;
const RL_WINDOW_S = 3600;

const URL_RE = /(?:https?:\/\/|www\.)[^\s<>"']+/gi;

// Hosts that never appear in a genuine enquiry from a Kommune.
const BLOCKED_HOSTS = [
  "telegra.ph", "bit.ly", "tinyurl.com", "t.me", "is.gd", "cutt.ly",
  "goo.gl", "ow.ly", "rebrand.ly", "shorturl.at", "rb.gy",
];

function allowedOrigins(env) {
  return (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
}

function corsHeaders(origin, env) {
  const allowed = allowedOrigins(env);
  const ok = origin && allowed.includes(origin);
  return {
    "Access-Control-Allow-Origin": ok ? origin : allowed[0] || "https://kanduit.de",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

/**
 * Server-side origin check. CORS headers alone are advisory — browsers honour
 * them, scripts and curl do not. This is the check that actually rejects.
 */
function originAllowed(request, env) {
  const allowed = allowedOrigins(env);
  if (!allowed.length) return false;

  const origin = request.headers.get("Origin");
  if (origin) return allowed.includes(origin);

  // No-JS form posts may omit Origin on some clients; fall back to Referer.
  const referer = request.headers.get("Referer");
  if (referer) {
    try { return allowed.includes(new URL(referer).origin); } catch { return false; }
  }
  return false;
}

async function rateLimited(env, ip) {
  if (!env.RL || !ip) return false;            // binding optional
  const key = `rl:${ip}`;
  const now = Date.now();
  let hits = [];
  try {
    const raw = await env.RL.get(key);
    if (raw) hits = JSON.parse(raw).filter((t) => now - t < RL_WINDOW_S * 1000);
  } catch { hits = []; }

  if (hits.length >= RL_MAX) return true;
  hits.push(now);
  try {
    await env.RL.put(key, JSON.stringify(hits), { expirationTtl: RL_WINDOW_S });
  } catch { /* rate limiting is best-effort; never block a real enquiry on KV */ }
  return false;
}

async function verifyTurnstile(token, ip, secret) {
  if (!token) return false;
  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);
  try {
    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST", body,
    });
    if (!r.ok) return false;
    const out = await r.json();
    return out.success === true;
  } catch {
    return false;
  }
}

/**
 * Content heuristics. Deliberately lenient on the message (a Kommune may
 * legitimately paste one link to a tender) and strict everywhere else —
 * a URL in the name or phone field is never a real enquiry.
 */
function looksLikeSpam(data) {
  const short = ["name", "organisation", "phone"];
  for (const f of short) {
    if (URL_RE.test(String(data[f] || ""))) { URL_RE.lastIndex = 0; return true; }
    URL_RE.lastIndex = 0;
  }

  const blob = FIELDS.map((f) => String(data[f] || "")).join(" ");
  const lower = blob.toLowerCase();

  if (BLOCKED_HOSTS.some((h) => lower.includes(h))) return true;
  if (/\[(?:url|link)[=\]]/i.test(blob)) return true;      // BBCode spam

  const links = blob.match(URL_RE) || [];
  URL_RE.lastIndex = 0;
  if (links.length >= 2) return true;

  return false;
}

function esc(s) {
  return String(s || "").replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));
}

async function readBody(request) {
  const ct = request.headers.get("content-type") || "";
  if (ct.includes("application/json")) return await request.json();
  const form = await request.formData();
  return Object.fromEntries(form.entries());
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    const cors = corsHeaders(origin, env);
    const ip = request.headers.get("CF-Connecting-IP");

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST")
      return new Response("Method Not Allowed", { status: 405, headers: cors });

    // 1. Origin allowlist — enforced, not merely advertised.
    if (!originAllowed(request, env))
      return Response.json({ ok: false, error: "forbidden" }, { status: 403, headers: cors });

    // 2. Per-IP rate limit.
    if (await rateLimited(env, ip))
      return Response.json({ ok: false, error: "rate_limited" }, { status: 429, headers: cors });

    let data;
    try {
      data = await readBody(request);
    } catch {
      return Response.json({ ok: false, error: "bad_request" }, { status: 400, headers: cors });
    }

    // 3. Turnstile. Fails closed: no secret configured means no submissions.
    if (!env.TURNSTILE_SECRET) {
      console.error("TURNSTILE_SECRET is not set — rejecting. Run: wrangler secret put TURNSTILE_SECRET");
      return Response.json({ ok: false, error: "misconfigured" }, { status: 503, headers: cors });
    }
    const token = data["cf-turnstile-response"] || data.turnstile_token;
    if (!(await verifyTurnstile(token, ip, env.TURNSTILE_SECRET)))
      return Response.json({ ok: false, error: "turnstile" }, { status: 403, headers: cors });

    // 4. Honeypot: bots fill _gotcha. Pretend success, send nothing.
    if (data._gotcha) return Response.json({ ok: true }, { headers: cors });

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const message = (data.message || "").trim();
    const consent = data.consent === true || data.consent === "on" || data.consent === "true";
    const validEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

    // 5. Validation + length caps.
    const tooLong = FIELDS.some((f) => String(data[f] || "").length > (MAX_LEN[f] || 500));
    if (!name || !validEmail || !message || !consent || tooLong)
      return Response.json({ ok: false, error: "validation" }, { status: 422, headers: cors });

    // 6. Content heuristics — silent drop, so bots learn nothing from the response.
    if (looksLikeSpam(data)) {
      console.log("dropped (heuristics):", ip, JSON.stringify(String(data.message || "").slice(0, 120)));
      return Response.json({ ok: true }, { headers: cors });
    }

    const lines = [
      `Name: ${data.name}`,
      `Organisation: ${data.organisation || "—"}`,
      `E-Mail: ${email}`,
      `Telefon: ${data.phone || "—"}`,
      `Sprache: ${data.lang || "—"}`,
      "",
      data.message,
    ].join("\n");
    const html =
      `<h2>Neue Anfrage über kanduit.de</h2>` +
      `<p><b>Name:</b> ${esc(data.name)}<br>` +
      `<b>Organisation:</b> ${esc(data.organisation) || "—"}<br>` +
      `<b>E-Mail:</b> ${esc(email)}<br>` +
      `<b>Telefon:</b> ${esc(data.phone) || "—"}<br>` +
      `<b>Sprache:</b> ${esc(data.lang) || "—"}</p>` +
      `<p style="white-space:pre-wrap">${esc(data.message)}</p>`;

    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: env.CONTACT_FROM,
          to: [env.CONTACT_TO],
          reply_to: email,
          subject: `Neue Anfrage über kanduit.de — ${name}`,
          text: lines,
          html,
        }),
      });
      if (!r.ok) {
        console.error("resend failed:", r.status, await r.text());
        return Response.json({ ok: false, error: "send_failed" }, { status: 502, headers: cors });
      }
    } catch (err) {
      console.error("send failed:", err && err.message);
      return Response.json({ ok: false, error: "send_failed" }, { status: 502, headers: cors });
    }

    // No-JS fallback posts are real navigations → redirect back to a thank-you anchor.
    const ct = request.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      const back = origin || "https://kanduit.de";
      const path = data.lang === "en" ? "/en/contact/" : "/kontakt/";
      return Response.redirect(`${back}${path}?sent=1`, 303);
    }
    return Response.json({ ok: true }, { headers: cors });
  },
};
