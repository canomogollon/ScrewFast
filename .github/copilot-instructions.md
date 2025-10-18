## Quick orientation

This is an Astro-based static site template (ScrewFast -> LOGIKIA adaptation). Primary concerns for code changes: site build, content collections, Starlight docs, and post-build HTML processing.

Key entry points

- Development server: `npm run dev` (runs `astro dev`).
- Production build: `npm run build` → runs `astro check && astro build && node process-html.mjs` (post-build HTML minification). See `package.json` and `process-html.mjs`.
- Preview built site: `npm run preview`.

Important files and folders (start here)

- `astro.config.mjs` — integrations (Starlight, sitemap, compressor), site config and Vite plugins.
- `src/layouts/MainLayout.astro` — main layout used by pages; includes `Meta.astro`, imports global CSS and Lenis smooth-scroll script.
- `src/content.config.ts` — content collection definitions and schemas (images are validated with `image()` and many collections use `glob` loaders). Update schemas here when adding collection fields.
- `src/pages/robots.txt.ts` — robots generated at runtime (not a static file).
- `data_files/constants.ts` — central SEO/site constants used by `Meta.astro` and layouts.
- `src/assets/` and `src/images/` — JS/CSS scripts and image assets. Content images live under `src/images/content/` (editor paste behavior described in README).
- `vercel.json` — production headers and caching rules used on Vercel.

Patterns & conventions to follow

- Starlight theme: Starlight is configured in `astro.config.mjs`. Customize Starlight UI components via `starlight.components` (paths inside `src/components/ui/starlight/`).
- Content collections are strongly typed. If you change frontmatter shape, update `src/content.config.ts` to avoid type and build errors.
- SEO values are centralized in `data_files/constants.ts` and consumed by `src/components/Meta.astro`. Prefer updating `constants.ts` for site-wide defaults.
- Post-build step is required: `process-html.mjs` must run after `astro build` to minify/transform output. Do not remove this step unless intentionally skipping post-processing.
- Smooth-scroll (Lenis): `src/assets/scripts/lenisSmoothScroll.js` is imported in `MainLayout.astro` and in Starlight `Head` component. Removing it can fix Starlight sidebar scroll issues — see README note.

Developer workflows & troubleshooting

- Typical local iteration: `npm install` → `npm run dev` → make changes → `npm run build` to verify production build + `process-html.mjs`.
- If build fails on image processing (Sharp): install system-level libvips (common on Linux) or run in an environment where `sharp` can build its native bindings.
- If TypeScript/content schema errors occur after adding fields, run `npm run build` or `npx astro check` to surface schema/type issues.
- When changing globals (Tailwind, Prettier plugins): Prettier uses `prettier-plugin-tailwindcss` (see README). Keep class ordering consistent by running format.

What an AI agent should do (rules)

- Make minimal, atomic changes. Update `src/content.config.ts` when changing frontmatter shapes and add example content under `src/content/` if introducing new fields.
- When adding dependencies, update `package.json`, add a short rationale in the PR, and avoid native binaries unless necessary (or document required system packages).
- Prefer editing existing components under `src/components/` and wiring them through `src/layouts/MainLayout.astro` or specific `src/pages/*` pages.
- For SEO/meta changes, modify `data_files/constants.ts` and `src/components/Meta.astro` only when you need page-level overrides.

Examples (copyable snippets)

- Reference image fields in a collection schema (see `src/content.config.ts`):
  - `main: z.object({ imgCard: image(), imgMain: image(), imgAlt: z.string() })`
- Build command to run locally before PR:
  - `npm run build` # runs `astro check && astro build && node process-html.mjs`

Files to inspect when diagnosing UI/layout issues

- `src/layouts/MainLayout.astro` — global scripts/styles and layout wrappers.
- `src/components/Meta.astro` — metadata, structured data, and favicons.
- `src/components/ui/starlight/*` — Starlight substitutions (SiteTitle, Head, ThemeSelect).

If something is missing or unclear

- Ask for the target (page, component or collection) and whether changes must preserve i18n (site uses Spanish + English in config). Provide a small example change and run `npm run dev` and `npm run build` to validate.

Keep this file short and factual. If you need more context, inspect `README.md`, `astro.config.mjs`, and `src/content.config.ts` next.
