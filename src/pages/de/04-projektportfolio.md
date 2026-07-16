# PROJEKTPORTFOLIO — Deutsch

**URL:** `/projektportfolio`  ·  **Toggle → EN:** `/en/portfolio`
**Rolle:** Das Herzstück („Show, don't tell"). Anwendungsfälle + Demonstrator-Karten.

> ✅ **Demo-Links:** Alle fünf Live-URLs sind eingetragen (öffnen in neuem Tab). Noch zu tun:
> die fünf Screenshots in Squarespace als Kartenbilder hochladen und die `src="[SCREENSHOT-URL]"`
> durch die hochgeladenen Bild-URLs ersetzen.

## SEO

- **Meta title:** Projektportfolio | Referenzen für Kommunen, Behörden & Schulen — Kanduit, NRW
- **Meta description:** Live-Demonstratoren und Anwendungsfälle: Kanduit unterstützt Kommunen, Behörden und Schulen in NRW bei Digitalisierung, Datenstrategie und IT-Compliance.

---

## Sektion 1 — Intro

```html
<div class="kd-wrap" style="max-width:760px;">
  <span class="kd-eyebrow">Demonstratoren &amp; Referenzen</span>
  <h1 style="font-size:var(--t-h1); letter-spacing:-.03em;">
    Von komplexen Daten zu klaren Entscheidungen.
  </h1>
  <p style="font-size:1.15rem; color:var(--neutral-700); margin-top:var(--sp-4);">
    Wir entwickeln interaktive Dashboards und Datenplattformen, die dem öffentlichen Sektor in
    NRW helfen, Risiken früh zu erkennen und datengestützt zu handeln. Unsere Demonstratoren
    zeigen, welche Steuerungsimpulse aus Daten möglich sind – ohne einen festen Produktumfang
    vorwegzunehmen. Konkrete Lösungen entstehen in enger Abstimmung mit Ihnen.
  </p>
</div>
```

---

## Sektion 2 — Anwendungsfälle (Kurzliste)

```html
<div class="kd-wrap">
  <span class="kd-eyebrow">Typische Anwendungsfälle</span>
  <ul style="font-size:var(--t-body); color:var(--neutral-700); line-height:1.8; max-width:760px;">
    <li><b>Schul-IT &amp; Verwaltung</b> — Rechtssichere IT-Infrastruktur, BSI-orientierte
      Prozesse und DSGVO-konforme Datenverarbeitung für Schulträger und Schulen.</li>
    <li><b>Klimaschutz &amp; Reporting</b> — Datenbasierte Berichte und Dashboards für die
      Klimaschutzkoordination in Kommunen und Fachbereichen.</li>
    <li><b>Open Data &amp; OZG 2.0</b> — Aufbereitung und Bereitstellung von Fachdaten für
      Open Data und moderne Bürgerservices.</li>
    <li><b>Fachverfahren digitalisieren</b> — Prototypen und schlanke Anwendungen zur
      Digitalisierung konkreter Verwaltungsprozesse ohne lange Projektzyklen.</li>
    <li><b>IT-Governance &amp; Compliance</b> — Beratung zu DSGVO, Security-by-Design und
      Vorbereitung auf Audits im öffentlichen Sektor.</li>
  </ul>
</div>
```

---

## Sektion 3 — Demonstrator-Karten

```html
<div class="kd-wrap">
  <div class="kd-cases">

    <article class="kd-case">
      <div class="kd-case__media"><img src="/img/energiewende-nrw.jpg" alt="Energiewende NRW – Energiemonitoring" loading="lazy" width="1200"></div>
      <div class="kd-case__body">
        <div class="kd-case__tags">SMARD Open Data · Python · Visualisierung</div>
        <h3 class="kd-case__h">Energiewende NRW — Energiemonitoring</h3>
        <p class="kd-case__p">Datengetriebenes Dashboard zur Energiewende: Strommix,
          CO₂-Intensität der Stromerzeugung und Anteil erneuerbarer Energien – nationale Daten
          als Kontext für NRW, in Echtzeit. Grundlage sind die Open-Data-Schnittstellen der
          Bundesnetzagentur (SMARD) für eine automatisierte Überwachung kommunaler Klimaziele.</p>
        <a class="kd-case__link" href="https://kanduit-projects-energiewende-nrw.streamlit.app/Energiemonitoring" target="_blank" rel="noopener">Interaktives Dashboard öffnen →</a>
      </div>
    </article>

    <article class="kd-case">
      <div class="kd-case__media"><img src="/img/bruecken-monitor.jpg" alt="Brückenmonitor NRW" loading="lazy" width="1200"></div>
      <div class="kd-case__body">
        <div class="kd-case__tags">Infrastruktur · Risikobewertung · Priorisierung</div>
        <h3 class="kd-case__h">Brückenmonitor NRW</h3>
        <p class="kd-case__p">Risikobewertung und Priorisierung für rund 15.000 Brückenbauwerke
          in NRW: Zustandsnoten, Baujahr und ein nachvollziehbarer Risiko-Score machen
          kritische Bauwerke sichtbar – als Grundlage für Instandhaltungs- und
          Investitionsentscheidungen in der Verkehrsinfrastruktur.</p>
        <a class="kd-case__link" href="https://kanduit.github.io/kanduit-projects/nrw-bridge-dashboard/" target="_blank" rel="noopener">Interaktives Dashboard öffnen →</a>
      </div>
    </article>

    <article class="kd-case">
      <div class="kd-case__media"><img src="/img/hochwasserwarnplattform.jpg" alt="Hochwasserwarnplattform" loading="lazy" width="1200"></div>
      <div class="kd-case__body">
        <div class="kd-case__tags">Krisenmanagement · Geodaten · Frühwarnung</div>
        <h3 class="kd-case__h">Hochwasserwarnplattform</h3>
        <p class="kd-case__p">Eine interaktive Frühwarn- und Koordinationsplattform für
          Starkregen und Hochwasser. Am historischen Fall „Ahrtal 2021" demonstriert das
          Dashboard, wie verteilte Krisendaten (Pegelstände, Niederschlag, Risikogebiete) zu
          einem gemeinsamen Lagebild für Verwaltung und Einsatzkräfte zusammengeführt werden.
          Daten: EFAS · DWD · Pegel Online · Zensus.</p>
        <a class="kd-case__link" href="https://kanduit.github.io/kanduit-projects/flood-warning-platform/" target="_blank" rel="noopener">Interaktives Dashboard öffnen →</a>
      </div>
    </article>

    <article class="kd-case">
      <div class="kd-case__media"><img src="/img/kommunalatlas-nrw.jpg" alt="Kommunalatlas NRW" loading="lazy" width="1200"></div>
      <div class="kd-case__body">
        <div class="kd-case__tags">Open Data · Leaflet.js · Chart.js · GitHub Pages</div>
        <h3 class="kd-case__h">Kommunalatlas NRW</h3>
        <p class="kd-case__p">Eine interaktive Datenlandkarte: demografische und wirtschaftliche
          Kennzahlen aller 53 Kreise und kreisfreien Städte in NRW. Entscheidungsträger ordnen
          ihre Region nach Bevölkerungsentwicklung, Arbeitsmarktlage und Wirtschaftskraft ein –
          in Sekunden, ohne Excel. Quellen: IT.NRW, Landesdatenbank NRW, Bundesagentur für
          Arbeit (Datenlizenz Deutschland 2.0). Gehostet auf GitHub Pages, kostenlos und
          wartungsarm.</p>
        <a class="kd-case__link" href="https://kanduit.github.io/kanduit-projects/kommunalatlas-nrw/" target="_blank" rel="noopener">Interaktives Dashboard öffnen →</a>
      </div>
    </article>

  </div>

  <p style="margin-top:var(--sp-6); color:var(--neutral-600); font-size:var(--t-small);">
    Weitere Referenzen folgen. Sprechen Sie uns gerne an, wenn Sie ein ähnliches Vorhaben
    planen.
  </p>
</div>
```

---

## Sektion 4 — CTA

```html
<div class="kd-wrap kd-band-ink" style="text-align:center;">
  <span class="kd-eyebrow" style="justify-content:center; color:var(--petrol-300);">Ihr Vorhaben</span>
  <h2 style="font-size:var(--t-h2); color:#fff; letter-spacing:-.02em; margin-bottom:var(--sp-3);">
    Sie haben ein ähnliches Vorhaben?
  </h2>
  <p style="color:var(--neutral-300); max-width:46ch; margin:0 auto var(--sp-5);">
    Lassen Sie uns unverbindlich sprechen – wir zeigen Ihnen, was mit Ihren Daten möglich ist.
  </p>
  <a href="/kontakt" style="background:var(--petrol-600); color:#fff; font-weight:600; padding:13px 26px; border-radius:var(--r-md); display:inline-block;">
    Beratungsgespräch vereinbaren →
  </a>
</div>
```
