# Status, Priority, and Decision Signals Guidance

This document defines shared design-system guidance for compact status, priority, urgency, and decision-support signals in EverGray applications. It enables workflow-heavy products to represent operational state consistently, accessibly, and without relying on noisy or color-only treatments.

This guidance follows the application expression defined in [System Spec](system-spec.md): quiet, operational, precise, and restrained. Status signals should be clear at a glance — never dominant, alarmist, or decorative.

---

## 1. Compact Signal Patterns

EverGray applications frequently display status, priority, and category information alongside records, tasks, and workflow items. These compact signals must communicate state efficiently across dense surfaces without overwhelming the content they annotate.

### 1.1 Supported Pattern Types

The design system supports five compact signal patterns. Each serves a distinct communication role. Products should choose based on information type, not visual preference.

#### Text Badge

A short text label with a subtle background fill. The most common and most readable compact signal.

**Role:** Named states with clear labels. Best for states that benefit from being read as words.

**Examples:** "Active", "Draft", "Overdue", "In Review", "Blocked", "Complete"

**Structure:**
- Text: `--typography-size-xs`, `--typography-weight-medium`.
- Padding: `--spacing-xs` (`4px`) vertical, `--spacing-sm` (`8px`) horizontal.
- Border radius: `--radii-sm` (`2px`).
- Background: Muted semantic color when applicable (`--color-semantic-*-background`), or `--color-neutral-surface` for neutral states.
- Text color: Corresponding semantic foreground (`--color-semantic-*-foreground`), or `--color-text-secondary` for neutral.
- Height: `20px`–`24px`. Must not inflate the row it sits in.

**Best for:** Dense lists, table status columns, card metadata, detail panel properties.

#### Pill / Tag

A compact label identifying a category, type, or classification — not a state. Pills are distinguished from badges by their semantic purpose: badges indicate condition; pills indicate identity.

**Role:** Classification and categorization. Typically non-semantic (no success/error/warning meaning).

**Examples:** "Frontend", "Backend", "Marketing", "P1", "Sprint 4", "v2.1"

**Structure:**
- Text: `--typography-size-xs`, `--typography-weight-regular`.
- Padding: `--spacing-xs` (`4px`) vertical, `--spacing-sm` (`8px`) horizontal.
- Border radius: `--radii-full` (`9999px`) — the pill shape distinguishes tags from state badges.
- Background: `--color-neutral-surface`.
- Text color: `--color-text-secondary`.
- Border: `1px solid --color-border-edge` (optional, for additional definition on dense surfaces).
- Height: `20px`–`24px`.

**Best for:** Categorization columns, metadata lines, filter indicators, entity tagging.

**When multiple tags appear:** Stack horizontally with `--spacing-xs` (`4px`) gap. If more than 3 tags would overflow, truncate with a "+N" counter using `--color-text-tertiary`.

#### Dot Indicator

A small colored circle paired with text or positioned within a row to signal binary or simple state.

**Role:** Compact presence/absence or binary state signal. Supports scanning without reading labels.

**Examples:** Online/offline, active/inactive, read/unread, synced/unsynced.

**Structure:**
- Size: `6px`–`8px` circle.
- Color: Semantic foreground matching the state, or `--color-text-tertiary` for neutral/inactive.
- Placement: Inline to the left of associated text, with `--spacing-xs` (`4px`) gap. Alternatively, absolutely positioned in a fixed column within a data row.
- No text label required on the dot itself, but the dot should appear near text that provides context (the column header, the row identity, etc.).

**Best for:** Dense tables where a full badge would be too heavy, sidebar navigation (unread indicators), presence lists.

#### Counter Badge

A compact numeric indicator showing quantity — unread counts, pending items, alert counts.

**Role:** Quantitative signal drawing attention to a number that may require action.

**Structure:**
- Text: `--typography-size-xs`, `--typography-weight-medium`.
- Min-width: `20px`. Circular when single digit; pill-shaped when multi-digit.
- Padding: `--spacing-xs` horizontal when multi-digit.
- Border radius: `--radii-full`.
- Background: `--color-neutral-elevated` for informational counts. `--color-semantic-error-foreground` for urgent counts (e.g., error count, critical alerts). `--color-accent-solid-muted` for branded counts (use sparingly — only for primary navigation counters).
- Text color: `--color-text-primary` on neutral background. `--color-text-inverse` on semantic or accent backgrounds.
- Height: `18px`–`20px`.

**Placement:** Adjacent to a label (navigation item, tab, section header), right-aligned. Never free-floating without an associated label.

**Best for:** Navigation sidebar (unread items), tab bars (pending count), section headers (group count).

#### Row-Level Priority Marker

A vertical or horizontal stripe on the edge of a row indicating priority or severity without using interior badges.

**Role:** Quick visual triage signal for priority scanning across many rows. Works at the periphery of attention rather than in the content itself.

**Structure:**
- Size: `3px`–`4px` wide vertical bar on the left edge of the row (or `2px` horizontal bar at the top of a card).
- Color: Semantic foreground matching severity level, or a product-defined priority palette (see Section 3).
- The marker occupies the same position as the selection indicator but communicates priority rather than selection. If both are needed simultaneously, selection takes visual precedence (accent bar on top of or replacing the priority bar while selected).

**Best for:** Task lists, issue trackers, queue views — surfaces where priority-based scanning is the primary interaction model.

### 1.2 Choosing the Right Pattern

| Information Type | Recommended Pattern | Rationale |
|---|---|---|
| Named workflow state | Text badge | Labels are readable and unambiguous |
| Category or classification | Pill / tag | Pill shape signals "type" rather than "condition" |
| Binary on/off state | Dot indicator | Minimal visual weight, supports fast scanning |
| Quantity requiring attention | Counter badge | Numbers draw attention proportionally |
| Priority / severity triage | Row-level marker | Peripheral signal, does not consume content space |
| Multiple classifications per record | Pill group (≤3 visible) | Tags stack naturally; truncate with "+N" |

**Rules:**
- Do not use text badges and pills interchangeably. Badges are for states (which change); pills are for categories (which classify).
- Do not combine a dot indicator and a text badge for the same data point. Choose one.
- Counter badges should not appear on more than 2–3 navigation items simultaneously. If everything has a counter, none stands out.

---

## 2. Color and Non-Color Signaling

Compact signals must communicate their meaning through multiple channels — not color alone. This is both an accessibility requirement and a design quality goal.

### 2.1 Multi-Channel Communication

Every compact signal must be understandable through at least two of the following channels:

| Channel | How It Contributes |
|---|---|
| **Text** | The label itself communicates the state: "Overdue", "Active", "Blocked" |
| **Color** | Semantic foreground and background tokens provide instant visual grouping |
| **Position** | Consistent placement (always in the same column, always left-edge) aids scanning |
| **Shape** | Dot vs. badge vs. pill vs. marker creates category distinction at a glance |
| **Iconography** | Optional small icons (`14px`–`16px`) provide an additional recognition channel |

**Key rule:** If the color were removed (e.g., in a grayscale rendering), the signal must still be understandable through its label, position, or icon. Color reinforces — it does not carry the message alone.

### 2.2 Accessibility Requirements

- **Contrast:** Badge text must meet WCAG AA contrast against its background (minimum `4.5:1` for text under `14px`). The semantic background tokens are calibrated for this, but verify when introducing new combinations.
- **Color independence:** Never use color as the sole differentiator between two states. "Active" (green) and "Archived" (gray) are distinguishable by label; "green dot" and "red dot" without labels are not.
- **Screen reader access:** Badges, dots, and markers must have accessible text (`aria-label`, visually hidden text, or the visible label itself). A dot indicator without any associated text is invisible to assistive technology.
- **Focus:** Counter badges on interactive elements (navigation links, tabs) do not need separate focus — the parent element carries the focus ring and the counter is announced as part of the parent's accessible name.

### 2.3 When to Use Neutral vs. Semantic Color

| Context | Color Approach |
|---|---|
| State directly maps to system semantics (error, warning, success, info) | Use semantic tokens: `--color-semantic-*-foreground` / `--color-semantic-*-background` |
| State is operational but not semantic (Draft, In Review, Scheduled) | Use neutral treatment: `--color-neutral-surface` background, `--color-text-secondary` text |
| Priority levels (P1, P2, P3, P4) | Use a restrained priority palette (see Section 3.1) derived from semantic tokens where possible |
| Category or classification (Frontend, Marketing, Sprint 4) | Always neutral: `--color-neutral-surface`, `--color-text-secondary`. Categories are not states. |

**Accent (`--color-accent-solid`) must not be used for status signals.** Accent is reserved for primary actions and brand moments. Using accent for status creates confusion between "this is important" and "this is a call to action."

---

## 3. Priority and Urgency Posture

Priority and urgency signals must communicate severity without making the interface feel alarmist. The system's premium technical character demands restraint — even when communicating that something is critical.

### 3.1 Priority Palette

Products that need to signal priority levels (P1 through P4, Critical/High/Medium/Low, etc.) should use the following mapping:

| Priority | Color Token | Visual Weight |
|---|---|---|
| **Critical / P1** | `--color-semantic-error-foreground` | Highest — this is the only priority level that uses a strong chromatic signal |
| **High / P2** | `--color-semantic-warning-foreground` | Moderate — warm tone draws attention without alarm |
| **Medium / P3** | `--color-text-secondary` | Neutral — the default operational level |
| **Low / P4** | `--color-text-tertiary` | Minimal — intentionally quiet |

**Rules:**
- Only the two highest priority levels should carry semantic color. Medium and low use neutral text tones.
- This palette works for both text badges and row-level priority markers.
- Do not introduce additional colors for finer-grained priority levels. If a product has 5+ priority levels, the top 2 use semantic colors, and the rest are neutral with differentiation through labels only.

### 3.2 Urgency Escalation

Urgency escalation defines how stronger visual treatments are reserved for genuinely higher-severity states.

| Severity | Visual Treatment | Persistence |
|---|---|---|
| **Informational** | Neutral badge or dot. No semantic color. | Static — always visible, never demands attention. |
| **Needs attention** | Semantic warning badge or dot. Warm foreground. | Static — visible but not animated. |
| **Requires action** | Semantic error badge. Error foreground + error background fill. | Static — persistent, never pulses or animates. |
| **System critical** | Error banner or toast (see [Overlays and Feedback States](overlays-and-feedback-states.md)). | Persistent until resolved. |

**Rules:**
- Do not skip escalation levels. If "Needs attention" is the highest severity on the screen, it should use warning treatment — not error.
- Do not animate status indicators to convey urgency. No pulsing dots, blinking badges, or bouncing counters. Animation is reserved for motion-as-feedback (transitions), not motion-as-alarm.
- Counter badges may use `--color-semantic-error-foreground` background when the count represents urgent items, but the count itself should not animate or increment with visual fanfare.

### 3.3 Restraint Under Load

In surfaces with many records — task lists, issue trackers, queues — every row may carry a status signal. The visual system must remain calm even when many signals are present simultaneously.

**Strategies:**
- **Tonal hierarchy:** Only the highest-severity signals use chromatic color. Most rows should display neutral badges or dots. If every row is green, orange, or red, the color stops conveying meaning.
- **Sparing use of background fills:** In dense lists, prefer text-only badges (colored text on transparent or minimal background) over filled badges. Filled backgrounds become visually heavy when repeated across 20+ rows.
- **Grouping reduces noise:** When a list is grouped by status (see [Data-Dense Workspace Patterns](data-dense-workspace-patterns.md), Section 3.2), the group header carries the status signal, and individual row-level signals may be reduced or omitted within each group.

---

## 4. Comparative Signal Guidance

When multiple records appear side by side — in tables, lists, or dashboards — status and priority signals must support fast visual comparison.

### 4.1 Column Consistency

- Status signals should occupy the same column position in every row. A "Status" column in a table must always contain the same signal type (text badge, dot, etc.) for every row.
- Do not mix signal types within a column (badges in some rows, dots in others). If the data requires different representations, it likely requires separate columns.

### 4.2 Multiple Signals Per Record

A single record may carry multiple compact signals — status, priority, category, count. They must coexist without collapsing hierarchy.

**Coexistence rules:**
- Place signals in a predictable order: Priority marker (left edge) → Identity text → Status badge → Category pills → Counter (right edge).
- No more than 3 inline compact signals should be visible per row in a dense list. If a record has more status dimensions, group secondary signals in a detail panel rather than cramming them inline.
- Signals should not touch each other. Maintain `--spacing-sm` (`8px`) minimum between adjacent signals.

### 4.3 Row-Level Markers vs. Inline Badges

| Consideration | Row-Level Marker | Inline Badge |
|---|---|---|
| Visual weight | Peripheral — does not consume content space | Interior — competes with content text |
| Scanning speed | Fast — color position is fixed, eye scans a vertical stripe | Moderate — requires reading into each row |
| Information capacity | Binary or severity-level only (color carries the signal) | Named state — can communicate nuance through text |
| Best for | Priority triage across many rows | Status identification within individual rows |

**When both are needed:** A row may have a priority marker on its left edge AND a status badge within the row. The marker serves as a pre-attentive triage signal; the badge provides the label. They are complementary, not redundant.

---

## 5. Examples and Usage Boundaries

### 5.1 Status Badge Examples

```
  Semantic badges (state-driven):
  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
  │  Active  │  │ Overdue  │  │ On Hold  │  │ Complete │
  └──────────┘  └──────────┘  └──────────┘  └──────────┘
  success-bg     error-bg      warning-bg     success-bg
  success-fg     error-fg      warning-fg     success-fg

  Neutral badges (operational, non-semantic):
  ┌──────────┐  ┌──────────┐  ┌──────────┐
  │  Draft   │  │In Review │  │Scheduled │
  └──────────┘  └──────────┘  └──────────┘
  surface bg     surface bg     surface bg
  text-secondary text-secondary text-secondary
```

### 5.2 Priority Row Markers

```
  ┌──────────────────────────────────────────────────────┐
  ▌ Task: Fix critical auth bug     ● Blocked    P1      │  marker: error-fg (3px)
  │──────────────────────────────────────────────────────│  badge: "Blocked" (error)
  ▌ Task: Update API docs           ○ In Review  P2      │  marker: warning-fg (3px)
  │──────────────────────────────────────────────────────│
  │ Task: Add export feature         ○ Draft      P3     │  marker: none (neutral)
  │──────────────────────────────────────────────────────│
  │ Task: Refactor CSS modules       ○ Draft      P4     │  marker: none (neutral)
  └──────────────────────────────────────────────────────┘

  ▌ = priority marker (left edge, 3px wide)
  ● = semantic dot indicator
  ○ = neutral dot indicator
```

### 5.3 Counter Badges in Navigation

```
  ┌────────────────────────┐
  │  ○ Dashboard           │
  │  ● Tasks          (12) │  counter: neutral-elevated bg, text-primary
  │  ○ Projects            │
  │  ○ Messages        (3) │  counter: error-fg bg, text-inverse (urgent)
  │  ○ Reports             │
  │  ──────                │
  │  ○ Settings            │
  └────────────────────────┘

  (12) = informational count, neutral styling
  (3)  = urgent count, error background (unread critical messages)
```

### 5.4 Category Pills

```
  Website Redesign
  Marketing · Due Mar 20
  ┌──────────┐ ┌──────────┐ ┌──────┐
  │ Frontend │ │  Design  │ │  +2  │
  └──────────┘ └──────────┘ └──────┘
  pill shape    pill shape    overflow
  surface bg    surface bg    text-tertiary
  text-secondary              "+N" truncation
```

### 5.5 Dos and Don'ts

**Do:**
- Use text labels on badges so states are understandable without color.
- Reserve semantic colors for genuinely semantic states (success, warning, error, info).
- Keep badges small — they annotate content, they do not replace it.
- Use dots for binary signals where a full badge would add unnecessary weight.
- Place signals in consistent positions so scanning becomes automatic.

**Don't:**
- Use color as the sole differentiator between states.
- ~~Give every priority level its own unique color~~ — use the constrained palette (Section 3.1).
- ~~Stack 4+ badges in a single row~~ — move secondary signals to a detail view.
- ~~Animate badges, dots, or counters~~ — no pulsing, blinking, or counting-up effects.
- ~~Use `--color-accent-solid` for any status signal~~ — accent is for actions and brand.
- ~~Use bright colored backgrounds for every badge~~ — most states should be neutral.

### 5.6 Token Quick Reference

| Purpose | Token |
|---|---|
| Badge semantic backgrounds | `--color-semantic-*-background` |
| Badge semantic text | `--color-semantic-*-foreground` |
| Neutral badge background | `--color-neutral-surface` |
| Neutral badge text | `--color-text-secondary` |
| Pill background | `--color-neutral-surface` |
| Pill text | `--color-text-secondary` |
| Pill border (optional) | `--color-border-edge` |
| Pill radius | `--radii-full` |
| Badge radius | `--radii-sm` |
| Dot size | `6px`–`8px` |
| Counter background (neutral) | `--color-neutral-elevated` |
| Counter background (urgent) | `--color-semantic-error-foreground` |
| Counter text | `--color-text-primary` or `--color-text-inverse` |
| Priority marker width | `3px`–`4px` |
| Critical priority | `--color-semantic-error-foreground` |
| High priority | `--color-semantic-warning-foreground` |
| Medium priority | `--color-text-secondary` |
| Low priority | `--color-text-tertiary` |
| Badge typography | `--typography-size-xs`, `--typography-weight-medium` |
| Signal spacing | `--spacing-sm` between adjacent signals |

---

## Cross-References

- [System Spec — Semantic Colors](system-spec.md#54-semantic-colors) — semantic states independent from brand accent.
- [System Spec — Accessibility](system-spec.md#14-accessibility-and-usability-expectations) — contrast, focus, and distinguishability requirements.
- [Data-Dense Workspace Patterns — Inline State Indicators](data-dense-workspace-patterns.md#23-inline-state-indicators) — badge, dot, and icon indicator patterns in dense rows.
- [Data-Dense Workspace Patterns — Grouping Rhythm](data-dense-workspace-patterns.md#32-grouping-rhythm) — reducing signal noise through row grouping.
- [Overlays and Feedback States — Feedback Patterns](overlays-and-feedback-states.md#2-feedback-state-patterns) — broader feedback states that complement compact signals.
- [Forms and Action Controls — Validation States](forms-and-action-controls.md#33-inline-validation-and-error-messages) — semantic state usage in form fields.
- [Consumption Guide](consumption-guide.md) — how downstream products import and use design-system tokens.
