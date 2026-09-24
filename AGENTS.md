# sites.arturcarletto.com — Agent Instructions

## Scope and context

- This repository is the exclusive home of the commercial site served at `sites.arturcarletto.com`. Keep all source code, assets, tests, and project documentation inside this repository.
- Preserve `arturcarletto.com` as Artur Carletto's primary professional domain. The commercial subdomain must still present Artur directly as a Software Engineer, never as a fictional agency.
- Strategic context lives in `C:\Carletto OS\10 Projects\ArturCarletto Website`.
- Before relevant product, architecture, positioning, or design decisions, consult `Project.md` and `Decisions.md` when needed. Use `Backlog.md` for priorities and `Prospection.md` for commercial context.

## Obsidian boundary

- `C:\Carletto OS` is strictly **READ-ONLY**.
- Never create, edit, move, rename, or delete anything in the Obsidian vault, including configuration and workspace files.
- Do not write new decisions back to Obsidian. Present proposed decisions to the user first and state what should be recorded.

## Product and design principles

- Prioritize mobile experience, performance, SEO, accessibility, and conversion.
- Maintain Artur's primary positioning as a Software Engineer, with a dedicated commercial offer for websites.
- Use concrete, natural Brazilian Portuguese and avoid generic AI-generated visual or verbal patterns.
- Never invent clients, reviews, case studies, results, metrics, credentials, addresses, prices, or personal information.
- Treat every model as an explicitly labeled demonstration concept, never as real commissioned work.
- Keep each concept visually distinct; avoid repetitive card walls, generic SaaS compositions, decorative excess, and unsupported claims.

## Engineering and validation

- Preserve semantic HTML, keyboard access, visible focus, meaningful alternative text, responsive behavior, and maintainable code.
- Keep verified contact and personal data centralized in the project configuration. Never invent or infer missing personal information.
- Do not introduce major dependencies, services, or architectural changes without a concrete requirement.
- Before completing relevant changes, run `npm run lint` and `npm run build`, then report any remaining limitation honestly.
- For substantial work, maintain `docs/WORKLOG.md` as a resumable checkpoint log.
- Before modifying code to address a hydration warning, identify whether the mismatch originates from the application, development tooling, or a browser extension.
- Do not use `suppressHydrationWarning` as a generic fix.
- For visual changes, validation means inspecting rendered composition at relevant viewports, not merely checking for horizontal overflow.
- Do not deploy, configure DNS, or perform production-side actions unless explicitly requested by the user.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


## Demonstration rules

- Demonstration pages have two layers: a clearly identifiable portfolio/demo layer and the fictional business experience itself.
- Inside the fictional business experience, use CTAs appropriate to that business instead of presenting Artur as if he were the business.
- Never imply that a fictional demonstration is a real client project.
- Each demonstration should have its own visual identity and at least one useful characteristic interaction when appropriate.
- Interactions must improve understanding, selection, trust, or conversion rather than exist only as decoration.

## External research and assets

- Internet research is allowed when it materially improves implementation quality, accuracy, or visual assets.
- Request network permission when the environment requires it.
- Prefer official documentation and reputable or open data sources.
- External images, icons, SVGs, geographic data, fonts, and other assets must have legitimate usage rights.
- Never use watermarked assets.
- Avoid hotlinking assets that belong in the repository.
- Record externally sourced production assets and their provenance in `docs/ASSETS.md`.

## Commercial UX

- Assume many prospects will first open the site from WhatsApp on a mobile device.
- Treat 320px–430px layouts as first-class experiences, not reduced desktop layouts.
- Keep the primary commercial path short and obvious.
- Persistent contact controls must never obscure content or other interactive controls.
