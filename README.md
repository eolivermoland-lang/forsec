# ForSec – Nettside

Statisk nettside basert på `ForSec - USWDS Redesign.pdf` med interaksjoner fra `hover-effekt-design.pdf`.

## Filer

- `index.html` – sidestruktur (norsk, EN-toggle)
- `styles.css` – USWDS-inspirert design + dark/light tema
- `script.js` – tema-veksler (sol/måne), språk-veksler, FAQ-accordion, scroll-reveal

## Kjør lokalt

```bash
cd ~/Desktop/forsec-side
python3 -m http.server 8080
# Åpne http://localhost:8080
```

## Publiser til GitHub

```bash
cd ~/Desktop/forsec-side
git init -b main
git add .
git commit -m "Initial ForSec site"
# Lag tomt repo på github.com (uten README), så:
git remote add origin git@github.com:<DITT-BRUKERNAVN>/forsec-side.git
git push -u origin main
```

## Hosting på Cloudflare Pages

1. Logg inn på https://dash.cloudflare.com
2. **Workers & Pages → Create → Pages → Connect to Git**
3. Velg `forsec-side`-repoet
4. Build settings:
   - Framework preset: **None**
   - Build command: *(tom)*
   - Build output directory: `/`
5. **Save and Deploy** – du får en `*.pages.dev`-URL på sekunder.

Pushes til `main` deployes automatisk.

### Custom domain
Pages-prosjekt → **Custom domains → Set up a domain** → følg CNAME-instruksen.
# forsec
