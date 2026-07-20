---
name: System Design
relation: index.md → core/
description: Architecture overview and system design documentation
type: Enforce
---

# System Design

## Project architecture

This is a **React + TypeScript** single-page application built with Vite. The architecture follows a **module-based** pattern where each route is encapsulated in its own module directory under `src/modules/`.

## Module architecture

```
src/modules/{moduleName}/
├── {moduleName}.tsx       — Page component (React + TypeScript)
├── {moduleName}.css       — Page styles
├── {moduleName}.json      — Static data consumed by the page
├── components/            — Reusable UI components (module-scoped)
└── services/              — API calls and business logic
```

## Key principles

- **Flat module hierarchy.** Each route is a top-level module. Sub-pages are sibling modules with parent-prefixed names (e.g., `profileEdit/` for `/profile/edit`).
- **Data from JSON.** Every page reads its data from a co-located JSON file. No hardcoded data in components.
- **Separation of concerns.** UI lives in `components/`, logic lives in `services/`. Pages orchestrate both.
