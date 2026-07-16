# HOME (Start) — Deutsch

**URL:** `/`  ·  **Toggle → EN:** `/en`
**Rolle:** Kurze, dichte Landingpage im „Show, don't tell"-Prinzip. Führt mit Haltung,
zeigt sofort die Demonstratoren, schließt mit einem klaren CTA.

## SEO (Page Settings → SEO)

- **Meta title:** Kanduit | Partner für die digitale Verwaltung in NRW
- **Meta description:** Datengetriebene, rechtssichere IT-Lösungen für Schulen, Kommunen und Behörden in NRW. DSGVO-konform, BSI-orientiert, lokal in Düsseldorf. Sehen Sie unsere Demonstratoren.

---

## Sektion 1 — Hero

*Squarespace: eine Sektion. Hintergrund hell (Paper) — oder Ink `#0C1517` für die dunkle
Variante. Inhalt als Code-Block (rendert die Eyebrow + den „Gebaut für"-Streifen).*

```html
<div class="kd-wrap">
  <span class="kd-eyebrow">Digitale Souveränität für NRW</span>
  <h1 style="font-size:var(--t-mega); letter-spacing:-.04em; line-height:.96; max-width:18ch;">
    Aus komplexen Daten werden <em style="font-style:normal; color:var(--petrol-600);">klare Entscheidungen.</em>
  </h1>
  <p style="font-size:1.22rem; color:var(--neutral-700); max-width:52ch; margin-top:var(--sp-5);">
    Kanduit entwickelt rechtssichere, datengetriebene IT-Lösungen für <b>Schulen</b>,
    <b>kommunale Verwaltung</b> und <b>Behörden</b> in NRW – DSGVO-konform, an BSI-Standards
    orientiert und lokal in Düsseldorf. Wir machen Digitalisierung praktisch: vom Rohdatensatz
    zum interaktiven Dashboard, das Verwaltung und Politik handlungsfähig macht.
  </p>
  <div style="display:flex; gap:var(--sp-3); flex-wrap:wrap; margin-top:var(--sp-6);">
    <a class="kd-btn-primary" href="/projektportfolio"
       style="background:var(--petrol-600); color:#fff; font-weight:600; padding:12px 22px; border-radius:var(--r-md); display:inline-block;">
      Demonstratoren ansehen
    </a>
    <a href="/kontakt" style="font-weight:600; padding:12px 6px; display:inline-block;">
      Beratungsgespräch vereinbaren →
    </a>
  </div>
  <div class="kd-strip">
    <span class="kd-eyebrow">Gebaut für</span>
    <span>Schulträger &amp; Schulen</span><span class="sep">·</span>
    <span>kommunale Verwaltung</span><span class="sep">·</span>
    <span>Behörden &amp; Fachbereiche</span><span class="sep">·</span>
    <span>kommunale Unternehmen</span>
  </div>
</div>
```

> **Hero-Variante dunkel:** Sektion-Hintergrund auf `#0C1517` setzen und der Sektion die
> Klasse `kd-band-ink` geben (Code-Block `<div class="kd-band-ink"></div>` oben in der
> Sektion). Headline/Text werden automatisch hell, die Eyebrow petrol-hell.

---

## Sektion 1b — Vier Säulen (Kanduit-Kernbotschaften)

*Direkt unter dem Hero. Die vier Markenbotschaften als kompakte Kachelreihe – das ist
Kanduit-Brand pur und sofort scanbar für Fachbereiche und IT-Verantwortliche.*

```html
<div class="kd-wrap">
  <div class="kd-pillars">
    <div class="kd-pillar"><span class="ix">01</span><span class="lbl">Rechtssichere Schul-IT</span></div>
    <div class="kd-pillar"><span class="ix">02</span><span class="lbl">BSI-konforme Prozesse</span></div>
    <div class="kd-pillar"><span class="ix">03</span><span class="lbl">Entlastung der Verwaltung</span></div>
    <div class="kd-pillar"><span class="ix">04</span><span class="lbl">Digitale Souveränität für NRW</span></div>
  </div>
  <p style="font-size:var(--t-small); color:var(--neutral-600); max-width:60ch;">
    Für kleinere Vorhaben sind wir als lokaler Partner an Direktaufträge anfragbar –
    schnell, unkompliziert und ohne aufwändiges Vergabeverfahren.
  </p>
</div>
```

---

## Sektion 2 — Unsere Arbeitsweise

*Eine Sektion, ein Code-Block. Sachlich und konkret im Mittelstand-Ton, in Kanduit-Brand:
drei klar nummerierte Punkte (§ als deutsches Paragraphenzeichen), kein Studio-Pathos.
Hintergrund: `#F7FAFA` (neutral-050) wirkt gut.*

```html
<section class="kd-wp">
  <span class="kd-eyebrow">Unsere Arbeitsweise</span>
  <h2 class="kd-wp__title">Verlässliche Entscheidungsgrundlagen – <em>rechtssicher und nachvollziehbar.</em></h2>
  <p class="kd-wp__meta">Methodik · Kanduit, Düsseldorf</p>
  <p class="kd-wp__dek">
    Der öffentliche Sektor in NRW braucht selten mehr Daten. Er braucht Lösungen, die aus
    vorhandenen Daten schnell belastbare und rechtssichere Entscheidungsgrundlagen machen.
  </p>

  <div class="kd-abstract">
    <span class="kd-ablabel">Kurz gesagt</span>
    <p>
      Die meisten Daten, die eine Kommune oder Schule benötigt, sind bereits vorhanden – sie
      fallen im Verwaltungsalltag an: Anträge, Bestände, Fachverfahren, Sachstände. Der
      Engpass ist nicht die Erhebung, sondern der Aufwand, daraus eine belastbare Grundlage zu
      machen. Wir setzen auf schlanke, erklärbare Systeme, Datensouveränität ohne
      Vendor-Lock-in und Ergebnisse, die Ihre Fachbereiche unmittelbar nutzen können.
    </p>
  </div>

  <article class="kd-sec">
    <div class="kd-sec__num">§ 01</div>
    <div>
      <h3 class="kd-sec__h">Vorhandene Daten nutzbar machen</h3>
      <p class="kd-sec__p">
        Fachdaten entstehen ohnehin im Verwaltungsalltag, bleiben aber oft ungenutzt. Wir
        konsolidieren sie, bereiten sie auf und führen sie zu einer zentralen
        Entscheidungsgrundlage zusammen – ohne neue Erhebungen und ohne Datensilos.
      </p>
    </div>
  </article>

  <article class="kd-sec">
    <div class="kd-sec__num">§ 02</div>
    <div>
      <h3 class="kd-sec__h">Rechtssicherheit als Innovationsmotor</h3>
      <p class="kd-sec__p">
        Die Sorge vor rechtlichen Fehlern oder Sicherheitslücken ist oft die größte
        Innovationsbremse. Wir integrieren DSGVO-Konformität und Security-by-Design von Anfang
        an in jedes Projekt – rechtssicher und audit-ready, statt nachträglich repariert.
      </p>
    </div>
  </article>

  <article class="kd-sec">
    <div class="kd-sec__num">§ 03</div>
    <div>
      <h3 class="kd-sec__h">Souverän statt abhängig</h3>
      <p class="kd-sec__p">
        Technologie muss unter Ihrer Kontrolle bleiben. Wo möglich setzen wir auf souveräne
        Open-Source-Alternativen und offene Datenstandards – damit Sie nicht in die
        Abhängigkeit eines einzelnen Anbieters geraten.
      </p>
    </div>
  </article>

  <div class="kd-note">
    <b>Hinweis</b> Jede Auswertung ist nachvollziehbar dokumentiert. Personenbezug wird
    DSGVO-konform vermieden, kleine Fallzahlen werden unterdrückt. Wo wir mit Annahmen
    arbeiten, weisen wir diese transparent aus.
  </div>
</section>
```

---

## Sektion 3 — Demonstratoren (Show, don't tell)

*Eine Sektion. Zwei bis vier Demo-Karten als Teaser, die auf das Projektportfolio bzw. die
Live-Demos verlinken. Inhalt aus `04-projektportfolio.md` übernehmen – hier verkürzt.
Bild-`src` auf hochgeladene Squarespace-Bild-URLs bzw. Demo-Screenshots setzen.*

```html
<div class="kd-wrap">
  <span class="kd-eyebrow">Demonstratoren &amp; Prototypen</span>
  <h2 style="font-size:var(--t-h2); letter-spacing:-.02em; margin-bottom:var(--sp-3);">
    Lieber zeigen als behaupten.
  </h2>
  <p style="color:var(--neutral-700); max-width:60ch; margin-bottom:var(--sp-6);">
    Unsere Demonstratoren machen sichtbar, welche Entscheidungs- und Steuerungsimpulse aus
    Daten möglich sind – ohne einen festen Produktumfang vorwegzunehmen. Konkrete Lösungen
    entstehen in enger Abstimmung mit Ihnen.
  </p>

  <div class="kd-cases">
    <article class="kd-case">
      <div class="kd-case__media"><img src="/img/kommunalatlas-nrw.jpg" alt="Kommunalatlas NRW" loading="lazy" width="1200"></div>
      <div class="kd-case__body">
        <div class="kd-case__tags">Open Data · Leaflet.js · Chart.js</div>
        <h3 class="kd-case__h">Kommunalatlas NRW</h3>
        <p class="kd-case__p">Interaktive Datenlandkarte mit demografischen und wirtschaftlichen
          Kennzahlen aller 53 Kreise und kreisfreien Städte in NRW – Einordnung in Sekunden.</p>
        <a class="kd-case__link" href="https://kanduit.github.io/kanduit-projects/kommunalatlas-nrw/" target="_blank" rel="noopener">Live-Demo öffnen →</a>
      </div>
    </article>

    <article class="kd-case">
      <div class="kd-case__media"><img src="/img/bruecken-monitor.jpg" alt="Brückenmonitor NRW" loading="lazy" width="1200"></div>
      <div class="kd-case__body">
        <div class="kd-case__tags">Infrastruktur · Risikobewertung</div>
        <h3 class="kd-case__h">Brückenmonitor NRW</h3>
        <p class="kd-case__p">Risikobewertung und Priorisierung für rund 15.000 Brückenbauwerke
          in NRW – kritische Bauwerke datenbasiert sichtbar gemacht.</p>
        <a class="kd-case__link" href="https://kanduit.github.io/kanduit-projects/nrw-bridge-dashboard/" target="_blank" rel="noopener">Live-Demo öffnen →</a>
      </div>
    </article>
  </div>

  <p style="margin-top:var(--sp-6);">
    <a href="/projektportfolio" style="font-weight:600;">Alle Demonstratoren &amp; Referenzen ansehen →</a>
  </p>
</div>
```

> Ersetze die zwei Karten durch die echten vier Live-Demos (Energiewende NRW,
> Brückenmonitor NRW, Hochwasserwarnplattform, Kommunalatlas NRW). Vollständige Texte und
> Links stehen in `04-projektportfolio.md`. **Keine erfundenen Demo-Links verwenden.**

---

## Sektion 4 — CTA

*Eine Sektion, Hintergrund `#0C1517` (Ink) für Kontrast. Code-Block:*

```html
<div class="kd-wrap kd-band-ink" style="text-align:center;">
  <span class="kd-eyebrow" style="justify-content:center; color:var(--petrol-300);">Lokal in Düsseldorf · für ganz NRW</span>
  <h2 style="font-size:var(--t-h2); color:#fff; letter-spacing:-.02em; margin-bottom:var(--sp-3);">
    Sie haben ein konkretes Vorhaben?
  </h2>
  <p style="color:var(--neutral-300); max-width:48ch; margin:0 auto var(--sp-5);">
    Lassen Sie uns unverbindlich sprechen – wir gehen auf Ihre Fachfragen, Ihre Daten und
    Ihre rechtlichen Vorgaben ein. Für kleinere Vorhaben sind wir an Direktaufträge anfragbar.
  </p>
  <a href="/kontakt" style="background:var(--petrol-600); color:#fff; font-weight:600; padding:13px 26px; border-radius:var(--r-md); display:inline-block;">
    Beratungsgespräch vereinbaren →
  </a>
</div>
```

> Wenn der Code-Block in einer Sektion mit hellem Hintergrund steht, setze stattdessen den
> **Sektion-Hintergrund auf `#0C1517`** – dann greift `kd-band-ink` für helle Schrift.
