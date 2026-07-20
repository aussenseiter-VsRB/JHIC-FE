# Design

This document covers UI/UX design patterns, theming, and the visual language of JHIC-FE.

> Items marked **[PLANNED]** are aspirational — not yet implemented.

---

## Visual Identity

- **School**: SMK YADIKA SOREANG.
- **Logo**: `src/assets/Logo-yadika.webp` — used in the navbar.
- **Favicon**: `public/favicon.svg` (Vite default, pending replacement).

## Theming

Currently, no custom theme tokens are defined. Tailwind defaults are in use.

The navbar already references custom tokens that are **not yet defined**:
- `text-accent` / `bg-accent` — accent color for active states and CTAs.
- `text-copy/80` — body text at reduced opacity.
- `font-body` — body typeface.
- `glass-nav` — glassmorphism nav bar styling.

**[PLANNED]** Theme token strategy:
```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --color-accent: #...;
  --color-copy: #...;
  --font-body: '...';
}
```

All color, typography, and spacing decisions go through Tailwind's `@theme` system. No inline hex values in components.

## Layout Patterns

### Navbar
- Fixed position, top of viewport, z-50.
- Glassmorphism effect (planned: `backdrop-blur`, semi-transparent background).
- Logo on the left, nav links center, CTA button right.
- Hidden on mobile (hamburger menu planned).

### Page Layout
- `<Layout />` provides: `<Navbar />` + `<main>` with `<Outlet />`.
- Pages fill the main content area below the navbar.
- **[PLANNED]** Consistent page container: `max-w-7xl mx-auto px-6 lg:px-12`.

### Module Layout Routes
- Modules with sub-pages (e.g., Profile) can render `<Outlet />` to nest child routes.
- **[PLANNED]** Properly nest profile sub-routes as children of `/profile` in `routes.tsx`.

## Component Patterns

### Glassmorphism
- Used for the navbar. Pattern: semi-transparent bg + backdrop-blur + subtle border.
- **[PLANNED]** Define as a reusable Tailwind utility or component wrapper.

### Cards
- **[PLANNED]** Standard card pattern: rounded corners, subtle shadow, consistent padding.
- Used for content blocks, profile items, listings.

### Responsive
- Mobile-first approach via Tailwind breakpoints (`sm:`, `md:`, `lg:`).
- Current navbar is desktop-only. Mobile nav is **[PLANNED]**.

## Typography

**[PLANNED]** Type scale:
- `font-heading` — page titles, section headers.
- `font-body` — paragraphs, labels, UI text.
- Scale defined via `@theme` Tailwind tokens, not arbitrary px values.

## Iconography

- SVG sprite sheet in `public/icons.svg` (bluesky, discord, github, x, documentation, social).
- Inline SVGs for UI icons (e.g., `ArrowUpRight` in navbar).
- **[PLANNED]** Icon component library or consistent SVG import pattern.

## Animation & Motion

- **[PLANNED]** Consistent transition durations and easing via Tailwind tokens.
- Page transitions via React Router (no library yet).
- Hover/focus states on interactive elements.

## Accessibility

- Navbar uses `aria-label` on the logo link and `aria-hidden` on the spacer.
- **[PLANNED]** Focus management, skip links, ARIA landmarks, color contrast checks.
- **[PLANNED]** Keyboard navigation for mobile menu.
