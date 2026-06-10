#!/usr/bin/env python3
"""Build the standalone Kanduit website (GitHub Pages) from the content decks.

Source of truth = the same markdown decks used for the Squarespace blocks:
    src/pages/de/*.md  +  src/pages/en/*.md
Each deck carries its own routing + SEO in its header lines:
    **URL:** `/leistungen`   **Toggle -> EN:** `/en/services`
    - **Meta title:** ...
    - **Meta description:** ...
...and one or more ```html ...``` content blocks (identical to the
Squarespace snippets). This script wraps every block in a full-width band,
adds the shared header/nav/footer/language-toggle, writes clean-URL pages
(/leistungen/index.html), and copies CSS + static assets into dist/.

Usage:   python3 build.py
Output:  dist/   (deploy this folder to GitHub Pages)
"""
import re, shutil, datetime, pathlib

ROOT = pathlib.Path(__file__).resolve().parent
SRC  = ROOT / "src"
DIST = ROOT / "dist"
SITE_ORIGIN = "https://kanduit.de"   # used for canonical / og:url / sitemap (matches public/CNAME)

# Contact form posts to the Cloudflare Worker in worker/ (sends mail to julian@kanduit.de).
# After `wrangler deploy`, set this to the Worker URL (workers.dev or a custom route
# like https://form.kanduit.de). Until then the form shows a friendly error on submit.
WORKER_ENDPOINT = "https://kanduit-contact.REPLACE-SUBDOMAIN.workers.dev"

BLOCK   = re.compile(r"```html\n(.*?)```", re.DOTALL)
RE_URL  = re.compile(r"\*\*URL:\*\*\s*`([^`]+)`")
RE_TOG  = re.compile(r"\*\*Toggle[^:]*:\*\*\s*`([^`]+)`")
RE_TIT  = re.compile(r"\*\*Meta title:\*\*\s*(.+)")
RE_DESC = re.compile(r"\*\*Meta description:\*\*\s*(.+)")
PAD = "clamp(48px,8vh,96px) clamp(16px,4vw,40px)"

# Navigation (label, url) per language. Order = display order.
NAV = {
    "de": [("Start","/"), ("Über uns","/ueber-uns"), ("Leistungen","/leistungen"),
           ("Projektportfolio","/projektportfolio"), ("Kontakt","/kontakt")],
    "en": [("Home","/en"), ("About","/en/about"), ("Services","/en/services"),
           ("Portfolio","/en/portfolio"), ("Contact","/en/contact")],
}
FOOT = {
    "de": dict(tagline="Ihr Partner für digitale Souveränität und Compliance im öffentlichen "
                       "Sektor in NRW – datengetrieben, rechtssicher, DSGVO-konform.",
               nav_label="Navigation", legal_label="Rechtliches"),
    "en": dict(tagline="Your partner for digital sovereignty and compliance in the NRW public "
                       "sector – data-driven, legally sound, GDPR-compliant.",
               nav_label="Navigation", legal_label="Legal"),
}
HOME = {"de": "/", "en": "/en"}

def band(block):
    if "kd-band-ink" in block: bg = "#0C1517"
    elif "kd-wp" in block:     bg = "#F7FAFA"
    else:                      bg = "#FBFCFC"
    return f'<section class="kd-band" style="background:{bg}; padding:{PAD};">\n{block.rstrip()}\n</section>'

def url_to_outpath(url):
    """/ -> index.html ; /foo -> foo/index.html ; /en/foo -> en/foo/index.html"""
    rel = url.strip("/")
    return DIST / "index.html" if rel == "" else DIST / rel / "index.html"

def nav_html(lang, active_url):
    out = []
    for label, href in NAV[lang]:
        cls = ' class="is-active"' if href == active_url else ""
        out.append(f'<a href="{href}"{cls}>{label}</a>')
    return "".join(out)

def foot_nav_html(lang):
    return "".join(f'<a href="{href}">{label}</a>' for label, href in NAV[lang])

def langtoggle_html(lang, toggle_url):
    de_active = lang == "de"
    de = '<span class="is-active">DE</span>' if de_active else f'<a href="{toggle_url}">DE</a>'
    en = '<span class="is-active">EN</span>' if not de_active else f'<a href="{toggle_url}">EN</a>'
    return f'{de} · {en}'

def contact_form(lang):
    if lang == "de":
        f = dict(name="Name", org="Organisation / Behörde / Schule", email="E-Mail",
                 phone="Telefon (optional)", msg="Ihr Anliegen", send="Anfrage senden",
                 consent='Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen und '
                         'bin mit der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage '
                         'einverstanden.',
                 sending="Wird gesendet …",
                 success="Vielen Dank. Wir haben Ihre Anfrage erhalten und melden uns zeitnah bei Ihnen.",
                 error="Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie an "
                       "julian@kanduit.de.")
    else:
        f = dict(name="Name", org="Organisation / authority / school", email="Email",
                 phone="Phone (optional)", msg="Your enquiry", send="Send enquiry",
                 consent='I have read the <a href="/datenschutz">privacy policy</a> and consent to '
                         'my details being processed to handle my enquiry.',
                 sending="Sending …",
                 success="Thank you. We've received your enquiry and will be in touch shortly.",
                 error="Could not send. Please try again or email julian@kanduit.de.")
    return f'''<div class="kd-wrap">
  <form class="kd-form" id="kd-contact-form" method="POST" action="{WORKER_ENDPOINT}"
        data-endpoint="{WORKER_ENDPOINT}" data-sending="{f['sending']}"
        data-success="{f['success']}" data-error="{f['error']}">
    <input type="hidden" name="lang" value="{lang}">
    <input type="text" name="_gotcha" class="kd-hp" tabindex="-1" autocomplete="off" aria-hidden="true">
    <div class="kd-field"><label for="f-name">{f['name']}</label>
      <input id="f-name" name="name" type="text" required></div>
    <div class="kd-field"><label for="f-org">{f['org']}</label>
      <input id="f-org" name="organisation" type="text" required></div>
    <div class="kd-field"><label for="f-email">{f['email']}</label>
      <input id="f-email" name="email" type="email" required></div>
    <div class="kd-field"><label for="f-phone">{f['phone']}</label>
      <input id="f-phone" name="phone" type="tel"></div>
    <div class="kd-field"><label for="f-msg">{f['msg']}</label>
      <textarea id="f-msg" name="message" required></textarea></div>
    <label class="kd-consent"><input type="checkbox" name="consent" required>
      <span>{f['consent']}</span></label>
    <button type="submit">{f['send']} →</button>
    <p class="kd-form-status" role="status" aria-live="polite"></p>
  </form>
  <script src="/js/contact.js" defer></script>
</div>'''

def parse(md):
    return dict(
        url   = (RE_URL.search(md)  or _no("URL")).group(1).strip(),
        toggle= (m.group(1).strip() if (m := RE_TOG.search(md)) else None),
        title = (m.group(1).strip() if (m := RE_TIT.search(md)) else "Kanduit"),
        desc  = (m.group(1).strip() if (m := RE_DESC.search(md)) else ""),
        blocks= BLOCK.findall(md),
    )

def _no(field):
    raise SystemExit(f"Deck missing required **{field}:** line")

def render(template, lang, page):
    url = page["url"]
    bands = [band(b) for b in page["blocks"]]
    # Contact pages: inject the real form between heading (0) and location (1).
    if url in ("/kontakt", "/en/contact"):
        bands.insert(1, f'<section class="kd-band" style="background:#FBFCFC; padding:{PAD};">\n'
                        f'{contact_form(lang)}\n</section>')
    body = "\n".join(bands)
    alt_lang = "en" if lang == "de" else "de"
    toggle = page["toggle"] or HOME[alt_lang]
    canonical = SITE_ORIGIN + ("" if url == "/" else url)
    repl = {
        "{{LANG}}": lang, "{{ALT_LANG}}": alt_lang,
        "{{TITLE}}": page["title"], "{{DESCRIPTION}}": page["desc"],
        "{{CANONICAL}}": canonical, "{{ALT_URL}}": SITE_ORIGIN + (toggle if toggle != "/" else ""),
        "{{HOME}}": HOME[lang], "{{NAV}}": nav_html(lang, url),
        "{{LANGTOGGLE}}": langtoggle_html(lang, toggle), "{{BODY}}": body,
        "{{FOOT_TAGLINE}}": FOOT[lang]["tagline"], "{{FOOT_NAV}}": foot_nav_html(lang),
        "{{FOOT_NAV_LABEL}}": FOOT[lang]["nav_label"],
        "{{FOOT_LEGAL_LABEL}}": FOOT[lang]["legal_label"],
        "{{YEAR}}": str(datetime.date.today().year),
    }
    html = template
    for k, v in repl.items():
        html = html.replace(k, v)
    return html, canonical

def main():
    if DIST.exists(): shutil.rmtree(DIST)
    DIST.mkdir()
    template = (SRC / "templates/base.html").read_text()

    # CSS + static passthrough
    (DIST / "css").mkdir()
    for css in (SRC / "css").glob("*.css"):
        shutil.copy(css, DIST / "css" / css.name)
    pub = SRC.parent / "public"
    if pub.exists():
        for item in pub.iterdir():
            (shutil.copytree if item.is_dir() else shutil.copy)(item, DIST / item.name)

    urls = []
    for lang in ("de", "en"):
        for md_file in sorted((SRC / "pages" / lang).glob("0*.md")):
            page = parse(md_file.read_text())
            html, canonical = render(template, lang, page)
            out = url_to_outpath(page["url"])
            out.parent.mkdir(parents=True, exist_ok=True)
            out.write_text(html)
            urls.append(canonical)
            print(f"  {lang}  {page['url']:<22} -> {out.relative_to(DIST)}")

    # sitemap.xml + robots.txt + 404
    today = datetime.date.today().isoformat()
    sm = ['<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in urls:
        sm.append(f"  <url><loc>{u}</loc><lastmod>{today}</lastmod></url>")
    sm.append("</urlset>")
    (DIST / "sitemap.xml").write_text("\n".join(sm))
    (DIST / "robots.txt").write_text(f"User-agent: *\nAllow: /\nSitemap: {SITE_ORIGIN}/sitemap.xml\n")
    shutil.copy(DIST / "index.html", DIST / "404.html")   # simple fallback
    print(f"\n  {len(urls)} pages -> {DIST}")
    if "REPLACE-SUBDOMAIN" in WORKER_ENDPOINT:
        print("  NOTE: deploy worker/ then set WORKER_ENDPOINT in build.py (contact form).")

if __name__ == "__main__":
    main()
