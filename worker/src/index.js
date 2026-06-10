/**
 * Kanduit contact-form Worker.
 * Receives a POST from the kanduit.de contact form and emails it to the
 * business inbox via the Resend API (EU region).
 * Accepts JSON (fetch from the site) or form-encoded (no-JS fallback).
 *
 * Config (wrangler.jsonc → vars):
 *   CONTACT_TO       recipient inbox        (e.g. julian@kanduit.de)
 *   CONTACT_FROM     verified Resend sender (e.g. "Kanduit Website <onboarding@resend.dev>")
 *   ALLOWED_ORIGINS  comma-separated CORS allowlist
 * Secret (wrangler secret put):
 *   RESEND_API_KEY   Resend API key
 */

const FIELDS = ["name", "organisation", "email", "phone", "message", "lang"];

function corsHeaders(origin, env) {
  const allowed = (env.ALLOWED_ORIGINS || "")
    .split(",").map((s) => s.trim()).filter(Boolean);
  const ok = origin && allowed.includes(origin);
  return {
    "Access-Control-Allow-Origin": ok ? origin : allowed[0] || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
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

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST")
      return new Response("Method Not Allowed", { status: 405, headers: cors });

    let data;
    try {
      data = await readBody(request);
    } catch {
      return Response.json({ ok: false, error: "bad_request" }, { status: 400, headers: cors });
    }

    // Honeypot: bots fill _gotcha. Pretend success, send nothing.
    if (data._gotcha) return Response.json({ ok: true }, { headers: cors });

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const message = (data.message || "").trim();
    const consent = data.consent === true || data.consent === "on" || data.consent === "true";
    const validEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

    if (!name || !validEmail || !message || !consent)
      return Response.json({ ok: false, error: "validation" }, { status: 422, headers: cors });

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
          from: env.CONTACT_FROM,        // e.g. "Kanduit Website <onboarding@resend.dev>"
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
