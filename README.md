# Rain Fan Portfolio

Personal portfolio and resume site for AI implementation, Forward Deployed Engineering, AI Solutions, and agent workflow automation roles.

Live domain: `https://yuhanfan.com`

## Stack

- `Astro 5` for static pages and routing
- `Tailwind CSS 4` for styling and design tokens
- Bilingual content with Chinese at `/` and English at `/en`
- Project case study pages under `/projects`
- Static deployment target for Vercel

## Project Structure

```text
src/
  components/        Shared page sections
  data/content.ts    Main bilingual resume content
  layouts/           Global page layout
  pages/             Home, English, preview, and project detail pages
  styles/            Global styles and theme tokens
public/              Static assets
```

## Local Development

```bash
npm install
npm run dev
npm run build
```

The local dev server usually runs at `http://localhost:4321`.

## Deployment

This site is intended to deploy as a standalone public GitHub repository connected to Vercel.

Recommended Vercel settings:

- Framework Preset: `Astro`
- Build Command: `npm run build`
- Output Directory: `dist`
- Root Directory: repository root

The canonical site URL is configured in `astro.config.mjs`.
