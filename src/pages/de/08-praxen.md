# FÜR PRAXEN — Deutsch

**URL:** `/praxen`  ·  **Toggle → EN:** `/en/practices`
**Rolle:** B2B-Seite für Praxisinhaberinnen und -inhaber. Reihenfolge: Ergebnis, Problem, Ablauf,
Nachweis, Datenschutz, Preis, Fragen. Wer die Seite über den QR-Code im Brief öffnet (`?p=`), sieht
die SMS mit dem eigenen Praxisnamen.
**Pflege:** Wettbewerber nicht namentlich nennen. Den Praxisnamen erst nennen, wenn die Praxis
schriftlich zugestimmt hat. Preise müssen zum Angebot passen (`Kanduit/outreach/practices/onboarding`).
Keine Rankings oder Bewertungszahlen versprechen.

## SEO

- **Meta title:** Google-Bewertungen für Arztpraxen mit Doctolib | Kanduit
- **Meta description:** Eine SMS nach dem Termin, direkt aus Doctolib und nur mit Einwilligung. Zufriedene Patienten bewerten bei Google, Kritik geht privat an Sie. 199 € pro Standort und Monat, dazu 7,5 Cent pro SMS.

---

## Sektion 1 — Hero

```html
<div class="kd-wrap">
  <div class="kd-hero-split">
    <div>
      <span class="kd-eyebrow">Feedback-SMS für Praxen mit Doctolib</span>
      <h1 class="kd-h1">Mehr Google-Bewertungen. <em>Automatisch aus Doctolib.</em></h1>
      <p class="kd-lede">
        Eine SMS nach dem Termin, nur an Patientinnen und Patienten mit Einwilligung. Wer zufrieden
        ist, bewertet Sie mit einem Tipp bei Google. Wer Kritik hat, schreibt sie Ihnen privat.
      </p>
      <ul class="kd-built kd-built--hero">
        <li><span><b>Kaum Aufwand für Ihr Team.</b> Die Termine kommen aus Doctolib. Ihr Empfang
          setzt das Häkchen für die Einwilligung und wie gewohnt den Status „Behandelt“.</span></li>
        <li><span><b>Besser gefunden bei Google.</b> Mehr aktuelle Bewertungen helfen, wenn Patienten
          eine Praxis in ihrer Nähe suchen.</span></li>
        <li><span><b>DSGVO und Schweigepflicht geregelt.</b> AV-Vertrag mit § 203 StGB, Nummern nach
          72 Stunden gelöscht, Server in Deutschland.</span></li>
      </ul>
      <div class="kd-actions">
        <a class="kd-btn" href="/kontakt">Gespräch vereinbaren →</a>
        <a class="kd-btn kd-btn--ghost" href="#preise">Preis ansehen ↓</a>
      </div>
      <p class="kd-hero-note">199 € pro Standort und Monat plus 7,5 Cent pro SMS, keine Einrichtungsgebühr. Anderes
        Terminsystem als Doctolib? <a href="/kontakt">Wir prüfen es gern.</a></p>
    </div>

    <div class="kd-demo">
      <p class="kd-demo__for" hidden>So sähe die SMS für <b data-demo-name>Praxis Muster</b> aus. Tippen Sie auf 👍 oder 👎.</p>
      <div class="kd-phone" data-screen="sms" aria-label="Beispiel: Feedback-SMS auf dem Smartphone eines Patienten">
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
                <button type="button" data-go="google">👍&nbsp;Zu Google</button>
                <button type="button" data-go="feedback">👎&nbsp;Feedback</button>
              </div>
            </div>
          </div>

          <div class="kd-scr kd-scr--google">
            <div class="kd-pg">
              <p class="kd-pg__label">Google-Bewertungsformular (vereinfacht)</p>
              <p class="kd-pg__h">Bewertung für <span data-demo-name>Praxis Muster</span></p>
              <div class="kd-stars" aria-hidden="true">★★★★★</div>
              <div class="kd-pg__field">Teilen Sie Ihre Erfahrungen …</div>
              <p class="kd-pg__note">👍 öffnet direkt das Formular Ihres Google-Profils, ohne Umweg und ohne Login bei uns.</p>
              <button type="button" class="kd-pg__back" data-go="sms">← Zurück zur SMS</button>
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
              <button type="button" class="kd-pg__back" data-go="sms">← Zurück zur SMS</button>
            </div>
          </div>
        </div>
      </div>
      <label class="kd-demo__try">Testen Sie es mit Ihrem Praxisnamen
        <input type="text" data-demo-input maxlength="60" autocomplete="organization" placeholder="Name Ihrer Praxis">
      </label>
    </div>
  </div>
</div>
<script src="/js/praxen-demo.js" defer></script>
```

---

## Sektion 1b — Ihr Ansprechpartner

```html
<div class="kd-wrap kd-band-soft">
  <div class="kd-person">
    <img class="kd-person__pfp" src="/img/julian-cheng.jpg" alt="Julian Cheng" width="88" height="88">
    <div class="kd-person__who">
      <p class="kd-person__name">Julian Cheng</p>
      <p class="kd-person__role">Gründer · Ihr Ansprechpartner</p>
      <p class="kd-person__p">Ich baue und betreibe die Feedback-SMS selbst. Sie sprechen also nicht mit
        einer Hotline, sondern mit dem, der Ihre Doctolib-Anbindung einrichtet und sich kümmert, wenn
        etwas klemmt.</p>
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

## Sektion 2 — Das Problem

```html
<div class="kd-wrap">
  <span class="kd-eyebrow">Das Problem</span>
  <h2 class="kd-h2">Zufriedene Patienten bewerten selten. Unzufriedene schon.</h2>
  <p class="kd-intro">
    Deshalb zeigen viele gute Praxen bei Google weniger Sterne und weniger Bewertungen, als sie
    verdienen. Und neue Patienten sehen genau diese Zahlen zuerst.
  </p>
  <div class="kd-steps kd-steps--3">
    <div class="kd-step">
      <h3 class="kd-step__h">Die Zufriedenen schweigen</h3>
      <p class="kd-step__p">Wer gut behandelt wurde, geht nach Hause und denkt nicht mehr an Google.
        Wer sich geärgert hat, schreibt oft noch am selben Abend.</p>
    </div>
    <div class="kd-step">
      <h3 class="kd-step__h">Fragen kostet Zeit</h3>
      <p class="kd-step__p">Am Empfang bleibt keine Zeit, jeden Patienten um eine Bewertung zu bitten.
        Ein Aufsteller mit QR-Code erreicht nur, wer ihn bemerkt.</p>
    </div>
    <div class="kd-step">
      <h3 class="kd-step__h">Neue Patienten vergleichen</h3>
      <p class="kd-step__p">Vor dem ersten Termin schauen viele auf Sterne und Zahl der Bewertungen.
        Bei Selbstzahlerleistungen wie Faltenbehandlung, Laser oder Bleaching besonders genau.</p>
    </div>
  </div>
</div>
```

---

## Sektion 3 — So funktioniert es

```html
<div class="kd-wrap kd-band-soft">
  <span class="kd-eyebrow">So funktioniert es</span>
  <h2 class="kd-h2">Drei Schritte. Zwei davon laufen automatisch.</h2>
  <p class="kd-intro">
    Kanduit bekommt einen eigenen, eingeschränkten Doctolib-Zugang. Alles Weitere läuft auf
    unserem Server in Deutschland, und Ihr Team arbeitet weiter wie bisher.
  </p>
  <div class="kd-steps kd-steps--3">
    <div class="kd-step">
      <div class="kd-step__n">01</div>
      <h3 class="kd-step__h">Einwilligung und Status</h3>
      <p class="kd-step__p">Ihr Empfang setzt in Doctolib ein Häkchen, oder Patienten setzen es bei
        der Online-Buchung selbst. Nach dem Termin wie gewohnt „Behandelt“. Fehlt eines davon, geht
        keine SMS raus.</p>
      <span class="kd-step__who">Ihre Praxis · Sekunden</span>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">02</div>
      <h3 class="kd-step__h">Eine SMS nach dem Termin</h3>
      <p class="kd-step__p">Wir lesen die Termine alle 30 Minuten aus Doctolib. Frühestens 60 Minuten
        nach Terminende geht die SMS raus, Mo–Sa von 8 bis 20 Uhr. Dieselbe Nummer höchstens alle
        sechs Monate.</p>
      <span class="kd-step__who">Automatisch</span>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">03</div>
      <h3 class="kd-step__h">👍 Google, 👎 Feedback an Sie</h3>
      <p class="kd-step__p">👍 öffnet direkt Ihr Google-Bewertungsformular. 👎 öffnet eine private
        Feedback-Seite, die Ihnen eine E-Mail schickt.</p>
      <span class="kd-step__who">Automatisch · ein Tipp für Ihre Patienten</span>
    </div>
  </div>
  <p class="kd-source">Start in drei bis vier Wochen. Ihr Aufwand bis dahin: Unterschriften, ein
    Doctolib-Zugang für Kanduit, zwei Texte für Doctolib und Ihre Website, die wir liefern, und 30 Minuten
    Einweisung für Ihr Team.</p>
</div>
```

---

## Sektion 4 — Im Einsatz

*Bericht mit Beispielzahlen und fiktiven Vergleichspraxen. Echte Praxen und Zahlen nur mit
schriftlicher Zustimmung der Praxis.*

```html
<div class="kd-wrap">
  <div class="kd-case-grid">
    <div>
      <span class="kd-eyebrow">Im Einsatz</span>
      <h2 class="kd-h2">Seit November 2026 in einer Hautarztpraxis mit zwei Standorten.</h2>
      <p style="color:var(--neutral-700); max-width:54ch;">
        Die Praxis suchte eine Lösung, die mit Doctolib zusammenarbeitet und Patientendaten so knapp
        wie möglich hält. Von der Unterschrift bis zur ersten SMS vergingen weniger als drei Wochen.
      </p>
      <ul class="kd-built">
        <li><span><b>Doctolib-Anbindung ohne Export-Datei.</b> Ein eigener Zugang mit
          Zwei-Faktor-Anmeldung liest den Kalender, nichts landet auf einer Festplatte.</span></li>
        <li><span><b>Zwei Standorte, eine Regel.</b> Jeder Standort hat eigene Absender, Links
          und Google-Profile. Die Sechs-Monats-Sperre und Abmeldungen gelten standortübergreifend.</span></li>
        <li><span><b>Ein spätes „Nein“ zählt.</b> Wird die Einwilligung vor dem Versand entfernt
          oder der Termin nicht wahrgenommen, verfällt die SMS.</span></li>
        <li><span><b>Überwacht rund um die Uhr.</b> Ein externer Wächter prüft alle zwei Minuten,
          ob Abruf und Versand laufen, und alarmiert uns, bevor es Ihnen auffällt.</span></li>
      </ul>
    </div>

    <div class="kd-report" aria-label="Beispiel eines Monatsberichts">
      <p class="kd-report__h">Monatsbericht Feedback-SMS</p>
      <p class="kd-report__sub">Praxis Muster · Standort Nord · Beispielzahlen</p>
      <p class="kd-report__sec">Google-Profil</p>
      <table>
        <tr><td>Aktueller Stand</td><td>4,8 ★ · 341</td></tr>
        <tr><td>Neue Rezensionen seit dem letzten Bericht</td><td>+27</td></tr>
        <tr><td>Zum Vergleich: nächstgelegene Praxis 1</td><td>4,7 ★ · 212 · +6</td></tr>
        <tr><td>Zum Vergleich: nächstgelegene Praxis 2</td><td>4,5 ★ · 164 · +3</td></tr>
      </table>
      <p class="kd-report__sec">SMS</p>
      <table>
        <tr><td>Termine gelesen</td><td>1.184</td></tr>
        <tr><td>nicht eingeplant: keine Einwilligung</td><td>402</td></tr>
        <tr><td>SMS gesendet</td><td>555</td></tr>
        <tr><td>👍 im Browser geöffnet</td><td>148</td></tr>
        <tr><td>👎 im Browser geöffnet</td><td>21</td></tr>
        <tr><td>Abmeldungen</td><td>4</td></tr>
      </table>
      <p class="kd-report__foot">Jeden Monat, eine Seite. Google-Zahlen am Erstelltag abgefragt,
        SMS-Zahlen nur als anonyme Zählwerte. Jeder Ausschlussgrund ist einzeln ausgewiesen, damit Sie
        sehen, wo Potenzial liegt.</p>
    </div>
  </div>
</div>
```

---

## Sektion 5 — Datenschutz und Schweigepflicht

```html
<div class="kd-wrap kd-band-soft" id="datenschutz">
  <span class="kd-eyebrow">DSGVO &amp; Schweigepflicht</span>
  <h2 class="kd-h2">Rechtssicher, ohne dass Sie sich darum kümmern müssen.</h2>
  <p class="kd-intro">
    Wer Patienten nach dem Termin anschreibt, verarbeitet Gesundheitsdaten. Die Feedback-SMS ist so
    gebaut, dass sie dafür so wenig wie möglich wissen muss. Verträge und Texte liefern wir mit.
  </p>
  <div class="kd-steps kd-steps--3">
    <div class="kd-step">
      <div class="kd-step__n">Art. 9 DSGVO</div>
      <h3 class="kd-step__h">Nur mit Einwilligung</h3>
      <p class="kd-step__p">Ohne Häkchen in Doctolib keine SMS. Die Einwilligungstexte für Empfang und
        Online-Buchung liefern wir. Minderjährige sind immer ausgeschlossen.</p>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">§ 203 StGB</div>
      <h3 class="kd-step__h">Schweigepflicht im Vertrag</h3>
      <p class="kd-step__p">Kanduit ist im AV-Vertrag ausdrücklich auf die Schweigepflicht verpflichtet.
        Protokolle und Fehlermeldungen enthalten keine Patientendaten.</p>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">Art. 5 DSGVO</div>
      <h3 class="kd-step__h">Drei Angaben, 72 Stunden</h3>
      <p class="kd-step__p">Wir behalten nur Mobilnummer, Terminende und Standort. Die Nummer ist
        spätestens 72 Stunden nach dem Versand gelöscht.</p>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">Art. 28 DSGVO</div>
      <h3 class="kd-step__h">AV-Vertrag inklusive</h3>
      <p class="kd-step__p">Alle Unterauftragnehmer stehen namentlich im Vertrag. Jede Änderung kündigen
        wir vorher schriftlich an.</p>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">Art. 44 ff. DSGVO</div>
      <h3 class="kd-step__h">Alles in Deutschland</h3>
      <p class="kd-step__p">Server, SMS-Versand und E-Mail laufen bei Anbietern in Deutschland. Keine
        Übermittlung in Drittländer.</p>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">Art. 7 DSGVO</div>
      <h3 class="kd-step__h">Abmelden mit einem Tipp</h3>
      <p class="kd-step__p">Abmeldung direkt auf der Feedback-Seite. Wird die Einwilligung in Doctolib
        entfernt, verfällt eine wartende SMS.</p>
    </div>
  </div>

  <details class="kd-more">
    <summary>Alle Anforderungen im Detail</summary>
    <div class="kd-compare-wrap">
      <table class="kd-compare">
        <thead>
          <tr><th scope="col">Anforderung</th><th scope="col" class="kd-us">So stellen wir es sicher</th></tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Ausdrückliche Einwilligung<span class="kd-ref">Art. 9 Abs. 2 lit. a DSGVO</span></th>
            <td class="kd-us">Ohne Häkchen in Doctolib wird keine Nummer übernommen. Wir liefern die
              <b>Einwilligungstexte</b> für Empfang und Online-Buchung. Minderjährige werden immer ausgeschlossen.</td>
          </tr>
          <tr>
            <th scope="row">Datenminimierung<span class="kd-ref">Art. 5 Abs. 1 lit. c DSGVO</span></th>
            <td class="kd-us">Die Terminliste wird nur im Arbeitsspeicher gelesen. Behalten werden <b>nur Mobilnummer,
              Terminende und Standort</b>. Namen, Geburtsdaten und Terminarten werden nie gespeichert.</td>
          </tr>
          <tr>
            <th scope="row">Speicherbegrenzung<span class="kd-ref">Art. 5 Abs. 1 lit. e DSGVO</span></th>
            <td class="kd-us">Die Nummer ist <b>spätestens 72 Stunden nach dem Versand gelöscht</b>, unversendete
              verfallen 72 Stunden nach dem Termin. Eine tägliche Prüfung schlägt Alarm, falls etwas länger liegt.</td>
          </tr>
          <tr>
            <th scope="row">Auftragsverarbeitung<span class="kd-ref">Art. 28 DSGVO</span></th>
            <td class="kd-us"><b>AV-Vertrag</b> mit allen Unterauftragnehmern namentlich aufgeführt. Jede Änderung
              kündigen wir vorher schriftlich an.</td>
          </tr>
          <tr>
            <th scope="row">Schweigepflicht<span class="kd-ref">§ 203 StGB</span></th>
            <td class="kd-us">Kanduit ist im AV-Vertrag <b>ausdrücklich auf die Schweigepflicht verpflichtet</b>.
              Fehlermeldungen und Protokolle enthalten keine Patientendaten.</td>
          </tr>
          <tr>
            <th scope="row">Sicherheit der Verarbeitung<span class="kd-ref">Art. 32 DSGVO</span></th>
            <td class="kd-us">Verschlüsselte Datenpartition, verschlüsselte Verbindungen, Doctolib-Zugang mit
              Zwei-Faktor-Anmeldung. Die <b>technischen und organisatorischen Maßnahmen</b> sind einzeln dokumentiert.
              Automatische Tests spielen komplette Abrufe mit Testdaten durch und prüfen, dass kein Name, kein
              Geburtsdatum und keine Terminart in Datenbank, Protokoll, E-Mail oder SMS landet.</td>
          </tr>
          <tr>
            <th scope="row">Verarbeitung in Deutschland<span class="kd-ref">Art. 44 ff. DSGVO</span></th>
            <td class="kd-us">Server, SMS-Versand und E-Mail laufen bei <b>Anbietern in Deutschland</b>.
              Keine Übermittlung in Drittländer.</td>
          </tr>
          <tr>
            <th scope="row">Widerruf<span class="kd-ref">Art. 7 Abs. 3 DSGVO</span></th>
            <td class="kd-us">Abmelden mit einem Tipp auf der Feedback-Seite. Wird die Einwilligung in Doctolib
              entfernt, <b>verfällt eine wartende SMS</b> automatisch.</td>
          </tr>
          <tr>
            <th scope="row">Information der Patienten<span class="kd-ref">Art. 13 DSGVO</span></th>
            <td class="kd-us">Wir liefern den <b>Abschnitt für Ihre Datenschutzerklärung</b>. Die Feedback-Seiten
              setzen keine Cookies und binden keine Drittanbieter ein.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </details>

  <div class="kd-docs">
    <div>
      <h3 class="kd-docs__h">Unterlagen für Ihren Datenschutzbeauftragten</h3>
      <p class="kd-docs__p">Lassen Sie alles vorab prüfen, bevor wir überhaupt sprechen. Es sind die Texte,
        die in der Hautarztpraxis im Einsatz sind; nur die Angaben zur Praxis sind ersetzt.</p>
      <ul>
        <li>Muster-AV-Vertrag mit § 203 StGB</li>
        <li>Technische und organisatorische Maßnahmen (Anlage 1)</li>
        <li>Einwilligungstexte für Empfang und Online-Buchung</li>
        <li>Baustein für Ihre Datenschutzerklärung</li>
      </ul>
    </div>
    <div class="kd-docs__dl">
      <a class="kd-btn" href="/docs/Kanduit_Muster-AV-Vertrag_Feedback-SMS.pdf" download>AV-Vertrag mit TOM (PDF)</a>
      <a class="kd-btn kd-btn--ghost" href="/docs/Kanduit_Muster-Einwilligungstexte_Feedback-SMS.pdf" download>Einwilligungs- und Datenschutztexte (PDF)</a>
    </div>
  </div>
  <p class="kd-source">Wir stellen Texte und Nachweise bereit. Die abschließende Prüfung liegt bei Ihrer Praxis bzw. Ihrem Datenschutzbeauftragten; eine Rechtsberatung ersetzen wir nicht.</p>
</div>
```

---

## Sektion 6 — Preis

*Preise müssen zum Angebot passen (Listenpreis seit 26.11.2026): keine Einrichtungsgebühr, 199 € für jeden
Standort, SMS monatlich nach Verbrauch zu 7,5 Cent netto, 6 Monate Mindestlaufzeit. MVZ und Kliniken auf Anfrage.*

```html
<div class="kd-wrap kd-band-ink" id="preise">
  <span class="kd-eyebrow" style="color:var(--petrol-300);">Preis</span>
  <h2 class="kd-h2" style="color:#fff;">199 € pro Standort und Monat. SMS nach Verbrauch.</h2>
  <p style="color:var(--neutral-300); max-width:58ch; margin:0 0 var(--sp-7);">
    Keine Einrichtungsgebühr und keine SMS-Pakete. Die Gebühr ist jeden Monat gleich und für jeden
    Standort dieselbe. Dazu kommen nur die SMS, die tatsächlich versendet wurden. Sie zahlen ab dem
    Monat, in dem die erste SMS rausgeht.
  </p>
  <div class="kd-price">
    <div class="kd-price__item">
      <div class="kd-price__k">Inklusive</div>
      <div class="kd-price__v">Einrichtung</div>
      <p class="kd-price__p">Doctolib-Anbindung, Einwilligungs- und SMS-Texte, AV-Vertrag,
        Datenschutzhinweise, Antwortvorlagen für Google-Bewertungen, Test mit Ihrem Team.</p>
    </div>
    <div class="kd-price__item">
      <div class="kd-price__k">Monatlich ab Start</div>
      <div class="kd-price__v">199 € pro Standort</div>
      <p class="kd-price__p">Betrieb, Überwachung, Anpassungen bei Doctolib-Änderungen und ein
        Monatsbericht mit Ihren Google-Zahlen. Jeder weitere Standort ebenfalls 199 €. 6 Monate
        Mindestlaufzeit, danach monatlich kündbar.</p>
    </div>
    <div class="kd-price__item">
      <div class="kd-price__k">Nach Verbrauch</div>
      <div class="kd-price__v">7,5 Cent pro SMS</div>
      <p class="kd-price__p">Monatlich abgerechnet, nur für versendete SMS und ohne Aufschlag auf den
        Preis unseres SMS-Anbieters. Dieselbe Nummer erhält höchstens alle sechs Monate eine SMS.</p>
    </div>
  </div>
  <p class="kd-price__note">Alle Preise netto zzgl. 19 % USt. Beispiel: Bei 400 SMS im Monat kommen 30 € netto dazu.
    Der Monatsbericht zeigt die Zahl der versendeten SMS. Für MVZ und Kliniken erstellen wir ein eigenes Angebot.</p>
  <div class="kd-actions">
    <a class="kd-btn" href="/kontakt">Angebot anfragen →</a>
  </div>
</div>
```

---

## Sektion 7 — Häufige Fragen

```html
<div class="kd-wrap">
  <span class="kd-eyebrow">Häufige Fragen</span>
  <h2 class="kd-h2">Was Praxisinhaber vorab wissen wollen.</h2>
  <div class="kd-faq">
    <details>
      <summary>Brauchen wir Doctolib?</summary>
      <p>Die fertige Anbindung gibt es heute für Doctolib. Andere Terminsysteme prüfen wir gern.
        Wenn es dort einen Export oder eine Schnittstelle gibt, lässt sich die Feedback-SMS meist
        anpassen.</p>
    </details>
    <details>
      <summary>Was muss unser Empfang tun?</summary>
      <p>Die Einwilligung in Doctolib markieren, wenn ein Patient zustimmt, und Termine wie gewohnt
        auf „Behandelt“ setzen: nur diese erhalten eine SMS. Bei Online-Buchungen setzen Patienten die
        Einwilligung selbst. Auf Wunsch erinnert eine E-Mail am Abend Ihr Team an beendete Termine ohne
        „Behandelt“. Listen, Exporte oder Uploads gibt es nicht.</p>
    </details>
    <details>
      <summary>Dürfen wir Patienten überhaupt per SMS anschreiben?</summary>
      <p>Mit ausdrücklicher Einwilligung ja. Auch eine Bitte um Bewertung gilt rechtlich als Werbung
        (BGH, VI ZR 225/17), deshalb geht die SMS nur an Patienten mit Häkchen. Wir stellen die
        Einwilligungstexte und Datenschutzhinweise bereit. Die abschließende Prüfung liegt bei Ihnen
        bzw. Ihrem Datenschutzbeauftragten; eine Rechtsberatung ersetzen wir nicht.</p>
    </details>
    <details>
      <summary>Was passiert mit Kritik?</summary>
      <p>👎 öffnet eine Feedback-Seite. Was dort steht, geht per E-Mail an ein Postfach Ihrer Wahl
        und wird bei uns nach dem Versand gelöscht. So erfahren Sie direkt von Problemen und können
        reagieren.</p>
    </details>
    <details>
      <summary>Ist das mit den Google-Richtlinien vereinbar?</summary>
      <p>Google untersagt, gezielt nur zufriedene Kunden um eine Bewertung zu bitten. Deshalb geht die
        SMS an alle Patienten mit Einwilligung, und die Feedback-Seite zeigt standardmäßig auch den Weg
        zu Google. Wie Rückmeldungen geleitet werden, entscheidet Ihre Praxis; wir erklären Ihnen die
        Folgen.</p>
    </details>
    <details>
      <summary>Warum nicht einfach ein QR-Code am Empfang?</summary>
      <p>Ein Aufsteller erreicht nur, wer ihn bemerkt und in dem Moment Zeit hat. Die SMS kommt eine
        Stunde nach dem Termin, wenn der Besuch noch frisch ist, und ein Tipp öffnet direkt das
        Bewertungsformular.</p>
    </details>
    <details>
      <summary>Wie schnell sind wir live?</summary>
      <p>In der Regel in drei bis vier Wochen. Die meiste Zeit geht für die Freigabe der Texte und
        die Einrichtung des Doctolib-Zugangs drauf, nicht für Technik.</p>
    </details>
    <details>
      <summary>Was kosten die SMS?</summary>
      <p>7,5 Cent netto je versendete SMS, ohne Aufschlag. Wir berechnen jeden Monat nur die SMS, die im
        Vormonat tatsächlich versendet wurden. Die Zahl steht im Monatsbericht und auf der Rechnung.
        Dieselbe Nummer erhält höchstens alle sechs Monate eine SMS, auch wenn der Patient öfter kommt.</p>
    </details>
    <details>
      <summary>Gibt es eine Mindestlaufzeit?</summary>
      <p>Sechs Monate ab Start, danach monatlich kündbar. Bei Kündigung löschen wir alle verbleibenden
        Daten und den Doctolib-Zugang und bestätigen das schriftlich.</p>
    </details>
    <details>
      <summary>Wir nutzen schon einen Bewertungsdienst. Können wir wechseln?</summary>
      <p>Ja. Ihr Google-Bewertungslink bleibt derselbe. Wir übernehmen die Einrichtung und passen
        die Einwilligungstexte an, damit sie zur neuen Verarbeitung passen.</p>
    </details>
  </div>
</div>
```

---

## Sektion 8 — CTA

```html
<div class="kd-wrap kd-band-ink">
  <span class="kd-eyebrow" style="color:var(--petrol-300);">Für Praxen in NRW</span>
  <h2 class="kd-h2" style="color:#fff;">Sehen Sie die Feedback-SMS in 20 Minuten.</h2>
  <p style="color:var(--neutral-300); max-width:52ch; margin:0 0 var(--sp-6);">
    Ich zeige Ihnen Ablauf, Feedback-Seite und Monatsbericht und schaue mit Ihnen, wie Ihr Doctolib
    eingerichtet ist. Rufen Sie gern direkt an.
  </p>
  <div class="kd-person">
    <img class="kd-person__pfp" src="/img/julian-cheng.jpg" alt="Julian Cheng" width="88" height="88">
    <div class="kd-person__who">
      <p class="kd-person__name">Julian Cheng</p>
      <p class="kd-person__role" style="color:var(--neutral-400);">Kanduit · Düsseldorf</p>
    </div>
    <div class="kd-person__reach">
      <a class="kd-btn" href="tel:+4915732597385">Anrufen: 0157 3259 7385</a>
      <a class="kd-btn kd-btn--ghost" href="https://wa.me/4915732597385" target="_blank" rel="noopener">WhatsApp</a>
      <a class="kd-btn kd-btn--ghost" href="/kontakt">Termin per Formular →</a>
    </div>
  </div>
</div>
```
