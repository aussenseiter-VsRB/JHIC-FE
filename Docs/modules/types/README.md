# Types

Strategy for managing TypeScript types in JHIC-FE.

---

## Current state

The project has **no custom type definitions**. All types come from:
- `react-router-dom` — `RouteObject`
- Inline annotations — `{ className?: string }`

## Strategy

### Layer 1: Inline (now)

For simple, single-use props, define types inline at the component:

```tsx
function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return <section>...</section>;
}
```

**When to use**: the type is simple (≤3 props), used once, and doesn't need sharing.

### Layer 2: Module-local types (when needed)

When a module has multiple components sharing the same shape, create a types file:

```
src/modules/<name>/
├── types.ts          # Module-specific types
├── <name>.tsx
└── components/
    └── <Component>.tsx  # imports from ../types.ts
```

**When to use**: 2+ components in the same module share a type, or the type is complex (>3 props).

### Layer 3: Shared types (when cross-module)

When types are shared across modules, use `@aussenseiter/shared-types` or create `src/types/`:

```
src/
├── types/
│   ├── index.ts      # Re-exports everything
│   ├── user.ts       # User-related types
│   └── api.ts        # API response types
```

**When to use**: 2+ modules need the same type, or API response types are shared.

### Layer 4: External package

`@aussenseiter/shared-types` is already a dependency. Use it when types need to be shared across multiple repositories or packages.

## Rules

1. **Never use `any`.** If you don't know the type, use `unknown` and narrow it.
2. **Use `import type` for type-only imports.** `verbatimModuleSyntax` enforces this.
3. **Types live close to usage.** Don't create a global types file prematurely.
4. **Name types by what they represent**, not where they're used: `User` not `ProfilePageUser`.
5. **Interfaces for extensible shapes**, types for unions/tuples/composition.

## Adding new types

1. Start inline.
2. Extract to module-local `types.ts` when the module grows.
3. Extract to `src/types/` when other modules need it.
4. Extract to `@aussenseiter/shared-types` when other repos need it.
