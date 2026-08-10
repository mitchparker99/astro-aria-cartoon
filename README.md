# Mitchell Parker — portfolio & writing

Personal portfolio and writing site for Mitchell Parker, a technology executive
working across AI adoption, data architecture and platform strategy.

- **Home** — positioning, the three most recent builds, current roles
- **Projects** — the full build record: seven platforms shipped between 2022 and 2026
- **Writing** — long-form notes (Markdown content collection)
- **About** — full experience, education and certifications

## Stack

Astro 4 · Tailwind CSS · TypeScript. Static output, deployed on Vercel.

## Local development

```bash
pnpm install
pnpm dev      # dev server on http://localhost:4321
pnpm build    # type-check + production build to dist/
pnpm preview  # serve the production build locally
```

## Where the content lives

| What | File |
| --- | --- |
| Build record / projects | `src/collections/projects.json` |
| Roles and work history | `src/collections/experiences.json` |
| Navigation | `src/collections/menu.json` |
| Blog posts | `src/content/post/*.md` |
| Site metadata, OG tags | `src/layouts/main.astro` |
| Canonical origin, sitemap | `astro.config.mjs` |

Project cover art is generated SVG in `public/assets/images/projects/`. A build
with no verified public URL simply omits the `url` field and renders as a plain
card rather than a link.

## Contact

mitchelljamesparker99@gmail.com
