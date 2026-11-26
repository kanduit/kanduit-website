# FOR PRACTICES — English

**URL:** `/en/practices`  ·  **Toggle → DE:** `/praxen`
**Role:** B2B page for practice owners. English version of `/praxen`, same order: result, problem,
how it works, proof, data protection, price, questions. Visitors who open it from the QR code in the
letter (`?p=`) see the SMS with their own practice name.
**Upkeep:** Do not name competitors. Do not name the practice until it has agreed in writing.
Prices must match the offer. Never promise rankings or review counts. The phone demo keeps the
German patient-facing texts on purpose; the legal PDFs are German only.

## SEO

- **Meta title:** Google reviews for medical practices using Doctolib | Kanduit
- **Meta description:** One SMS after the appointment, straight from Doctolib and only with consent. Satisfied patients review you on Google, criticism reaches you privately. €199 per location and month, plus 7.5 cents per text.

---

## Section 1: Hero

```html
<div class="kd-wrap">
  <div class="kd-hero-split">
    <div>
      <span class="kd-eyebrow">Feedback SMS for practices using Doctolib</span>
      <h1 class="kd-h1">More Google reviews. <em>Straight from Doctolib.</em></h1>
      <p class="kd-lede">
        One SMS after the appointment, only to patients who have given consent. Satisfied patients
        review you on Google with one tap. Patients with criticism send it to you privately.
      </p>
      <ul class="kd-built kd-built--hero">
        <li><span><b>Hardly any work for your team.</b> The appointments come from Doctolib. Your front
          desk ticks the consent box and sets the status „Behandelt“ as usual.</span></li>
        <li><span><b>Found more easily on Google.</b> More recent reviews help when patients look for
          a practice near them.</span></li>
        <li><span><b>GDPR and professional secrecy covered.</b> Data processing agreement covering
          § 203 StGB, numbers deleted after 72 hours, servers in Germany.</span></li>
      </ul>
      <div class="kd-actions">
        <a class="kd-btn" href="/en/contact">Arrange a call →</a>
        <a class="kd-btn kd-btn--ghost" href="#pricing">See the price ↓</a>
      </div>
      <p class="kd-hero-note">€199 per location and month plus 7.5 cents per text, no setup fee. A booking system other than
        Doctolib? <a href="/en/contact">We are happy to check it.</a></p>
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
      <label class="kd-demo__try">Try it with your practice name
        <input type="text" data-demo-input maxlength="60" autocomplete="organization" placeholder="Your practice name">
      </label>
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

## Section 2: The problem

```html
<div class="kd-wrap">
  <span class="kd-eyebrow">The problem</span>
  <h2 class="kd-h2">Satisfied patients rarely leave reviews. Unhappy ones do.</h2>
  <p class="kd-intro">
    That is why many good practices show fewer stars and fewer reviews on Google than they deserve.
    And new patients see exactly these numbers first.
  </p>
  <div class="kd-steps kd-steps--3">
    <div class="kd-step">
      <h3 class="kd-step__h">Satisfied patients stay quiet</h3>
      <p class="kd-step__p">Patients who were treated well go home and do not think of Google again.
        Patients who were annoyed often write a review the same evening.</p>
    </div>
    <div class="kd-step">
      <h3 class="kd-step__h">Asking takes time</h3>
      <p class="kd-step__p">The front desk has no time to ask every patient for a review. A QR code
        stand only reaches patients who notice it.</p>
    </div>
    <div class="kd-step">
      <h3 class="kd-step__h">New patients compare</h3>
      <p class="kd-step__p">Before the first appointment, many look at the stars and the number of
        reviews. For self-pay treatments such as wrinkle treatment, laser or whitening, they look
        especially closely.</p>
    </div>
  </div>
</div>
```

---

## Section 3: How it works

```html
<div class="kd-wrap kd-band-soft">
  <span class="kd-eyebrow">How it works</span>
  <h2 class="kd-h2">Three steps. Two of them run automatically.</h2>
  <p class="kd-intro">
    Kanduit gets its own restricted Doctolib account. Everything else runs on our server in
    Germany, and your team keeps working as before.
  </p>
  <div class="kd-steps kd-steps--3">
    <div class="kd-step">
      <div class="kd-step__n">01</div>
      <h3 class="kd-step__h">Consent and status</h3>
      <p class="kd-step__p">Your front desk ticks a box in Doctolib, or patients tick it themselves
        when booking online. After the visit, „Behandelt“ as usual. Without both, no SMS.</p>
      <span class="kd-step__who">Your practice · seconds</span>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">02</div>
      <h3 class="kd-step__h">One SMS after the appointment</h3>
      <p class="kd-step__p">We read the appointments from Doctolib every 30 minutes. The SMS goes out
        no earlier than 60 minutes after the appointment ends, Monday to Saturday from 8 am to 8 pm.
        The same number at most once every six months.</p>
      <span class="kd-step__who">Automatic</span>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">03</div>
      <h3 class="kd-step__h">👍 Google, 👎 feedback to you</h3>
      <p class="kd-step__p">👍 opens your Google review form directly. 👎 opens a private feedback page
        that sends you an email.</p>
      <span class="kd-step__who">Automatic · one tap for your patients</span>
    </div>
  </div>
  <p class="kd-source">Live in three to four weeks. Your part until then: signatures, a Doctolib account
    for Kanduit, two texts for Doctolib and your website that we supply, and a 30-minute briefing for
    your team.</p>
</div>
```

---

## Section 4: In use

*Report with example numbers and anonymous comparison practices. Real practices and numbers only with
the practice's written consent.*

```html
<div class="kd-wrap">
  <div class="kd-case-grid">
    <div>
      <span class="kd-eyebrow">In use</span>
      <h2 class="kd-h2">Running since November 2026 at a dermatology practice with two locations.</h2>
      <p style="color:var(--neutral-700); max-width:54ch;">
        The practice was looking for a solution that works with Doctolib and keeps patient data as
        lean as possible. Less than three weeks passed from signing to the first SMS.
      </p>
      <ul class="kd-built">
        <li><span><b>Doctolib connection without an export file.</b> A dedicated account with
          two-factor sign-in reads the calendar. Nothing lands on a disk.</span></li>
        <li><span><b>Two locations, one rule.</b> Each location has its own sender, links and Google
          profile. The six-month block and opt-outs apply across both.</span></li>
        <li><span><b>A late “no” counts.</b> If consent is removed before sending, or the patient
          does not attend, the SMS expires.</span></li>
        <li><span><b>Monitored around the clock.</b> An external watchdog checks every two minutes
          that fetching and sending work, and alerts us before you notice anything.</span></li>
      </ul>
    </div>

    <div class="kd-report" aria-label="Example of a monthly report">
      <p class="kd-report__h">Feedback SMS monthly report</p>
      <p class="kd-report__sub">Praxis Muster · North location · example figures</p>
      <p class="kd-report__sec">Google profile</p>
      <table>
        <tr><td>Current</td><td>4.8 ★ · 341</td></tr>
        <tr><td>New reviews since the last report</td><td>+27</td></tr>
        <tr><td>For comparison: nearest practice 1</td><td>4.7 ★ · 212 · +6</td></tr>
        <tr><td>For comparison: nearest practice 2</td><td>4.5 ★ · 164 · +3</td></tr>
      </table>
      <p class="kd-report__sec">SMS</p>
      <table>
        <tr><td>Appointments read</td><td>1,184</td></tr>
        <tr><td>not scheduled: no consent</td><td>402</td></tr>
        <tr><td>SMS sent</td><td>555</td></tr>
        <tr><td>👍 opened in a browser</td><td>148</td></tr>
        <tr><td>👎 opened in a browser</td><td>21</td></tr>
        <tr><td>Opt-outs</td><td>4</td></tr>
      </table>
      <p class="kd-report__foot">Every month, one page. Google figures read on the day of the report,
        SMS figures as anonymous counts only. Each exclusion reason is listed separately, so you can
        see where the potential lies.</p>
    </div>
  </div>
</div>
```

---

## Section 5: Data protection and professional secrecy

```html
<div class="kd-wrap kd-band-soft" id="datenschutz">
  <span class="kd-eyebrow">GDPR &amp; professional secrecy</span>
  <h2 class="kd-h2">Legally sound, without you having to deal with it.</h2>
  <p class="kd-intro">
    Writing to patients after their appointment means processing health data. The feedback SMS is
    built to know as little as possible for that. We supply the contracts and texts.
  </p>
  <div class="kd-steps kd-steps--3">
    <div class="kd-step">
      <div class="kd-step__n">Art. 9 GDPR</div>
      <h3 class="kd-step__h">Only with consent</h3>
      <p class="kd-step__p">No tick in Doctolib, no SMS. We supply the consent texts for the front desk
        and online booking. Minors are always excluded.</p>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">§ 203 StGB</div>
      <h3 class="kd-step__h">Secrecy in the contract</h3>
      <p class="kd-step__p">The data processing agreement binds Kanduit to professional secrecy.
        Logs and error messages contain no patient data.</p>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">Art. 5 GDPR</div>
      <h3 class="kd-step__h">Three data points, 72 hours</h3>
      <p class="kd-step__p">We keep only the mobile number, the appointment end and the location. The
        number is deleted no later than 72 hours after sending.</p>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">Art. 28 GDPR</div>
      <h3 class="kd-step__h">Agreement included</h3>
      <p class="kd-step__p">Every subcontractor is named in the agreement. We announce any change in
        writing beforehand.</p>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">Art. 44 ff. GDPR</div>
      <h3 class="kd-step__h">Everything in Germany</h3>
      <p class="kd-step__p">Server, SMS sending and email run with providers in Germany. No transfer to
        third countries.</p>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">Art. 7 GDPR</div>
      <h3 class="kd-step__h">Opt out with one tap</h3>
      <p class="kd-step__p">Opt-out directly on the feedback page. If consent is removed in Doctolib, a
        waiting SMS expires.</p>
    </div>
  </div>

  <details class="kd-more">
    <summary>All requirements in detail</summary>
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
              two-factor sign-in. The <b>technical and organisational measures</b> are documented one by one.
              Automated tests run complete fetches with test data and check that no name, date of birth or
              appointment type ends up in the database, logs, emails or SMS.</td>
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
  </details>

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

## Section 6: Price

*Prices must match the offer (list price since 26.11.2026): no setup fee, €199 for every location, SMS
billed monthly by use at 7.5 cents net, 6 months minimum term. MVZ and clinics on request.*

```html
<div class="kd-wrap kd-band-ink" id="pricing">
  <span class="kd-eyebrow" style="color:var(--petrol-300);">Price</span>
  <h2 class="kd-h2" style="color:#fff;">€199 per location and month. Texts billed by use.</h2>
  <p style="color:var(--neutral-300); max-width:58ch; margin:0 0 var(--sp-7);">
    No setup fee and no SMS bundles. The fee is the same every month and for every location. On top,
    you pay only for the texts actually sent. You pay from the month in which the first SMS goes out.
  </p>
  <div class="kd-price">
    <div class="kd-price__item">
      <div class="kd-price__k">Included</div>
      <div class="kd-price__v">Setup</div>
      <p class="kd-price__p">Doctolib connection, consent and SMS texts, data processing agreement,
        privacy notices, reply templates for Google reviews, a test with your team.</p>
    </div>
    <div class="kd-price__item">
      <div class="kd-price__k">Monthly from go-live</div>
      <div class="kd-price__v">€199 per location</div>
      <p class="kd-price__p">Operation, monitoring, adjustments when Doctolib changes, and a monthly
        report with your Google figures. Each further location also €199. 6 months minimum term, then
        cancellable monthly.</p>
    </div>
    <div class="kd-price__item">
      <div class="kd-price__k">By use</div>
      <div class="kd-price__v">7.5 cents per text</div>
      <p class="kd-price__p">Billed monthly, only for texts sent, with no mark-up on our SMS provider's
        price. The same number gets at most one text every six months.</p>
    </div>
  </div>
  <p class="kd-price__note">All prices net, plus 19% VAT. Example: 400 texts in a month add €30 net.
    The monthly report shows the number of texts sent. MVZ and clinics get their own offer.</p>
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
      <p>The ready-made connection exists for Doctolib today. We are happy to check other booking
        systems. If they offer an export or an interface, the feedback SMS can usually be adapted.</p>
    </details>
    <details>
      <summary>What does our front desk have to do?</summary>
      <p>Mark consent in Doctolib when a patient agrees, and set appointments to „Behandelt“ as usual:
        only those get an SMS. With online bookings, patients give consent themselves. On request, an
        evening email reminds your team of ended appointments without „Behandelt“. There are no lists,
        exports or uploads.</p>
    </details>
    <details>
      <summary>Are we allowed to text patients at all?</summary>
      <p>Yes, with explicit consent. Under German law even a request for a review counts as
        advertising (Federal Court of Justice, VI ZR 225/17), so the SMS goes only to patients with
        the tick. We provide the consent texts and privacy notices. The final review lies with you or
        your data protection officer. We do not replace legal advice.</p>
    </details>
    <details>
      <summary>What happens with criticism?</summary>
      <p>👎 opens a feedback page. What patients write there goes by email to an inbox of your choice
        and is deleted on our side after sending. So you learn about problems directly and can
        respond.</p>
    </details>
    <details>
      <summary>Is this in line with Google's policies?</summary>
      <p>Google prohibits asking only satisfied customers for reviews. That is why the SMS goes to all
        patients with consent, and by default the feedback page also shows the way to Google. Your
        practice decides how responses are routed; we explain the consequences.</p>
    </details>
    <details>
      <summary>Why not just a QR code at the front desk?</summary>
      <p>A stand only reaches patients who notice it and have time at that moment. The SMS arrives an
        hour after the appointment, while the visit is still fresh, and one tap opens the review
        form.</p>
    </details>
    <details>
      <summary>How quickly can we go live?</summary>
      <p>Usually within three to four weeks. Most of the time goes into approving the texts and
        setting up the Doctolib account, not into technology.</p>
    </details>
    <details>
      <summary>What do the texts cost?</summary>
      <p>7.5 cents net per text sent, with no mark-up. Each month we bill only the texts sent in the
        previous month. The number is in the monthly report and on the invoice. The same number gets at
        most one text every six months, however often the patient comes.</p>
    </details>
    <details>
      <summary>Is there a minimum term?</summary>
      <p>Six months from go-live, then cancellable monthly. When you cancel, we delete all remaining
        data and the Doctolib account and confirm this in writing.</p>
    </details>
    <details>
      <summary>We already use a review service. Can we switch?</summary>
      <p>Yes. Your Google review link stays the same. We take over the setup and adapt the consent
        texts so that they match the new processing.</p>
    </details>
  </div>
</div>
```

---

## Section 8: Call to action

```html
<div class="kd-wrap kd-band-ink">
  <span class="kd-eyebrow" style="color:var(--petrol-300);">For practices in NRW</span>
  <h2 class="kd-h2" style="color:#fff;">See the feedback SMS in 20 minutes.</h2>
  <p style="color:var(--neutral-300); max-width:52ch; margin:0 0 var(--sp-6);">
    I will show you the flow, the feedback page and the monthly report, and look at how your
    Doctolib is set up. Feel free to call directly.
  </p>
  <div class="kd-person">
    <img class="kd-person__pfp" src="/img/julian-cheng.jpg" alt="Julian Cheng" width="88" height="88">
    <div class="kd-person__who">
      <p class="kd-person__name">Julian Cheng</p>
      <p class="kd-person__role" style="color:var(--neutral-400);">Kanduit · Düsseldorf</p>
    </div>
    <div class="kd-person__reach">
      <a class="kd-btn" href="tel:+4915732597385">Call: +49 157 3259 7385</a>
      <a class="kd-btn kd-btn--ghost" href="https://wa.me/4915732597385" target="_blank" rel="noopener">WhatsApp</a>
      <a class="kd-btn kd-btn--ghost" href="/en/contact">Book via the form →</a>
    </div>
  </div>
</div>
```
