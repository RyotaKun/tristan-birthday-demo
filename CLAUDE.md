# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

No test suite configured.

## Stack

- **Next.js 16.2.4** — This is a cutting-edge version with breaking changes from your training data. **Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`.**
- **React 19.2.4** — Also has breaking changes (no more `forwardRef`, new `use()` hook, etc.)
- **Tailwind CSS v4** — Config-less, CSS-first approach. No `tailwind.config.*` file needed.
- **TypeScript strict mode** via `tsconfig.json`

## Architecture

Single-page birthday tribute (`app/page.tsx`) using the App Router. All content is static — no data fetching, no API routes, no server components with async logic.

Structure:
- `app/layout.tsx` — root layout with Geist fonts and global CSS
- `app/page.tsx` — entire page content (hero, timeline, highlights, message)
- `app/globals.css` — Tailwind v4 CSS entry point

## Tailwind v4 Notes

Tailwind v4 is configured via `postcss.config.mjs` and imported directly in `globals.css` — there is no `tailwind.config.ts`. Utility classes work the same but configuration (custom colors, themes) is done via CSS variables in `globals.css`, not a JS config file.
