# kanduit-contact (Cloudflare Worker)

Receives the kanduit.de contact-form submission and emails it to
`julian@kanduit.de` via the Cloudflare **Email Sending** binding — submissions
stay in the Cloudflare/EU stack (no third-party form service).

## One-time setup

1. **Install + log in**
   ```
   cd worker && npm install
   npx wrangler login
   ```
2. **Onboard the sending domain** (adds the DKIM/SPF DNS records to kanduit.de;
   requires the domain's DNS to be reachable by Cloudflare):
   ```
   npx wrangler email sending enable kanduit.de
   ```
   Verify it shows up:  `npx wrangler email sending list`
3. **Deploy**
   ```
   npx wrangler deploy
   ```
   Wrangler prints the Worker URL, e.g. `https://kanduit-contact.<sub>.workers.dev`.
4. **Wire the site to it:** put that URL in `WORKER_ENDPOINT` at the top of
   `../build.py`, rebuild (`python3 ../build.py`), commit. (Optional: bind a
   custom route like `form.kanduit.de` and use that instead.)

## Config (wrangler.jsonc → vars)

| var | meaning |
|-----|---------|
| `CONTACT_TO` | inbox that receives enquiries (`julian@kanduit.de`) |
| `CONTACT_FROM` | sender address on the onboarded domain (`kontakt@kanduit.de`) |
| `ALLOWED_ORIGINS` | CORS allowlist (prod domain + localhost for testing) |

## Behaviour

- Accepts `POST` JSON (the site's `fetch`) **or** form-encoded (no-JS fallback →
  303 redirect back to the contact page with `?sent=1`).
- Drops bot submissions via the `_gotcha` honeypot.
- Validates name + email + message + consent (GDPR) before sending.
- `replyTo` is set to the submitter so you can reply directly from your inbox.

## Local test

```
npx wrangler dev --remote     # --remote so email actually sends via the service
```
