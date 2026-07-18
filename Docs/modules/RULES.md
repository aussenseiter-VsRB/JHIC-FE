# Module Rules

Rules for creating, structuring, and contributing to modules in JHIC-FE.

---

## Module anatomy

Every module lives under `src/modules/<name>/` and follows this structure:

```
<name>/
├── <name>.tsx          # Main component (default export)
├── <name>.json         # Metadata (start with {})
├── css/<name>.css      # Module-scoped styles
├── components/         # Module-local UI components
│   └── <Component>.tsx
└── services/           # Data fetching and API logic
    └── index.ts
```

## Creating a module

Use the scaffold CLI:

```bash
pnpm scaffold module <name>
```

This generates the directory, files, and appends the import + route to `src/core/routes.tsx`.

**Always review `routes.tsx` after scaffolding** — the script uses naive string insertion.

## Sub-pages

Sub-pages go inside the module directory:

```bash
pnpm scaffold page <parent-module> <sub-page-name>
```

This creates `<parent>/<sub-page>/page.tsx` and appends the route.

## Rules

1. **One module = one directory.** Don't split a single feature across multiple top-level module directories.
2. **Module-local components stay local.** Put them in the module's `components/` dir. Only move to `src/components/` if 3+ modules use them.
3. **Services stay local.** Each module's `services/` handles its own data. Shared API logic goes in a top-level `src/services/` (not yet created).
4. **CSS stays scoped.** Import the module's CSS file in the main component. Use Tailwind utilities first; CSS files are for edge cases.
5. **Metadata is required.** Every module and sub-page has a `.json` file. Start with `{}`; add config as needed.
6. **No circular dependencies.** Modules don't import from each other. If two modules need the same thing, extract it to `src/components/` or `src/core/`.

## Routing convention

- Module index page: `path: "/<module-name>"`
- Sub-page: `path: "/<module-name>/<sub-page>"`
- Nested layout routes: use `<Outlet />` in the parent component and define children in `routes.tsx`.

## Naming

| Item | Convention | Example |
|------|-----------|---------|
| Directory | `kebab-case` | `profile-edit/` |
| Component file | `kebab-case.tsx` | `profile-card.tsx` |
| Component function | `PascalCase` | `function ProfileCard()` |
| CSS file | `<module-name>.css` | `profile.css` |
| CSS class | `<module-name>-<element>` | `profile-card`, `home-hero` |
| Service file | `index.ts` | `services/index.ts` |
