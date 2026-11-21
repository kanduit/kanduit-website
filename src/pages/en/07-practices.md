# FOR PRACTICES — English

**URL:** `/en/practices`  ·  **Toggle → DE:** `/praxen`
**Role:** B2B page. Shows the feedback SMS that Kanduit built and runs for a dermatology practice
with two locations, with a focus on GDPR and professional secrecy. English version of `/praxen`.
**Upkeep:** Do not name competitors. Do not name the practice until it has agreed in writing.
The phone demo keeps the German patient-facing texts on purpose; the legal PDFs are German only.

## SEO

- **Meta title:** Feedback SMS for medical practices using Doctolib | Kanduit
- **Meta description:** More Google reviews with no extra work at the front desk: one SMS after the appointment, straight from Doctolib, only with consent. Numbers deleted after 72 hours, data processing agreement covering § 203 StGB, hosted in Germany.

---

## Section 1: Hero

```html
<div class="kd-wrap">
  <div class="kd-hero-split">
    <div>
      <span class="kd-eyebrow">Feedback SMS for medical practices</span>
      <h1 class="kd-h1">More Google reviews. <em>No extra work at the front desk.</em></h1>
      <p class="kd-lede">
        One SMS after the appointment. It comes automatically from your Doctolib calendar and
        goes only to patients who have given consent. Satisfied patients review you on Google.
        Criticism reaches you directly. We set everything up and run it for you.
      </p>
      <div class="kd-actions">
        <a class="kd-btn" href="/en/contact">Arrange a call →</a>
        <a class="kd-btn kd-btn--ghost" href="#datenschutz">How you stay GDPR-compliant ↓</a>
      </div>
      <p class="kd-hero-note">For practices using Doctolib. A different booking system? <a href="/en/contact">We are happy to check it.</a></p>
      <div class="kd-facts">
        <div><div class="kd-fact__v">1<small>SMS</small></div><div class="kd-fact__l">per visit, no reminders</div></div>
        <div><div class="kd-fact__v">72<small>h</small></div><div class="kd-fact__l">then the number is deleted</div></div>
        <div><div class="kd-fact__v">0</div><div class="kd-fact__l">uploads or lists at the front desk</div></div>
      </div>
    </div>

    <div class="kd-demo">
      <p class="kd-demo__for" hidden>This is how the SMS would look for <b data-demo-name>Praxis Muster</b>. Tap 👍 or 👎.</p>
      <div class="kd-phone" data-screen="sms" aria-label="Example: feedback SMS on a patient's smartphone">
        <div class="kd-phone__screen">
          <div class="kd-phone__bar">
            <div class="kd-phone__avatar" data-demo-initials>PM</div>
            <div class="kd-phone__name" data-demo-name>Praxis Muster</div>
            <div class="kd-phone__meta">Textnachricht</div>
          </div>

          <div class="kd-scr kd-scr--sms">
            <div class="kd-phone__thread">
              <div class="kd-phone__time">Heute 11:42 · eine Stunde nach dem Termin</div>
              <div class="kd-sms">
                <span data-demo-name>Praxis Muster</span>: Wie war Ihr Besuch?<br><br>
                👍&nbsp;<a>beispiel.de/g/7Hq2</a><br>
                👎&nbsp;<a>beispiel.de/f/7Hq2</a>
              </div>
              <div class="kd-tap">
                <button type="button" data-go="google">👍&nbsp;To Google</button>
                <button type="button" data-go="feedback">👎&nbsp;Feedback</button>
              </div>
            </div>
          </div>

          <div class="kd-scr kd-scr--google">
            <div class="kd-pg">
              <p class="kd-pg__label">Google review form (simplified)</p>
              <p class="kd-pg__h">Bewertung für <span data-demo-name>Praxis Muster</span></p>
              <div class="kd-stars" aria-hidden="true">★★★★★</div>
              <div class="kd-pg__field">Teilen Sie Ihre Erfahrungen …</div>
              <p class="kd-pg__note">👍 opens the review form of your Google profile directly. No detour, no login with us.</p>
              <button type="button" class="kd-pg__back" data-go="sms">← Back to the SMS</button>
            </div>
          </div>

          <div class="kd-scr kd-scr--feedback">
            <div class="kd-pg">
              <p class="kd-pg__brand"><span class="kd-pg__mark" data-demo-initials>PM</span><span data-demo-name>Praxis Muster</span></p>
              <p class="kd-pg__h">Das tut uns leid. Was können wir besser machen?</p>
              <div class="kd-pg__field kd-pg__field--tall"></div>
              <p class="kd-pg__note">Angaben zu Diagnosen oder Behandlungen sind nicht nötig.</p>
              <div class="kd-pg__btn">Absenden</div>
              <p class="kd-pg__note">Lieber öffentlich bewerten? <button type="button" class="kd-pg__link" data-go="google">Zu Google →</button></p>
              <p class="kd-pg__note kd-pg__note--muted">Keine SMS mehr erhalten? <u>Abmelden</u></p>
              <button type="button" class="kd-pg__back" data-go="sms">← Back to the SMS</button>
            </div>
          </div>
        </div>
      </div>
      <p class="kd-source" style="text-align:center;">Patients see German texts, shown here as sent.</p>
    </div>
  </div>
</div>
<script src="/js/praxen-demo.js" defer></script>
```

---

## Section 1b: Your contact

```html
<div class="kd-wrap kd-band-soft">
  <div class="kd-person">
    <img class="kd-person__pfp" src="/img/julian-cheng.jpg" alt="Julian Cheng" width="88" height="88">
    <div class="kd-person__who">
      <p class="kd-person__name">Julian Cheng</p>
      <p class="kd-person__role">Founder · Your contact</p>
      <p class="kd-person__p">I build and run the feedback SMS myself. So you do not talk to a
        hotline. You talk to the person who sets up your Doctolib connection and steps in when
        something gets stuck.</p>
    </div>
    <div class="kd-person__reach">
      <a class="kd-btn" href="tel:+4915732597385">0157 3259 7385</a>
      <a class="kd-btn kd-btn--ghost" href="https://wa.me/4915732597385" target="_blank" rel="noopener">WhatsApp</a>
      <a class="kd-btn kd-btn--ghost" href="mailto:julian@kanduit.de">julian@kanduit.de</a>
    </div>
  </div>
</div>
```

---

## Section 2: How it works

```html
<div class="kd-wrap kd-band-soft">
  <span class="kd-eyebrow">How it works</span>
  <h2 class="kd-h2">From appointment to review, without anyone touching a list.</h2>
  <p class="kd-intro">
    Kanduit gets its own restricted Doctolib account. Everything else runs on our server in
    Germany. Your team keeps working as before.
  </p>
  <div class="kd-steps">
    <div class="kd-step">
      <div class="kd-step__n">01</div>
      <h3 class="kd-step__h">Mark consent</h3>
      <p class="kd-step__p">One field in Doctolib. The front desk ticks it, or patients set it
        themselves when booking online. No tick, no SMS.</p>
      <span class="kd-step__who">Your practice · seconds</span>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">02</div>
      <h3 class="kd-step__h">Fetch the appointment list</h3>
      <p class="kd-step__p">Every 30 minutes during opening hours, in memory only. Names, dates
        of birth and appointment types are discarded immediately.</p>
      <span class="kd-step__who">Automatic</span>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">03</div>
      <h3 class="kd-step__h">Send one SMS</h3>
      <p class="kd-step__p">No earlier than 60 minutes after the appointment ends, Monday to
        Saturday from 8 am to 8 pm, through a German SMS provider. The same number at most
        once every six months.</p>
      <span class="kd-step__who">Automatic</span>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">04</div>
      <h3 class="kd-step__h">Review or feedback</h3>
      <p class="kd-step__p">👍 opens your Google review form directly. 👎 opens a private
        feedback page that sends you an email.</p>
      <span class="kd-step__who">Your patients · one tap</span>
    </div>
  </div>
</div>
```

---

## Section 3: Built for a dermatology practice

```html
<div class="kd-wrap">
  <div class="kd-case-grid">
    <div>
      <span class="kd-eyebrow">In use</span>
      <h2 class="kd-h2">Built for a dermatology practice with two locations.</h2>
      <p style="color:var(--neutral-700); max-width:54ch;">
        The practice wanted a solution that works with Doctolib and keeps patient data to a
        minimum. Less than four weeks passed from the first offer to live operation at the
        first location. Both locations have been running since November 2026.
      </p>
      <ul class="kd-built">
        <li><span><b>Doctolib connection without an export file.</b> A dedicated account with
          two-factor sign-in reads the calendar. Nothing ends up on a hard drive.</span></li>
        <li><span><b>Two locations, one rule.</b> Each location has its own sender, links
          and Google profile. The six-month block and unsubscribes apply across both locations.</span></li>
        <li><span><b>A late “no” counts.</b> If consent is removed in Doctolib before sending,
          or the patient misses the appointment, the SMS lapses.</span></li>
        <li><span><b>Contracts and texts from one source.</b> A data processing agreement (AV
          contract, Art. 28 GDPR) that commits us to professional secrecy, consent texts, privacy
          notices and reply templates for Google reviews.</span></li>
        <li><span><b>Monitored around the clock.</b> An external watchdog checks every two minutes
          that fetching and sending are running, and alerts us before you notice.</span></li>
      </ul>
    </div>

    <div class="kd-report" aria-label="Example of a monthly report">
      <p class="kd-report__h">Monthly report, feedback SMS</p>
      <p class="kd-report__sub">Praxis Muster · North location · sample figures</p>
      <p class="kd-report__sec">Appointment list fetch</p>
      <table>
        <tr><td>Appointments read</td><td>1,184</td></tr>
        <tr><td>not scheduled: no consent</td><td>402</td></tr>
        <tr><td>not scheduled: no mobile number</td><td>131</td></tr>
        <tr><td>not scheduled: asked in the last 6 months</td><td>96</td></tr>
        <tr><td>SMS scheduled</td><td>555</td></tr>
      </table>
      <p class="kd-report__sec">After the SMS</p>
      <table>
        <tr><td>👍 on to Google</td><td>148</td></tr>
        <tr><td>👎 feedback to the practice</td><td>21</td></tr>
        <tr><td>Unsubscribes</td><td>4</td></tr>
      </table>
      <p class="kd-report__foot">Anonymous counts only, no personal data. Each reason for
        exclusion is listed separately, so you can see where there is potential.</p>
    </div>
  </div>
</div>
```

---

## Section 4: What we ensure

```html
<div class="kd-wrap kd-band-soft" id="datenschutz">
  <span class="kd-eyebrow">GDPR &amp; professional secrecy</span>
  <h2 class="kd-h2">What we ensure, so your practice stays on the safe side.</h2>
  <p class="kd-intro">
    Contacting patients after their appointment means processing health data. Strict rules
    apply. Here you can see which rules they are and how the feedback SMS meets each one.
  </p>
  <div class="kd-compare-wrap">
    <table class="kd-compare">
      <thead>
        <tr><th scope="col">Requirement</th><th scope="col" class="kd-us">How we ensure it</th></tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Explicit consent<span class="kd-ref">Art. 9(2)(a) GDPR</span></th>
          <td class="kd-us">Without the tick in Doctolib, no number is taken over. We supply the
            <b>consent texts</b> for the front desk and online booking. Minors are always excluded.</td>
        </tr>
        <tr>
          <th scope="row">Data minimisation<span class="kd-ref">Art. 5(1)(c) GDPR</span></th>
          <td class="kd-us">The appointment list is read in memory only. We keep <b>only the mobile number,
            the appointment end time and the location</b>. Names, dates of birth and appointment types are never stored.</td>
        </tr>
        <tr>
          <th scope="row">Storage limitation<span class="kd-ref">Art. 5(1)(e) GDPR</span></th>
          <td class="kd-us">The number is <b>deleted no later than 72 hours after sending</b>. Unsent numbers
            lapse 72 hours after the appointment. A daily check raises an alarm if anything stays longer.</td>
        </tr>
        <tr>
          <th scope="row">Data processing on behalf<span class="kd-ref">Art. 28 GDPR</span></th>
          <td class="kd-us"><b>AV contract</b> with every subcontractor listed by name. We announce any change
            in writing in advance.</td>
        </tr>
        <tr>
          <th scope="row">Professional secrecy<span class="kd-ref">§ 203 StGB (German Criminal Code)</span></th>
          <td class="kd-us">The AV contract <b>expressly commits Kanduit to professional secrecy</b>.
            Error messages and logs contain no patient data.</td>
        </tr>
        <tr>
          <th scope="row">Security of processing<span class="kd-ref">Art. 32 GDPR</span></th>
          <td class="kd-us">Encrypted data partition, encrypted connections, Doctolib account with
            two-factor sign-in. The <b>technical and organisational measures</b> are documented one by one.</td>
        </tr>
        <tr>
          <th scope="row">Processing in Germany<span class="kd-ref">Art. 44 et seq. GDPR</span></th>
          <td class="kd-us">Server, SMS sending and email run with <b>providers in Germany</b>.
            No transfer to third countries.</td>
        </tr>
        <tr>
          <th scope="row">Withdrawal<span class="kd-ref">Art. 7(3) GDPR</span></th>
          <td class="kd-us">Unsubscribe with one tap on the feedback page. If consent is removed in
            Doctolib, <b>a pending SMS lapses</b> automatically.</td>
        </tr>
        <tr>
          <th scope="row">Informing patients<span class="kd-ref">Art. 13 GDPR</span></th>
          <td class="kd-us">We supply the <b>section for your privacy policy</b>. The feedback pages
            set no cookies and load no third-party services.</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="kd-docs">
    <div>
      <h3 class="kd-docs__h">Documents for your data protection officer</h3>
      <p class="kd-docs__p">Have everything checked in advance, before we even talk. These are the texts
        in use at the dermatology practice; only the practice details have been replaced. The
        documents are in German because they are used with German practices and their data
        protection officers.</p>
      <ul>
        <li>Model AV contract covering § 203 StGB</li>
        <li>Technical and organisational measures (Annex 1)</li>
        <li>Consent texts for the front desk and online booking</li>
        <li>Template section for your privacy policy</li>
      </ul>
    </div>
    <div class="kd-docs__dl">
      <a class="kd-btn" href="/docs/Kanduit_Muster-AV-Vertrag_Feedback-SMS.pdf" download>AV contract with TOMs (PDF, German)</a>
      <a class="kd-btn kd-btn--ghost" href="/docs/Kanduit_Muster-Einwilligungstexte_Feedback-SMS.pdf" download>Consent and privacy texts (PDF, German)</a>
    </div>
  </div>
  <p class="kd-source">We provide texts and evidence. The final review lies with your practice or your data protection officer. We do not replace legal advice.</p>
</div>
```

---

## Section 5: Why the way we work keeps you compliant

```html
<section class="kd-wp">
  <span class="kd-eyebrow">How we work</span>
  <h2 class="kd-wp__title">Compliance is built in, <em>not bolted on.</em></h2>
  <p class="kd-wp__dek">
    A medical practice is liable for what its service providers do with patient data. That is
    why we build so that as little as possible can go wrong, and so that you can prove it.
  </p>

  <article class="kd-sec">
    <div class="kd-sec__num">§ 01</div>
    <div>
      <h3 class="kd-sec__h">What we do not store cannot be lost</h3>
      <p class="kd-sec__p">We built the feedback SMS so that it needs to know almost nothing. Every
        field we do not take over is one less risk for your practice.</p>
    </div>
  </article>

  <article class="kd-sec">
    <div class="kd-sec__num">§ 02</div>
    <div>
      <h3 class="kd-sec__h">Checked automatically</h3>
      <p class="kd-sec__p">Automated tests run complete fetches with test data. They check that no
        name, no date of birth and no appointment type ends up in the database, a log, an email
        or an SMS.</p>
    </div>
  </article>

  <article class="kd-sec">
    <div class="kd-sec__num">§ 03</div>
    <div>
      <h3 class="kd-sec__h">Contracts and texts from one source</h3>
      <p class="kd-sec__p">AV contract, consent texts, privacy notices and documentation of measures
        come from us and match the actual technology, because whoever writes them also builds the system.</p>
    </div>
  </article>

  <article class="kd-sec">
    <div class="kd-sec__num">§ 04</div>
    <div>
      <h3 class="kd-sec__h">Google's guidelines in view</h3>
      <p class="kd-sec__p">Google does not allow asking only satisfied patients for a review. So by
        default, the feedback page also shows the way to Google. Your practice decides how
        responses are routed. We explain the consequences.</p>
    </div>
  </article>

  <div class="kd-note">
    <b>Evidence</b> Every month you receive a report with anonymous counts: how many appointments
    were read, why they were excluded, how many SMS were sent and how many people unsubscribed.
  </div>
</section>
```

---

## Section 6: Pricing model

*Prices deliberately not stated: offer after a call. The structure must match every offer:
no setup fee, monthly price per location, billing from go-live, SMS at cost.*

```html
<div class="kd-wrap kd-band-ink">
  <span class="kd-eyebrow" style="color:var(--petrol-300);">Pricing model</span>
  <h2 class="kd-h2" style="color:#fff;">No setup fee. One fixed price per location.</h2>
  <p style="color:var(--neutral-300); max-width:58ch; margin:0 0 var(--sp-7);">
    You do not pay more as your practice grows, and you pay nothing before the first SMS goes
    out. You receive the specific offer after a short call about your locations and your Doctolib.
  </p>
  <div class="kd-price">
    <div class="kd-price__item">
      <div class="kd-price__k">Included</div>
      <div class="kd-price__v">Setup</div>
      <p class="kd-price__p">Doctolib connection, consent and SMS texts, AV contract,
        privacy notices, reply templates for Google reviews, a test with your team.</p>
    </div>
    <div class="kd-price__item">
      <div class="kd-price__k">Monthly from go-live</div>
      <div class="kd-price__v">Per location</div>
      <p class="kd-price__p">Operation, monitoring, adjustments when Doctolib changes, and a
        monthly report. One fixed price, regardless of patient numbers.</p>
    </div>
    <div class="kd-price__item">
      <div class="kd-price__k">By usage</div>
      <div class="kd-price__v">SMS at cost</div>
      <p class="kd-price__p">We pass on the German SMS provider's costs without a markup.
        The monthly report shows how many SMS were sent.</p>
    </div>
  </div>
  <div class="kd-actions">
    <a class="kd-btn" href="/en/contact">Request an offer →</a>
  </div>
</div>
```

---

## Section 7: FAQ

```html
<div class="kd-wrap">
  <span class="kd-eyebrow">Frequently asked questions</span>
  <h2 class="kd-h2">What practice owners want to know first.</h2>
  <div class="kd-faq">
    <details>
      <summary>Do we need Doctolib?</summary>
      <p>The ready-made connection exists today for Doctolib. We are happy to check other booking
        systems. If they offer an export or an interface, the feedback SMS can usually be adapted.</p>
    </details>
    <details>
      <summary>What does our front desk have to do?</summary>
      <p>Only mark consent in Doctolib when a patient agrees. With online bookings, patients
        can do this themselves. There are no lists, exports or uploads.</p>
    </details>
    <details>
      <summary>Are we even allowed to contact patients by SMS?</summary>
      <p>Yes, with explicit consent. We provide the consent texts and privacy notices. The final
        review lies with you or your data protection officer. We do not replace legal advice.</p>
    </details>
    <details>
      <summary>How quickly can we go live?</summary>
      <p>Usually in three to four weeks. Most of the time goes into approving the texts and
        setting up the Doctolib account, not into technology.</p>
    </details>
    <details>
      <summary>We already use a review service. Can we switch?</summary>
      <p>Yes. Your Google review link stays the same. We take care of the setup and adapt the
        consent texts so they match the new processing.</p>
    </details>
  </div>
</div>
```

---

## Section 8: CTA

```html
<div class="kd-wrap kd-band-ink">
  <span class="kd-eyebrow" style="color:var(--petrol-300);">For practices in NRW</span>
  <h2 class="kd-h2" style="color:#fff;">See the feedback SMS in 20 minutes.</h2>
  <p style="color:var(--neutral-300); max-width:52ch; margin:0 0 var(--sp-6);">
    I will show you the process, the feedback page and the monthly report, and look at how your
    Doctolib is set up together with you. Feel free to call directly.
  </p>
  <div class="kd-person">
    <img class="kd-person__pfp" src="/img/julian-cheng.jpg" alt="Julian Cheng" width="88" height="88">
    <div class="kd-person__who">
      <p class="kd-person__name">Julian Cheng</p>
      <p class="kd-person__role" style="color:var(--neutral-400);">Kanduit · Düsseldorf</p>
    </div>
    <div class="kd-person__reach">
      <a class="kd-btn" href="tel:+4915732597385">Call: 0157 3259 7385</a>
      <a class="kd-btn kd-btn--ghost" href="https://wa.me/4915732597385" target="_blank" rel="noopener">WhatsApp</a>
      <a class="kd-btn kd-btn--ghost" href="/en/contact">Book via the form →</a>
    </div>
  </div>
</div>
```
