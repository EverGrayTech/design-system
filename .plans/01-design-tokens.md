# Plan: Initial Design Token System

## Objective
Define the foundational design token set for the EverGray Tech visual system — a deliberate, minimal, production-appropriate collection of source tokens derived directly from `SYSTEM_SPEC.md`.

## Customer Value
- Establishes the single source of truth for all visual values across website and application expressions
- Enables consistent implementation of the charcoal-based dark theme, geometric minimalism, and premium technical direction
- Provides a shared vocabulary between design and engineering without over-abstracting

## Scope Decisions (Locked)
- Tokens are source/design-level only — no build pipeline, no platform transforms yet
- The brand gradient is represented as a named accent construct, not a default fill
- Semantic states (success, warning, error, info) remain fully independent from the brand gradient system
- Both website and application expressions draw from the same token set; expression-specific overrides are deferred unless clearly justified by the spec
- No component library, no app-specific overrides, no one-off hardcoded values outside token files
- Token granularity is intentionally restrained — prefer fewer well-chosen values over exhaustive scales

## Prerequisites
- `SYSTEM_SPEC.md` (exists, serves as authoritative source)

## Implementation Checklist

### 1. Directory Structure
- [x] Create `tokens/` directory with the following file layout:
  - `tokens/color/neutrals.json` — foundational charcoal-based neutral scale (canvas, chrome, surfaces, elevated, overlay)
  - `tokens/color/text.json` — text hierarchy (primary, secondary, tertiary, disabled, inverse)
  - `tokens/color/border.json` — borders, dividers, and subtle edge treatments
  - `tokens/color/accent.json` — brand gradient stops and solid accent fallback
  - `tokens/color/semantic.json` — success, warning, error, info (independent from brand)
  - `tokens/typography.json` — font families, size scale, weight scale, line-height scale, letter-spacing
  - `tokens/spacing.json` — spatial scale (based on consistent mathematical progression)
  - `tokens/radii.json` — restrained corner radius scale
  - `tokens/motion.json` — duration and easing tokens for feedback and transitions

### 2. Color: Neutrals
- [x] Define a layered neutral scale reflecting the spec's surface model: canvas → chrome → surface → elevated → overlay
- [x] Ensure tonal steps are subtle but legible, avoiding harsh separation or black-and-white severity

### 3. Color: Text Hierarchy
- [x] Define text colors for primary, secondary, tertiary, disabled, and inverse use
- [x] Ensure readable contrast at all levels against the neutral surface scale

### 4. Color: Borders & Dividers
- [x] Define subtle, cool-neutral, low-contrast border tokens
- [x] Distinguish between surface edge (faint glint) and structural divider (slightly more deliberate)

### 5. Color: Brand Accent
- [x] Define the red → dark blue → light blue gradient as named stops
- [x] Provide a solid accent fallback for contexts where gradients are impractical
- [x] Comment that accent is reserved for brand moments, CTAs, hero emphasis, and selected/focused states — not routine fills

### 6. Color: Semantic States
- [x] Define success, warning, error, and info colors with foreground and background variants
- [x] Ensure these are visually and structurally independent from the brand gradient

### 7. Typography
- [x] Define font family tokens (sans primary, monospace secondary)
- [x] Define a restrained size scale suitable for both website (larger moments) and application (compact efficiency)
- [x] Define weight, line-height, and letter-spacing scales

### 8. Spacing
- [x] Define a mathematically ordered spacing scale (e.g., 4px-based progression)
- [x] Keep the scale compact — enough for calm readability and grouping, not exhaustive

### 9. Radii
- [x] Define a minimal radius scale reflecting precision-machined, restrained rounding
- [x] Avoid over-rounded consumer softness

### 10. Motion
- [x] Define duration tokens for fast feedback, standard transitions, and deliberate entrances
- [x] Define easing tokens favoring subtle, physically plausible curves

### 11. Summary & Tradeoffs
- [x] Add a brief `tokens/README.md` documenting the structure, the reasoning behind file splits, and any deliberate tradeoffs (e.g., no expression-specific overrides yet, gradient as special accent only)

## Acceptance Criteria
- [x] All token files exist under `tokens/` with values directly traceable to `SYSTEM_SPEC.md`
- [x] Neutral surface scale supports at least five distinct layers
- [x] Brand gradient is represented as a special accent, not a default fill
- [x] Semantic states are fully independent from brand accent
- [x] Token granularity is minimal and deliberate — no unused or speculative values
- [x] Brief clarifying comments exist only where intent would otherwise be ambiguous
- [x] `tokens/README.md` explains the structure and key tradeoffs
