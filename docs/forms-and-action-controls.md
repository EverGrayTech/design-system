# Forms and Action Controls Guidance

This document defines the shared design-system guidance for form controls, action variants, and supporting form text in EverGray applications. It enables operational products to build consistent, calm, and precise workflow-heavy forms without inventing local visual rules.

This guidance follows the application expression defined in [System Spec](system-spec.md): quiet, operational, precise, and restrained. Forms should feel reliable and efficient — never decorative, inflated, or playful.

---

## 1. Core Control Patterns

EverGray applications rely on a small set of foundational controls that appear across nearly every workflow. Each control follows the same visual philosophy: understated shells, clear focus states, legible content, and precise edge treatment.

### 1.1 Foundational vs. Optional Controls

**Foundational controls** — expected in every EverGray application. The guidance in this document fully defines their structure, states, and behavior:

- Text input
- Textarea
- Select / dropdown trigger
- Button (all action variants)

**Optional controls** — supported in the design system but not required in every product. Guidance is provided for visual posture and state behavior:

- Checkbox
- Radio
- Toggle / switch
- Icon-only action button

Products may introduce additional specialized controls, but any control that appears must follow the visual language defined here. Do not invent new edge treatments, focus styles, or emphasis postures locally.

### 1.2 Universal Control Properties

All controls share the following baseline structural expectations:

**Containment:**
- Controls live within a defined bounding box. The boundary is expressed through a faint edge, not a heavy outline.
- Border: `1px solid --color-border-edge` at rest. This should read as a glint, not a frame.
- Border radius: `--radii-md` for standard controls. Use `--radii-sm` only for very small or inline controls. Never use `--radii-full` for rectangular input fields.
- Background: `--color-neutral-surface` — one step above the canvas, providing subtle containment without creating a floating-card effect.

**Typography:**
- Input text and button labels: `--typography-size-sm` to `--typography-size-base`, `--typography-weight-regular`.
- Font family: `--typography-family-sans` for all controls. Monospaced type (`--typography-family-mono`) is permitted inside inputs only when the content is explicitly code or technical data.

**Sizing:**
- Default height: `36px`–`40px` for single-line controls (text input, select trigger, buttons). This supports information-dense workflows while remaining comfortable.
- Compact variant: `32px` may be used in toolbars, table rows, or inline action clusters where density is necessary.
- Textarea height: Determined by content or a `rows` attribute. Minimum visible height should accommodate at least 3 lines.

**Transitions:**
- All interactive state changes (hover, focus, active) use `--motion-duration-fast` / `--motion-easing-default`.
- Avoid motion on static properties like label visibility or placeholder shifts. Keep transitions limited to border color, background color, and box-shadow.

### 1.3 Text Input

The text input is the most common form control. It must feel precise and legible at all times.

**Structure:**
- Single-line input field with faint edge containment.
- Placeholder text: `--color-text-tertiary`. Placeholder must not carry essential information — it is a hint, not a label.
- Value text: `--color-text-primary`.
- Background: `--color-neutral-surface`.

**States:**

| State | Border | Background | Text | Additional |
|---|---|---|---|---|
| **Rest** | `--color-border-edge` | `--color-neutral-surface` | Value: `--color-text-primary`, Placeholder: `--color-text-tertiary` | — |
| **Hover** | `--color-border-divider` | `--color-neutral-surface` | No change | Subtle edge brightening signals interactivity |
| **Focus** | `--color-border-focus` | `--color-neutral-surface` | No change | Box-shadow ring: `0 0 0 2px --color-border-focus` offset from the border. Focus must be obvious per WCAG 2.2. |
| **Disabled** | `--color-border-edge` at reduced opacity | `--color-neutral-canvas` | `--color-text-disabled` | Cursor: `not-allowed`. No hover or focus response. |
| **Read-only** | `--color-border-edge` | `--color-neutral-canvas` | `--color-text-secondary` | Cursor: `default`. Selectable but not editable. No focus ring on click; keyboard focus still shows ring. |
| **Error** | `--color-semantic-error-foreground` | `--color-neutral-surface` | No change to value text | Persistent error border replaces the edge token. See Section 3 for error messaging. |
| **Success** | `--color-semantic-success-foreground` | `--color-neutral-surface` | No change | Transient — shown briefly after successful validation, then returns to rest. |

**Prefix and suffix slots:**
- Text inputs may include a leading icon or text prefix (e.g., a search icon, currency symbol) and/or a trailing icon or action (e.g., a clear button, visibility toggle).
- Prefix/suffix elements use `--color-text-tertiary` at rest, `--color-text-secondary` when the input is focused.
- Trailing actions (clear, toggle) should be icon-only and use the icon-only action posture defined in Section 1.8.

### 1.4 Textarea

The textarea follows the same visual language as the text input but accommodates multi-line content.

**Structure:**
- Multi-line input with the same edge and background treatment as text input.
- Vertical resize handle is permitted. Horizontal resize should be disabled to prevent layout breakage.
- Line-height: `--typography-line-height-normal` to support comfortable reading and editing.

**States:** Identical to text input (Section 1.3).

**Behavioral notes:**
- Auto-growing textareas (expanding height as content grows) are acceptable but must have a sensible max-height to prevent the control from dominating the page.
- Character count indicators, when present, should appear below the textarea in `--color-text-tertiary`, `--typography-size-xs`. Use `--color-semantic-warning-foreground` when approaching the limit and `--color-semantic-error-foreground` when exceeded.

### 1.5 Select / Dropdown Trigger

The select trigger is a single-line control that opens a dropdown menu. This guidance covers the trigger itself; dropdown panel styling follows the overlay guidance (see future overlay patterns document).

**Structure:**
- Visually identical to a text input at rest, with a trailing chevron icon indicating expandability.
- Chevron icon: `--color-text-tertiary` at rest, `--color-text-secondary` on hover/focus.
- Selected value text: `--color-text-primary`.
- Placeholder (when no value selected): `--color-text-tertiary`.

**States:** Identical to text input, with the following additions:

| State | Additional Behavior |
|---|---|
| **Open** | Border: `--color-border-focus`. Chevron rotates 180° using `--motion-duration-fast` / `--motion-easing-default`. The dropdown panel appears below (or above if space requires). |

**Behavioral notes:**
- Native `<select>` elements are acceptable for simple cases. Custom select implementations must replicate full keyboard navigation (arrow keys, type-ahead, Enter to select, Escape to close).
- Multi-select triggers should display selected count or chips. Chips use `--color-neutral-elevated` background, `--color-text-primary` text, `--radii-sm` radius, and a close icon using the icon-only action posture.

### 1.6 Checkbox

Checkboxes indicate binary or mixed-state selections within forms or lists.

**Structure:**
- Box size: `16px` × `16px`. This balances legibility with density.
- Border: `1px solid --color-border-divider` at rest — slightly more visible than the edge token to ensure the small control reads clearly.
- Background (unchecked): `transparent`.
- Background (checked): `--color-accent-solid`.
- Check mark: `--color-text-inverse`, crisp and geometric.
- Indeterminate state: A horizontal bar centered in the box, same styling as the check mark.
- Border radius: `--radii-sm`.

**States:**

| State | Visual Treatment |
|---|---|
| **Rest (unchecked)** | Border: `--color-border-divider`. Background: transparent. |
| **Hover** | Border: `--color-border-focus`. Background: transparent (unchecked) or `--color-accent-solid-hover` (checked). |
| **Focus** | Outline ring: `2px solid --color-border-focus`, offset `2px`. |
| **Checked** | Background: `--color-accent-solid`. Border: `--color-accent-solid`. Check icon visible. |
| **Disabled** | Border: `--color-border-edge`. Background: `--color-neutral-canvas` (unchecked) or `--color-text-disabled` (checked). Cursor: `not-allowed`. |

**Label association:**
- Every checkbox must have a visible text label positioned to its right, spaced `--spacing-sm` from the box.
- The label is the click target — the clickable area extends across the full label, not just the box.
- Label text: `--typography-size-sm` to `--typography-size-base`, `--color-text-primary`.

### 1.7 Radio

Radio buttons indicate exclusive selection within a group.

**Structure:**
- Circle size: `16px` × `16px`.
- Border: `1px solid --color-border-divider` at rest.
- Background (unselected): `transparent`.
- Background (selected): The outer circle border becomes `--color-accent-solid`, and a filled inner circle (`8px` diameter) appears centered in `--color-accent-solid`.
- Border radius: `--radii-full`.

**States:** Follow the same state model as checkbox (Section 1.6), substituting the inner circle for the check mark.

**Label association:** Same rules as checkbox.

**Group behavior:**
- Radio groups must have a visible group label (fieldset legend or equivalent) positioned above the group.
- Individual options stack vertically with `--spacing-sm` between items. Horizontal layout is acceptable only when there are 2–3 short-label options.

### 1.8 Icon-Only Action Button

Icon-only buttons provide compact actions where a text label would create unnecessary noise — typically in toolbars, table rows, or trailing input slots.

**Structure:**
- Size: `32px` × `32px` (compact) or `36px` × `36px` (default). The icon is centered within the bounding box.
- Icon size: `16px` or `20px`, depending on the control context.
- Background: `transparent` at rest.
- Border: none at rest.
- Border radius: `--radii-md`.
- Icon color: `--color-text-secondary` at rest.

**States:**

| State | Visual Treatment |
|---|---|
| **Rest** | Icon: `--color-text-secondary`. Background: transparent. |
| **Hover** | Icon: `--color-text-primary`. Background: `--color-neutral-surface`. |
| **Focus** | Outline ring: `2px solid --color-border-focus`, offset `2px`. |
| **Active / Pressed** | Background: `--color-neutral-elevated`. |
| **Disabled** | Icon: `--color-text-disabled`. No hover or focus response. |

**Behavioral notes:**
- Every icon-only button must have an accessible label (`aria-label` or equivalent).
- Tooltips are strongly recommended. They should appear after a short delay (`--motion-duration-normal`) and use `--color-neutral-elevated` background with `--color-text-primary` text.
- Destructive icon-only actions (e.g., delete) should use `--color-semantic-error-foreground` for the icon color at rest, with the standard hover background.

---
