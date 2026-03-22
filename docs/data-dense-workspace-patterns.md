# Data-Dense Workspace Patterns Guidance

This document defines shared design-system guidance for lists, table-like layouts, row summaries, grouped metadata, and other data-dense workspace surfaces in EverGray Tech applications. It enables operational products to present dense information with consistent hierarchy, calm density, and precise interaction states.

This guidance follows the application expression defined in [System Spec](system-spec.md): quiet, operational, precise, and restrained. Dense surfaces should feel efficient and scannable — never cluttered, striped, or ornamental.

---

## 1. Dense-Surface Structure

EverGray Tech applications are workflow-oriented tools that frequently present lists of records, metadata panels, grouped properties, and tabular data. These surfaces carry more information per square pixel than any other part of the interface. Their structure must preserve legibility under load without resorting to heavy visual chrome.

### 1.1 Pattern Types

Data-dense surfaces in EverGray Tech applications fall into three structural categories. Each has distinct strengths, and the choice between them depends on content shape, comparison needs, and interaction model.

#### Table Layout

Columnar data aligned in a grid with headers, rows, and optional footers.

**When to use:**
- Records share a consistent set of attributes that benefit from column alignment.
- Users need to compare values across rows (dates, statuses, counts, assignments).
- Sorting and filtering by individual columns is useful.
- The surface presents five or more attributes per record.

**When not to use:**
- Records have highly variable shapes (some fields present, others absent).
- The primary interaction is reading a narrative or detail-heavy block, not scanning structured attributes.
- Mobile or narrow viewports where columns would collapse to a single stack anyway.

**Structural posture:**
- Background: `--color-neutral-canvas` for the table body. The table surface should feel integrated into the workspace, not floating as a separate card unless the page context requires a contained panel.
- Header row: `--color-neutral-surface` background, `--typography-size-xs` or `--typography-size-sm`, `--typography-weight-medium`, `--color-text-secondary`. Headers should feel structural but quiet — they orient, they do not announce.
- Row height: `36px`–`44px` for standard density. Compact tables may use `32px`–`36px`. Rows taller than `48px` typically indicate a stacked-row pattern is more appropriate.
- Column padding: `--spacing-md` (`12px`) horizontal padding per cell. First and last cells may use `--spacing-lg` (`16px`) for visual breathing room against the table edge.
- Row dividers: `1px solid --color-border-edge` between rows. These should read as faint structure, not as a striped pattern. Do not use alternating row backgrounds — this creates a visual pattern that competes with the data itself.

#### Stacked Row Summary

Each record occupies a horizontal row, but internal content is arranged as a small vertical or mixed-axis layout rather than strict columns.

**When to use:**
- Records have a strong identity line (name, title, avatar) with supporting metadata below or beside it.
- The number of attributes per record is small or variable.
- The surface serves as a navigation list where users select a record to see its full detail.
- Mobile or narrow viewports where column alignment breaks down.

**When not to use:**
- Users need to compare specific attributes across records (column alignment is better).
- Records have five or more comparable attributes (table layout is better).

**Structural posture:**
- Background: `--color-neutral-canvas` for the list body, matching the workspace. Rows may use `--color-neutral-surface` on hover/selection but not at rest.
- Row height: Variable, but typically `48px`–`72px` depending on content lines. A stacked row with a title and one metadata line fits comfortably in `56px`–`64px`.
- Row padding: `--spacing-md` (`12px`) to `--spacing-lg` (`16px`) vertical, `--spacing-lg` (`16px`) horizontal.
- Row dividers: `1px solid --color-border-edge` between rows, same as tables. Alternatively, spacing alone (`--spacing-xs` to `--spacing-sm` gap between rows) may provide sufficient separation when rows have internal padding. Choose one separator strategy and apply it consistently within a surface.

#### Grouped Metadata Block

A panel or section that presents a set of key-value pairs, property groups, or structured summaries — typically for a single record's detail view.

**When to use:**
- Showing the properties of a selected record, settings object, or entity.
- Presenting read-only metadata organized by category.
- Detail panels, sidebars, and inspector views.

**When not to use:**
- Listing multiple records (use table or stacked row instead).
- Editable forms (use form guidance from [Forms and Action Controls](forms-and-action-controls.md)).

**Structural posture:**
- Container: `--color-neutral-surface` background with `--color-border-edge` border and `--radii-md` radius when the block is a contained panel. If the metadata is embedded directly in the workspace canvas, no container border is needed.
- Section headings within the block: `--typography-size-sm`, `--typography-weight-semibold`, `--color-text-primary`. Separate sections with `--spacing-xl` (`24px`) above and `--spacing-md` (`12px`) below the heading.
- Key-value layout: Keys on the left (or above) in `--color-text-secondary`, `--typography-size-xs` or `--typography-size-sm`. Values on the right (or below) in `--color-text-primary`, `--typography-size-sm` or `--typography-size-base`. Horizontal key-value pairs should align consistently across rows.
- Row spacing: `--spacing-sm` (`8px`) to `--spacing-md` (`12px`) between key-value pairs.

### 1.2 Spacing and Dividers

Dense surfaces use spacing and dividers to create structure. The system distinguishes between three separation mechanisms:

| Mechanism | Token | Use When |
|---|---|---|
| **Row divider** | `1px solid --color-border-edge` | Between rows in a list or table. Faint, structural, not decorative. |
| **Section divider** | `1px solid --color-border-divider` | Between logical groups within a surface (e.g., between "Active" and "Archived" row groups in a list). Slightly more prominent than a row divider. |
| **Spacing gap** | `--spacing-sm` to `--spacing-lg` | Between rows or groups when lines are unnecessary. Preferred when rows have sufficient internal padding and visual weight to stand alone. |

**Rules:**
- Do not combine dividers and spacing gaps for the same separation. Choose one strategy per surface and apply it consistently.
- Row dividers should be full-bleed within the table or list container, extending to the internal content edges (not to the absolute container edge if the container has padding).
- Section dividers may extend full-width within their container.
- Do not use thick dividers, colored dividers, or double-line separators. All dividers use the border tokens — faint and structural.

### 1.3 Containment Posture

Dense surfaces exist within the workspace. Their containment should feel integrated, not independently styled.

**On the workspace canvas (`--color-neutral-canvas`):**
- A table or list placed directly on the canvas needs no wrapping card or surface panel. The data rows are the content.
- A header row or toolbar above the data may use `--color-neutral-surface` to provide subtle separation from the data body.

**Within a surface panel (`--color-neutral-surface`):**
- When the dense surface is one section of a larger page (e.g., a "Recent Activity" panel within a dashboard), the panel container provides the visual grouping. The data inside uses `--color-neutral-surface` as its effective background.
- Nested surfaces (a card within a card) should be avoided. If a metadata block appears inside a panel, it should share the panel's background — not introduce a third surface level.

**Rules:**
- Do not wrap every table or list in a visible bordered card. Use containment only when the dense surface is one of multiple content regions that need visual separation.
- Do not apply `--color-neutral-elevated` to table or list backgrounds. The elevated surface level is reserved for overlays, popovers, and tooltips — not for workspace content.

---

## 2. Scan Hierarchy

Dense surfaces succeed or fail based on how quickly a user can locate the information they need. Scan hierarchy defines the visual weight assigned to each category of content within a row or metadata block so users can orient instantly.

### 2.1 Content Priority Tiers

Within any dense row — whether a table row, stacked summary, or metadata block — content falls into a priority hierarchy. Higher-priority elements receive more visual weight; lower-priority elements recede.

| Priority | Content Type | Examples | Visual Weight |
|---|---|---|---|
| **1 — Primary identity** | The entity name, title, or key identifier | Project name, user name, task title, file name | `--color-text-primary`, `--typography-weight-medium`, `--typography-size-sm` or `--typography-size-base` |
| **2 — State / status** | Current condition of the record | Status badge, priority indicator, active/archived flag | Compact indicator using semantic or neutral colors. See Section 2.3. |
| **3 — Key metadata** | The most decision-relevant supporting attributes | Due date, assignee, category, last modified | `--color-text-secondary`, `--typography-weight-regular`, `--typography-size-sm` |
| **4 — Action cues** | Affordances for the next step | Edit, delete, open, quick actions | Icon-only buttons in `--color-text-secondary` (see [Forms and Action Controls](forms-and-action-controls.md), Section 1.8). Visible on hover or always visible depending on surface density. |
| **5 — Secondary analytics** | Supplementary counts, scores, or derived values | View count, completion percentage, word count | `--color-text-tertiary`, `--typography-size-xs`. These should never compete with primary identity or key metadata. |

### 2.2 Typographic Hierarchy in Dense Rows

Typography is the primary tool for establishing scan hierarchy in dense surfaces. Color and weight do the work — do not rely on decorative treatments, icons, or emphasis backgrounds.

**Table rows:**
- Primary identity column: `--color-text-primary`, `--typography-weight-medium`.
- All other columns: `--color-text-secondary`, `--typography-weight-regular`.
- Timestamp or date columns may use `--color-text-tertiary` if they are supporting information, not the primary sort dimension.
- Monospaced type (`--typography-family-mono`) may be used for IDs, codes, hashes, or technical identifiers. Keep it at `--typography-size-xs` or `--typography-size-sm` so it does not visually dominate.

**Stacked row summaries:**
- Title line: `--color-text-primary`, `--typography-weight-medium`, `--typography-size-sm` or `--typography-size-base`.
- Metadata line: `--color-text-secondary`, `--typography-weight-regular`, `--typography-size-xs` or `--typography-size-sm`.
- If a row has two metadata lines, the second should use `--color-text-tertiary` to create a clear fade in importance.

**Grouped metadata blocks:**
- Key labels: `--color-text-secondary`, `--typography-size-xs` or `--typography-size-sm`.
- Values: `--color-text-primary`, `--typography-size-sm` or `--typography-size-base`.
- The key-to-value contrast creates the scan pattern. Keys orient; values answer.

### 2.3 Inline State Indicators

State and status information often appears within dense rows as compact visual cues. These indicators must be immediately legible without dominating the row.

**Indicator types:**

| Type | Structure | Use When |
|---|---|---|
| **Text badge** | Short label (`2–3 words max`) with a subtle background | Showing named states: "Active", "Draft", "Overdue", "Complete" |
| **Dot indicator** | Small colored circle (`6px`–`8px`) beside text | Showing binary or simple state alongside other content |
| **Icon indicator** | Small semantic icon (`14px`–`16px`) | Showing type, category, or a state that benefits from a recognizable symbol |

**Badge styling:**
- Background: Muted semantic color — `--color-semantic-success-background`, `--color-semantic-warning-background`, `--color-semantic-error-background`, or `--color-neutral-surface` for neutral states.
- Text: Corresponding semantic foreground — `--color-semantic-success-foreground`, etc. Neutral state text uses `--color-text-secondary`.
- Typography: `--typography-size-xs`, `--typography-weight-medium`.
- Radius: `--radii-sm`.
- Padding: `--spacing-xs` vertical, `--spacing-sm` horizontal.

**Dot styling:**
- Size: `6px`–`8px` circle.
- Color: Semantic foreground token matching the state. Neutral dots use `--color-text-tertiary`.
- Placement: Inline to the left of the associated text, with `--spacing-xs` gap.

**Rules:**
- Indicators should never be the largest or most colorful element in a row. State is Tier 2 — it supports the primary identity, not replaces it.
- Limit color usage to semantically meaningful states. Do not assign arbitrary colors to non-semantic categories (e.g., do not use red for a project type that is not an error or danger state).
- When a row has no active state to display, the indicator position should be empty or hold a neutral default — not a grey badge that adds visual noise.

### 2.4 Comparison-Friendly Scanning

When users scan a column of similar values (dates, statuses, numbers), alignment and consistency are critical.

**Column alignment rules:**
- Text columns: Left-aligned. Consistent starting position for the eye.
- Number columns: Right-aligned. Decimal points and digit counts should line up.
- Date/time columns: Left-aligned with consistent formatting. Use a fixed-width format (e.g., "Mar 12, 2026") rather than relative time ("3 days ago") in table columns. Relative time may be used in stacked-row metadata.
- Status columns: Left-aligned. Badge or indicator should always occupy the same horizontal band.

**Dark-theme considerations:**
- In dark themes, subtle tonal differences carry more weight than in light themes. Avoid using too many text color levels within a single row — three levels (`--color-text-primary`, `--color-text-secondary`, `--color-text-tertiary`) are sufficient for hierarchy.
- Do not use dim text (`--color-text-disabled`) for visible data. Disabled text is reserved for non-interactive or unavailable elements. Even low-priority metadata should use `--color-text-tertiary` at minimum.
- Table header text in `--color-text-secondary` naturally recedes against `--color-text-primary` body text, creating an automatic scanning rhythm.

---

## 3. Density Posture

EverGray Tech applications must find the narrow band between "efficient" and "cramped." Dense surfaces should feel like refined instruments — information-rich without being noisy, compact without being compressed. The density posture is a defining characteristic of the system's premium technical tone.

### 3.1 Acceptable Compactness Range

Density is measured primarily through row height, internal padding, and inter-element spacing. The system defines a controlled range for each.

**Row height ranges:**

| Context | Minimum | Standard | Maximum |
|---|---|---|---|
| Table row | `32px` | `36px`–`44px` | `48px` |
| Stacked row summary | `44px` | `56px`–`64px` | `80px` |
| Compact toolbar | `32px` | `36px` | `40px` |

- Below the minimum, click targets become unreliable and text becomes cramped on the dark palette.
- Above the maximum, the surface stops feeling dense and starts feeling spacious — appropriate for marketing or detail views, not for operational lists.

**Internal padding ranges:**

| Element | Horizontal | Vertical |
|---|---|---|
| Table cell | `--spacing-md` (`12px`) | `--spacing-sm` (`8px`) |
| Stacked row | `--spacing-lg` (`16px`) | `--spacing-md` (`12px`) to `--spacing-lg` (`16px`) |
| Metadata block row | `--spacing-md` (`12px`) to `--spacing-lg` (`16px`) | `--spacing-sm` (`8px`) |
| Toolbar | `--spacing-md` (`12px`) | `--spacing-sm` (`8px`) |

### 3.2 Grouping Rhythm

Dense surfaces that contain many rows benefit from visual grouping to break the monotony and support scanning.

**Grouped row sections:**
- When a list or table is divided into logical groups (by status, category, date range, etc.), insert a group header row between sections.
- Group header: `--color-neutral-surface` background (or transparent on canvas), `--typography-size-xs`, `--typography-weight-semibold`, `--color-text-secondary`. The header should feel like a quiet shelf, not a visual break.
- Spacing above a group header: `--spacing-md` (`12px`). This is enough to signal a boundary without creating a canyon.
- Spacing below a group header (before the first row): `--spacing-xs` (`4px`) or no additional spacing if the group header already has bottom padding built in.

**Group count badges:**
- A group header may include a count in parentheses or a small badge: "(12)" in `--color-text-tertiary`.
- Do not style group counts as prominent badges. They are supporting information, not primary content.

**Infinite or long lists:**
- Lists longer than ~30 visible rows should strongly consider grouping, pagination, or virtual scrolling.
- If a list has no natural grouping, consider providing a compact pagination bar or "load more" pattern rather than rendering hundreds of rows.

### 3.3 Separator Strength

Dividers in dense surfaces must be calibrated to provide structure without creating a distracting grid.

**Calibration principle:** The denser the surface, the fainter the separators should be. Heavy dividers in a dense table create a cage-like appearance.

| Density | Row Divider | Section Divider |
|---|---|---|
| Standard (36–44px rows) | `--color-border-edge` | `--color-border-divider` |
| Compact (32–36px rows) | `--color-border-edge` (consider omitting if row padding provides sufficient visual separation) | `--color-border-divider` |
| Spacious stacked rows (56–72px) | `--color-border-edge` or spacing-only | `--color-border-divider` |

**Rules:**
- Never use more than two levels of divider strength in a single surface. Edge dividers between rows and slightly stronger dividers between groups is the maximum.
- Horizontal dividers only. Do not add vertical column dividers in tables — column separation comes from padding and alignment, not lines.
- Header-to-body divider: The bottom edge of a table header row uses `--color-border-divider` (one step up from row dividers) to clearly separate the structural header from the data body.

### 3.4 What Premium Density Looks Like

The goal is that an EverGray Tech dense surface looks like it was designed by someone who understands information — not by someone filling a template.

**Premium density characteristics:**
- Consistent vertical rhythm — every row is the same height, every gap is the same width.
- Clear hierarchy — the eye travels to identity first, then state, then metadata, without effort.
- Quiet separators — structure is felt, not stared at.
- Controlled restraint — there is room to breathe, but no room wasted.

**Generic dashboard characteristics (avoid):**
- Rows of varying heights without reason.
- Colored row backgrounds or alternating stripes that create visual noise.
- Oversized badges and icons that inflate row height.
- Thick borders or card wrappers around every table.
- "Data-viz" decorations (sparklines, progress bars, mini-charts) that are not essential to the workflow.

---

## 4. Embedded Interaction Posture

Dense surfaces are not static displays — users hover, select, focus, and act on rows. Interaction states must remain legible and predictable without disrupting the calm structure of the surface.

### 4.1 Row Hover

Hover feedback acknowledges that a row is interactive without creating visual noise.

**Treatment:**
- Background: `--color-neutral-surface` applied to the full row. On surfaces that already use `--color-neutral-surface` as the resting background (e.g., rows inside a surface panel), use `--color-neutral-elevated` for hover instead.
- Transition: `--motion-duration-fast` / `--motion-easing-default`.
- Text colors do not change on hover. The background shift alone signals interactivity.

**Rules:**
- Every interactive row — whether selectable, clickable, or containing inline actions — must show a hover state.
- Non-interactive rows (read-only data in a static display) should not show hover. If the surface is entirely non-interactive, no rows should respond to hover.
- Do not use border-based or outline-based hover indicators on rows. Background tonal shift is the appropriate signal.

### 4.2 Row Selection

Selection indicates that a row is the current working context — the record the user is viewing, editing, or acting on.

**Single selection:**
- Background: `--color-neutral-surface` (persistent, not just on hover).
- Leading indicator: A `2px`–`3px` vertical bar on the left edge of the row using `--color-accent-solid`. This mirrors the navigation active-indicator pattern from [Application Shell and Navigation](application-shell-and-navigation.md), Section 2.1.
- Text: Primary identity text may shift to `--typography-weight-medium` if not already. Other text colors remain unchanged.

**Multi-selection (checkbox-based):**
- Each row includes a leading checkbox (see [Forms and Action Controls](forms-and-action-controls.md), Section 1.6).
- Selected rows receive `--color-neutral-surface` background.
- A bulk-action toolbar appears above the table when one or more rows are selected. The toolbar uses `--color-neutral-surface` background with `--color-border-edge` bottom border and displays the selection count alongside available bulk actions.
- The "select all" checkbox in the header row follows standard indeterminate behavior when some rows are selected.

**Rules:**
- Selection state must be visually distinct from hover. Hover is transient (mouse position); selection is persistent (user choice). The accent indicator bar provides this distinction.
- In a single-selection list (e.g., master-detail layout), clicking a row selects it and deselects the previously selected row.
- Selected rows must remain visually identifiable even when the mouse hovers elsewhere.

### 4.3 Keyboard Focus

Keyboard focus enables navigation through dense surfaces without a mouse. It must be unambiguous and meet WCAG 2.2 focus-visibility requirements.

**Treatment:**
- Focus ring: `2px solid --color-border-focus`, offset `2px` from the row boundary. Applied to the entire row when using arrow-key navigation, or to individual focusable elements within the row (buttons, links) when using Tab.
- The focus ring appears on top of any existing hover or selection background.

**Navigation model:**
- **Arrow keys** move focus between rows (up/down). The focused row should scroll into view if necessary.
- **Tab** moves focus into the row's interactive elements (action buttons, links, checkboxes), then to the next row's interactive elements. Provide a single Tab stop per row when possible, with arrow keys for intra-row navigation.
- **Enter** or **Space** on a focused row activates its primary action (open detail, select, toggle).
- **Escape** clears selection or exits the focused surface, returning focus to the parent context.

**Rules:**
- Keyboard focus must never be invisible. If a surface is keyboard-navigable, every focused state must be visually obvious.
- Do not trap focus within a table or list unless it is a modal context.

### 4.4 Inline Actions

Inline actions allow users to act on a specific row without navigating away. They appear within the row itself, typically at the trailing edge.

**Visibility strategies:**

| Strategy | When to Use |
|---|---|
| **Always visible** | When the surface has 1–2 actions per row that are essential to the workflow (e.g., edit, delete). Always-visible actions use icon-only buttons at `--color-text-tertiary` at rest, brightening to `--color-text-secondary` on row hover. |
| **Visible on hover** | When actions are supporting, not primary. The action column is empty at rest; icon-only buttons appear when the row is hovered. Use `--motion-duration-fast` for the reveal. |
| **Overflow menu** | When a row has three or more actions. Show a single "more" icon-only button (three dots). The menu opens as a popover using `--color-neutral-elevated` background. |

**Styling:**
- Inline action buttons follow the icon-only action posture from [Forms and Action Controls](forms-and-action-controls.md), Section 1.8.
- Action buttons should not increase the row height. They must fit within the standard row dimension.
- Destructive inline actions (delete, remove) use `--color-semantic-error-foreground` for the icon.

**Rules:**
- Inline actions must not be the only way to access critical functionality. Ensure the same actions are available from the record's detail view or a context menu.
- Do not place text-label buttons inline in dense table rows. The text creates horizontal crowding and breaks the column rhythm. Icon-only buttons only.
- On hover-reveal actions: the actions must also be accessible via keyboard focus (visible when the row receives keyboard focus, not just mouse hover).

### 4.5 Selectable Rows vs. Embedded Actions

When a row is both selectable (clicking it navigates or opens a detail view) and contains inline actions (edit, delete buttons), the interaction model must be unambiguous.

**Resolution rules:**
- The row click target activates the primary row action (selection or navigation). Inline action buttons have their own click targets that do not propagate to the row.
- Inline action buttons must stop event propagation (`stopPropagation`) so that clicking an action button does not also select/navigate the row.
- Click targets must be distinct: the action button area is exclusively for the action; the remaining row area is for selection/navigation.
- On touch devices, where hover is unavailable, always-visible inline actions are preferred over hover-reveal.

**Visual disambiguation:**
- Inline action buttons should have a visible hover state (background shift) that distinguishes them from the row's hover state. The button's `--color-neutral-surface` hover background contrasts against the row's hover background.
- If the row is selectable, the cursor should be `pointer` over the row body and `default` (or `pointer`) over the action buttons — but both areas should feel intentionally interactive, not ambiguous.

### 4.6 Expand/Collapse Behavior

Some dense rows contain nested detail that can be expanded inline — sub-rows, property panels, or content previews.

**Trigger:**
- An expand/collapse chevron or disclosure icon on the leading edge of the row, sized `16px`. The icon rotates `90°` when expanded using `--motion-duration-fast` / `--motion-easing-default`.
- The trigger must be keyboard-accessible (focusable, activated by Enter or Space).

**Expanded content area:**
- Background: Same as the row, or `--color-neutral-surface` if the row is on canvas. The expanded area should feel like a continuation of the row, not a separate card.
- Top/bottom separation: `--color-border-edge` dividers at the top and bottom of the expanded area, or use indentation (`--spacing-xl` left padding) to visually associate the expanded content with its parent row.
- The expanded area collapses with `--motion-duration-fast` / `--motion-easing-default`.

**Rules:**
- Do not expand all rows simultaneously by default. Expansion is a user-initiated action on individual rows.
- Expanded rows should not shift sibling rows in a way that causes layout disorientation. The expansion should push content below it downward smoothly.
- Deeply nested expansions (expand within expand) should be avoided. If the content model requires deep nesting, consider a separate detail panel or navigation instead.

---

## 5. Examples and Reference

### 5.1 Table Layout with Interaction States

```
┌──────────────────────────────────────────────────────────────────┐
│  Name           Status      Assignee     Due         Actions     │  header: --color-neutral-surface bg
│                                                                  │  text: --color-text-secondary, weight-medium
├──────────────────────────────────────────────────────────────────┤  divider: --color-border-divider
│  Project Alpha   ● Active   J. Chen      Mar 15      ✎  ⋯      │  identity: --color-text-primary, weight-medium
│──────────────────────────────────────────────────────────────────│  divider: --color-border-edge
│  Project Beta    ● Active   M. Park      Mar 22      ✎  ⋯      │  metadata: --color-text-secondary
│──────────────────────────────────────────────────────────────────│
▌ Project Gamma   ● Draft    A. Rossi     Apr 01      ✎  ⋯       │  SELECTED: surface bg + accent bar
│──────────────────────────────────────────────────────────────────│
│░ Project Delta   ○ Archived  K. Tanaka    Feb 28      ✎  ⋯     │  HOVER: surface bg (tonal shift)
│──────────────────────────────────────────────────────────────────│
│  Project Epsilon ● Active   L. Müller    Apr 10      ✎  ⋯      │
└──────────────────────────────────────────────────────────────────┘

Legend:
  ▌  = 2-3px accent-solid indicator bar (selected row)
  ░  = --color-neutral-surface hover background
  ●  = semantic dot (success-foreground for Active, text-tertiary for Draft)
  ○  = neutral dot (text-tertiary for Archived)
  ✎  = edit icon, --color-text-secondary
  ⋯  = overflow menu icon, --color-text-tertiary
```

### 5.2 Stacked Row Summary List

```
┌────────────────────────────────────────────────────┐
│                                                    │
│  Website Redesign                    ┌──────────┐  │  title: --color-text-primary, weight-medium
│  Marketing · Due Mar 20 · J. Chen    │  Active  │  │  metadata: --color-text-secondary, size-xs
│                                      └──────────┘  │  badge: success-bg + success-fg
│────────────────────────────────────────────────────│  divider: --color-border-edge
│                                                    │
│  API Migration                       ┌──────────┐  │
│  Engineering · Due Apr 05 · M. Park  │ In Review│  │  badge: info-bg + info-fg
│                                      └──────────┘  │
│────────────────────────────────────────────────────│
│                                                    │
│  Q1 Report                           ┌──────────┐  │
│  Finance · Due Mar 31 · A. Rossi     │ Overdue  │  │  badge: error-bg + error-fg
│                                      └──────────┘  │
│                                                    │
└────────────────────────────────────────────────────┘

Row structure:
  Line 1: Title (primary identity, weight-medium)
  Line 2: Category · Due date · Assignee (metadata, text-secondary, size-xs)
  Right:  Status badge (semantic background + foreground, size-xs, weight-medium)
```

### 5.3 Grouped Metadata Block

```
┌────────────────────────────────────────────┐
│  Project Details           (surface panel) │  --color-neutral-surface bg
│                                            │  --color-border-edge border
│  General                                   │  section: weight-semibold, text-primary
│  ─────────────────────────────────────     │  divider: --color-border-divider
│  Name          Website Redesign            │  key: text-secondary, size-xs
│  Owner         J. Chen                     │  value: text-primary, size-sm
│  Created       Mar 01, 2026                │
│  Status        ● Active                    │  spacing: --spacing-sm between rows
│                                            │
│  Timeline                                  │  --spacing-xl above section heading
│  ─────────────────────────────────────     │
│  Start Date    Mar 01, 2026                │
│  Due Date      Mar 20, 2026                │
│  Duration      20 days                     │
│                                            │
└────────────────────────────────────────────┘
```

### 5.4 Multi-Selection with Bulk Actions

```
┌──────────────────────────────────────────────────────────────────┐
│  ☑ 3 selected          ┌────────┐ ┌──────────┐ ┌────────────┐   │  bulk toolbar
│                         │ Export │ │ Archive  │ │  Delete    │   │  --color-neutral-surface bg
│                         └────────┘ └──────────┘ └────────────┘   │  --color-border-edge bottom
├──────────────────────────────────────────────────────────────────┤
│  ☐  Name           Status      Assignee     Due                 │  header
├──────────────────────────────────────────────────────────────────┤
│  ☑  Project Alpha   ● Active   J. Chen      Mar 15              │  SELECTED (surface bg)
│──────────────────────────────────────────────────────────────────│
│  ☐  Project Beta    ● Active   M. Park      Mar 22              │
│──────────────────────────────────────────────────────────────────│
│  ☑  Project Gamma   ● Draft    A. Rossi     Apr 01              │  SELECTED
│──────────────────────────────────────────────────────────────────│
│  ☑  Project Delta   ○ Archived  K. Tanaka    Feb 28             │  SELECTED
└──────────────────────────────────────────────────────────────────┘

  Export, Archive = secondary buttons
  Delete = destructive button
  ☑ = checked checkbox (--color-accent-solid)
  ☐ = unchecked checkbox
```

### 5.5 Side-by-Side Comparison

When users need to compare two records or metadata groups, a side-by-side layout is appropriate.

**Structure:**
- Two metadata blocks placed horizontally, each occupying roughly half the available width.
- Both blocks share the same key labels in the same vertical order so values align horizontally across the comparison.
- Key labels: `--color-text-secondary`. Values: `--color-text-primary`.
- Differing values may be highlighted with `--typography-weight-medium` to draw the eye to the differences.
- A faint vertical `--color-border-divider` separator between the two blocks, or a `--spacing-xl` gap if separator-free.

**Rules:**
- Do not compare more than two records simultaneously in a side-by-side layout. For three or more, use a table layout with records as rows and attributes as columns.
- Label alignment must be identical between the two blocks. If one record lacks an attribute, show an empty value or "—" in `--color-text-tertiary`.
- Side-by-side comparison is a product-level decision — not every product needs it. The design system provides the structural pattern; products decide when to apply it.

### 5.6 Empty States

When a dense surface has no data, display an empty state that communicates the absence clearly without decorative filler.

**Structure:**
- Centered within the surface area.
- Primary message: `--typography-size-base`, `--typography-weight-medium`, `--color-text-primary`. Brief and factual: "No projects yet", "No results match your filter".
- Supporting message (optional): `--typography-size-sm`, `--color-text-secondary`. Suggests a next step: "Create your first project to get started", "Try adjusting your filter criteria".
- Action (optional): A single primary or tertiary button below the message: "Create Project", "Clear Filters".
- Icon (optional): A restrained geometric icon above the message, `32px`–`48px`, `--color-text-tertiary`. No mascots, illustrations, or playful graphics.

**Spacing:**
- `--spacing-xl` between the icon and the primary message.
- `--spacing-sm` between the primary and supporting messages.
- `--spacing-lg` between the supporting message and the action button.

### 5.7 Token Quick Reference

| Purpose | Token |
|---|---|
| Table body background | `--color-neutral-canvas` |
| Header row background | `--color-neutral-surface` |
| Row hover background | `--color-neutral-surface` (or `--color-neutral-elevated` on surface) |
| Selected row background | `--color-neutral-surface` |
| Selection indicator | `2–3px --color-accent-solid` left bar |
| Row divider | `1px solid --color-border-edge` |
| Section/header divider | `1px solid --color-border-divider` |
| Focus ring | `2px solid --color-border-focus` |
| Primary identity text | `--color-text-primary`, `--typography-weight-medium` |
| Key metadata text | `--color-text-secondary` |
| Secondary analytics text | `--color-text-tertiary` |
| Badge background (semantic) | `--color-semantic-*-background` |
| Badge text (semantic) | `--color-semantic-*-foreground` |
| Inline action icons | `--color-text-secondary` (rest), `--color-text-primary` (hover) |
| Destructive action icon | `--color-semantic-error-foreground` |
| Cell horizontal padding | `--spacing-md` |
| Row vertical padding | `--spacing-sm` |
| Group header spacing above | `--spacing-md` |
| State transitions | `--motion-duration-fast` / `--motion-easing-default` |

---

## Cross-References

- [System Spec — Data-Dense Surfaces](system-spec.md#125-data-dense-surfaces) — component-level behavioral principles for lists, tables, and workflow-heavy views.
- [System Spec — Surface Model](system-spec.md#6-surface-model) — edge treatment, depth model, and layering philosophy.
- [Application Shell and Navigation — Workspace Container](application-shell-and-navigation.md#15-workspace-container) — the primary task surface where dense patterns live.
- [Application Shell and Navigation — Selection States](application-shell-and-navigation.md#21-state-definitions) — navigation selection patterns that dense-surface selection mirrors.
- [Forms and Action Controls — Icon-Only Actions](forms-and-action-controls.md#18-icon-only-action-button) — styling for inline row actions.
- [Forms and Action Controls — Checkbox](forms-and-action-controls.md#16-checkbox) — multi-selection checkbox guidance.
- [Consumption Guide](consumption-guide.md) — how downstream products import and use design-system tokens.
