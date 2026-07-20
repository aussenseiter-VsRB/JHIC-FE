---
name: Module Creation Rules
relation: index.md → modules/
description: Enforceable rules for creating and structuring modules
type: Enforce
---

# Module Creation Rules

## 1. Module structure

Each route is a **top-level module** under `src/modules/`. Sub-pages may be organized in two ways:

**Option A — Flat sibling modules** (loose coupling):
```
src/modules/
├── profile/            ← /profile
├── profileEdit/        ← /profile/edit
└── profileSettings/    ← /profile/settings
```

**Option B — Nested inside parent** (tight coupling):
```
src/modules/profile/
├── profile.tsx         ← /profile
├── settings/
│   ├── page.tsx        ← /profile/settings
│   └── css/page.css
└── ...
```

## 2. Sub-module naming

Flat sibling modules follow the parent-prefixed naming pattern:

```
Parent:  profile/
Child:   profileSettings/
```

Pattern: `{parent}{childName}` in PascalCase (e.g., `jurusanRPL`, `profileSettings`).

## 3. Static data from JSON

Every page component must read its data from a co-located `{moduleName}.json` file. Never hardcode display data inside `.tsx` components.

```
profile.tsx   → imports data from profile.json
profileEdit.tsx → imports data from profileEdit.json
```

## 4. Standard module file set

Every module should include these files:

```
{moduleName}/
├── {moduleName}.tsx    — Page component (default export)
├── css/{moduleName}.css — Styles
├── {moduleName}.json   — Static data
├── components/         — Reusable UI components (optional)
├── services/           — API calls and business logic (optional)
└── data/               — Static data files for multi-page modules (optional)
```

`components/` and `services/` are optional. Modules with only a simple page may omit them.

## 5. Pages in services

Page-level components may live inside `services/` when the page is primarily data-driven (e.g., jurusan listing and detail pages). This is acceptable when the module has no dedicated root `.tsx` and serves as a data-centric route.

## 6. Separation: components vs services

- `components/` — UI only. No API calls, no business logic. Pure presentation.
- `services/` — Logic only. No UI imports. Handles API calls, data transformation, side effects.
