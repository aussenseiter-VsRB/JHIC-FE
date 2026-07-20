# JHIC-FE Documentation

This is the **source of truth** for the JHIC-FE project. It covers architecture, conventions, design decisions, and contribution guidelines.

## What lives here

| Path | Purpose |
|------|---------|
| `index.md` | Table of contents — start here |
| `codingStandard.md` | Operational coding standards (moved from `docs/`) |
| `core/RULES.md` | Non-negotiable project rules |
| `core/systemDesign.md` | System architecture and planned infrastructure |
| `core/design.md` | UI/UX design patterns and theming strategy |
| `core/codingPrinciple.md` | Software design philosophy |
| `core/folderStructure.md` | Annotated source tree |
| `core/SKILLS.md` | Agent skill extension guide |
| `core/modules/` | Module, component, page, and type documentation |

## How to use this

- **New contributors**: read `index.md`, then `core/RULES.md`.
- **Building a feature**: read `core/modules/RULES.md` and the relevant module doc.
- **Adding a component**: read `core/modules/component/shared/README.md`.
- **Extending opencode**: read `core/SKILLS.md`.

## Keeping it current

Every architectural change or new convention MUST be reflected in these docs before shipping.
If a doc conflicts with the code, the code wins — but the doc must be updated to match.
