# sites.arturcarletto.com

Commercial website, portfolio, and demonstration library for Artur Carletto, Software Engineer. The root domain `arturcarletto.com` remains reserved for Artur's broader professional presence.

## Requirements

- Node.js 22.13+ recommended
- npm 10+

The current dependency set may warn on Node 22.12 because a transitive ESLint package requires Node 22.13 or newer.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## Contact configuration

Verified contact data is centralized in `src/config/site.ts`:

```ts
WHATSAPP_NUMBER: "5547992002457",
EMAIL: "arturcarletto@gmail.com",
LINKEDIN_URL: "https://www.linkedin.com/in/arturcarletto/",
GITHUB_URL: "TODO",
```

WhatsApp is the primary commercial CTA. E-mail and LinkedIn are secondary channels. GitHub remains unset and is not rendered.

## Prospect demonstrations

Targeted prospect pages use `/demo/<slug>` and are disabled by default. Add only approved, dedicated page components to `src/data/prospect-demos.ts`; these routes are non-indexed and excluded from the public sitemap. `noindex` is not access control. See `docs/ARCHITECTURE.md` for the safeguards.

## Deployment

The default canonical origin is `https://sites.arturcarletto.com`. The app is structured for Vercel; before production deployment, configure `NEXT_PUBLIC_SITE_URL` with that origin and run the quality checks above. DNS and deployment are intentionally outside the current scope.

See `docs/PRODUCT.md`, `docs/DESIGN.md`, `docs/ARCHITECTURE.md`, `docs/ROADMAP.md`, and `docs/ASSETS.md` for product and implementation decisions.
