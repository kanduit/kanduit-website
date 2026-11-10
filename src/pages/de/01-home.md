# HOME (Start) — Deutsch

**URL:** `/`  ·  **Toggle → EN:** `/en`
**Rolle:** Weiche. Sagt in einem Satz, was Kanduit ist, und schickt Besucher in einen der
zwei Bereiche: Arztpraxen & Unternehmen (`/praxen`) oder öffentlicher Sektor
(`/oeffentlicher-sektor`). Praxen zuerst, weil dort das aktive Geschäft liegt.

## SEO

- **Meta title:** Kanduit | Maßgeschneiderte Software für Arztpraxen und Verwaltung
- **Meta description:** Kanduit entwickelt und betreibt schlanke Software- und Datenlösungen: Feedback-SMS für Arztpraxen direkt aus Doctolib und Datenanalysen für den öffentlichen Sektor in NRW. DSGVO-konform, gehostet in Deutschland.

---

## Sektion 1 — Hero + Weiche

```html
<div class="kd-wrap">
  <span class="kd-eyebrow">Kanduit · Düsseldorf</span>
  <h1 class="kd-h1" style="max-width:20ch;">
    Kleine Lösungen. <em>Spürbar weniger Aufwand.</em>
  </h1>
  <p class="kd-lede">
    Kanduit entwickelt und betreibt maßgeschneiderte Software und Datenlösungen –
    beratend, am konkreten Bedarf, DSGVO-konform und ohne unnötigen Vendor Lock-in.
    Wobei dürfen wir Sie unterstützen?
  </p>

  <div class="kd-doors">
    <a class="kd-door kd-door--primary" href="/praxen">
      <span class="kd-badge">Live an zwei Standorten</span>
      <span class="kd-door__for">Für Arztpraxen &amp; Unternehmen</span>
      <h2 class="kd-door__h">Mehr Google-Bewertungen, ohne Mehraufwand am Empfang.</h2>
      <p class="kd-door__p">
        Eine Feedback-SMS nach dem Termin, automatisch aus Ihrem Doctolib-Kalender.
        Wir richten ein, betreiben und überwachen – Sie lesen das Feedback.
      </p>
      <ul class="kd-door__list">
        <li>Direkte Doctolib-Anbindung, kein Upload</li>
        <li>Nummern nach spätestens 72 Stunden gelöscht</li>
        <li>Fester Preis pro Standort</li>
      </ul>
      <span class="kd-door__go">Feedback-SMS ansehen →</span>
    </a>

    <a class="kd-door" href="/oeffentlicher-sektor">
      <span class="kd-door__for">Für den öffentlichen Sektor</span>
      <h2 class="kd-door__h">Aus Verwaltungsdaten werden klare Entscheidungen.</h2>
      <p class="kd-door__p">
        Datenanalysen, Dashboards und Demonstratoren für Kommunen, Schulträger und Behörden
        in NRW – rechtssicher, BSI-orientiert, Direktauftrag-fähig.
      </p>
      <ul class="kd-door__list">
        <li>Live-Demonstratoren auf offenen Daten</li>
        <li>Schule, Klima, Infrastruktur, Vergabe</li>
        <li>Lokal in Düsseldorf, für ganz NRW</li>
      </ul>
      <span class="kd-door__go">Zum öffentlichen Sektor →</span>
    </a>
  </div>
</div>
```

---

## Sektion 2 — Was beide Bereiche verbindet

```html
<div class="kd-wrap kd-band-soft">
  <p class="kd-close-ey">Wie wir arbeiten</p>
  <h2 class="kd-close-h">Gleiche Haltung, egal für wen.</h2>
  <div class="kd-principles">
    <div class="kd-pr">
      <div class="kd-pr__num">01</div>
      <h3 class="kd-pr__h">Maßgeschneidert statt Standardprodukt</h3>
      <p class="kd-pr__p">Wir bauen, was Ihr Alltag braucht, und lassen weg, was er nicht braucht.
        Kleine, erklärbare Systeme, die genau eine Aufgabe gut lösen.</p>
    </div>
    <div class="kd-pr">
      <div class="kd-pr__num">02</div>
      <h3 class="kd-pr__h">Datensparsam von Anfang an</h3>
      <p class="kd-pr__p">Wir speichern nur, was die Aufgabe verlangt, und löschen nach festen
        Fristen. Hosting in Deutschland, AV-Vertrag und Nachweise inklusive.</p>
    </div>
    <div class="kd-pr">
      <div class="kd-pr__num">03</div>
      <h3 class="kd-pr__h">Ein Ansprechpartner</h3>
      <p class="kd-pr__p">Wer die Lösung baut, betreibt sie auch. Keine Ticket-Hotline, sondern
        eine direkte Verbindung nach Düsseldorf.</p>
    </div>
  </div>
</div>
```

---

## Sektion 3 — CTA

```html
<div class="kd-wrap kd-band-ink" style="text-align:center;">
  <span class="kd-eyebrow" style="justify-content:center; color:var(--petrol-300);">Lokal in Düsseldorf</span>
  <h2 style="font-size:var(--t-h2); color:#fff; letter-spacing:-.02em; margin-bottom:var(--sp-3);">
    Sprechen wir über Ihren Bedarf.
  </h2>
  <p style="color:var(--neutral-300); max-width:48ch; margin:0 auto var(--sp-5);">
    Ein unverbindliches Gespräch von 20 Minuten genügt meist, um zu sehen, ob und wie wir
    Ihnen Arbeit abnehmen können.
  </p>
  <a class="kd-btn" href="/kontakt">Beratungsgespräch vereinbaren →</a>
</div>
```
