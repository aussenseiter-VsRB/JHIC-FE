# Shared Components

Documents existing shared components and provides a guide for adding new ones.

---

## Current inventory

| Component | Path | Status |
|-----------|------|--------|
| Navbar | `src/components/navbar/navbar.tsx` | Active — used by `Layout` |
| Skeleton | `src/components/skeleton/skeleton.tsx` | Empty — not implemented |

---

## Navbar

**File**: `src/components/navbar/navbar.tsx`
**Styles**: `src/components/navbar/navbar.css`
**Used by**: `src/core/layout.tsx`

### Structure

- Fixed position, top-4, z-50, full width.
- Logo (NavLink to `/`) on the left.
- Nav links center: Beranda (`/`), Profil (`/profile`).
- CTA button right: "Daftar Sekarang" (links to `#daftar`).
- Hidden on mobile (`hidden md:flex`).
- Uses glassmorphism classes (`glass-nav`) — **not yet defined** in Tailwind.

### Key patterns

- `NavLink` from react-router-dom with `isActive` for active state styling.
- Active link gets an accent-colored underline and text color.
- Inline SVG component (`ArrowUpRight`) for the CTA icon.
- Logo imported from `src/assets/Logo-yadika.webp`.

### Dependencies

- `react-router-dom` — `NavLink`
- `src/assets/Logo-yadika.webp` — school logo

---

## Template: how to add a shared component

1. Create the directory: `src/components/<name>/`
2. Create the component file: `<name>.tsx`
3. Create the style file: `<name>.css` (if needed beyond Tailwind)
4. Default export the component function
5. Import in the consuming module or layout

### Naming

| Item | Convention | Example |
|------|-----------|---------|
| Directory | `kebab-case` | `profile-card/` |
| Component file | `<name>.tsx` | `profile-card.tsx` |
| Component function | `PascalCase` | `function ProfileCard()` |
| CSS file | `<name>.css` | `profile-card.css` |
| CSS class | `<name>` | `.profile-card` |

### When to put a component in `src/components/` vs `src/modules/<name>/components/`

| Criteria | `src/components/` | `src/modules/<name>/components/` |
|----------|--------------------|----------------------------------|
| Used by 1 module | No | Yes |
| Used by 2+ modules | Yes | No |
| Layout-level UI (nav, footer) | Yes | No |
| Module-specific UI | No | Yes |

### Template: `src/components/<name>/<name>.tsx`

```tsx
function Name() {
  return <div className="name"></div>;
}

export default Name;
```
