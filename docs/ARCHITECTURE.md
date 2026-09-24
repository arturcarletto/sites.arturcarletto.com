# Architecture

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4 plus a small global design layer
- `next/image` and `next/font`
- ESLint with the Next.js configuration

## Structure

```text
src/
  app/                 Routes, route metadata, sitemap, robots, global CSS
    demo/[slug]/       Opt-in prospect-specific demonstrations
  components/          Shared portfolio and concept primitives
  config/site.ts       Canonical origins and verified personal/contact configuration
  config/metadata.ts   Shared canonical, Open Graph, and Twitter metadata
  data/models.ts       Demonstration metadata
  data/prospect-demos.ts  Empty-by-default registry for approved prospect demos
public/images/         Project-owned generated visual assets
docs/                  Product, design, architecture, roadmap, asset records
```

Pages remain Server Components. Navigation uses semantic HTML and a native `details` element on small screens, avoiding client JavaScript. Shared concept primitives cover only repeated structure; each concept route owns its visual composition.

## SEO

The canonical commercial origin is `https://sites.arturcarletto.com`, configurable through `NEXT_PUBLIC_SITE_URL`. The separate `https://arturcarletto.com` value identifies Artur's primary professional domain and is not used as the canonical origin for this app.

The root layout defines the metadata base, Open Graph defaults, and JSON-LD connecting a `Person` on the professional domain to a `Service` on the commercial subdomain. Each public route uses `createPageMetadata` for its own canonical, Open Graph URL, title, and description. `sitemap.ts` and `robots.ts` derive their URLs from the commercial origin.

Verified contacts stay in `src/config/site.ts`. WhatsApp is the primary conversion channel; e-mail and LinkedIn are secondary. Unset values such as GitHub remain absent from the rendered interface.

Twitter uses the compact summary card until a verified social image exists. Sitemap entries omit fabricated modification dates; dates should only be added when they come from real content data.

## Prospect-specific demonstrations

The `/demo/[slug]` route is intentionally empty by default. Each approved prospect demo must be implemented as its own component and explicitly registered in `src/data/prospect-demos.ts`; unknown slugs return the site 404. This keeps targeted work separate from the public concept library and avoids turning prospecting into a generic template generator.

Prospect demos are `noindex` and excluded from the public sitemap by default. `noindex` reduces discovery but is not access control; use authenticated hosting if a page must actually be private. Before adding one:

1. Use only verified public information or material authorized by the prospect.
2. Avoid language that implies an existing client relationship, approval, or measured result.
3. Build a segment- and company-specific page rather than reskinning a shared template.
4. Register the slug, metadata, and dedicated component only when the page is ready to share.
5. Run lint, build, and responsive visual checks.

## Adding a fifth concept

1. Add its image and record it in `docs/ASSETS.md`.
2. Add one metadata entry to `src/data/models.ts`.
3. Create `src/app/modelos/<slug>/page.tsx` with its own identity.
4. Use `ConceptBar` and the shared safe contact path.
5. Add the route to `src/app/sitemap.ts`.
6. Run lint, build, and responsive visual checks.

