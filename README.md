# ALLEIN Landing Page

Official landing page for **ALLEIN** nervous-system-informed fitness and athletic-longevity coaching.

## Tech Stack

- **Vite** + **React** + **TypeScript**
- **TailwindCSS v4** with custom gold/black design system
- **Wouter** for hash-based client-side routing (GitHub Pages compatible)

## Pages

- `/` — Home (positioning, method, self-check, coaching offer, about, FAQ)
- `/#/privacy` — Privacy Policy
- `/#/terms` — Terms of Service

## Development

```bash
pnpm install
pnpm dev
```

## Deployment

The production site is deployed to GitHub Pages via the `gh-pages` branch. Work on `main`, run the local checks, and review the production build before updating `gh-pages`.

**Custom domain:** [alleinfitness.com](https://alleinfitness.com)

## Brand

- **Colors:** Black background, gold accents (`#D4AF37`)
- **Fonts:** Playfair Display (headings), DM Sans (body)
- **Positioning:** Build a Body That Performs for Life
- **Contact:** michael@alleinfitness.com

## CTA Configuration

The coaching and Self-Check calls to action are connected to the published Kit and Tally forms. `VITE_GUIDE_FORM_URL` and `VITE_APPLICATION_URL` can override those defaults for a different deployment; `.env.example` contains the current production values.

The downloadable Capability Guide is generated with:

```bash
python3 scripts/generate_capability_guide.py
```

The final site copy is written to `client/public/downloads/` and is available at `/downloads/ALLEIN_Everyday_Athlete_Capability_Guide.pdf` after deployment.

## Launch Note

The Privacy Policy and Website Terms have been rewritten to match the coaching website, Self-Check, and current email-based inquiry flow. They are practical launch drafts—not a substitute for review by a qualified attorney, especially before adding payments, accounts, analytics, health-data integrations, or the mobile app.
