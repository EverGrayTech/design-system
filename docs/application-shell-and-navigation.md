# Application Shell and Navigation Guidance

This document defines the shared design-system guidance for EverGray application shells and navigation patterns. It enables operational products to build consistent workspace framing, navigation hierarchy, and state behavior without inventing local visual rules.

This guidance follows the application expression defined in [System Spec](system-spec.md): quiet, operational, precise, and restrained. Applications should feel operational first and branded second.

---

## 1. Shell Regions

An EverGray application shell is composed of distinct structural regions. Each region has a defined role, visual weight, and token mapping. Products may omit regions that are not relevant, but any region that is present must follow the guidance here.

### 1.1 Top App Bar

The top app bar is the persistent horizontal bar at the top of the viewport. It anchors the application identity and provides access to global controls.

**Role:** Brand anchor, global navigation entry point, account and utility access.

**Visual posture:**
- Background: `--color-neutral-chrome` — visually distinct from the page canvas but not heavy.
- Height: Fixed. Should feel compact and structural, not banner-like. A range of `48px`–`56px` is typical for application density.
- Bottom edge: Use `--color-border-edge` for a faint structural separation from the workspace below. The edge should read as a glint, not a hard line.
- Typography: `--typography-size-sm` to `--typography-size-base` for navigation labels. `--typography-weight-medium` for the product name or wordmark.

**Contents (left to right, typical):**
1. Product identity (logo mark or wordmark) — left-aligned, quiet, non-decorative.
2. Primary navigation links — if using top-oriented navigation rather than a sidebar.
3. Spacer.
4. Utility controls — search, notifications, help, settings, account — right-aligned.

**When it should lead visually:** Only at the identity anchor (product name or logo). Everything else in the bar should remain quiet and supportive.

### 1.2 Side Navigation

The side navigation is a vertical panel on the left edge of the viewport. It is the preferred primary navigation pattern for workflow-oriented applications.

**Role:** Primary navigation hub. Contains links to top-level sections and, optionally, nested subsections.

**Visual posture:**
- Background: `--color-neutral-chrome` — same surface level as the top app bar. The side nav and top bar should feel like parts of the same structural frame.
- Width: Fixed in expanded state. A range of `220px`–`260px` is typical. Collapsed state (icon-only) should be `48px`–`64px` wide.
- Right edge: Use `--color-border-edge` for a faint structural boundary against the workspace.
- Padding: `--spacing-sm` to `--spacing-md` internal padding. Navigation items should not touch the edges of the panel.

**When it should lead visually:** Only at the selected/active item. All other items should remain quiet.

### 1.3 Page Header

The page header is the horizontal area at the top of the main content region, below the top app bar. It orients the user within the current section.

**Role:** Page identification, page-level actions, and breadcrumb or contextual navigation.

**Visual posture:**
- Background: Transparent or matching `--color-neutral-canvas` — the page header should feel like part of the content area, not a separate structural bar.
- Bottom edge: Use `--color-border-divider` only when the header needs clear separation from a dense content region below. Omit the border when spacing alone provides enough separation.
- Typography: Page title at `--typography-size-lg` or `--typography-size-xl`, `--typography-weight-semibold`. Breadcrumbs or parent context at `--typography-size-sm`, `--color-text-secondary`.

**Contents (typical):**
1. Breadcrumbs or parent context (optional) — top-left, secondary text.
2. Page title — prominent but not oversized.
3. Page-level actions — right-aligned, primary action uses accent treatment.

**When it should lead visually:** The page title carries the hierarchy. Actions are secondary unless the page is action-oriented.

### 1.4 Section Headers

Section headers subdivide a page into logical groups. They appear within the content area.

**Role:** Grouping and visual scanning within a page.

**Visual posture:**
- Typography: `--typography-size-base` to `--typography-size-md`, `--typography-weight-medium` or `--typography-weight-semibold`.
- Separation: Use `--spacing-xl` above and `--spacing-md` below to create clear grouping through spacing rather than heavy dividers.
- Divider (optional): `--color-border-divider` below the header text. Use only when content density requires explicit separation.

**When it should lead visually:** Section headers should be scannable landmarks, not decorative moments. They lead through weight and spacing, not through color or accent.

### 1.5 Workspace Container

The workspace container is the main content area where the user's primary task lives. It occupies the remaining space after the shell chrome (top bar, sidebar) is subtracted.

**Role:** Primary task surface.

**Visual posture:**
- Background: `--color-neutral-canvas` — the deepest background level, providing maximum contrast against chrome regions.
- Padding: `--spacing-xl` to `--spacing-2xl` from the workspace edges to content. Dense views may use `--spacing-lg`.
- The workspace should feel open and structured. Avoid wrapping the entire workspace in a visible card or container — the chrome regions already provide framing.

**Default containment posture:** The workspace itself is not a card. Content within the workspace may use surface panels (`--color-neutral-surface`) when grouping or elevation is needed, but the workspace background remains the canvas.

### 1.6 Utility Areas

Utility areas contain infrequently accessed controls: settings, help, account management, and administrative functions.

**Role:** Access to supporting and administrative functions without cluttering primary navigation.

**Visual posture:**
- Placement: Bottom of the side navigation, or behind an account/avatar control in the top app bar. Never inline with primary navigation items without clear visual separation.
- Typography and iconography: `--color-text-secondary` or `--color-text-tertiary` — quieter than primary navigation.
- Utility items should feel available but intentionally de-emphasized relative to primary workflow items.

**When it should lead visually:** Never. Utility areas are discovered, not promoted.

---

## 2. Navigation-State Behavior

Navigation must communicate the user's current location and available interactions clearly and confidently without becoming loud. All state treatments use existing design-system tokens.

### 2.1 State Definitions

| State | Visual Treatment | Tokens |
|---|---|---|
| **Default** | Quiet, neutral text with no background emphasis. | Text: `--color-text-secondary`. Background: transparent. |
| **Hover** | Subtle background shift to acknowledge interaction possibility. Text brightens. | Text: `--color-text-primary`. Background: `--color-neutral-surface` (or equivalent subtle shift). Transition: `--motion-duration-fast` / `--motion-easing-default`. |
| **Focus (keyboard)** | Visible focus ring for accessibility. Must be obvious and unambiguous. | Outline: `2px solid --color-border-focus`, offset `2px`. Must meet WCAG 2.2 focus visibility requirements. |
| **Selected / Active** | Current location indicator. Strongest visual signal in the navigation. | Text: `--color-text-primary`, `--typography-weight-medium`. Background: `--color-neutral-surface`. Active indicator: a `2px`–`3px` vertical bar using `--color-accent-solid` on the leading edge (left edge for side nav) or a bottom bar for horizontal nav. |
| **Disabled** | Visually muted, non-interactive. | Text: `--color-text-disabled`. Cursor: `not-allowed`. No hover or focus response. |

### 2.2 Primary vs. Secondary vs. Utility Navigation

| Tier | Emphasis | Persistence | State Behavior |
|---|---|---|---|
| **Primary** | Highest within navigation. Full state spectrum (default, hover, focus, selected, disabled). | Always visible in the shell. | Uses the accent-colored active indicator. Selected state is the strongest signal. |
| **Secondary** | Lower than primary. Appears nested or contextual. | Visible when the parent primary section is active, or within a content region. | Uses subtle background shift for selected state. May omit the accent indicator — a tonal background distinction or `--typography-weight-medium` text is sufficient. |
| **Utility** | Quietest. Should not compete with primary navigation. | Visible but de-emphasized. Grouped separately. | Uses `--color-text-secondary` for default, `--color-text-primary` for hover. No accent indicator. Selected state uses tonal background only. |

### 2.3 Quiet But Unmistakable

Navigation in EverGray applications must follow the system's core principle: _quiet but unmistakable_.

- **Do:** Use tonal background shifts, weight changes, and a restrained accent indicator to communicate state.
- **Do:** Ensure the selected item is immediately identifiable at a glance without scanning.
- **Do:** Let spacing and alignment reinforce grouping and hierarchy.
- **Don't:** Use bold color fills, gradient backgrounds, or heavy borders on navigation items.
- **Don't:** Animate navigation state changes beyond a simple transition (no sliding highlights, expanding backgrounds, or color pulses).
- **Don't:** Use the brand gradient in navigation state treatments. The accent solid color is the appropriate signal.

---

## 3. Hierarchy Rules

### 3.1 Three-Tier Action Hierarchy

EverGray applications should organize controls into three tiers:

**Tier 1 — Primary workflows**
The core reason the user is in the application. These are the main sections visible in primary navigation.

- Always visible in the shell.
- Navigation items are the most prominent in the sidebar or top bar.
- Page-level actions for primary workflows may use accent treatment for the most important action.

**Tier 2 — Supporting utilities**
Functions that support the primary workflow but are not the user's main task: search, filtering, notifications, recently viewed items, quick settings.

- Accessible from the shell but visually secondary to primary navigation.
- May appear in the top app bar (as icon controls) or in a secondary section of the side navigation separated by spacing or a divider.
- Use `--color-text-secondary` and smaller icon sizes to signal lower priority.

**Tier 3 — Administrative and low-frequency controls**
Settings, account management, help, legal, logout.

- Grouped at the bottom of the side navigation or behind an account menu in the top app bar.
- Visually quietest tier. Uses `--color-text-tertiary` for labels or uses only icons without labels.
- Should never compete with Tier 1 for attention.

### 3.2 Page-Level vs. Section-Level vs. Background Actions

| Level | Placement | Visual Weight | Example |
|---|---|---|---|
| **Page-level** | Page header, right-aligned. | Primary action uses accent solid as background (`--color-accent-solid`) with inverse text (`--color-text-inverse`). Secondary page actions use ghost/outline treatment. | "Create Project", "Export Report" |
| **Section-level** | Inline with a section header, or at the top-right of a content group. | Lower emphasis than page-level. Ghost buttons, text-only buttons, or icon buttons. | "Add Row", "Filter", "Sort" |
| **Background utility** | Toolbar or utility strip, often near the top of a workspace or at the top app bar. | Minimal chrome. Icon-only controls with tooltips. | "Refresh", "Toggle view", "Collapse sidebar" |

### 3.3 Preventing Marketing Emphasis in Application Shells

- **Do not** use large typographic moments in application shells. Headlines belong on the marketing website.
- **Do not** use the brand gradient for shell chrome, navigation highlights, or background fills.
- **Do not** use dramatic spacing or composition in shell regions. Application shells are compact and information-efficient.
- **Do not** apply atmospheric effects (blurs, glows, gradient meshes) to any shell region.
- **Do** keep the shell feeling operational: functional, orientation-focused, and calm.
- **Do** treat accent usage as a reward signal (active state, primary CTA) not a structural fill.

---

## 4. Responsive Posture

EverGray products define their own breakpoints, but shell patterns must follow consistent principles when adapting to smaller viewports. The goal is always to preserve orientation and action clarity.

### 4.1 Side Navigation Collapse

As viewport width decreases:

1. **Full expanded** → **Collapsed (icon-only):** The side navigation compresses to its icon-only width (`48px`–`64px`). Labels are hidden; tooltips appear on hover. The workspace reclaims the freed width.
2. **Collapsed** → **Off-canvas (overlay):** Below a product-defined threshold, the side navigation moves off-screen entirely. A hamburger/menu icon in the top app bar toggles an overlay drawer. The drawer slides in from the left over the workspace with `--color-neutral-chrome` background and uses `--motion-duration-normal` / `--motion-easing-out` for entry.
3. The overlay navigation must include a close affordance (icon button or click-outside-to-dismiss).

### 4.2 Top App Bar Simplification

As viewport width decreases:

1. **Labels condense:** Text labels on utility controls may be hidden, leaving icon-only controls.
2. **Utility grouping:** Low-priority utility controls may move behind an overflow menu (three-dot icon).
3. **Product identity:** The wordmark may shorten to a logo mark only.
4. The top app bar height should remain consistent across breakpoints. Do not collapse the bar itself.

### 4.3 Page Header Adaptation

- Long page titles may truncate with an ellipsis.
- Breadcrumbs may collapse to show only the immediate parent with a "..." prefix for deeper paths.
- Page-level actions may regroup: secondary actions move behind an overflow menu; the primary action remains visible.

### 4.4 Workspace Content

Content adaptation within the workspace is a product-specific decision. The design system requires only:

- Content must remain readable and navigable at reduced widths.
- Spacing may tighten (e.g., `--spacing-lg` instead of `--spacing-xl` for workspace padding) but must not collapse to zero.
- Multi-column layouts should stack or collapse rather than horizontally overflow.

### 4.5 Principles for Reduced-Space Patterns

- **Orientation first:** The user must always know where they are (current section, current page, path back).
- **Primary actions stay visible:** The most important action on a page must not be hidden behind overflow menus.
- **Navigation remains accessible:** It may be off-canvas, but the trigger must be persistent and obvious.
- **Do not introduce new patterns at small sizes.** Responsive adaptation compresses or reorganizes existing patterns — it does not introduce nav drawers, bottom bars, or gesture patterns that do not exist at full width unless the product explicitly designs for mobile as a primary context.

---

## 5. Examples and Reference States

### 5.1 Navigation Item State Reference

The following describes the visual treatment for a typical side-navigation item across all interactive states. The same principles apply to horizontal navigation items with directional adjustments (bottom indicator instead of left indicator).

```
┌──────────────────────────────┐
│  Default                     │
│  ┌────────────────────────┐  │
│  │  ○  Section Label      │  │  text: --color-text-secondary
│  │                        │  │  bg: transparent
│  └────────────────────────┘  │
│                              │
│  Hover                       │
│  ┌────────────────────────┐  │
│  │  ○  Section Label      │  │  text: --color-text-primary
│  │  ░░░░░░░░░░░░░░░░░░░░  │  │  bg: --color-neutral-surface
│  └────────────────────────┘  │  transition: fast / ease-default
│                              │
│  Focus (keyboard)            │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━┓  │
│  ┃  ○  Section Label      ┃  │  outline: 2px --color-border-focus
│  ┃                        ┃  │  offset: 2px
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│                              │
│  Selected / Active           │
│  ┌────────────────────────┐  │
│  ▌  ●  Section Label      │  │  text: --color-text-primary (weight-medium)
│  ▌  ░░░░░░░░░░░░░░░░░░░░  │  │  bg: --color-neutral-surface
│  └────────────────────────┘  │  leading indicator: 2-3px --color-accent-solid
│                              │
│  Disabled                    │
│  ┌────────────────────────┐  │
│  │  ○  Section Label      │  │  text: --color-text-disabled
│  │                        │  │  cursor: not-allowed
│  └────────────────────────┘  │  no hover/focus response
└──────────────────────────────┘
```

### 5.2 Primary Workspace Shell

The standard shell layout for a workflow application. This is the default pattern for EverGray products.

```
┌─────────────────────────────────────────────────────────────┐
│  Top App Bar  (--color-neutral-chrome)                      │
│  ┌──────┐                                    ┌──┐  ┌──┐ ┌──┐│
│  │ Logo │  nav · nav · nav                   │🔍│ │🔔│ │👤││
│  └──────┘                                    └──┘  └──┘ └──┘│
├────────┬────────────────────────────────────────────────────┤
│ Side   │  Page Header                                       │
│ Nav    │  ┌─────────────────────────────────────┐  ┌──────┐ │
│        │  │  Breadcrumb > Path                  │  │Action│ │
│ (chr)  │  │  Page Title                         │  └──────┘ │
│        │  └─────────────────────────────────────┘           │
│ ○ Sec  ├────────────────────────────────────────────────────┤
│ ● Sec  │  Workspace  (--color-neutral-canvas)               │
│ ○ Sec  │                                                    │
│ ○ Sec  │  ┌──────────────────┐ ┌──────────────────┐         │
│        │  │  Content panel   │ │  Content panel   │         │
│        │  │  (surface)       │ │  (surface)       │         │
│ ────── │  └──────────────────┘ └──────────────────┘         │
│ ○ Set  │                                                    │
│ ○ Help │                                                    │
└────────┴────────────────────────────────────────────────────┘

Legend:
  chr   = --color-neutral-chrome
  ●     = selected nav item (accent indicator)
  ○     = default nav item
  ────  = divider separating utility nav from primary nav
```

### 5.3 Lightweight Secondary Shell

For simpler contexts — settings pages, single-purpose utilities, onboarding flows — a lighter shell is appropriate.

```
┌─────────────────────────────────────────────────────────────┐
│  Top App Bar  (--color-neutral-chrome)                      │
│  ┌──────┐                                          ┌──┐     │
│  │ Logo │  ← Back to [Parent]                      │👤│     │
│  └──────┘                                          └──┘     │
├─────────────────────────────────────────────────────────────┤
│  Page Header                                                │
│  Page Title                               ┌────────────────┐│
│                                           │ Primary Action ││
│                                           └────────────────┘│
├─────────────────────────────────────────────────────────────┤
│  Workspace  (--color-neutral-canvas)                        │
│                                                             │
│            ┌───────────────────────────┐                    │
│            │  Centered content panel   │                    │
│            │  (surface)                │                    │
│            └───────────────────────────┘                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Differences from primary shell:
  - No side navigation (back-navigation replaces it)
  - Reduced utility controls in the top bar
  - Content may be centered or narrower for focused tasks
```

### 5.4 Token Quick Reference

For convenience, the tokens most commonly used in shell and navigation implementation:

| Purpose | Token |
|---|---|
| Shell chrome background | `--color-neutral-chrome` |
| Workspace background | `--color-neutral-canvas` |
| Content panels | `--color-neutral-surface` |
| Structural edge | `--color-border-edge` |
| Structural divider | `--color-border-divider` |
| Focus ring | `--color-border-focus` |
| Active indicator | `--color-accent-solid` |
| Primary text | `--color-text-primary` |
| Secondary text | `--color-text-secondary` |
| Disabled text | `--color-text-disabled` |
| Fast transition | `--motion-duration-fast` |
| Panel transition | `--motion-duration-normal` |
| Default easing | `--motion-easing-default` |
| Entrance easing | `--motion-easing-out` |
| Internal spacing | `--spacing-sm`, `--spacing-md` |
| Workspace padding | `--spacing-xl`, `--spacing-2xl` |
| Nav item radius | `--radii-md` |

---

## Cross-References

- [System Spec — Application Expression](system-spec.md#113-application-expression) — the foundational posture rules for application surfaces.
- [System Spec — Navigation Guidance](system-spec.md#122-navigation) — component-level behavioral principles.
- [System Spec — Surface Model](system-spec.md#6-surface-model) — edge treatment, depth model, and layering philosophy.
- [Consumption Guide](consumption-guide.md) — how downstream products import and use design-system tokens.
