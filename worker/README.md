# kanduit-contact (Cloudflare Worker)

Receives the kanduit.de contact-form submission and emails it to
`julian@kanduit.de` via the **Resend** API (EU region).

## Why the anti-abuse layer exists

On **2026-09-08, 04:37**, four scripted spam submissions ("LarryFub", a
telegra.ph link) landed in the business inbox within two seconds. The form had a
`_gotcha` honeypot and an `ALLOWED_ORIGINS` list, and neither stopped it:

- the honeypot only catches bots that fill every field they find — this one
  posted exactly the real fields, `consent` included;
- `ALLOWED_ORIGINS` was only ever **echoed back as CORS headers**. CORS is a
  browser mechanism. A `curl`/script POST straight at `form.kanduit.de` never
  consults it, and the Worker never rejected on that basis.

So the endpoint was, in effect, an open mail relay into the inbox.

## What a request now has to pass

| # | Check | Failure |
|---|-------|---------|
| 1 | `Origin` (or `Referer`) on `ALLOWED_ORIGINS` — **enforced server-side** | `403` |
| 2 | Per-IP rate limit, 3/hour (KV; skipped if `RL` unbound) | `429` |
| 3 | Cloudflare Turnstile token verified against the siteverify API | `403` |
| 4 | `_gotcha` honeypot empty | silent drop (`200`) |
| 5 | name + valid email + message + consent, all within length caps | `422` |
| 6 | Link/content heuristics | silent drop (`200`) |

Turnstile is the real gate; the rest is defence in depth. Heuristic and honeypot
rejections return `200` deliberately, so a bot cannot tell which probe worked.

**The Worker fails closed.** With no `TURNSTILE_SECRET` configured it answers
`503` and sends nothing, rather than quietly reverting to the state that let the
spam through.

Heuristics are lenient where a real enquiry might look odd — one link in the
message body is fine (a Kommune pasting a tender URL) — and strict where it
never can be: a URL in the name, organisation or phone field is always a drop.

## Setup

```
cd worker && npm install && npx wrangler login
```

**1. Create the Turnstile widget.** Cloudflare dashboard → Turnstile → Add
widget. Domain `kanduit.de`, mode **Managed**. You get a *site key* (public) and
a *secret key*.

**2. Secrets** (never committed):

```
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put TURNSTILE_SECRET
```

**3. Rate-limit KV** (optional but recommended):

```
npx wrangler kv namespace create RL
```

Paste the printed id into the commented `kv_namespaces` block in
`wrangler.jsonc` and uncomment it.

**4. Deploy — order matters, or the live form breaks for a minute:**

```
# a) site first: put the SITE key in TURNSTILE_SITEKEY at the top of ../build.py,
#    commit + push. Pages deploys the widget; the old Worker ignores the extra
#    field, so submissions keep working throughout.
# b) then the Worker, which starts enforcing:
npx wrangler deploy
```

## Config (wrangler.jsonc → vars)

| var | meaning |
|-----|---------|
| `CONTACT_TO` | inbox that receives enquiries (`julian@kanduit.de`) |
| `CONTACT_FROM` | Resend sender — see the note below |
| `ALLOWED_ORIGINS` | origin allowlist, enforced (prod domains + localhost) |

⚠️ `CONTACT_FROM` is still `onboarding@resend.dev`, Resend's **shared sandbox
sender**. It is not DKIM-signed as kanduit.de and its reputation is shared with
every other Resend test account. Verify kanduit.de in the Resend dashboard, then
switch this to `Kanduit Website <kontakt@kanduit.de>`.

## Test

```
node test.mjs          # 17 cases, no network — stubs Turnstile + Resend
npx wrangler dev --remote
```

`test.mjs` pins each hole from the 09-08 incident, including the exact spam
payload that got through. Run it after any change to `src/index.js`.

## Behaviour

- Accepts `POST` JSON (the site's `fetch`) **or** form-encoded (no-JS fallback →
  303 redirect back to the contact page with `?sent=1`).
- `reply_to` is the submitter, so you can answer straight from the inbox.
- Dropped-by-heuristics submissions are logged (`wrangler tail`) with the first
  120 characters of the message, so a false positive is recoverable.
