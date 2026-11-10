# FÜR PRAXEN — Deutsch

**URL:** `/praxen`  ·  **Toggle → EN:** `/en`
**Rolle:** B2B-Seite. Zeigt die Feedback-SMS, die Kanduit für eine Hautarztpraxis mit zwei
Standorten gebaut hat und betreibt, mit Schwerpunkt DSGVO und Schweigepflicht.
**Pflege:** Wettbewerber nicht namentlich nennen. Den Praxisnamen erst nennen, wenn die Praxis
schriftlich zugestimmt hat.

## SEO

- **Meta title:** Feedback-SMS für Arztpraxen mit Doctolib | Kanduit
- **Meta description:** Mehr Google-Bewertungen ohne Mehraufwand am Empfang: eine SMS nach dem Termin, direkt aus Doctolib, nur mit Einwilligung. Nummern nach 72 Stunden gelöscht, AV-Vertrag mit § 203 StGB, Hosting in Deutschland.

---

## Sektion 1 — Hero

```html
<div class="kd-wrap">
  <div class="kd-hero-split">
    <div>
      <span class="kd-eyebrow">Feedback-SMS für Arztpraxen</span>
      <h1 class="kd-h1">Mehr Google-Bewertungen. <em>Ohne Mehraufwand am Empfang.</em></h1>
      <p class="kd-lede">
        Eine SMS nach dem Termin – automatisch aus Ihrem Doctolib-Kalender und nur an
        Patientinnen und Patienten, die eingewilligt haben. Zufriedene bewerten bei Google,
        Kritik erreicht Sie direkt. Wir richten alles ein und betreiben es für Sie.
      </p>
      <div class="kd-actions">
        <a class="kd-btn" href="/kontakt">Gespräch vereinbaren →</a>
        <a class="kd-btn kd-btn--ghost" href="#datenschutz">So bleiben Sie DSGVO-konform ↓</a>
      </div>
      <p class="kd-hero-note">Für Praxen mit Doctolib. Anderes Terminsystem? <a href="/kontakt">Wir prüfen es gern.</a></p>
      <div class="kd-facts">
        <div><div class="kd-fact__v">1<small>SMS</small></div><div class="kd-fact__l">pro Besuch, keine Erinnerungen</div></div>
        <div><div class="kd-fact__v">72<small>h</small></div><div class="kd-fact__l">dann ist die Nummer gelöscht</div></div>
        <div><div class="kd-fact__v">0</div><div class="kd-fact__l">Uploads oder Listen am Empfang</div></div>
      </div>
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
              <p class="kd-pg__note">👍 öffnet direkt das Formular Ihres Google-Profils – ohne Umweg, ohne Login bei uns.</p>
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
    <div class="kd-person__pfp" aria-hidden="true">JC</div>
    <div class="kd-person__who">
      <p class="kd-person__name">Julian Cheng</p>
      <p class="kd-person__role">Gründer · Ihr Ansprechpartner</p>
      <p class="kd-person__p">Ich baue und betreibe die Feedback-SMS selbst. Sie sprechen also nicht mit
        einer Hotline, sondern mit dem, der Ihre Doctolib-Anbindung einrichtet und sich kümmert, wenn
        etwas klemmt.</p>
    </div>
    <div class="kd-person__reach">
      <a class="kd-btn" href="tel:+4915732597385">0157 3259 7385</a>
      <a class="kd-btn kd-btn--ghost" href="mailto:julian@kanduit.de">julian@kanduit.de</a>
    </div>
  </div>
</div>
```

---

## Sektion 2 — So funktioniert es

```html
<div class="kd-wrap kd-band-soft">
  <span class="kd-eyebrow">So funktioniert es</span>
  <h2 class="kd-h2">Vom Termin zur Bewertung, ohne dass jemand eine Liste anfasst.</h2>
  <p class="kd-intro">
    Kanduit bekommt einen eigenen, eingeschränkten Doctolib-Zugang. Alles Weitere läuft auf
    unserem Server in Deutschland – und Ihr Team arbeitet weiter wie bisher.
  </p>
  <div class="kd-steps">
    <div class="kd-step">
      <div class="kd-step__n">01</div>
      <h3 class="kd-step__h">Einwilligung markieren</h3>
      <p class="kd-step__p">Ein Feld in Doctolib: am Empfang angehakt oder bei der Online-Buchung
        von den Patienten selbst gesetzt. Ohne Häkchen keine SMS.</p>
      <span class="kd-step__who">Ihre Praxis · Sekunden</span>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">02</div>
      <h3 class="kd-step__h">Terminliste abrufen</h3>
      <p class="kd-step__p">Alle 30 Minuten während der Öffnungszeiten, nur im Arbeitsspeicher.
        Namen, Geburtsdaten und Terminarten werden sofort verworfen.</p>
      <span class="kd-step__who">Automatisch</span>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">03</div>
      <h3 class="kd-step__h">Eine SMS senden</h3>
      <p class="kd-step__p">Frühestens 60 Minuten nach Terminende, Mo–Sa von 8 bis 20 Uhr, über
        einen deutschen SMS-Anbieter. Dieselbe Nummer höchstens alle sechs Monate.</p>
      <span class="kd-step__who">Automatisch</span>
    </div>
    <div class="kd-step">
      <div class="kd-step__n">04</div>
      <h3 class="kd-step__h">Bewertung oder Feedback</h3>
      <p class="kd-step__p">👍 öffnet direkt Ihr Google-Bewertungsformular. 👎 öffnet eine
        private Feedback-Seite, die Ihnen eine E-Mail schickt.</p>
      <span class="kd-step__who">Ihre Patienten · ein Tipp</span>
    </div>
  </div>
</div>
```

---

## Sektion 3 — Gebaut für eine Hautarztpraxis

```html
<div class="kd-wrap">
  <div class="kd-case-grid">
    <div>
      <span class="kd-eyebrow">Im Einsatz</span>
      <h2 class="kd-h2">Gebaut für eine Hautarztpraxis mit zwei Standorten.</h2>
      <p style="color:var(--neutral-700); max-width:54ch;">
        Die Praxis suchte eine Lösung, die mit Doctolib zusammenarbeitet und Patientendaten so knapp wie möglich hält. Vom ersten
        Angebot bis zum Live-Betrieb am ersten Standort vergingen weniger als vier Wochen.
        Seit November 2026 laufen beide Standorte.
      </p>
      <ul class="kd-built">
        <li><span><b>Doctolib-Anbindung ohne Export-Datei.</b> Ein eigener Zugang mit
          Zwei-Faktor-Anmeldung liest den Kalender, nichts landet auf einer Festplatte.</span></li>
        <li><span><b>Zwei Standorte, eine Regel.</b> Jeder Standort hat eigene Absender, Links
          und Google-Profile – die Sechs-Monats-Sperre und Abmeldungen gelten standortübergreifend.</span></li>
        <li><span><b>Ein spätes „Nein“ zählt.</b> Wird die Einwilligung in Doctolib vor dem
          Versand entfernt oder der Termin nicht wahrgenommen, verfällt die SMS.</span></li>
        <li><span><b>Verträge und Texte aus einer Hand.</b> AV-Vertrag mit Verpflichtung auf die
          Schweigepflicht, Einwilligungstexte, Datenschutzhinweise und Antwortvorlagen für
          Google-Bewertungen.</span></li>
        <li><span><b>Überwacht rund um die Uhr.</b> Ein externer Wächter prüft alle zwei Minuten,
          ob Abruf und Versand laufen, und alarmiert uns, bevor es Ihnen auffällt.</span></li>
      </ul>
    </div>

    <div class="kd-report" aria-label="Beispiel eines Monatsberichts">
      <p class="kd-report__h">Monatsbericht Feedback-SMS</p>
      <p class="kd-report__sub">Praxis Muster · Standort Nord · Beispielzahlen</p>
      <p class="kd-report__sec">Abruf der Terminliste</p>
      <table>
        <tr><td>Termine gelesen</td><td>1.184</td></tr>
        <tr><td>nicht eingeplant: keine Einwilligung</td><td>402</td></tr>
        <tr><td>nicht eingeplant: keine Mobilnummer</td><td>131</td></tr>
        <tr><td>nicht eingeplant: in den letzten 6 Monaten angefragt</td><td>96</td></tr>
        <tr><td>SMS eingeplant</td><td>555</td></tr>
      </table>
      <p class="kd-report__sec">Nach der SMS</p>
      <table>
        <tr><td>👍 weiter zu Google</td><td>148</td></tr>
        <tr><td>👎 Feedback an die Praxis</td><td>21</td></tr>
        <tr><td>Abmeldungen</td><td>4</td></tr>
      </table>
      <p class="kd-report__foot">Nur anonyme Zählwerte, keine personenbezogenen Daten. Jeder
        Ausschlussgrund ist einzeln ausgewiesen, damit Sie sehen, wo Potenzial liegt.</p>
    </div>
  </div>
</div>
```

---

## Sektion 4 — Was wir sicherstellen

```html
<div class="kd-wrap kd-band-soft" id="datenschutz">
  <span class="kd-eyebrow">DSGVO &amp; Schweigepflicht</span>
  <h2 class="kd-h2">Was wir sicherstellen, damit Ihre Praxis auf der sicheren Seite bleibt.</h2>
  <p class="kd-intro">
    Wer Patienten nach dem Termin anschreibt, verarbeitet Gesundheitsdaten. Dafür gelten strenge
    Regeln. Hier steht, welche das sind und wie die Feedback-SMS jede davon erfüllt.
  </p>
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
            Zwei-Faktor-Anmeldung. Die <b>technischen und organisatorischen Maßnahmen</b> sind einzeln dokumentiert.</td>
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
  <div class="kd-docs">
    <div>
      <h3 class="kd-docs__h">Unterlagen für Ihren Datenschutzbeauftragten</h3>
      <p class="kd-docs__p">Lassen Sie alles vorab prüfen, bevor wir überhaupt sprechen. Wir schicken Ihnen
        die Unterlagen per E-Mail.</p>
      <ul>
        <li>Muster-AV-Vertrag mit § 203 StGB</li>
        <li>Technische und organisatorische Maßnahmen</li>
        <li>Einwilligungstexte für Empfang und Online-Buchung</li>
        <li>Baustein für Ihre Datenschutzerklärung</li>
      </ul>
    </div>
    <a class="kd-btn" href="mailto:julian@kanduit.de?subject=Unterlagen%20Feedback-SMS%20f%C3%BCr%20unseren%20Datenschutzbeauftragten">Unterlagen anfordern →</a>
  </div>
  <p class="kd-source">Wir stellen Texte und Nachweise bereit. Die abschließende Prüfung liegt bei Ihrer Praxis bzw. Ihrem Datenschutzbeauftragten; eine Rechtsberatung ersetzen wir nicht.</p>
</div>
```

---

## Sektion 5 — Warum unsere Arbeitsweise Sie compliant hält

```html
<section class="kd-wp">
  <span class="kd-eyebrow">Unsere Arbeitsweise</span>
  <h2 class="kd-wp__title">Compliance ist eingebaut, <em>nicht nachgerüstet.</em></h2>
  <p class="kd-wp__dek">
    Eine Arztpraxis haftet für das, was ihre Dienstleister mit Patientendaten tun. Deshalb bauen
    wir so, dass möglichst wenig schiefgehen kann – und dass Sie es belegen können.
  </p>

  <article class="kd-sec">
    <div class="kd-sec__num">§ 01</div>
    <div>
      <h3 class="kd-sec__h">Was wir nicht speichern, kann nicht verloren gehen</h3>
      <p class="kd-sec__p">Wir haben die Feedback-SMS so gebaut, dass sie fast nichts wissen muss. Jedes
        Feld, das wir nicht übernehmen, ist ein Risiko weniger für Ihre Praxis.</p>
    </div>
  </article>

  <article class="kd-sec">
    <div class="kd-sec__num">§ 02</div>
    <div>
      <h3 class="kd-sec__h">Automatisch geprüft</h3>
      <p class="kd-sec__p">Automatische Tests spielen komplette Abrufe mit Testdaten durch
        und prüfen, dass kein Name, kein Geburtsdatum und keine Terminart in Datenbank, Protokoll, E-Mail
        oder SMS landet.</p>
    </div>
  </article>

  <article class="kd-sec">
    <div class="kd-sec__num">§ 03</div>
    <div>
      <h3 class="kd-sec__h">Verträge und Texte aus einer Hand</h3>
      <p class="kd-sec__p">AV-Vertrag, Einwilligungstexte, Datenschutzhinweise und Maßnahmen-Dokumentation
        kommen von uns und passen zur tatsächlichen Technik – weil wer sie schreibt, das System auch baut.</p>
    </div>
  </article>

  <article class="kd-sec">
    <div class="kd-sec__num">§ 04</div>
    <div>
      <h3 class="kd-sec__h">Google-Richtlinien im Blick</h3>
      <p class="kd-sec__p">Google untersagt, nur zufriedene Patienten gezielt zur Bewertung zu
        bitten. Standardmäßig zeigt die Feedback-Seite deshalb auch den Weg zu Google. Wie
        Rückmeldungen geleitet werden, entscheidet Ihre Praxis – wir erklären die Folgen.</p>
    </div>
  </article>

  <div class="kd-note">
    <b>Nachweis</b> Jeden Monat erhalten Sie einen Bericht mit anonymen Zählwerten: wie viele Termine
    gelesen, aus welchem Grund ausgeschlossen, wie viele SMS versendet und wie viele Abmeldungen.
  </div>
</section>
```

---

## Sektion 6 — Preismodell

*Preise bewusst nicht genannt: Angebot nach Gespräch. Struktur muss zu jedem Angebot passen:
keine Einrichtungsgebühr, Monatspreis pro Standort, Abrechnung ab Go-live, SMS zum Selbstkostenpreis.*

```html
<div class="kd-wrap kd-band-ink">
  <span class="kd-eyebrow" style="color:var(--petrol-300);">Preismodell</span>
  <h2 class="kd-h2" style="color:#fff;">Keine Einrichtungsgebühr. Ein fester Preis pro Standort.</h2>
  <p style="color:var(--neutral-300); max-width:58ch; margin:0 0 var(--sp-7);">
    Sie zahlen nicht mehr, wenn Ihre Praxis wächst, und nichts, bevor die erste SMS rausgeht. Das
    konkrete Angebot erhalten Sie nach einem kurzen Gespräch über Ihre Standorte und Ihr Doctolib.
  </p>
  <div class="kd-price">
    <div class="kd-price__item">
      <div class="kd-price__k">Inklusive</div>
      <div class="kd-price__v">Einrichtung</div>
      <p class="kd-price__p">Doctolib-Anbindung, Einwilligungs- und SMS-Texte, AV-Vertrag,
        Datenschutzhinweise, Antwortvorlagen für Google-Bewertungen, Test mit Ihrem Team.</p>
    </div>
    <div class="kd-price__item">
      <div class="kd-price__k">Monatlich ab Go-live</div>
      <div class="kd-price__v">Pro Standort</div>
      <p class="kd-price__p">Betrieb, Überwachung, Anpassungen bei Doctolib-Änderungen und ein
        Monatsbericht. Ein fester Preis, unabhängig von der Patientenzahl.</p>
    </div>
    <div class="kd-price__item">
      <div class="kd-price__k">Nach Verbrauch</div>
      <div class="kd-price__v">SMS zum Selbstkostenpreis</div>
      <p class="kd-price__p">Wir reichen die Kosten des deutschen SMS-Anbieters ohne Aufschlag
        weiter. Der Monatsbericht zeigt, wie viele SMS versendet wurden.</p>
    </div>
  </div>
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
      <p>Die fertige Anbindung gibt es heute für Doctolib. Andere Terminsysteme prüfen wir gern –
        wenn es dort einen Export oder eine Schnittstelle gibt, lässt sich die Feedback-SMS meist
        anpassen.</p>
    </details>
    <details>
      <summary>Was muss unser Empfang tun?</summary>
      <p>Nur die Einwilligung in Doctolib markieren, wenn ein Patient zustimmt. Bei Online-Buchungen
        können Patienten das selbst tun. Listen, Exporte oder Uploads gibt es nicht.</p>
    </details>
    <details>
      <summary>Dürfen wir Patienten überhaupt per SMS anschreiben?</summary>
      <p>Mit ausdrücklicher Einwilligung ja. Wir stellen die Einwilligungstexte und Datenschutzhinweise
        bereit; die abschließende Prüfung liegt bei Ihnen bzw. Ihrem Datenschutzbeauftragten. Eine
        Rechtsberatung ersetzen wir nicht.</p>
    </details>
    <details>
      <summary>Wie schnell sind wir live?</summary>
      <p>In der Regel in drei bis vier Wochen. Die meiste Zeit geht für die Freigabe der Texte und
        die Einrichtung des Doctolib-Zugangs drauf, nicht für Technik.</p>
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
    <div class="kd-person__pfp" aria-hidden="true">JC</div>
    <div class="kd-person__who">
      <p class="kd-person__name">Julian Cheng</p>
      <p class="kd-person__role" style="color:var(--neutral-400);">Kanduit · Düsseldorf</p>
    </div>
    <div class="kd-person__reach">
      <a class="kd-btn" href="tel:+4915732597385">Anrufen: 0157 3259 7385</a>
      <a class="kd-btn kd-btn--ghost" href="/kontakt">Termin per Formular →</a>
    </div>
  </div>
</div>
```
