@AGENTS.md

## Rules
- Scope to task. No adjacent refactors unless asked.
- For breaking changes, adding features, or really anything that changes app functionality, create a new branch before making changes.
- Don't push direct to main unless instructed. Exception to this rule if it is just documentation or gh workflow updates.

## Commands

```bash
pnpm dev          # Next.js dev server (port 3000)
pnpm build        # production build
pnpm test         # vitest (frontend tests in tests/)
pnpm lint         # eslint
```


## Architecture

Dual-service app: Next.js frontend (Vercel) + FastAPI server (Railway/Docker).

```
app/         Next.js App Router pages
components/  React UI components (DropZone, ControlsBar, OutputCanvas, etc.)
lib/         Conversion logic, canvas rendering, validation, types
server/      FastAPI image-conversion service (Python, separate deploy)
tests/       Vitest frontend tests
```

`@` alias → project root (not `src/`). Configured in `vitest.config.ts` and `tsconfig.json`.

## Environment

| Var | Default | Notes |
|-----|---------|-------|
| `NEXT_PUBLIC_IMAGE2_SERVER_URL` | `http://localhost:8000` | Must be in server's CORS allowlist |
| `NEXT_PUBLIC_APP_VERSION` | `dev` | Set from `VERCEL_GIT_COMMIT_SHA` in `next.config.ts` |
| `CRASH_WEBHOOK_URL` | none | n8n webhook URL, server-side only. Used by `/api/crash-report` and `/api/bug` |
| `IMG2_BUG_TOKEN` | none | Shared secret the `img2` CLI sends as `Authorization: Bearer <token>` to `/api/bug` |

## Gotchas

- Tailwind CSS v4 — no `tailwind.config.*` file; CSS-first config via `globals.css`. Different from v3.
- Frontend (Vercel) + server (Railway) deploy independently — version mismatch shown in footer
- Server CORS allowlist in `server/main.py` — update when adding new frontend origins
- Next.js 16 / React 19 — see AGENTS.md warning about breaking changes

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
