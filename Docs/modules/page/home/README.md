# Page Module: Home

Documents the existing home module and serves as a **template** for new page modules.

---

## Current state

```
src/modules/home/
├── home.tsx              # Main component (renders empty <div>)
├── home.json             # Metadata: {}
├── css/home.css          # Scoped styles: .home { }
├── components/
│   └── Hero.tsx           # Hero section (exists but not imported)
└── services/
    └── index.ts           # Empty placeholder
```

**Route**: `/` (root path)

**Status**: Skeleton module — no content rendered yet. `Hero.tsx` exists but is not used by `home.tsx`.

## What exists

- `home.tsx` renders an empty `<div className="div">` (note: class name doesn't match module name — should be `"home"`).
- `Hero.tsx` renders a `<div className="hero">Hero</div>` placeholder.
- `home.css` defines `.home { }` (empty rule).
- `services/index.ts` exports nothing.

---

## Template: how to create a page module

Use the scaffold:

```bash
pnpm scaffold module <name>
```

This generates:

```
src/modules/<name>/
├── <name>.tsx
├── <name>.json
├── css/<name>.css
├── components/
└── services/
    └── index.ts
```

Plus the import and route in `src/core/routes.tsx`.

### Checklist after scaffolding

1. **Verify `routes.tsx`**: confirm the import path and route path are correct.
2. **Write the component**: replace the scaffolded placeholder with real content.
3. **Add styles**: use Tailwind utilities in JSX. Use the CSS file only for complex selectors.
4. **Name the CSS class**: `<module-name>` for the wrapper (e.g., `<div className="home">`).
5. **Add services**: create data fetching functions in `services/index.ts` if the module needs data.

### Template: `home.tsx`

```tsx
import "./css/home.css";

function Home() {
  return (
    <div className="home">
      {/* Content here */}
    </div>
  );
}

export default Home;
```

### Template: `home.json`

```json
{}
```

### Template: `css/home.css`

```css
.home {
}
```

### Template: `services/index.ts`

```ts
export {};
```
