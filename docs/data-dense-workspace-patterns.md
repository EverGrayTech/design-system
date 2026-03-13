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
