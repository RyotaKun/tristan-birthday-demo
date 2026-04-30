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

<!-- VERCEL BEST PRACTICES START -->
## Best practices for developing on Vercel

These defaults are optimized for AI coding agents (and humans) working on apps that deploy to Vercel.

- Treat Vercel Functions as stateless + ephemeral (no durable RAM/FS, no background daemons), use Blob or marketplace integrations for preserving state
- Edge Functions (standalone) are deprecated; prefer Vercel Functions
- Don't start new projects on Vercel KV/Postgres (both discontinued); use Marketplace Redis/Postgres instead
- Store secrets in Vercel Env Variables; not in git or `NEXT_PUBLIC_*`
- Provision Marketplace native integrations with `vercel integration add` (CI/agent-friendly)
- Sync env + project settings with `vercel env pull` / `vercel pull` when you need local/offline parity
- Use `waitUntil` for post-response work; avoid the deprecated Function `context` parameter
- Set Function regions near your primary data source; avoid cross-region DB/service roundtrips
- Tune Fluid Compute knobs (e.g., `maxDuration`, memory/CPU) for long I/O-heavy calls (LLMs, APIs)
- Use Runtime Cache for fast **regional** caching + tag invalidation (don't treat it as global KV)
- Use Cron Jobs for schedules; cron runs in UTC and triggers your production URL via HTTP GET
- Use Vercel Blob for uploads/media; Use Edge Config for small, globally-read config
- If Enable Deployment Protection is enabled, use a bypass secret to directly access them
- Add OpenTelemetry via `@vercel/otel` on Node; don't expect OTEL support on the Edge runtime
- Enable Web Analytics + Speed Insights early
- Use AI Gateway for model routing, set AI_GATEWAY_API_KEY, using a model string (e.g. 'anthropic/claude-sonnet-4.6'), Gateway is already default in AI SDK
  needed. Always curl https://ai-gateway.vercel.sh/v1/models first; never trust model IDs from memory
- For durable agent loops or untrusted code: use Workflow (pause/resume/state) + Sandbox; use Vercel MCP for secure infra access
<!-- VERCEL BEST PRACTICES END -->
