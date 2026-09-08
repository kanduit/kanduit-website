/* Kanduit contact form — posts to the Cloudflare Worker via fetch and shows
   an inline result. Falls back to a normal form POST if JS is unavailable.
   Cloudflare Turnstile injects `cf-turnstile-response` into the form; FormData
   picks it up automatically and the Worker verifies it server-side. */
document.addEventListener("submit", async (e) => {
  const form = e.target;
  if (form.id !== "kd-contact-form") return;
  e.preventDefault();

  const endpoint = form.dataset.endpoint;
  const status = form.querySelector(".kd-form-status");
  const btn = form.querySelector('button[type="submit"]');

  const data = Object.fromEntries(new FormData(form).entries());
  data.consent = form.querySelector('[name="consent"]').checked;

  // Turnstile has not solved yet (widget still loading, or challenge pending).
  if (!data["cf-turnstile-response"]) {
    status.className = "kd-form-status is-error";
    status.textContent = form.dataset.captcha || form.dataset.error;
    return;
  }

  btn.disabled = true;
  status.className = "kd-form-status is-sending";
  status.textContent = form.dataset.sending;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("bad status " + res.status);
    form.innerHTML = '<p class="kd-form-done">' + form.dataset.success + "</p>";
  } catch (err) {
    btn.disabled = false;
    status.className = "kd-form-status is-error";
    status.textContent = form.dataset.error;
    // A used or expired token cannot be replayed — hand the visitor a fresh one.
    if (window.turnstile) window.turnstile.reset();
  }
});
