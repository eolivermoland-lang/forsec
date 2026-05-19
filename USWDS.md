# USWDS-overholdelse

Dette prosjektet følger [U.S. Web Design System](https://designsystem.digital.gov/) sine
fem designprinsipp og standard system-tokens.

## Designprinsipp

1. **Start with real user needs** — innhold strukturert rundt hva norske virksomheter
   spør om (hero, tjenester, FAQ, kontakt). FAQ-svarene matcher faktiske spørsmål fra
   PDF-research.
2. **Earn trust** — partnermerker (Microsoft Partner, FIRST.org Liaison), org.nr i
   footer, klar adresse, telefon, e-post, "SOC OPERATIVT 24/7"-status.
3. **Embrace accessibility** — skip-link, `<main>` landmark, `aria-labelledby`,
   `:focus-visible` med USWDS gold-20v 0.25rem outline, semantiske `<nav>/<header>/
   <section>/<article>/<footer>`, `alt` på alle bilder, WCAG-godkjent kontrast,
   `prefers-reduced-motion` respektert, tastaturnavigasjon, fargekontrast AA.
4. **Promote continuity** — felles `styles.css` + `script.js` på alle sider, samme
   header/footer/tema/språk, USWDS-tokens som design-språk.
5. **Listen** — `?lang=` query persisteres, `localStorage` husker tema/språk,
   `IntersectionObserver` for nav-active mens man scroller.

## System-tokens (USWDS-eksakt)

| Token | Hex | Bruk |
|-------|-----|------|
| `blue-60v` | `#005ea2` | Primær |
| `blue-warm-70v` | `#1a4480` | Primær mørk |
| `blue-warm-80v` | `#162e51` | Primær mørkere / hero-bg |
| `ink` | `#1b1b1b` | Tekst / footer-bg |
| `gray-60` | `#565c65` | Sekundær tekst |
| `gray-50` | `#71767a` | Muted |
| `gray-cool-10` | `#dfe1e2` | Border |
| `gray-cool-3` | `#eef4f9` | Bakgrunn-tint |
| `gray-5` | `#f0f0f0` | Lys-tint |
| `gold-20v` | `#ffbe2e` | Fokus-ring |
| `green-cool-50v` | `#00a91c` | Suksess |
| `red-warm-50v` | `#d54309` | Feil |

## Typografi

- Body: **Source Sans 3** (USWDS sans default, moderne etterfølger til Source Sans Pro)
- Heading: **Public Sans** (USWDS heading-stack)

## Komponenter

- `usa-button` (primary, ghost, outline) — 3rem min-height, 4px radius, bold 1.06rem
- `usa-skipnav` — synlig ved fokus
- `usa-accordion` — FAQ med `<details>`
- `usa-card` — service/blog/industry/partner cards
- `usa-footer` (big variant) — 4-kolonne grid
- `usa-header` (basic) — sticky med nav

## A11y

- Focus: `outline: .25rem solid #ffbe2e; outline-offset: 0;`
- Skip-link: synlig ved tastatur-fokus
- `prefers-reduced-motion` deaktiverer animasjoner
- Semantisk HTML
- `lang`-attribute oppdateres ved språkbytte
