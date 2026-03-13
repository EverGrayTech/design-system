# Data-Dense Workspace Patterns Guidance

This document defines shared design-system guidance for lists, table-like layouts, row summaries, grouped metadata, and other data-dense workspace surfaces in EverGray applications. It enables operational products to present dense information with consistent hierarchy, calm density, and precise interaction states.

This guidance follows the application expression defined in [System Spec](system-spec.md): quiet, operational, precise, and restrained. Dense surfaces should feel efficient and scannable — never cluttered, striped, or ornamental.

---

## 1. Dense-Surface Structure

EverGray applications are workflow-oriented tools that frequently present lists of records, metadata panels, grouped properties, and tabular data. These surfaces carry more information per square pixel than any other part of the interface. Their structure must preserve legibility under load without resorting to heavy visual chrome.

### 1.1 Pattern Types

Data-dense surfaces in EverGray applications fall into three structural categories. Each has distinct strengths, and the choice between them depends on content shape, comparison needs, and interaction model.

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

EverGray applications must find the narrow band between "efficient" and "cramped." Dense surfaces should feel like refined instruments — information-rich without being noisy, compact without being compressed. The density posture is a defining characteristic of the system's premium technical tone.

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

The goal is that an EverGray dense surface looks like it was designed by someone who understands information — not by someone filling a template.

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
