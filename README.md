# EduAssura — marketing site

Marketing site for EduAssura, the IQAC platform for faculty activity, proof, verification and institutional quality data, built for universities worldwide.

Built on the shadcn/studio **Flow** template (Next.js 16, React 19, Tailwind CSS 4, shadcn/ui) with the **Elegant Luxury** theme (maroon and cream, Poppins).

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm lint
pnpm typecheck
```

## Deploy on Vercel

1. Import the GitHub repository in Vercel. It detects Next.js and pnpm automatically; no build settings are needed.
2. Optional: set `NEXT_PUBLIC_APP_URL` to your custom domain (for example `https://eduassura.in`). Without it, the site uses the Vercel production domain for canonical links, Open Graph images, `robots.txt`, the sitemap and JSON-LD. See `.env.example`.

## Where content lives

| What | File |
| --- | --- |
| Header navigation | `src/app/(pages)/layout.tsx` |
| Hero | `src/components/blocks/hero-section/` |
| Trusted partner logos | `src/assets/data/trusted-brands.ts` (logos in `public/images/brand-logos/`) |
| Feature cards | `src/components/blocks/features/` |
| Modules (6 headline cards + full list) | `src/assets/data/modules.tsx` |
| Benefits | `src/assets/data/benefits.tsx` |
| Testimonials | `src/assets/data/testimonials.tsx` |
| FAQ | `src/assets/data/faqs.ts` |
| Logo | `src/assets/svg/flow-logo.tsx` (mark), `src/components/logo.tsx` (mark + name) |
| Theme colours and fonts | `src/app/globals.css`, `src/app/layout.tsx` |
| Site metadata | `src/app/layout.tsx`, `src/app/manifest.json` |

## Before going live

- Testimonials are demo placeholders (marked in the data file).
- The "Book a demo" email box in the CTA section does not submit anywhere yet.
- Social links in the footer point to `#`.
