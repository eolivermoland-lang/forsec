# ForSec — Nettside

Statisk, flerspråklig nettside for **ForSec AS** — blue team-spesialister med 16+ års CERT/SOC-erfaring. Bygget etter [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/) sine fem designprinsipp og system-tokens.

## Innhold

- `index.html` — forside (hero, tjenester-pillar, partnere, bransjer, FAQ, blogg-utdrag, CTA)
- `tjenester.html` — full tjenestekatalog + prosess-steg
- `om-oss.html` — bakgrunn, team, verdier
- `blogg.html` — 16 artikler med tag-filter (kollapset/utvidet)
- `kontakt.html` — info-kolonne + skjema + book-møte/e-post-kort
- `styles.css` — felles design-tokens + komponenter
- `script.js` — i18n, tema, rotator, FAQ, blogg-filter, login-modal
- `favicon.png`, `forsec-logo.png`, `kim.webp`, `microsoft-partner.webp`, `first-org.webp`
- `sitemap.xml`, `robots.txt`, `_headers`

## Funksjoner

### Tema
Lys / mørk modus via sol/måne-knapp. Lagres i `localStorage`. Honorerer `prefers-color-scheme` første gang.

### Språk
Norsk og engelsk. Klikk **NO/EN** i header eller **NORSK/ENGLISH** i footer — hele siden bytter umiddelbart. Lagres i `localStorage`. Støtter `?lang=en` deep-link.

i18n dekker:
- All synlig tekst (`data-i18n`)
- Input-placeholders (`data-i18n-placeholder`)
- ARIA-labels (`data-i18n-aria-label`)
- Title-attributter (`data-i18n-title`)

### Hero-rotator
H1 på forsiden roterer mellom *din organisasjon / ditt nettverk / din infrastruktur* (NO) eller engelsk-ekvivalent. Smooth 3-fase swap: slide ut → swap tekst → slide inn. Gradient-tekstfyll (hvit → lyseblå).

### Login-modal (Kundeportal)
Klikk **Kundeportal / Customer Portal** i header → fade-in modal med:
- E-post + passord-felt
- *Husk meg*-checkbox (lagrer e-post i `localStorage`, autofylles ved neste åpning)

Submit er stubbed til DB-tilkobling kommer.

### Blogg-filter
9 chips synlig først (Alle/SOC/Sentinel/…). Klikk **+30** for å utvide. Tag-matching er word-boundary (ingen falske treff).

### Animasjoner
- Scroll-reveal med stagger (IntersectionObserver, sikkerhetsfallback etter 2.5 s)
- Kort: smooth 0.45 s cubic-bezier på transform/skygge/border/farge, GPU-promotert (`translateZ(0)`, `backface-visibility: hidden`)
- Hero: to flytende glow-orbs
- USWDS prefers-reduced-motion respektert overalt

## Tilgjengelighet

- `usa-skipnav`-style skip-link
- `<main>` landmark + `aria-labelledby` på alle seksjoner
- USWDS-fokus-ring: `outline: .25rem solid #ffbe2e`
- Semantisk HTML (`<header>/<nav>/<main>/<section>/<article>/<footer>`)
- `alt`-tekst på alle bilder, `aria-hidden` på dekorative SVG-er
- Tastatur-navigerbar (FAQ åpner med Enter, modal stenger med Esc)
- Kontrast WCAG AA

## SEO

- Per-side `<title>`, `description`, `canonical`, `hreflang` (no/en/x-default)
- Open Graph + Twitter Card
- JSON-LD: `Organization`, `WebSite`, `ProfessionalService`, `FAQPage`, `Service`, `ContactPage`, `AboutPage`, `Person`, `Blog`, `BreadcrumbList`
- `sitemap.xml` + `robots.txt`
- Bilder med `width`/`height` (CLS-fix) + `loading="lazy"` på non-LCP

## USWDS-tokens

| Token | Hex | Bruk |
|-------|-----|------|
| `blue-60v` | `#005ea2` | Primær |
| `blue-warm-70v` | `#1a4480` | Primær mørk |
| `blue-warm-80v` | `#162e51` | Hero-bg |
| `ink` | `#1b1b1b` | Tekst + footer-bg |
| `gold-20v` | `#ffbe2e` | Fokus-ring |
| `green-cool-50v` | `#00a91c` | Suksess |
| `red-warm-50v` | `#d54309` | Feil |

Typografi: **Source Sans 3** body, **Public Sans** heading (USWDS-stack).

## Kjør lokalt

```bash
python3 -m http.server 8000
# Åpne http://localhost:8000
```

Eller bruk hvilken som helst statisk-fil-server (`npx serve`, VS Code Live Server, osv.).

## Filer som ikke skal redigeres direkte

- `sitemap.xml` — oppdater når nye sider legges til
- `robots.txt` — generelt aldri trenger endring
- `_headers` — Cloudflare Pages headers (HSTS, cache-control, security)

## Lisens & opphavsrett

© 2026 ForSec AS — Alle rettigheter reservert. Org.nr: 931 208 306.

Telefon: +47 99 22 06 77 · contact@forsec.no · Terje Løvås vei 1, 4879 Grimstad.
