# Overlays and Feedback States Guidance

This document defines shared design-system guidance for overlays, modal workflows, and common feedback states in EverGray applications. It enables products to present interruptions, empty states, loading, progress, success, warning, and error messaging with a consistent dark-theme language that stays calm, legible, and structurally clear.

This guidance follows the application expression defined in [System Spec](system-spec.md): quiet, operational, precise, and restrained. Overlays should feel machined and layered — never glassy, glowing, or decorative. Feedback should communicate clearly without becoming alarmist or celebratory.

---

## 1. Overlay and Modal Patterns

Overlays are elevated surfaces that appear above the workspace to capture focused attention. They interrupt the normal workflow to request a decision, present contextual information, or confirm an action. Their visual treatment must reinforce the system's machined layering philosophy.

### 1.1 Overlay Types

EverGray applications use three overlay patterns, distinguished by their purpose and visual weight.

#### Modal Dialog

A centered surface that blocks interaction with the workspace behind it. The user must interact with or dismiss the modal before continuing.

**When to use:**
- Confirming a destructive or irreversible action.
- Collecting focused input that does not belong inline (e.g., a creation form that requires a clean context).
- Presenting a decision that must be resolved before proceeding.

**When not to use:**
- For routine feedback (success, error) — use inline messaging instead.
- For supplementary information that does not require a decision — use a popover or side panel.
- For long multi-step workflows — use a dedicated page or wizard pattern rather than a modal.

**Structure:**
- Background: `--color-neutral-elevated`.
- Border: `1px solid --color-border-edge`.
- Border radius: `--radii-lg` (`6px`).
- Width: `400px`–`560px` for standard dialogs. Confirmation dialogs may be narrower (`360px`–`440px`). Maximum width should not exceed `640px`.
- Padding: `--spacing-xl` (`24px`) on all sides.
- Shadow: A subtle, restrained shadow is acceptable to reinforce elevation. Keep it low-spread and low-opacity — the backdrop already establishes the layer. Do not use glows or colored shadows.

**Anatomy:**
1. **Header:** Title at `--typography-size-lg`, `--typography-weight-semibold`, `--color-text-primary`. Optional subtitle or description at `--typography-size-sm`, `--color-text-secondary`, separated by `--spacing-xs` below the title.
2. **Body:** Content area with `--spacing-lg` (`16px`) above. Forms, text, or structured content. Uses standard body typography and form patterns.
3. **Footer / Actions:** Action group at the bottom with `--spacing-xl` (`24px`) above. Right-aligned. Primary action on the far right. See [Forms and Action Controls](forms-and-action-controls.md), Section 2.3 for dialog action hierarchy.
4. **Close affordance:** An icon-only close button (`×`) in the top-right corner. Uses the icon-only action posture: `--color-text-tertiary` at rest, `--color-text-primary` on hover.

#### Popover

A small elevated surface anchored to a trigger element. Popovers provide contextual information, compact option lists, or lightweight interactions without leaving the current context.

**When to use:**
- Dropdown menus, select option lists, date pickers.
- Contextual tooltips with interactive content.
- Quick-edit forms or compact action panels.

**When not to use:**
- For content that requires sustained attention — use a modal or side panel.
- For critical confirmations — use a modal dialog.

**Structure:**
- Background: `--color-neutral-elevated`.
- Border: `1px solid --color-border-edge`.
- Border radius: `--radii-md` (`4px`).
- Padding: `--spacing-sm` (`8px`) to `--spacing-md` (`12px`).
- Width: Content-driven, but typically `200px`–`320px`. Option lists may be narrower.
- Shadow: Subtle, same posture as modal but smaller spread.
- Pointer/arrow: Optional. If used, it must align with the trigger element and match the popover's background color.

**Positioning:**
- Appears below the trigger by default. Flips above if insufficient space below.
- Aligned to the trigger's leading edge. May center-align for narrow triggers.
- Must not overflow the viewport. Reposition automatically.

**Dismissal:**
- Click outside to close.
- Escape key to close.
- Selecting an option closes the popover (for selection lists).
- Focus trap is not required — popovers are lightweight, not modal.

#### Toast / Notification

A transient surface that appears at the edge of the viewport to communicate non-blocking feedback. The user does not need to interact with it.

**When to use:**
- Confirming a completed background action: "Changes saved", "File uploaded".
- Reporting a non-critical issue: "Unable to sync — will retry".
- Providing brief informational updates.

**When not to use:**
- For critical errors that require user action — use inline error messaging or a modal.
- For real-time data updates — update the content directly.
- For success states that are already communicated inline.

**Structure:**
- Background: `--color-neutral-elevated`.
- Border: `1px solid --color-border-edge`. Optionally, the left or top edge may use a semantic color border (`--color-semantic-success-foreground`, `--color-semantic-error-foreground`, etc.) as a category signal.
- Border radius: `--radii-md` (`4px`).
- Width: `320px`–`400px`.
- Padding: `--spacing-md` (`12px`) to `--spacing-lg` (`16px`).
- Position: Top-right corner of the viewport, offset `--spacing-lg` from the edges. Stack multiple toasts vertically with `--spacing-sm` gap.

**Timing:**
- Auto-dismiss after `4–6 seconds` for informational messages.
- Persistent until dismissed for warnings or errors that require awareness.
- Dismiss button: Icon-only close (`×`) on the right.

### 1.2 Backdrop

The backdrop is the dimmed overlay behind a modal that separates it visually from the workspace.

**Treatment:**
- Color: `rgba(0, 0, 0, 0.5)` — a dark, semi-transparent wash. This creates clear separation without feeling harsh on the dark palette.
- The backdrop covers the entire viewport.
- Clicking the backdrop dismisses the modal (unless the modal is a required confirmation with no dismiss-on-backdrop behavior).

**Rules:**
- Do not use blur (glassmorphism) on the backdrop. The system spec explicitly prohibits this.
- Do not use colored or gradient backdrops.
- The backdrop should feel like a quiet dimming — not a visual effect.

### 1.3 Elevated-Layer Behavior

Overlays use the elevated surface level (`--color-neutral-elevated`) to distinguish themselves from workspace-level surfaces.

**Layer stack:**

| Layer | Surface Token | Examples |
|---|---|---|
| **Canvas** | `--color-neutral-canvas` | Workspace background |
| **Surface** | `--color-neutral-surface` | Panels, cards, table headers |
| **Elevated** | `--color-neutral-elevated` | Modals, popovers, toasts, dropdowns |
| **Overlay** | `--color-neutral-overlay` | Reserved — only if a surface appears above an already-elevated element (rare) |

**Rules:**
- Never place a modal on top of another modal. If a workflow requires nested decisions, restructure the flow so only one modal is open at a time.
- Popovers may appear above elevated surfaces (e.g., a dropdown inside a modal). In this rare case, the popover uses `--color-neutral-overlay`.
- Toasts always appear above all other surfaces — they are the outermost non-modal layer.

### 1.4 Enter/Exit Motion

Overlays use controlled motion to communicate entrance and exit without being theatrical.

**Modal entrance:**
- Fade-in the backdrop: opacity `0` → `0.5`, `--motion-duration-normal` (`250ms`), `--motion-easing-out`.
- Scale-in the modal: `scale(0.97)` → `scale(1)` + opacity `0` → `1`, `--motion-duration-normal`, `--motion-easing-out`.
- The scale is subtle — just enough to create a sense of arrival, not a zoom effect.

**Modal exit:**
- Fade-out the backdrop and modal simultaneously: `--motion-duration-fast` (`150ms`), `--motion-easing-in`.
- No scale on exit — just a clean fade.

**Popover entrance:**
- Fade-in + slight translate from the trigger direction: `--motion-duration-fast`, `--motion-easing-out`.
- Translate distance: `4px`–`8px`. Just enough to create directionality.

**Popover exit:**
- Fade-out: `--motion-duration-fast`, `--motion-easing-in`. No translate on exit.

**Toast entrance:**
- Slide-in from the right edge: `translateX(16px)` → `translateX(0)` + fade-in, `--motion-duration-normal`, `--motion-easing-out`.

**Toast exit:**
- Fade-out: `--motion-duration-fast`, `--motion-easing-in`. No slide on exit.

**Rules:**
- Motion must be reduced or disabled when the user has `prefers-reduced-motion` enabled. In that case, overlays appear and disappear instantly.
- Do not use spring, bounce, or overshoot easing for overlays. All motion should feel physically plausible and understated.
- Do not chain animations. The overlay appears as a single motion, not a sequence of effects.

### 1.5 Modal vs. Inline Decision

Not every interruption requires a modal. The design system recommends inline patterns when the following conditions are met:

| Condition | Recommendation |
|---|---|
| The action is reversible | Inline feedback (toast or inline confirmation) |
| The feedback is routine | Inline (success message near the trigger) |
| The user needs to provide 1–2 fields of input | Consider inline expansion or a popover |
| The action is irreversible | Modal confirmation dialog |
| The input requires a clean context | Modal form |
| The user must acknowledge something before continuing | Modal |

Products make the final decision, but the design system encourages inline-first for routine interactions and modal-only for genuine interruptions.

---

## 2. Feedback State Patterns

Applications must communicate status clearly — empty data, loading operations, completed actions, warnings, and errors. Each feedback state has a defined visual treatment that stays calm, legible, and semantically unambiguous in the dark-theme environment.

### 2.1 Empty State

An empty state appears when a surface has no data to display — a new account, an empty search result, a cleared filter.

**Visual treatment:**
- Centered within the containing surface.
- Icon (optional): `32px`–`48px`, `--color-text-tertiary`. Geometric and restrained — no mascots, playful illustrations, or organic shapes.
- Primary message: `--typography-size-base`, `--typography-weight-medium`, `--color-text-primary`. Factual and brief: "No projects yet", "No results found".
- Supporting message (optional): `--typography-size-sm`, `--color-text-secondary`. Suggests a path forward: "Create your first project to get started".
- Action (optional): A primary or tertiary button below the message: "Create Project", "Clear Filters".

**Spacing:**
- `--spacing-xl` between icon and primary message.
- `--spacing-sm` between primary and supporting messages.
- `--spacing-lg` between supporting message and action button.

**Where semantic color leads:** Nowhere — empty states are neutral. They use only text hierarchy and optional geometric icons. No semantic color, no accent.

### 2.2 Loading State

Loading states communicate that the system is working. They must inspire confidence without demanding attention.

**Spinner:**
- Use a simple circular spinner, `20px`–`24px` diameter, `2px` stroke.
- Color: `--color-text-tertiary` for the track, `--color-text-secondary` for the active arc.
- Animation: Continuous rotation, smooth and constant. Use CSS `animation` with `linear` timing — not the system easing tokens. Loading animation is a special case where linear rotation is appropriate.
- Placement: Centered in the surface being loaded when the entire surface is empty. Inline next to a trigger (button, control) when a specific action is loading.

**Skeleton loading:**
- For surfaces where the layout is known in advance (tables, card grids, metadata blocks), use skeleton placeholders that reflect the expected content shape.
- Skeleton elements: Rounded rectangles matching the approximate dimensions of text lines and content blocks. Background: `--color-neutral-surface` with a subtle pulse animation (opacity oscillation between `0.4` and `1.0`, `--motion-duration-slow`, `--motion-easing-in-out`).
- Do not use skeleton loading for every context. It is most valuable for content-heavy surfaces where a blank area would feel broken.

**Loading overlay:**
- When an action is in progress but the surface remains visible (e.g., saving a form while the form is still displayed), apply a semi-transparent overlay: `rgba(18, 18, 22, 0.6)` over the affected area with a centered spinner.
- Do not dim the entire page for a local operation. Scope the overlay to the surface being updated.

**Button loading:** See [Forms and Action Controls](forms-and-action-controls.md), Section 2.1 — primary and secondary button loading states.

**Where semantic color leads:** Nowhere — loading is neutral. No accent, no semantic colors. The spinner and skeleton use neutral gray tones only.

### 2.3 Progress State

Progress states communicate how far along an operation is. They are appropriate for operations with a known duration or completion percentage.

**Progress bar:**
- Track: `--color-neutral-surface`, `4px` height, `--radii-full` radius.
- Fill: `--color-accent-solid-muted` for standard progress. `--color-semantic-success-foreground` when complete.
- Width: Matches the container width or a defined max-width.
- Animation: The fill advances smoothly using `--motion-easing-default`. Do not snap between values.

**Progress text:**
- Percentage or step indicator: `--typography-size-xs`, `--color-text-secondary`. Placed above or to the right of the bar.
- Do not display "100%" as a persistent state — transition to a success message or remove the progress indicator.

**When to use progress vs. spinner:**
- Use a progress bar when the operation has a measurable completion state (upload, multi-step process, import).
- Use a spinner when the duration is unknown.

**Where semantic color leads:** Only at completion (`--color-semantic-success-foreground`). During progress, accent-muted provides a quiet, forward-moving signal. Do not use the brand gradient for progress fills.

### 2.4 Success State

Success communicates that an action completed as expected. It should feel confident and brief — the system confirms and moves on.

**Inline success:**
- Text: `--typography-size-xs` or `--typography-size-sm`, `--color-semantic-success-foreground`. Placed near the trigger action or in the support-text position below a field.
- Transient: Fades back to rest after `2–3 seconds` using `--motion-duration-normal` / `--motion-easing-default`.
- No icon is required for inline success. The green text alone is sufficient signal.

**Toast success:**
- Uses the toast pattern (Section 1.1) with optional `--color-semantic-success-foreground` left border accent.
- Auto-dismisses after `4–5 seconds`.

**Panel success:**
- For prominent confirmations (e.g., completing a multi-step workflow), a `--color-semantic-success-background` panel with `--color-semantic-success-foreground` text may be used within the workspace.
- Keep it compact — no more than 2–3 lines. Include a dismiss affordance or auto-dismiss.

**Where semantic color leads:** Success-foreground for text and accents. Success-background for panel fills. Typography and brevity do most of the communication work.

### 2.5 Warning State

Warnings indicate potential issues that do not block the user but merit attention.

**Inline warning:** Same placement and sizing as inline success, using `--color-semantic-warning-foreground`. See [Forms and Action Controls](forms-and-action-controls.md), Section 3.4.

**Warning banner:**
- A horizontal bar at the top of a workspace section or page.
- Background: `--color-semantic-warning-background`.
- Text: `--color-semantic-warning-foreground`, `--typography-size-sm`.
- Leading icon (optional): A warning triangle, `16px`, `--color-semantic-warning-foreground`.
- Dismiss affordance: Icon-only close button on the right.
- Padding: `--spacing-md` vertical, `--spacing-lg` horizontal.

**Where semantic color leads:** Warning-foreground for text and icon. Warning-background for banner fills. The warm tone draws attention without alarm.

### 2.6 Error State

Errors communicate that something went wrong and typically require user action to resolve.

**Inline error:** See [Forms and Action Controls](forms-and-action-controls.md), Section 3.3 for field-level error messages.

**Error banner:**
- Same structure as warning banner but using `--color-semantic-error-background` and `--color-semantic-error-foreground`.
- Persistent — does not auto-dismiss. The user must resolve the issue or manually dismiss.
- May include a recovery action as a text link or tertiary button within the banner.

**Error page / full-surface error:**
- For catastrophic failures (page load failure, authentication error, server unavailable).
- Centered in the workspace.
- Icon (optional): `32px`–`48px`, `--color-semantic-error-foreground`. Geometric — not a cartoon or dramatic illustration.
- Title: `--typography-size-lg`, `--typography-weight-semibold`, `--color-text-primary`.
- Description: `--typography-size-sm`, `--color-text-secondary`. Explains what happened in plain language.
- Recovery action: A primary or secondary button below the description: "Try Again", "Go Back", "Contact Support".
- Follow the same spacing rhythm as empty states.

**Where semantic color leads:** Error-foreground for text, icons, and border accents. Error-background for banner and panel fills. Never use error colors for non-error states.

---
