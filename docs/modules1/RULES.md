---
name: Module Creation Rules
relation: index.md → modules1/
description: Enforceable rules for creating and structuring modules
type: Enforce
---

# Module Creation Rules

## 1. Flat module structure

Each route is a **top-level module** under `src/modules/`. Do not nest sub-routes inside parent modules.

```
src/modules/
├── profile/            ← /profile
├── profileEdit/        ← /profile/edit  (NOT profile/edit/)
└── profileSettings/    ← /profile/settings (NOT profile/settings/)
```

## 2. Parent-named sub-modules

Sub-pages are named after their parent module:

```
Parent:  profile/
Child:   profileEdit/
Child:   profileSettings/
```

Pattern: `{parent}{childName}` in PascalCase (e.g., `jurusanRPL`, `profileEdit`).

## 3. Static data from JSON

Every page component must read its data from a co-located `{moduleName}.json` file. Never hardcode display data inside `.tsx` components.

```
profile.tsx   → imports data from profile.json
profileEdit.tsx → imports data from profileEdit.json
```

## 4. Standard module file set

Every module must include these files:

```
{moduleName}/
├── {moduleName}.tsx    — Page component (default export)
├── {moduleName}.css    — Styles
├── {moduleName}.json   — Static data
├── components/         — Reusable UI components
└── services/           — API calls and business logic
```

## 5. Separation: components vs services

- `components/` — UI only. No API calls, no business logic. Pure presentation.
- `services/` — Logic only. No UI imports. Handles API calls, data transformation, side effects.
