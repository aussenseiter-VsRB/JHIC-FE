# Component: Card

Template for documenting and creating card components.

> No card component exists in the codebase yet. This is a reference template.

---

## Purpose

A card is a contained unit of content with:
- Rounded corners
- Consistent padding
- Optional header, body, and footer sections
- Hover/focus interaction (optional)

## Template: `src/modules/<module>/components/Card.tsx`

```tsx
function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl bg-white p-6 shadow-sm ${className ?? ""}`}>
      {children}
    </div>
  );
}

export default Card;
```

## Template: usage

```tsx
import Card from "../components/Card";

function MyPage() {
  return (
    <Card>
      <h3 className="text-lg font-semibold">Title</h3>
      <p className="text-copy/80">Content goes here.</p>
    </Card>
  );
}
```

## Placement rules

- If the card is used **within one module only** → `src/modules/<module>/components/Card.tsx`
- If the card is used **across modules** → `src/components/card/card.tsx`

## Variants

When the project needs different card types, use a variant prop:

```tsx
type CardVariant = "default" | "outlined" | "interactive";
```

Don't create separate component files for each variant. Use props to differentiate.
