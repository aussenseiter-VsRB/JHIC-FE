# JHIC-FE

## Stack

- React 19 + TypeScript 6 + Vite 8 (pwa-ready)
- Tailwind CSS v4 via `@tailwindcss/vite` plugin (imported in `src/index.css` with `@import "tailwindcss"`)
- React Router DOM v7 (BrowserRouter, declarative routes in `src/core/routes.tsx`)
- pnpm (both `pnpm-lock.yaml` and `package-lock.json` exist — use pnpm)

## Commands

| Task | Command |
|------|---------|
| Dev server | `pnpm dev` |
| Type-check + build | `pnpm build` |
| Lint (ESLint flat config) | `pnpm lint` |
| Scaffold new module | `pnpm scaffold module <name>` |
| Scaffold sub-page | `pnpm scaffold page <parent> <name>` |

There is no test runner configured. No `test` script, no test framework in dependencies.

Build runs `tsc -b` (project-references type-check) before `vite build`. Lint and typecheck are independent — both must pass before shipping.

## Architecture

```
src/
  main.tsx              # entry point, renders <App />
  App.tsx               # BrowserRouter + Routes (reads src/core/routes.tsx)
  core/
    routes.tsx          # all route definitions, wraps children in Layout
    layout.tsx          # <Navbar /> + <Outlet /> shell
  modules/              # page-level features (one dir per module)
    home/
    profile/
  components/           # shared UI (navbar, skeleton, ...)
  assets/               # static images (logos, etc.)
  index.css             # Tailwind import only
```

### Modules

Each module is a self-contained directory under `src/modules/<name>/`:

```
<name>/
  <name>.tsx       # default-exported React component
  <name>.json      # module metadata (currently empty `{}`)
  css/<name>.css   # module-scoped styles
  components/      # module-local UI
  services/        # data fetching / API logic
```

Pages within a module go in `src/modules/<parent>/<child>/page.tsx`.

**The scaffold script (`pnpm scaffold`) auto-generates this structure and appends the import + route to `src/core/routes.tsx`.** After scaffolding, verify `routes.tsx` looks correct — the script does naive string insertion.

### Routes

Routes live in a single array in `src/core/routes.tsx`. All pages are children of the `<Layout />` route element. Add new pages here (or use the scaffold command).

### Shared types

`@aussenseiter/shared-types` is a workspace dependency. Check `pnpm-workspace.yaml` for version pinning exceptions.

## Style conventions

- **Tailwind-first**: styling via Tailwind utility classes in JSX. Component CSS files exist but are currently minimal. Prefer utilities over custom CSS.
- **Function components only**: no class components, no hooks wrappers — plain `function` declarations with default export.
- **No comments**: coding standard is explicit about this not being needed; keep code self-documenting.
- **Naming**: files and directories are `kebab-case`; components exported as `PascalCase` functions. CSS class names match the module/page kebab name.
- **`verbatimModuleSyntax`** is enabled — use `import type` for type-only imports. TypeScript strictness includes `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`.

## Coding standards (from `docs/codingStandard.md`)

Key principles to follow:
- DRY — extract shared logic into one place
- Fail Fast — validate inputs immediately
- Separation of Concerns — one job per file/module
- YAGNI / KSS — only build what is needed now
- 12-Factor — stateless, env-driven configuration

Review checklist after every change:
1. Simple and necessary? (KISS, YAGNI)
2. Isolated and predictable? (SoC, DRY, LoD)
3. Safe to run and deploy? (Fail Fast, 12-Factor)

## Gotchas

- **Dual lockfiles**: `pnpm-lock.yaml` and `package-lock.json` both exist. Use pnpm for installs; don't run `npm install`.
- **Pannellum CDN** is loaded in `index.html` (panoramic viewer). It is available as a global — no npm import needed, but verify it's loaded before referencing `pannellum` in code.
- **Scaffold writes to `routes.tsx` via string manipulation** — always review the diff after running `pnpm scaffold`.
- **No `.env` or env loading** is configured yet. Vite's `import.meta.env` is available but unused.
- **No CI config** currently exists in the repo.
