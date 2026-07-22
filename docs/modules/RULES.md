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

If a page has static data, it must come from a co-located `{moduleName}.json` file. Never hardcode display data inside `.tsx` components. If the page has no static data yet, skip the JSON file entirely.

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

## 7. Wiring a module

After creating a module's files, register it in `src/core/routes.tsx`:

1. **Import** the page component:
   ```ts
   import ModuleName from "../modules/{moduleName}/{moduleName}";
   ```

2. **Add a route object** inside the `children` array of the `Layout` route:
   ```ts
   { path: "/route-path", element: <ModuleName /> },
   ```

3. **Nested sub-routes** use a parent with `children`:
   ```ts
   {
     path: "/parent",
     element: <ParentComponent />,  // must render <Outlet />
     children: [
       { path: "child-path", element: <ChildComponent /> },
     ],
   }
   ```

The path should match the module name by convention (e.g., `/berita` → `modules/berita`, `/profile/settings` → `modules/profile/settings/page`).

The import path follows the module's actual file location — flat sibling modules (e.g., `profileEdit/profileEdit.tsx`) import from their own root, nested sub-pages (e.g., `profile/settings/page.tsx`) import from their nested path.

---

## 8. Font system

This project uses a **three-font pairing** defined in `src/index.css`. All components must use these utility classes — never hardcode `font-family` in JSX or CSS.

### Available fonts

| Class | Font | Role | Usage |
|-------|------|------|-------|
| `font-heading` | Plus Jakarta Sans 700/800 | Display | h1, h2, hero titles, section headings |
| `font-body` | Inter 400/500/600 | Body/UI | paragraphs, nav links, labels, buttons, cards, lists |
| `font-poppins` | Poppins 600 | Accent/CTA | CTA buttons, badges, small highlight labels |

### Rules

1. **Headings (h1, h2)** → always `font-heading`. These are the only elements that should use Plus Jakarta Sans.
2. **Everything else** → `font-body`. This is the default for all readable text: paragraphs, nav items, form labels, card content, list items, table data.
3. **CTAs and accent labels** → `font-poppins`. Use sparingly for call-to-action buttons, badge numbers, and small accent text that needs visual weight.
4. **Never use raw Tailwind `font-sans`/`font-serif`/`font-mono`** — always use one of the three classes above.
5. **Never define `font-family` inline** in JSX `style={{}}` or in CSS files. Use the utility class.
6. **Do not import additional Google Fonts** without updating `src/index.css` and this document.
7. **Font weights are fixed** — do not use weights outside the imported ranges:
   - Plus Jakarta Sans: 700, 800 only
   - Inter: 400, 500, 600 only
   - Poppins: 600 only

### Type scale reference

```
h1:       32px / 48px(md) / 700 / font-heading
h2:       28px / 700 / font-heading
h3:       18px / 600 / font-body
body:     16px / 400 / font-body
caption:  14px / 500 / font-body
small:    12px / 500 / font-body
CTA:      16px / 600 / font-poppins
```

### CSS files

Module CSS files (`css/*.css`) must **not** set `font-family`. They inherit from `body` (Inter). Use font utility classes in JSX `className` instead.

## 9. No dead code

Don't generate files, exports, or data that nothing consumes. Empty stubs create confusion and maintenance burden.

- **Don't scaffold empty stubs.** The standard file set (rule 4) lists `components/`, `services/`, and `data/` as optional — only create them when they will be used immediately.
- **JSON must be consumed.** If `{moduleName}.json` exists, the page component must import and render at least one key from it.
- **CSS must have declarations.** Don't create `.{name} {}` with empty braces. Only create the CSS file when there are actual styles to write.
- **Every component must be real.** No placeholder `<div>Name</div>` stubs. Components must have props, meaningful JSX, and be imported somewhere.
- **Every export must be consumed.** Every exported function, type, or component must be imported by at least one other file.
- **Self-check before finishing.** After creating a module, verify: every file exists for a reason, every import resolves to a used symbol, every JSON key is rendered in JSX.
