# KONTAKT — Deutsch

**URL:** `/kontakt`  ·  **Toggle → EN:** `/en/contact`
**Rolle:** Konversion. Klares Formular, niedrige Hürde, lokaler Bezug.

## SEO

- **Meta title:** Kontakt | Beratungsgespräch für Ihr Digitalprojekt — Kanduit, Düsseldorf
- **Meta description:** Kontakt aufnehmen mit Kanduit: Beratung für Digitalisierung, Software und Daten in NRW. Schulen, Kommunen, Behörden. Lokal in Düsseldorf.

---

## Sektion 1 — Heading + Intro

```html
<div class="kd-wrap" style="max-width:680px;">
  <span class="kd-eyebrow">Kontakt</span>
  <h1 style="font-size:var(--t-h1); letter-spacing:-.03em;">
    Beratungsgespräch vereinbaren
  </h1>
  <p style="font-size:1.15rem; color:var(--neutral-700); margin-top:var(--sp-4);">
    Sie möchten mit uns zusammenarbeiten? Füllen Sie das Formular aus – wir melden uns zeitnah
    bei Ihnen. Wir stehen Ihnen gerne für ein unverbindliches Gespräch zur Verfügung. Lokal in
    Düsseldorf, für ganz NRW.
  </p>
</div>
```

---

## Sektion 2 — Formular (Squarespace Form-Block, nativ)

*Nutze einen nativen Squarespace **Form-Block** (nicht Code), damit die Einsendungen sauber
ankommen. Empfohlene Felder:*

- **Name** (Pflicht)
- **Organisation / Behörde / Schule** (Pflicht)
- **E-Mail** (Pflicht)
- **Telefon** (optional)
- **Ihr Anliegen** (Textfeld, Pflicht)
- **Einwilligung:** Checkbox – „Ich habe die [Datenschutzerklärung](/datenschutz) gelesen und
  bin mit der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage einverstanden."
  *(Pflicht – wichtig für DSGVO.)*

**Submit-Button-Text:** `Anfrage senden`
**Bestätigungstext nach Absenden:** „Vielen Dank. Wir haben Ihre Anfrage erhalten und melden
uns zeitnah bei Ihnen."

> Das Formular wird durch die Brand-CSS automatisch gestylt (Petrol-Fokus-Ring,
> abgerundete Felder, Petrol-Submit-Button).

---

## Sektion 3 — Standort / Fußzeile

```html
<div class="kd-wrap" style="text-align:center;">
  <p class="kd-eyebrow" style="justify-content:center;">Lokal in Düsseldorf · für ganz NRW</p>
  <p style="color:var(--neutral-600); font-size:var(--t-small);">
    Kanduit – Ihr Partner für digitale Souveränität und Compliance in NRW.<br>
    <a href="/impressum">Impressum</a> · <a href="/datenschutz">Datenschutz</a>
  </p>
</div>
```
