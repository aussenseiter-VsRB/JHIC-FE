# Folder Structure

Annotated map of the JHIC-FE source tree.

---

## Root

```
JHIC-FE/
├── Docs/                    # This documentation (source of truth)
├── docs/                    # [REMOVED] — merged into Docs/
├── public/                  # Static assets served as-is (no build transform)
│   ├── favicon.svg          #   App favicon
│   └── icons.svg            #   SVG sprite sheet (social icons)
├── scripts/                 # Build-time tooling
│   └── scaffold-module.mjs  #   CLI: pnpm scaffold module|page
├── src/                     # Application source
├── index.html               # Vite entry HTML (Pannellum CDN loaded here)
├── package.json             # Dependencies and scripts
├── pnpm-lock.yaml           # pnpm lockfile (authoritative)
├── package-lock.json        # npm lockfile (ignored — use pnpm)
├── pnpm-workspace.yaml      # Workspace config (release age exclusions)
├── tsconfig.json            # Root TS config (project references)
├── tsconfig.app.json        # App TS config (src/)
├── tsconfig.node.json       # Node TS config (vite.config.ts)
├── vite.config.ts           # Vite + React + Tailwind plugins
├── eslint.config.js         # ESLint flat config
└── AGENTS.md                # Agent instructions for this repo
```

## `src/` — Application Source

```
src/
├── main.tsx                 # Entry: createRoot → <App />
├── App.tsx                  # BrowserRouter + Routes (reads core/routes.tsx)
├── App.css                  # [DEAD] — Vite template boilerplate, not imported
├── index.css                # Tailwind import only (@import "tailwindcss")
│
├── core/                    # Application shell (shared by all modules)
│   ├── routes.tsx           #   All route definitions (RouteObject[])
│   └── layout.tsx           #   <Navbar /> + <Outlet /> wrapper
│
├── components/              # Shared UI (used across modules)
│   ├── navbar/              #   Top navigation bar
│   │   ├── navbar.tsx       #     Nav component (glassmorphism, responsive)
│   │   └── navbar.css       #     Navbar styles
│   └── skeleton/            #   Loading skeleton (placeholder)
│       └── skeleton.tsx     #     [EMPTY] — not yet implemented
│
├── modules/                 # Page-level features (one dir per module)
│   ├── home/                #   Home page module
│   │   ├── home.tsx         #     Main component
│   │   ├── home.json        #     Metadata (empty {})
│   │   ├── css/home.css     #     Scoped styles
│   │   ├── components/      #     Module-local components
│   │   │   └── Hero.tsx     #       Hero section (not yet used)
│   │   └── services/        #     Data fetching / API logic
│   │       └── index.ts     #       [EMPTY] placeholder
│   │
│   └── profile/             #   Profile module (with sub-pages)
│       ├── profile.tsx      #     Main component (renders <Outlet />)
│       ├── profile.json     #     Metadata (empty {})
│       ├── css/profile.css  #     Scoped styles
│       ├── components/      #     Module-local components
│       │   └── ProfileCard.tsx  #  Profile card (not yet used)
│       ├── services/        #     Data fetching / API logic
│       │   └── index.ts     #       [EMPTY] placeholder
│       ├── edit/            #     Sub-page: /profile/edit
│       │   ├── page.tsx
│       │   ├── page.json
│       │   └── css/page.css
│       └── settings/        #     Sub-page: /profile/settings
│           ├── page.tsx
│           ├── page.json
│           └── css/page.css
│
└── assets/                  # Static images (imported by components)
    ├── Logo-yadika.webp     #   School logo (used in Navbar)
    ├── hero.png             #   Hero section image
    ├── react.svg            #   [DEAD] — Vite template leftover
    └── vite.svg             #   [DEAD] — Vite template leftover
```

## Conventions

| Convention | Example |
|------------|---------|
| Files/dirs are `kebab-case` | `profile-card.tsx`, `page.tsx` |
| Components are `PascalCase` functions | `function Hero()` |
| Modules have a `components/` dir | `home/components/` |
| Modules have a `services/` dir | `home/services/index.ts` |
| Modules have a `css/` dir | `home/css/home.css` |
| Sub-pages use `page.tsx` | `profile/edit/page.tsx` |
| Metadata files are `{}` JSON | `home.json`, `page.json` |
| Shared components in `src/components/` | `navbar/`, `skeleton/` |
| All routes in `src/core/routes.tsx` | Single source of truth |

## Dead Files

These files exist but are not used:
- `src/App.css` — Vite template boilerplate
- `src/assets/react.svg` — Vite template logo
- `src/assets/vite.svg` — Vite template logo
- `src/components/skeleton/skeleton.tsx` — empty file
- `src/modules/home/components/Hero.tsx` — not imported anywhere
- `src/modules/profile/components/ProfileCard.tsx` — not imported anywhere
