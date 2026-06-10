# kanduit-website

The public **kanduit.de** website as a static site, generated from the same
content decks used for the Squarespace blocks. Deploys to GitHub Pages on every
push to `main`. **This folder is intended to become its own public repo** —
nothing sensitive (no outreach/admin data) lives here.

## How it works

```
src/pages/de/*.md   content decks (DE) — each carries its URL, language toggle,
src/pages/en/*.md   SEO meta, and one or more ```html content blocks
src/css/*.css       brand + editorial + site-chrome (header/nav/footer/forms)
src/templates/       base.html — shared <head>, header, footer, language toggle
build.py            reads decks → writes dist/ as clean-URL pages + sitemap/robots
public/             static passthrough (CNAME, etc.) copied verbatim into dist/
```

Routing, the DE/EN language toggle, and SEO titles are all read from each deck's
header lines (`**URL:**`, `**Toggle …:**`, `**Meta title/description:**`), so
adding or editing a page is a content-only change.

## Local preview

```
python3 build.py        # generate dist/
python3 serve.py        # serve at http://127.0.0.1:4321  (survives rebuilds)
```

## Editing content

1. Edit the relevant deck in `src/pages/de` or `src/pages/en`.
2. `python3 build.py` and refresh the preview.
3. Commit + push → GitHub Actions builds and deploys to kanduit.de in ~1 min.

### Add a new demo / portfolio card
Edit `src/pages/de/04-projektportfolio.md` (and the EN mirror). Cards are plain
`<article class="kd-case">` blocks — copy one, change the text/link/screenshot.
They render identically on every page that includes them.

## Before go-live (one-time)

- [ ] **Contact form:** create a form at <https://formspree.io>, put the id in
      `FORMSPREE_ID` at the top of `build.py` (used on /kontakt and /en/contact).
- [ ] **Screenshots:** replace `src="[SCREENSHOT-URL …]"` placeholders in the
      portfolio/home decks with real image URLs (drop files in `public/img/` and
      reference `/img/…`).
- [ ] **Push to a public GitHub repo**, enable **Settings → Pages → Source: GitHub Actions**.
- [ ] **DNS:** point kanduit.de at GitHub Pages (apex A records + `www` CNAME);
      `public/CNAME` already pins the domain. Pages auto-provisions HTTPS.
- [ ] **Legal:** confirm Impressum/Datenschutz are current (UG/HRB once incorporated).

## Deploy

`.github/workflows/deploy.yml` runs `build.py` and publishes `dist/` to Pages on
push to `main`. No build step to run by hand.
