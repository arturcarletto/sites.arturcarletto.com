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
- Keep contact and personal data centralized and unpublished until verified by the user.
- Do not introduce major dependencies, services, or architectural changes without a concrete requirement.
- Before completing relevant changes, run `npm run lint` and `npm run build`, then report any remaining limitation honestly.


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
