# Consuming the Design System

This guide explains how downstream repositories should use the generated outputs from the EverGray Tech design system.

## What to Import

The design system generates two outputs under `dist/`:

| Output | Path | Use when |
|---|---|---|
| CSS custom properties | `dist/css/variables.css` | Styling with CSS or any CSS-in-JS that supports custom properties |
| JSON flat export | `dist/json/tokens.json` | Programmatic access in JS/TS (e.g., theming logic, style objects, SSR) |

Both files are generated from the same source tokens. They always agree.

### Installation

Add the design system as a dependency in your consuming repo:

```bash
pnpm add @evergray/design-tokens
```

Or reference the built outputs directly if the package is linked or vendored locally.

---

## What Must Come from the Design System

The following categories of values **must** come from the design system outputs. Do not define these independently in consuming repos:

- **Colors** — neutrals, text hierarchy, borders, accent, semantic states
- **Typography** — font families, size scale, weight scale, line-height, letter-spacing
- **Spacing** — the spatial scale (2px–96px)
- **Radii** — corner radius values
- **Motion** — durations and easing curves
- **Semantic states** — success, warning, error, info (foreground and background)
- **Accent** — brand gradient stops and solid fallbacks

If the value exists in the token set, use it from the design system.

---

## What Remains a Local Decision

These decisions belong to the consuming application, not the design system:

- **Layout composition** — grid columns, flex arrangements, page structure
- **Component-internal dimensions** — a specific card's height, a modal's max-width
- **App-specific breakpoints** — responsive behavior tailored to the product
- **Content-driven spacing adjustments** — e.g., extra padding around a specific data-dense view
- **Z-index layering** — application-specific stacking context
- **Animations beyond the provided easing/duration tokens** — e.g., a complex multi-step keyframe sequence (but use design system durations and easings as building blocks)

---

## What Must Not Be Duplicated or Hardcoded

**Do not copy token values into your repo.** This includes:

- Hardcoding hex colors that match the design system palette
- Redefining spacing or radius values as local constants
- Copying font family strings into app-level config
- Creating "theme" files that duplicate what the design system already provides

If you find yourself writing `#121216`, `8px`, or `'Inter'` directly in application code, you should be referencing a design system token instead.

---

## Handling Exceptions

When a consuming app needs a value that does not exist in the token set:

1. **Check if an existing token fits.** The system is intentionally restrained — look for the closest match before assuming a gap.
2. **If no token fits, request it upstream.** Open an issue or PR in the design system repo describing the need and the context.
3. **If urgent, document the local override.** Use a comment like `/* TODO: upstream to design system — see #XX */` so it can be tracked and resolved.
4. **Never silently duplicate.** An undocumented hardcoded value that shadows a design system token will cause drift that is difficult to detect.

---

## Update Flow

When the design system is updated:

1. The design system repo publishes a new version (semver).
2. Consuming repos update their dependency: `pnpm update @evergray/design-tokens`
3. Rebuild if necessary — CSS variables and JSON are already updated through the dependency.
4. Review the changelog for breaking changes (major version bumps) or new tokens.

Token removals or renames are breaking changes and will be treated as major version bumps.

---

## Practical Examples

### CSS Variables

Import the generated CSS variables file, then reference them in your stylesheets.

**Import:**

```css
@import '@evergray/design-tokens/dist/css/variables.css';
```

**Usage:**

```css
.panel {
  background-color: var(--color-neutral-surface);
  border: 1px solid var(--color-border-edge);
  border-radius: var(--radii-md);
  padding: var(--spacing-lg);
  color: var(--color-text-primary);
  font-family: var(--typography-family-sans);
  transition: background-color var(--motion-duration-fast) var(--motion-easing-default);
}

.panel-header {
  font-size: var(--typography-size-lg);
  font-weight: var(--typography-weight-semibold);
  line-height: var(--typography-line-height-tight);
  margin-bottom: var(--spacing-md);
}

.label-muted {
  color: var(--color-text-secondary);
  font-size: var(--typography-size-sm);
}
```

### JSON Tokens

Import the flat JSON export for programmatic use.

**Import:**

```ts
import tokens from '@evergray/design-tokens/dist/json/tokens.json';

// Access values directly
const canvasBg = tokens.ColorNeutralCanvas;     // "#121216"
const accentBlue = tokens.ColorAccentSolid;      // "#3A7ABB"
const spacingLg = tokens.SpacingLg;              // "16px"
const durationFast = tokens.MotionDurationFast;  // "150ms"
```

### Next.js

For a Next.js app, import the CSS variables in your root layout so they're available globally.

**`app/layout.tsx`:**

```tsx
import '@evergray/design-tokens/dist/css/variables.css';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

Then use the variables in any CSS file, CSS module, or inline style:

**`app/globals.css`:**

```css
body {
  background-color: var(--color-neutral-canvas);
  color: var(--color-text-primary);
  font-family: var(--typography-family-sans);
}
```

**Server component with JSON tokens:**

```tsx
import tokens from '@evergray/design-tokens/dist/json/tokens.json';

export default function StatusBadge({ status }: { status: 'success' | 'error' }) {
  const color = status === 'success'
    ? tokens.ColorSemanticSuccessForeground
    : tokens.ColorSemanticErrorForeground;

  const bg = status === 'success'
    ? tokens.ColorSemanticSuccessBackground
    : tokens.ColorSemanticErrorBackground;

  return (
    <span style={{ color, backgroundColor: bg, borderRadius: tokens.RadiiSm, padding: `${tokens.SpacingXs} ${tokens.SpacingSm}` }}>
      {status}
    </span>
  );
}
```

> **Note:** CSS variables are generally preferred over JSON for styling. Use JSON tokens when you need values in logic, computed styles, or SSR contexts where CSS variables aren't available.
