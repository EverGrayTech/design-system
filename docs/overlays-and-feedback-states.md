# Overlays and Feedback States Guidance

This document defines shared design-system guidance for overlays, modal workflows, and common feedback states in EverGray Tech applications. It enables products to present interruptions, empty states, loading, progress, success, warning, and error messaging with a consistent dark-theme language that stays calm, legible, and structurally clear.

This guidance follows the application expression defined in [System Spec](system-spec.md): quiet, operational, precise, and restrained. Overlays should feel machined and layered — never glassy, glowing, or decorative. Feedback should communicate clearly without becoming alarmist or celebratory.

---

## 1. Overlay and Modal Patterns

Overlays are elevated surfaces that appear above the workspace to capture focused attention. They interrupt the normal workflow to request a decision, present contextual information, or confirm an action. Their visual treatment must reinforce the system's machined layering philosophy.

### 1.1 Overlay Types

EverGray Tech applications use three overlay patterns, distinguished by their purpose and visual weight.

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

## 3. Tone and Prominence Rules

Feedback must balance visibility with restraint. An error must be seen — but it must not scream. A success must be felt — but it must not celebrate. The system's operational posture applies to feedback as much as to any other surface.

### 3.1 Prominence Spectrum

Feedback states fall on a spectrum of visual prominence. Each level uses a different combination of color, size, and persistence to match the severity or importance of the message.

| Level | Presentation | Persistence | Color Role | Example |
|---|---|---|---|---|
| **Subtle** | Inline text near the trigger | Transient (2–3s) | Semantic foreground only | "Changes saved" |
| **Moderate** | Toast notification | Auto-dismiss (4–6s) or persistent | Semantic border accent + neutral fill | "File uploaded successfully" |
| **Prominent** | Banner across a section/page | Persistent until dismissed or resolved | Semantic background + foreground | "Your subscription expires in 3 days" |
| **Blocking** | Modal dialog or full-surface message | Persistent until user acts | Semantic icon + neutral surface | "Unable to load data — try again" |

**Rules:**
- Match prominence to severity. Routine success is subtle. Critical errors are blocking. Do not escalate routine feedback to banner or modal level.
- Within a single page, avoid multiple prominent feedback elements simultaneously. If a banner is already showing, a new toast should not also appear for the same issue.
- Feedback should never feel like it is competing with the content for attention. Even an error banner should feel integrated into the page, not shouting above it.

### 3.2 Avoiding Alarmist Treatments

The system's calm posture extends to negative states. Errors need to be clear, not aggressive.

**Do not:**
- Use large semantic-color background fills that dominate a page section.
- Use animated icons (pulsing, shaking, bouncing) on error or warning states.
- Display error messages in all-caps or bold-weight body text.
- Use `--color-semantic-error-foreground` as a background fill for large surfaces. The error-background token exists for this — it is muted and legible.
- Stack multiple error indicators on the same element (red border + red background + red icon + red text simultaneously).

**Do:**
- Use a single, clear signal: border color change + message text is sufficient for field-level errors.
- Use banner patterns for page-level errors with one line of explanation and one recovery action.
- Keep error and warning messages at the same typographic size as helper text — `--typography-size-xs` to `--typography-size-sm`. Do not enlarge text to signal severity.
- Let the semantic color token do the severity work. Red text at standard size is already a strong signal on the dark palette.

### 3.3 Avoiding Celebratory Treatments

Success is a confirmation, not a reward. The system acknowledges and moves on.

**Do not:**
- Use checkmark animations, confetti effects, or entrance flourishes for success states.
- Display success messages in large type or prominent panels for routine operations.
- Use `--color-accent-solid` for success states. Accent is for primary actions and brand moments, not for feedback confirmation.
- Display persistent success messages. Success is transient by nature — if it lingers, it becomes clutter.

**Do:**
- Use `--color-semantic-success-foreground` text at standard body size for inline confirmation.
- Auto-dismiss success toasts after 4–5 seconds.
- Keep success messages factual: "Saved", "Created", "Updated". One to three words is ideal.

### 3.4 Dark-Theme Session Endurance

Feedback states must remain legible and non-fatiguing during extended use sessions.

- Semantic background tokens (`--color-semantic-*-background`) are specifically calibrated for comfortable contrast on the dark palette. Do not substitute brighter or more saturated alternatives.
- Transient states (success, informational toasts) should fade smoothly rather than vanishing abruptly. The `--motion-duration-normal` fade feels intentional; an instant disappearance feels like a glitch.
- Persistent banners (warnings, errors) should not pulse, flash, or animate after their initial entrance. They should sit quietly until resolved.
- Loading spinners and skeleton animations use a low-contrast palette (`--color-text-tertiary` / `--color-neutral-surface`) that does not create peripheral distraction during extended loading periods.

---

## 4. Structured Message Anatomy

Feedback messages vary in complexity from a single phrase to a multi-part explanation with recovery guidance. The system defines a consistent anatomy that scales across contexts.

### 4.1 Message Components

A complete feedback message may include up to four components. Not all are required for every message.

| Component | Purpose | Typography | When to Include |
|---|---|---|---|
| **Title** | What happened, in brief | `--typography-size-sm` to `--typography-size-lg`, `--typography-weight-semibold`, `--color-text-primary` | Always, unless the message is an inline single-phrase confirmation |
| **Description** | Additional context explaining the situation | `--typography-size-sm`, `--color-text-secondary` | When the title alone is insufficient for understanding |
| **Recovery guidance** | What the user can do about it | `--typography-size-sm`, `--color-text-secondary` | For errors and warnings that have a clear remediation path |
| **Action** | A clickable next step | Button (primary, secondary, or tertiary depending on context) | When the system can offer a specific recovery or follow-up action |

**Spacing between components:**
- Title → Description: `--spacing-xs` (`4px`).
- Description → Recovery guidance: `--spacing-sm` (`8px`). Recovery guidance may be a separate paragraph or part of the description.
- Last text line → Action: `--spacing-lg` (`16px`).

### 4.2 Scaling Across Contexts

The same message anatomy scales to different presentation contexts by adjusting which components are present and how they are sized.

**Inline (field-level):**
- Title only. One phrase, `--typography-size-xs`. No description, no action.
- Example: "Email address is required"

**Toast:**
- Title + optional short description. No recovery action within the toast (use a text link if absolutely necessary, but prefer directing the user to the relevant surface).
- Title: `--typography-size-sm`, `--typography-weight-medium`.
- Description: `--typography-size-xs`, `--color-text-secondary`.
- Example: Title: "Export complete" / Description: "Your CSV file has been downloaded."

**Banner:**
- Title + description + optional inline action (text link or tertiary button).
- All on one or two lines to keep the banner compact.
- Title: `--typography-size-sm`, `--typography-weight-medium`.
- Description: Same line or next line, `--typography-size-sm`, `--color-text-secondary`.
- Example: "Unable to load activity feed. [Try again]"

**Modal / full-surface:**
- All four components may be present.
- Title: `--typography-size-lg`, `--typography-weight-semibold`.
- Description: `--typography-size-sm`, `--color-text-secondary`. May be multiple lines.
- Recovery guidance: Inline with description or as a separate paragraph.
- Action: Primary or secondary button below the content.
- Example: Title: "Connection lost" / Description: "We couldn't reach the server. This may be a temporary network issue." / Action: "Try Again"

### 4.3 Message Tone

All feedback messages should follow the system's matter-of-fact operational tone.

**Do:**
- State what happened clearly: "Project created", "Unable to save changes".
- Explain why if it is useful: "The file exceeds the 10MB upload limit".
- Suggest what to do next: "Try a smaller file or compress it before uploading".
- Use plain, direct language — no jargon, no euphemisms.

**Do not:**
- Use exclamation marks for routine feedback: ~~"Save successful!"~~
- Apologize excessively: ~~"We're sorry, something went wrong"~~. A brief "Something went wrong" is sufficient.
- Use casual or playful tone: ~~"Oops!", "Yikes!", "Uh oh"~~.
- Use marketing language: ~~"Great news!", "You're all set!", "Awesome!"~~.
- Use technical jargon in user-facing messages: ~~"Error 500: Internal Server Error"~~. Translate to user terms: "Something went wrong on our end. Try again in a moment."

---

## 5. Examples and Reference

### 5.1 Modal Dialog

```
┌─────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │  backdrop: rgba(0,0,0,0.5)
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░░░┌───────────────────────────────────┐░░░░░░░ │
│ ░░░│  Delete Project                 × │░░░░░░░ │  title: size-lg, weight-semibold
│ ░░░│                                   │░░░░░░░ │  close: icon-only, text-tertiary
│ ░░░│  This will permanently delete     │░░░░░░░ │  body: size-sm, text-secondary
│ ░░░│  "My Project" and all its data.   │░░░░░░░ │
│ ░░░│  This action cannot be undone.    │░░░░░░░ │
│ ░░░│                                   │░░░░░░░ │
│ ░░░│            ┌────────┐ ┌────────┐  │░░░░░░░ │  actions: right-aligned
│ ░░░│            │ Cancel │ │ Delete │  │░░░░░░░ │  Cancel=tertiary, Delete=destructive-filled
│ ░░░│            └────────┘ └────────┘  │░░░░░░░ │
│ ░░░└───────────────────────────────────┘░░░░░░░ │  modal: --color-neutral-elevated
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │  border: --color-border-edge
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │  radius: --radii-lg
└─────────────────────────────────────────────────┘
```

### 5.2 Toast Notifications

```
                                    ┌──────────────────────────────┐
                                    │ ▌ Changes saved              │  success toast
                                    │ ▌ Project settings updated.  │  left border: success-fg
                                    │                           ×  │  auto-dismiss: 4-5s
                                    └──────────────────────────────┘
                                    ↕ --spacing-sm
                                    ┌──────────────────────────────┐
                                    │ ▌ Unable to sync             │  warning toast
                                    │ ▌ Will retry automatically.  │  left border: warning-fg
                                    │                           ×  │  persistent
                                    └──────────────────────────────┘

  Position: top-right, offset --spacing-lg from viewport edges
  Background: --color-neutral-elevated
  Border: --color-border-edge (+ semantic left border)
  Stack: --spacing-sm gap between toasts
```

### 5.3 Feedback State Examples

#### Empty State
```
┌──────────────────────────────────────────────┐
│                                              │
│                                              │
│                    ◇                        │  icon: 40px, --color-text-tertiary
│                                              │  geometric, restrained
│              No projects yet                 │  --typography-size-base, weight-medium
│                                              │  --color-text-primary
│       Create your first project to           │  --typography-size-sm
│             get started.                     │  --color-text-secondary
│                                              │
│           ┌─────────────────┐                │
│           │ Create Project  │                │  primary button
│           └─────────────────┘                │
│                                              │
└──────────────────────────────────────────────┘
```

#### Loading State — Spinner
```
┌──────────────────────────────────────────────┐
│                                              │
│                                              │
│                   ◠                          │  spinner: 24px, 2px stroke
│                  ◜ ◝                        │  track: --color-text-tertiary
│                                              │  arc: --color-text-secondary
│                                              │  animation: linear rotation
│                                              │
└──────────────────────────────────────────────┘
```

#### Loading State — Skeleton
```
┌──────────────────────────────────────────────┐
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓    │  header skeleton
├──────────────────────────────────────────────┤
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓    │  row skeletons
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓    │  --color-neutral-surface
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓    │  pulse animation: opacity 0.4–1.0
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓   ▓▓▓▓▓▓▓▓▓▓    │  --motion-duration-slow
└──────────────────────────────────────────────┘
```

#### Error Banner
```
┌──────────────────────────────────────────────────────────┐
│  ⚠  Unable to load activity feed.  Try again            │  error banner
│                                                       ×  │  bg: --color-semantic-error-background
└──────────────────────────────────────────────────────────┘  text: --color-semantic-error-foreground
                                                              icon: 16px, error-foreground
  "Try again" = text link / tertiary action                   persistent until dismissed
```

#### Error Page
```
┌──────────────────────────────────────────────┐
│                                              │
│                                              │
│                    ⊘                        │  icon: 40px, --color-semantic-error-fg
│                                              │
│             Connection lost                  │  size-lg, weight-semibold, text-primary
│                                              │
│     We couldn't reach the server. This       │  size-sm, text-secondary
│     may be a temporary network issue.        │
│                                              │
│             ┌──────────────┐                 │
│             │  Try Again   │                 │  primary button
│             └──────────────┘                 │
│                                              │
└──────────────────────────────────────────────┘
```

### 5.4 Inline vs. Modal Decision Reference

| Scenario | Recommended Pattern | Rationale |
|---|---|---|
| User saves a form | Inline success text or toast | Routine, reversible, non-blocking |
| User deletes a record | Modal confirmation dialog | Irreversible, requires explicit consent |
| Background file upload completes | Toast notification | Async operation, non-blocking |
| Form validation fails | Inline field errors + error summary | User needs to correct specific fields |
| Server is unreachable | Error banner or error page | Persistent issue, may require retry |
| Session is about to expire | Warning banner or modal | Time-sensitive, may require action |
| User creates a new entity | Modal form (if context-free) or navigate to creation page | Depends on complexity — 1–3 fields may use a modal; more should use a dedicated page |
| Bulk operation partially failed | Toast (summary) + inline row indicators | Multiple items, user needs granular feedback |

### 5.5 Token Quick Reference

| Purpose | Token |
|---|---|
| Modal/popover/toast background | `--color-neutral-elevated` |
| Popover-above-modal background | `--color-neutral-overlay` |
| Overlay border | `1px solid --color-border-edge` |
| Modal radius | `--radii-lg` |
| Popover/toast radius | `--radii-md` |
| Backdrop | `rgba(0, 0, 0, 0.5)` |
| Modal padding | `--spacing-xl` |
| Toast padding | `--spacing-md` to `--spacing-lg` |
| Success text/accent | `--color-semantic-success-foreground` |
| Success background | `--color-semantic-success-background` |
| Warning text/accent | `--color-semantic-warning-foreground` |
| Warning background | `--color-semantic-warning-background` |
| Error text/accent | `--color-semantic-error-foreground` |
| Error background | `--color-semantic-error-background` |
| Info text/accent | `--color-semantic-info-foreground` |
| Info background | `--color-semantic-info-background` |
| Spinner track | `--color-text-tertiary` |
| Spinner arc | `--color-text-secondary` |
| Skeleton fill | `--color-neutral-surface` |
| Progress track | `--color-neutral-surface` |
| Progress fill | `--color-accent-solid-muted` |
| Modal entrance | `--motion-duration-normal` / `--motion-easing-out` |
| Modal exit | `--motion-duration-fast` / `--motion-easing-in` |
| Toast entrance | `--motion-duration-normal` / `--motion-easing-out` |
| Toast auto-dismiss | `4–6 seconds` |
| Success transient duration | `2–3 seconds` |

---

## Cross-References

- [System Spec — Motion](system-spec.md#10-motion) — motion philosophy and appropriate/inappropriate uses.
- [System Spec — Surface Model](system-spec.md#6-surface-model) — edge treatment, depth model, and the prohibition on glassmorphism and glow effects.
- [System Spec — Semantic Colors](system-spec.md#54-semantic-colors) — semantic state independence from brand accent.
- [Forms and Action Controls — Validation](forms-and-action-controls.md#33-inline-validation-and-error-messages) — field-level error and warning patterns.
- [Forms and Action Controls — Dialog Actions](forms-and-action-controls.md#23-button-hierarchy-in-context) — button hierarchy in modal dialogs.
- [Data-Dense Workspace Patterns — Empty States](data-dense-workspace-patterns.md#56-empty-states) — empty state patterns for dense surfaces.
- [Consumption Guide](consumption-guide.md) — how downstream products import and use design-system tokens.
