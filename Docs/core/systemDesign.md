# System Design

This document covers the current architecture and planned infrastructure decisions.

> Items marked **[PLANNED]** are aspirational — not yet implemented.

---

## Current Architecture

```
Browser
  └─ index.html (Pannellum CDN loaded here)
       └─ #root
            └─ <App /> (BrowserRouter)
                 └─ <Layout /> (Navbar + Outlet)
                      └─ <Routes>
                           ├─ /            → Home
                           ├─ /profile     → Profile
                           ├─ /profile/edit   → ProfileEdit
                           └─ /profile/settings → ProfileSettings
```

### Rendering

- React 19 with `StrictMode` enabled.
- Client-side rendering only. No SSR, no SSG.
- Entry point: `src/main.tsx` → `createRoot` → `<App />`.

### Routing

- React Router DOM v7 with `BrowserRouter`.
- Routes defined declaratively in `src/core/routes.tsx` as a `RouteObject[]` array.
- `App.tsx` recursively renders the route tree via a `renderRoutes()` helper.
- All pages are children of the `<Layout />` route.

### Styling

- Tailwind CSS v4 via `@tailwindcss/vite` plugin.
- No `tailwind.config.js` — configuration is CSS-first using `@import "tailwindcss"` in `src/index.css`.
- Module-scoped CSS files exist but are minimal (empty rule blocks).
- **[PLANNED]** Custom theme tokens (colors, typography, spacing) via `@theme` in `index.css`.

### State Management

- None currently. All components are stateless or use local `useState`.

**[PLANNED]** State management strategy:
- Component-local state for UI concerns (modals, form inputs, toggles).
- React Context for cross-cutting concerns (auth, theme, locale).
- URL state via React Router search params for shareable state.
- Server state: TBD — likely TanStack Query when API integration begins.

### Data Layer

- No API integration exists. Service files (`services/index.ts`) are empty placeholders.

**[PLANNED]** API architecture:
- Centralized API client in `src/services/api.ts`.
- Module-specific service files import from the shared client.
- Response types defined in `src/types/`.
- Error handling via a shared utility that maps HTTP errors to app-level errors.

### Build & Bundling

- Vite 8 with `@vitejs/plugin-react` and `@tailwindcss/vite`.
- TypeScript 6 with project references (`tsconfig.app.json` + `tsconfig.node.json`).
- `tsc -b` runs before `vite build` to catch type errors.
- Output: `dist/` directory with hashed assets.

### PWA

- Vite PWA-ready (configured in `package.json` as `"pwa-ready"`), but no service worker or manifest is configured yet.

**[PLANNED]** PWA features:
- Service worker for offline caching.
- Web app manifest for installability.
- Cache-first strategy for static assets, network-first for API calls.

### Third-party Dependencies

| Dependency | Purpose |
|------------|---------|
| `react` / `react-dom` 19 | UI framework |
| `react-router-dom` 7 | Client-side routing |
| `tailwindcss` 4 | Utility-first CSS |
| `@aussenseiter/shared-types` | Shared type definitions (workspace package, not yet used) |
| Pannellum (CDN) | Panoramic image viewer |

### Dependency management

- Package manager is **npm**; the lockfile is `package-lock.json`.
- `@aussenseiter/shared-types` is a published npm dependency resolved from the registry (not a local workspace package).

---

## System Boundaries

```
┌─────────────────────────────────────────┐
│  Browser                                │
│  ┌───────────┐  ┌────────────────────┐  │
│  │ React App │  │ Pannellum (CDN)    │  │
│  │           │  │ Global: window     │  │
│  └───────────┘  └────────────────────┘  │
└─────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────┐
│  Static Hosting (TBD)                   │
│  dist/ output                           │
└─────────────────────────────────────────┘
          │
          ▼  [PLANNED]
┌─────────────────────────────────────────┐
│  API Server                             │
│  REST / JSON                            │
└─────────────────────────────────────────┘
```
