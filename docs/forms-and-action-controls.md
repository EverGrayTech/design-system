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

## 2. Action Hierarchy

Buttons are the primary mechanism through which users commit decisions, trigger workflows, and navigate between states. EverGray applications must present a clear, predictable action hierarchy so users can instantly distinguish the most important action from supporting alternatives.

### 2.1 Action Variants

Every button in an EverGray application maps to one of the following semantic variants. Products must not invent additional emphasis levels.

#### Primary

The single most important action on the current page or within the current context. There should be at most one primary action visible per logical section.

| Property | Value |
|---|---|
| Background | `--color-accent-solid` |
| Text | `--color-text-inverse` |
| Border | none |
| Radius | `--radii-md` |
| Weight | `--typography-weight-medium` |

| State | Treatment |
|---|---|
| **Rest** | Background: `--color-accent-solid`. Text: `--color-text-inverse`. |
| **Hover** | Background: `--color-accent-solid-hover`. |
| **Focus** | Outline ring: `2px solid --color-border-focus`, offset `2px`. |
| **Active / Pressed** | Background darkens slightly (reduce lightness ~8% from solid). |
| **Disabled** | Background: `--color-neutral-elevated`. Text: `--color-text-disabled`. Cursor: `not-allowed`. |
| **Loading** | Text replaced by a subtle spinner or animated dots. Background remains `--color-accent-solid`. The button is non-interactive while loading. Width should not change. |

**When to use:** Page-level commit actions ("Save", "Create Project", "Submit"), dialog confirmations, and workflow-completion actions.

**When not to use:** Do not use primary for every action on a page. If multiple actions feel primary, demote all but one.

#### Secondary

Supporting actions that complement the primary action but carry less weight.

| Property | Value |
|---|---|
| Background | `transparent` |
| Text | `--color-text-primary` |
| Border | `1px solid --color-border-divider` |
| Radius | `--radii-md` |
| Weight | `--typography-weight-medium` |

| State | Treatment |
|---|---|
| **Rest** | Border: `--color-border-divider`. Text: `--color-text-primary`. Background: transparent. |
| **Hover** | Background: `--color-neutral-surface`. Border: `--color-border-focus`. |
| **Focus** | Outline ring: `2px solid --color-border-focus`, offset `2px`. |
| **Active / Pressed** | Background: `--color-neutral-elevated`. |
| **Disabled** | Border: `--color-border-edge`. Text: `--color-text-disabled`. |
| **Loading** | Same spinner treatment as primary but in `--color-text-secondary`. |

**When to use:** "Cancel", "Back", "Export", secondary form actions, and alternative paths adjacent to a primary action.

#### Tertiary / Quiet

Low-emphasis actions that should be available but not visually competing — inline actions, auxiliary controls, and navigation-like affordances within content.

| Property | Value |
|---|---|
| Background | `transparent` |
| Text | `--color-text-secondary` |
| Border | none |
| Radius | `--radii-md` |
| Weight | `--typography-weight-regular` |

| State | Treatment |
|---|---|
| **Rest** | Text: `--color-text-secondary`. Background: transparent. No border. |
| **Hover** | Text: `--color-text-primary`. Background: `--color-neutral-surface`. |
| **Focus** | Outline ring: `2px solid --color-border-focus`, offset `2px`. |
| **Active / Pressed** | Background: `--color-neutral-elevated`. |
| **Disabled** | Text: `--color-text-disabled`. |

**When to use:** "Learn more", "Reset filters", inline toggle actions, "Add another" links within forms, and low-priority auxiliary actions.

#### Destructive

Actions that delete data, revoke access, or cause irreversible changes. Destructive actions must be visually distinct from standard actions so users do not trigger them accidentally.

| Property | Value |
|---|---|
| Background | `transparent` |
| Text | `--color-semantic-error-foreground` |
| Border | `1px solid --color-semantic-error-foreground` |
| Radius | `--radii-md` |
| Weight | `--typography-weight-medium` |

| State | Treatment |
|---|---|
| **Rest** | Text: `--color-semantic-error-foreground`. Border: `--color-semantic-error-foreground`. Background: transparent. |
| **Hover** | Background: `--color-semantic-error-background`. Border remains. |
| **Focus** | Outline ring: `2px solid --color-border-focus`, offset `2px`. |
| **Active / Pressed** | Background darkens slightly from error-background. |
| **Disabled** | Text: `--color-text-disabled`. Border: `--color-border-edge`. |

**Filled destructive variant:** When a destructive action is confirmed (e.g., inside a confirmation dialog), it may use a filled treatment: background `--color-semantic-error-foreground`, text `--color-text-inverse`. This signals final commitment.

**When to use:** "Delete", "Remove", "Revoke", "Disconnect". Always pair with a confirmation step for irreversible actions.

### 2.2 Accent Usage in Actions

Accent treatment is reserved exclusively for the **primary** action variant. All other variants use neutral, semantic, or transparent treatments.

**Rules:**
- Only `--color-accent-solid` and `--color-accent-solid-hover` may appear as button background fills. Never use `--color-accent-solid-muted` as a button background.
- The brand gradient must not be used as a button fill in application contexts. The gradient is reserved for brand moments on the marketing website.
- Destructive actions use semantic error colors, not accent. Accent is always a positive or forward-moving signal.
- If a page has no clear primary action (e.g., a settings page with only "Save" and "Cancel"), "Save" takes primary, "Cancel" takes secondary. If the page genuinely has no commit action, no accent button is necessary.

### 2.3 Button Hierarchy in Context

#### Page headers

Page-level actions appear in the page header region (see [Application Shell and Navigation](application-shell-and-navigation.md), Section 1.3).

- **Primary action:** Right-aligned, uses the primary variant with accent fill. One per page header.
- **Secondary actions:** Adjacent to primary, using secondary (outline) variant. If more than two secondary actions exist, group extras behind an overflow menu (icon-only "more" button).
- **Destructive page actions** (e.g., "Delete Project") should not appear in the page header. Place them in a settings or danger zone section within the page content.

#### Dense forms

In multi-field forms:

- Place the primary action ("Save", "Submit") and its companion secondary action ("Cancel") at the bottom of the form, left-aligned.
- Do not repeat the primary action at both the top and bottom of a long form. Use a single action group at the form's end.
- If a form is long enough to push the action group below the fold, consider a sticky footer bar containing the actions. The footer bar uses `--color-neutral-chrome` background and `--color-border-edge` top border — matching the shell chrome posture.

#### Inline workflow contexts

In table rows, card footers, and list items:

- Use tertiary (quiet) or icon-only action buttons.
- Do not use primary (accent) buttons inline within repeating content. Accent in a list creates visual noise and undermines the hierarchy.
- Destructive inline actions (e.g., row-level delete) use icon-only buttons with `--color-semantic-error-foreground` icons.

#### Dialog and modal actions

- The primary dialog action (e.g., "Confirm", "Save") uses the primary variant.
- Dismissive actions ("Cancel", "Close") use tertiary or secondary variant.
- Destructive confirmation dialogs use the filled destructive variant for the confirm action.
- Actions are right-aligned at the bottom of the dialog, with the primary action on the far right.

---

## 3. Form Support Text Patterns

Form controls rarely exist in isolation. Labels, helper text, validation messages, and confirmation feedback surround controls to guide the user. These supporting elements must follow a consistent hierarchy so they aid comprehension without overwhelming the control itself.

### 3.1 Labels

Every interactive control must have a visible label. Labels are the primary mechanism for identifying what a control expects.

**Placement:**
- Labels appear **above** their associated control, left-aligned with the control's leading edge.
- Spacing between label and control: `--spacing-xs` (`4px`). This tight coupling makes the association unmistakable.

**Typography:**
- Size: `--typography-size-sm`.
- Weight: `--typography-weight-medium`.
- Color: `--color-text-primary`.
- Letter-spacing: `--typography-letter-spacing-normal`.

**Required indicators:**
- Required fields display a `*` suffix after the label text, in `--color-semantic-error-foreground`. No additional "(required)" text is needed.
- Alternatively, if most fields are required, mark optional fields with "(optional)" in `--color-text-tertiary` instead.

**Rules:**
- Do not use placeholder text as a substitute for a label. Placeholders disappear on input and cannot serve as persistent identification.
- Do not place labels to the left of controls (inline label layout) in standard forms. Side-by-side label placement is acceptable only in very dense, narrow settings panels where vertical space is constrained, and only if the label-to-control alignment is precise and consistent.
- Labels must be programmatically associated with their control (`for`/`id`, `aria-labelledby`, or equivalent).

### 3.2 Helper Text

Helper text provides additional context before the user interacts with a control — clarifying expected format, constraints, or purpose.

**Placement:**
- Helper text appears **below** the control, left-aligned with the control's leading edge.
- Spacing between control and helper text: `--spacing-xs` (`4px`).

**Typography:**
- Size: `--typography-size-xs`.
- Weight: `--typography-weight-regular`.
- Color: `--color-text-tertiary`.

**Rules:**
- Keep helper text to one line when possible. Two lines maximum.
- Helper text is informational, not instructional. Use it for format hints ("YYYY-MM-DD"), constraints ("Maximum 200 characters"), or clarification ("This will be visible to all team members").
- Do not use helper text for every field. Apply it selectively where the label alone is insufficient.
- When an error message appears, helper text is **replaced** by the error message — they do not stack.

### 3.3 Inline Validation and Error Messages

Error messages appear when a control's value fails validation. They must be immediately legible, unambiguous, and positioned where the user is already looking.

**Placement:**
- Error messages appear in the same position as helper text: **below** the control, left-aligned.
- If helper text was present, the error message **replaces** it (not stacks below it).
- Spacing between control and error message: `--spacing-xs` (`4px`).

**Typography:**
- Size: `--typography-size-xs`.
- Weight: `--typography-weight-regular`.
- Color: `--color-semantic-error-foreground`.

**Control state change:**
- The control's border changes to `--color-semantic-error-foreground` (see Section 1.3, Error state).
- The error border persists until the error condition is resolved.

**Timing:**
- **On submission:** Validate all fields and display all errors simultaneously. Scroll to the first error if the form extends beyond the viewport.
- **On blur (field exit):** Validate the field when the user leaves it. This provides early feedback without interrupting active typing.
- **On change (while error is shown):** Once an error is displayed, re-validate as the user corrects the value. Clear the error as soon as the value becomes valid. Do not wait for another blur event.
- **Do not validate on every keystroke** for fields that have no natural per-character validation (e.g., an email field should not show "invalid email" after typing one character).

**Message tone:**
- Error messages should be concise, specific, and actionable.
- **Do:** "Email address is required", "Must be at least 8 characters", "End date must be after start date".
- **Don't:** "Invalid input", "Error", "This field has an error", or any message that fails to explain what is wrong or how to fix it.

**Accessibility:**
- Error messages must be associated with their control via `aria-describedby` or equivalent.
- Use `aria-invalid="true"` on the control when an error is active.
- For form-level error summaries (when multiple fields fail on submission), provide a visible summary at the top of the form with links to each errored field. The summary uses `--color-semantic-error-foreground` text and `--color-semantic-error-background` as a subtle background panel.

### 3.4 Warning Messages

Warning messages indicate potential issues that do not block submission but warrant the user's attention.

**Placement:** Same as error messages — below the control, replacing helper text.

**Typography:**
- Size: `--typography-size-xs`.
- Color: `--color-semantic-warning-foreground`.

**Control state change:**
- Border: `--color-semantic-warning-foreground`. The warning border is less urgent than error but still distinct from the default edge.

**When to use:**
- Approaching a character limit.
- A value that is technically valid but unusual ("This will grant admin access to all users").
- A selection that conflicts with a recommendation but is not forbidden.

### 3.5 Success Confirmation

Success states confirm that a value or action has been accepted. They should be brief and transient — the system should feel confident, not congratulatory.

**Inline field success:**
- Border briefly changes to `--color-semantic-success-foreground`.
- A small success message may appear below the control: `--typography-size-xs`, `--color-semantic-success-foreground`.
- The success state is transient: it should fade back to rest after `2–3 seconds` using `--motion-duration-normal` / `--motion-easing-default`.

**Form-level success:**
- After a successful form submission, display a brief confirmation message near the action that triggered it or at the top of the form area.
- Use `--color-semantic-success-foreground` text. A subtle `--color-semantic-success-background` panel is acceptable for prominent confirmations.
- Do not use alert dialogs or modal confirmations for routine successful saves. The confirmation should be inline and non-disruptive.

**Tone:**
- Keep confirmation messages brief and factual: "Changes saved", "Project created", "Settings updated".
- Avoid celebratory language: no "Great job!", "Awesome!", or exclamation-heavy messaging. The system should feel matter-of-fact.

### 3.6 Message Hierarchy Summary

When multiple types of support text could apply to a single control, the following priority determines what is shown:

| Priority | Message Type | Replaces |
|---|---|---|
| 1 (highest) | Error | Helper text, warning |
| 2 | Warning | Helper text |
| 3 | Success (transient) | Helper text (temporarily) |
| 4 (lowest) | Helper text | — |

Only one support message is visible per control at a time. They do not stack vertically.

---

## 4. Density and Spacing Posture

EverGray applications serve workflow-oriented users who value efficiency. Form density must support speed and scanning without making the interface feel cramped, rushed, or generic. The goal is a premium technical character: controlled, measured, and calm — not consumer-SaaS soft, not enterprise-legacy dense.

### 4.1 Control Sizing Tiers

The system supports two sizing tiers. Products should choose a default tier and use it consistently, switching tiers only when context demands it.

| Tier | Height (single-line) | Use Case |
|---|---|---|
| **Default** | `36px`–`40px` | Standard forms, settings pages, dialog forms, page-level inputs |
| **Compact** | `32px` | Toolbars, table-inline controls, filter bars, dense action clusters |

- Do not mix tiers arbitrarily within the same form. If a form uses default sizing, all its controls should be default.
- Compact tier is appropriate when controls are embedded in a data-dense context (e.g., inline table editing, filter bars above a list) where the surrounding content already establishes a tighter density.
- Do not go below `32px` for any interactive control. Controls smaller than this compromise click targets and readability on the dark theme.

### 4.2 Vertical Spacing in Stacked Forms

Stacked forms (the most common layout) place fields in a vertical sequence. Spacing between fields creates grouping, rhythm, and breathing room.

**Between individual fields (label + control + support text as one unit):**
- Standard gap: `--spacing-lg` (`16px`).
- This provides clear separation between fields without creating excessive whitespace.

**Between field groups (related fields under a section header):**
- Gap before a section header: `--spacing-xl` (`24px`).
- Gap after a section header (before the first field): `--spacing-md` (`12px`).
- This creates a visible grouping boundary that is reinforced by Section Header guidance (see [Application Shell and Navigation](application-shell-and-navigation.md), Section 1.4).

**Between the last field and the action group:**
- Gap: `--spacing-xl` (`24px`). The action group should feel clearly separated from the form content — it is a conclusion, not another field.

### 4.3 Horizontal Spacing

**Internal control padding:**
- Horizontal padding inside text inputs, selects, and textareas: `--spacing-md` (`12px`).
- This provides comfortable breathing room for value text without making the control feel oversized.

**Button internal padding:**
- Horizontal padding: `--spacing-lg` (`16px`) minimum. Buttons should feel substantial but not bloated.
- Compact buttons (in toolbars): `--spacing-md` (`12px`) horizontal padding.

**Gap between adjacent buttons (action groups):**
- `--spacing-sm` (`8px`) between buttons in the same action group.
- This keeps the group visually cohesive without the buttons touching or feeling crowded.

### 4.4 Inline Field Clusters

Some workflows place multiple controls on a single row — date ranges, coordinate pairs, compound filters.

**Rules:**
- Gap between inline controls: `--spacing-md` (`12px`).
- All controls in an inline cluster should share the same height tier.
- Labels remain above each control, even in inline layouts. Do not remove labels to save horizontal space.
- If the inline cluster includes a connecting element (e.g., "to" between date fields, "×" between dimensions), render it as static text at `--color-text-tertiary`, vertically centered with the controls, with `--spacing-sm` on each side.
- Inline clusters must collapse to stacked layout on narrow viewports. The breakpoint is a product-level decision, but the design system requires that inline controls never overflow their container.

### 4.5 Grouped Controls: Checkbox and Radio Lists

Checkbox groups and radio groups have their own density rhythm.

**Within a group:**
- Vertical gap between options: `--spacing-sm` (`8px`).
- This keeps the group compact and scannable.

**Between the group label and the first option:**
- Gap: `--spacing-xs` (`4px`).

**Between a checkbox/radio group and the next field:**
- Use the standard `--spacing-lg` (`16px`) gap, same as any other field-to-field spacing.

### 4.6 Action Clusters in Toolbars and Inline Contexts

When multiple icon-only buttons or compact buttons appear in a row (toolbars, table action columns, card footers):

- Gap between icon-only buttons: `--spacing-xs` (`4px`).
- Gap between compact text buttons: `--spacing-sm` (`8px`).
- Toolbar padding: `--spacing-sm` (`8px`) vertical, `--spacing-md` (`12px`) horizontal.
- Separate logical groups within a toolbar with `--spacing-md` (`12px`) or a faint `--color-border-divider` vertical separator.

### 4.7 Form Width and Containment

Forms should have a sensible maximum width so lines of text remain readable and controls do not stretch to unreasonable widths.

- **Recommendation:** Maximum form width of `560px`–`640px` for standard single-column forms.
- **Settings panels and narrow contexts:** `400px`–`480px`.
- **Full-width contexts** (e.g., a form embedded in a wide workspace): Constrain individual controls to a `max-width` even if the container is wider. Text inputs wider than `~480px` become harder to scan.
- Multi-column form layouts (two fields side by side) may use up to `~800px` total width.

These are recommendations, not hard constraints. Products may adjust based on content, but the principle is: controls should feel contained and controlled, not stretched to fill available space.

### 4.8 What to Avoid

- **Do not** use `--spacing-2xs` (`2px`) between form elements. This creates a cramped, aggressive density that undermines the system's calm character.
- **Do not** use `--spacing-2xl` (`32px`) or larger between fields in an application form. This creates a marketing-site airiness that wastes space and slows scanning in workflow contexts.
- **Do not** add decorative padding, oversized section dividers, or card wrappers around individual fields. Each field is already a distinct unit through its label, control, and support text — additional visual chrome is unnecessary.
- **Do not** mix compact and default controls in the same form without a clear contextual reason (e.g., a compact filter bar above a default-sized creation form).

---
