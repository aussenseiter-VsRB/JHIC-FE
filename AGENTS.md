# JHIC-FE

## Stack

- React 19 + TypeScript 6 + Vite 8 (pwa-ready)
- Tailwind CSS v4 via `@tailwindcss/vite` plugin (imported in `src/index.css` with `@import "tailwindcss"`)
- React Router DOM v7 (BrowserRouter, declarative routes in `src/core/routes.tsx`)
- npm (lockfile: `package-lock.json`)

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Type-check + build | `npm run build` |
| Lint (ESLint flat config) | `npm run lint` |
| Scaffold new module | `npm run scaffold module <name>` |

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
  components/           # shared UI (navbar, footer, skeleton, ...)
  assets/               # static images (logos, etc.)
  index.css             # Tailwind + Google Fonts + custom @theme
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

**The scaffold script (`npm run scaffold`) auto-generates this structure and appends the import + route to `src/core/routes.tsx`.** After scaffolding, verify `routes.tsx` looks correct — the script does naive string insertion.

### Routes

Routes live in a single array in `src/core/routes.tsx`. All pages are children of the `<Layout />` route element. Add new pages here (or use the scaffold command).

### Shared types

`@aussenseiter/shared-types` is a published npm dependency (resolved from the registry).

## Style conventions

- **CSS-first**: styling via module `.css` files. Tailwind utility classes are used only for typography (`font-heading`, `font-body`, `font-poppins`) and responsive breakpoint prefixes (`md:`, `lg:`, `max-md:`, etc.). Third-party/library components are exempt.
- **Function components only**: no class components, no hooks wrappers — plain `function` declarations with default export.
- **Comments**: use comments only for non-obvious logic that takes >5s to reason about — empty catch blocks, intentional lint suppressions, complex state invariants. Trivial section labels (`{/* Hero */}`), auto-behavior labels (`// Auto-scroll`), and feature annotations (`// Feature5: ...`) are banned; the code should speak for itself.
- **Naming**: files and directories are `kebab-case`; components exported as `PascalCase` functions. CSS class names match the module/page kebab name.
- **`verbatimModuleSyntax`** is enabled — use `import type` for type-only imports. TypeScript strictness includes `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`.

## Agent usage

This project keeps detailed docs in `docs/`. If you are an agent tasked with building or modifying code, follow this:

1. Read `docs/README.md` first — it's the source truth and never EVER read from the main source code unless the task needs it
2. Based on your task, read only the relevant doc(s):
   - **New feature / module** → `docs/README.md` + `docs/modules/RULES.md` + relevant module doc
   - **New service / API logic** → `docs/core/systemDesign.md` + `docs/core/folderStructure.md`
   - **Component** → `docs/modules/component/shared/README.md`
   - **Coding standards / review checklist** → `docs/core/codingPrinciple.md` (rules) + section below
3. Do not load all docs — only what you need.

## Coding standards (from `docs/core/codingPrinciple.md`)

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

- **Pannellum CDN** is loaded in `index.html` (panoramic viewer). It is available as a global — no npm import needed, but verify it's loaded before referencing `pannellum` in code.
- **Scaffold writes to `routes.tsx` via string manipulation** — always review the diff after running `npm run scaffold`.
- **No `.env` or env loading** is configured yet. Vite's `import.meta.env` is available but unused.
- **No CI config** currently exists in the repo.

AI-Assisted Development Workflow (Anti-AI-Slop System)
Step 1: Strict Token & Theme Enforcement
Do not allow the AI to generate arbitrary Tailwind utility classes. The AI must strictly read and adhere to the @theme tokens declared in src/index.css.

Typography: Explicitly enforce custom font families (font-heading for <h1>-<h3>, font-body or font-poppins for regular body text). Using browser default fonts is strictly prohibited.

Color Palette: Restrict the AI to predefined brand tokens (e.g., bg-primary, text-secondary, border-brand). Do not introduce random, one-off color classes like bg-blue-500 or text-purple-600 inside components unless explicitly specified in the brand guidelines.

Step 2: Component Separation & Props Contract
When instructing the AI to build visual components (such as Cards, Navbars, or Hero sections):

Props Definition: Explicitly define the component props contract using clean TypeScript typing via import type.

Semantic HTML: The AI must use semantic layout tags (<article>, <aside>, <section>, <header>) instead of deeply nesting generic <div> elements without architectural meaning.

State Behavior: Define interactive states (such as hover, focus-visible, active) explicitly in the prompt before the AI begins structuring the layout.

Step 3: Layout Isolation (The Grid & Flex Rules)
To prevent rigid, predictable layouts typical of generic AI generation:

Responsive System: Layouts must be built mobile-first with highly structured breakpoint scaling (e.g., w-full md:max-w-md lg:max-w-2xl).

Spacing Invariance: Enforce absolute consistency across spacing tokens for paddings and gaps (gap-6, p-6 for cards; gap-12, py-20 for entire sections).

Asymmetry over Generic Layouts: Prompt the AI to prefer dynamic, premium layouts (e.g., asymmetric grids using md:grid-cols-[2fr_1fr] or clean bento grids). Avoid symmetric 3-column structures that feel template-like.

Step 4: Asset & Image Handling (CSS-First Constraints)
In alignment with the project's CSS-first architectural rule:

Styling Layer: Complex visual declarations (such as glassmorphism, custom box-shadows, multi-layered gradients, and complex clip-paths) must be isolated inside the module's local .css file rather than cluttered inside inline Tailwind utility classes.

Image Fallback: Every <img> tag generated must include loading="lazy", object-cover, and an explicit onError handler that falls back gracefully to a local asset placeholder from src/assets/.

Step 5: Micro-Interactions & Motion Tokens
Human-grade design is defined by subtle interactive details:

The AI must implement smooth transition layers (transition-all duration-300 ease-out) on every interactive element (buttons, anchor links, card hover behaviors).

Avoid aggressive entrance animations (e.g., full-page chaotic fade-in-up movements). Prioritize clean, micro-interactions triggered by direct user state changes.