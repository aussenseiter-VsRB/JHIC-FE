# Core Rules

These rules apply to the entire project. They are non-negotiable.

---

## Tooling

- **Package manager**: npm. Use `npm install`; the lockfile is `package-lock.json`.
- **Build**: `npm run build` runs `tsc -b` (type-check) then `vite build`. Both must pass.
- **Lint**: `npm run lint` runs ESLint flat config. Must pass before shipping.
- **No test runner**: There is no test framework or test script configured.

## Code conventions

- **Function components only**: no class components, no wrapper hooks.
- **Default exports**: every component and module uses `export default`.
- **No comments**: code must be self-documenting.
- **Naming**: files and directories are `kebab-case`; components are `PascalCase` functions.
- **`verbatimModuleSyntax`**: use `import type` for type-only imports.
- **Tailwind-first**: prefer Tailwind utility classes over custom CSS.
- **Strict TypeScript**: `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `noFallthroughCasesInSwitch`.

## Architecture

- **Single router file**: all routes live in `src/core/routes.tsx`.
- **Module isolation**: each module owns its components, services, styles, and metadata.
- **Layout**: `src/core/layout.tsx` wraps all pages with `<Navbar />` + `<Outlet />`.
- **Scaffold**: use `npm run scaffold` to generate new modules and pages. Always review the diff in `routes.tsx` after scaffolding.

## Deployment

- **Pannellum CDN** is loaded globally in `index.html`. No npm import needed.
- **No `.env`**: no environment loading is configured. `import.meta.env` is available but unused.
- **No CI**: no CI config exists in the repo.
