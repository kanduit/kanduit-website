# PORTFOLIO — English

**URL:** `/en/portfolio`  ·  **Toggle → DE:** `/projektportfolio`

> The live demos' own UI is German (they're built for NRW public-sector data); that's expected.

## SEO

- **Meta title:** Portfolio | References for municipalities, authorities & schools — Kanduit, NRW
- **Meta description:** Live demonstrators and use cases: Kanduit supports municipalities, authorities and schools in NRW with digitalisation, data strategy and IT compliance.

---

## Section 1 — Intro

```html
<div class="kd-wrap" style="max-width:760px;">
  <span class="kd-eyebrow">Demonstrators &amp; references</span>
  <h1 style="font-size:var(--t-h1); letter-spacing:-.03em;">
    From complex data to clear decisions.
  </h1>
  <p style="font-size:1.15rem; color:var(--neutral-700); margin-top:var(--sp-4);">
    We build interactive dashboards and data platforms that help the public sector in NRW spot
    risks early and act on evidence. Our demonstrators show what steering impulses are possible
    from data – without pre-defining a fixed product scope. Concrete solutions are developed in
    close coordination with you.
  </p>
</div>
```

---

## Section 2 — Use cases

```html
<div class="kd-wrap">
  <span class="kd-eyebrow">Typical use cases</span>
  <ul style="font-size:var(--t-body); color:var(--neutral-700); line-height:1.8; max-width:760px;">
    <li><b>School IT &amp; administration</b> — Legally sound IT infrastructure, BSI-oriented
      processes and GDPR-compliant data processing for school authorities and schools.</li>
    <li><b>Climate action &amp; reporting</b> — Data-based reports and dashboards for climate
      coordination in municipalities and departments.</li>
    <li><b>Open Data &amp; OZG 2.0</b> — Preparing and providing operational data for open data
      and modern citizen services.</li>
    <li><b>Digitalising procedures</b> — Prototypes and lean applications to digitalise specific
      administrative processes without long project cycles.</li>
    <li><b>IT governance &amp; compliance</b> — Advice on GDPR, security-by-design and
      preparation for public-sector audits.</li>
  </ul>
</div>
```

---

## Section 3 — Demonstrator cards

```html
<div class="kd-wrap">
  <div class="kd-cases">

    <article class="kd-case">
      <div class="kd-case__media"><img src="/img/energiewende-nrw.jpg" alt="Energy Transition NRW – Energy Monitoring" loading="lazy" width="1200"></div>
      <div class="kd-case__body">
        <div class="kd-case__tags">SMARD Open Data · Python · Visualisation</div>
        <h3 class="kd-case__h">Energy Transition NRW — Energy Monitoring</h3>
        <p class="kd-case__p">A data-driven dashboard on the energy transition: power mix, the
          CO₂ intensity of electricity generation and the share of renewables – national data as
          context for NRW, in real time. Based on the open-data interfaces of the Federal Network
          Agency (SMARD) for automated monitoring of municipal climate targets.</p>
        <a class="kd-case__link" href="https://kanduit-projects-energiewende-nrw.streamlit.app/Energiemonitoring" target="_blank" rel="noopener">Open live demo →</a>
      </div>
    </article>

    <article class="kd-case">
      <div class="kd-case__media"><img src="/img/bruecken-monitor.jpg" alt="Bridge Monitor NRW" loading="lazy" width="1200"></div>
      <div class="kd-case__body">
        <div class="kd-case__tags">Infrastructure · Risk assessment · Prioritisation</div>
        <h3 class="kd-case__h">Bridge Monitor NRW</h3>
        <p class="kd-case__p">Risk assessment and prioritisation for around 15,000 bridge
          structures in NRW: condition ratings, year of construction and a traceable risk score
          make critical structures visible – a basis for maintenance and investment decisions in
          transport infrastructure.</p>
        <a class="kd-case__link" href="https://kanduit.github.io/kanduit-projects/nrw-bridge-dashboard/" target="_blank" rel="noopener">Open live demo →</a>
      </div>
    </article>

    <article class="kd-case">
      <div class="kd-case__media"><img src="/img/hochwasserwarnplattform.jpg" alt="Flood Early-Warning Platform" loading="lazy" width="1200"></div>
      <div class="kd-case__body">
        <div class="kd-case__tags">Crisis management · Geodata · Early warning</div>
        <h3 class="kd-case__h">Flood Early-Warning Platform</h3>
        <p class="kd-case__p">An interactive early-warning and coordination platform for heavy
          rain and flooding. Using the historical "Ahr Valley 2021" case, the dashboard
          demonstrates how distributed crisis data (gauge levels, precipitation, risk areas) is
          merged into a shared operational picture for administration and emergency services.
          Data: EFAS · DWD · Pegel Online · census.</p>
        <a class="kd-case__link" href="https://kanduit.github.io/kanduit-projects/flood-warning-platform/" target="_blank" rel="noopener">Open live demo →</a>
      </div>
    </article>

    <article class="kd-case">
      <div class="kd-case__media"><img src="/img/kommunalatlas-nrw.jpg" alt="Municipal Atlas NRW" loading="lazy" width="1200"></div>
      <div class="kd-case__body">
        <div class="kd-case__tags">Open Data · Leaflet.js · Chart.js · GitHub Pages</div>
        <h3 class="kd-case__h">Municipal Atlas NRW</h3>
        <p class="kd-case__p">An interactive data map: demographic and economic indicators for
          all 53 districts and independent cities in NRW. Decision-makers can position their
          region by population trend, labour-market situation and economic strength – in seconds,
          without Excel. Sources: IT.NRW, NRW state database, Federal Employment Agency
          (Data Licence Germany 2.0). Hosted on GitHub Pages, free and low-maintenance.</p>
        <a class="kd-case__link" href="https://kanduit.github.io/kanduit-projects/kommunalatlas-nrw/" target="_blank" rel="noopener">Open live demo →</a>
      </div>
    </article>

    <article class="kd-case">
      <div class="kd-case__media"><img src="/img/vergabe-monitor.jpg" alt="Public Procurement Monitor Düsseldorf" loading="lazy" width="1200"></div>
      <div class="kd-case__body">
        <div class="kd-case__tags">eForms · OpenData API · Procurement controlling</div>
        <h3 class="kd-case__h">Vergabe-Monitor Düsseldorf</h3>
        <p class="kd-case__p">What can be said about a major city's procurement activity using
          nothing but public notices? The monitor shows the procedure mix, durations from notice
          to award, competition intensity and a comparison with Cologne, Essen and Dortmund. The
          decisive choice is the unit of analysis: everything is computed per
          <strong>contracting authority</strong>, never per place of performance — otherwise
          state, federal and university-hospital tenders are counted as city volume and overstate
          it several times over. Data gaps are stated openly rather than estimated. Source:
          Bekanntmachungsservice (Datenservice Öffentlicher Einkauf), eForms-DE.
          German-language interface.</p>
        <a class="kd-case__link" href="https://kanduit.github.io/kanduit-projects/vergabe-monitor-duesseldorf/" target="_blank" rel="noopener">Open live demo →</a>
      </div>
    </article>

  </div>

  <p style="margin-top:var(--sp-6); color:var(--neutral-600); font-size:var(--t-small);">
    Further references to follow. Do get in touch if you're planning a similar project.
  </p>
</div>
```

---

## Section 4 — CTA

```html
<div class="kd-wrap kd-band-ink" style="text-align:center;">
  <span class="kd-eyebrow" style="justify-content:center; color:var(--petrol-300);">Your project</span>
  <h2 style="font-size:var(--t-h2); color:#fff; letter-spacing:-.02em; margin-bottom:var(--sp-3);">
    Planning something similar?
  </h2>
  <p style="color:var(--neutral-300); max-width:46ch; margin:0 auto var(--sp-5);">
    Let's talk, with no obligation – we'll show you what's possible with your data.
  </p>
  <a href="/en/contact" style="background:var(--petrol-600); color:#fff; font-weight:600; padding:13px 26px; border-radius:var(--r-md); display:inline-block;">
    Arrange a consultation →
  </a>
</div>
```
