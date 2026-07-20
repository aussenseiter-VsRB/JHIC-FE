---
name: Design Decisions
relation: index.md → core/
description: Design decisions and rationale to prevent agent drift
type: Enforce
---

# Design Decisions

## Flat module structure (2026-07-20)

**Decision:** All routes are top-level modules. Sub-pages are sibling modules named with their parent as a prefix (e.g., `profile/` → `profileEdit/`), not nested directories.

**Rationale:** Nested sub-route folders create deep import paths and make module boundaries unclear. Flat modules with parent-prefixed names keep imports simple and make each module self-contained.

## Static data from JSON (2026-07-20)

**Decision:** Every page component reads its data from a co-located `{moduleName}.json` file.

**Rationale:** Hardcoding data in components makes them harder to maintain, test, and localize. External JSON files keep components focused on presentation and allow data changes without touching component code.

## Components vs Services (2026-07-20)

**Decision:** `components/` holds reusable UI pieces. `services/` holds API calls and business logic.

**Rationale:** Clear separation between presentation and data logic prevents components from becoming tangled with side effects. Services remain independently testable.
