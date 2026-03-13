# Website Brand Atmosphere, Graphics, and Motion Restraint Guidance

This document defines shared design-system guidance for website-only atmospheric brand treatments, graphic motifs, and restrained marketing motion. It enables EverGray web properties to feel cinematic within the system's boundaries without drifting into glow-heavy, glassy, or overly decorative styling.

This guidance applies exclusively to marketing and brand surfaces (`evergraytech.com` and related brand pages) — not to operational application interfaces. Applications follow the strictly functional posture defined in [System Spec](system-spec.md). Websites are permitted a more expressive range, but that range has clear boundaries.

---

## 1. Atmospheric Accent Treatments

Atmospheric treatments create visual energy and depth on brand surfaces — hero areas, section backgrounds, and transitional moments. They distinguish the website from the application's flat operational surfaces while remaining recognizably EverGray.

### 1.1 Acceptable Atmospheric Patterns

#### Ambient Gradient Fields

Large-scale, soft gradients that provide tonal variation across a section background. They create a sense of environment without introducing literal imagery.

**Structure:**
- **Radial gradients** centered off-screen or at a section corner, fading from a tinted tone to the canvas color. This creates pooled light — as if a subtle illumination exists beyond the viewport.
- **Linear gradients** along one axis (typically top-to-bottom or corner-to-corner), transitioning between two closely related neutrals or from a muted accent tone to canvas.
- Color range: From `--color-neutral-canvas` to a slightly lighter or warmer neutral — no more than `5–8%` perceived brightness shift. Alternatively, from a deeply desaturated accent-adjacent hue to canvas.
- Opacity: Gradient endpoints should never exceed `0.15` opacity for colored layers over the canvas. The atmosphere must feel like ambient light, not a colored overlay.

#### Subtle Radial Highlights

Soft, circular light impressions that suggest depth or focus without representing a literal light source.

**Structure:**
- A radial gradient with a slightly lighter or warmer center, typically `200px`–`600px` in diameter, placed behind hero content or at section focal points.
- Center opacity: `0.06`–`0.12`. The highlight should be barely conscious — felt more than seen.
- Color: Desaturated warm neutral or very faintly tinted toward the accent hue. Never a saturated color.
- Blur: Large radius, soft edges. No hard boundaries.

#### Restrained Hero Background Energy

The hero area of `evergraytech.com` may carry the most atmospheric energy of any surface. Even here, restraint governs.

**Permitted:**
- A single ambient gradient field providing tonal depth.
- A subtle radial highlight drawing soft focus toward the headline.
- Fine geometric line work (see Section 2) providing structural texture.
- Very slow, barely perceptible ambient motion (see Section 3).

**Prohibited:**
- Multiple layered glow effects competing for attention.
- Animated particle systems or generative noise textures.
- Background video or full-bleed imagery.
- Any treatment that makes the headline harder to read.

#### Tonal Overlays for Depth

When a section uses a background image or graphic element, a tonal overlay ensures text remains readable and the surface stays dark-first.

**Structure:**
- Semi-transparent overlay: `rgba(18, 18, 22, 0.7)` to `rgba(18, 18, 22, 0.85)` depending on the content below.
- The overlay should make the underlying element feel like a distant backdrop, not a competing visual layer.
- Never use tonal overlays to make bright or colorful imagery fit the dark palette. Choose source materials that are already dark and muted.

### 1.2 Where Atmosphere Belongs

| Surface | Atmospheric Treatment | Intensity |
|---|---|---|
| Hero section | Gradient field + optional highlight + optional line work | Maximum (within boundaries) |
| Section backgrounds | Ambient gradient field only | Low — subtle tonal shift |
| CTA emphasis areas | Subtle radial highlight behind the CTA cluster | Minimal — draws focus, not decoration |
| Footer | None or very faint gradient fade to pure canvas | Minimal |
| Navigation / header | None | None — must be structurally clear |
| Blog / content pages | None or very faint section toning | Minimal |

### 1.3 What Is Prohibited

These treatments conflict with the system's machined, precise character:

- **Glassmorphism:** No frosted-glass surfaces, no background blur on panels or overlays.
- **Neon glow:** No bright, saturated glow effects around elements, text, or borders. The system's edge glints use `--color-border-glint` — a faint metallic catch, not a glow.
- **Gradient text:** No gradient fills on typography. Text uses solid color tokens only.
- **Colored shadows:** No shadows tinted with brand or accent colors. Shadows are always neutral black with controlled opacity.
- **Saturated backgrounds:** No section backgrounds using saturated brand colors at medium-to-high opacity. The palette stays dark and desaturated.
- **Bokeh or lens effects:** No simulated depth-of-field, lens flare, or photographic atmospheric effects.

---

## 2. Graphic Motif Guidance

Supporting graphics reinforce EverGray's technical, precision-oriented identity. They are structural by nature — geometric, diagrammatic, and restrained. They never compete with content or introduce illustrative styles that drift from the brand.

### 2.1 Approved Graphic Patterns

#### Geometric Dividers

Thin horizontal or angled lines that separate sections or create visual rhythm across the page.

**Structure:**
- Stroke: `1px`, `--color-border-edge` or `--color-border-divider`.
- May include subtle angle changes (2°–5° off horizontal) to create a sense of engineered precision.
- May terminate with small geometric endpoints (circles, diamonds, right angles) at `4px`–`6px`.
- Must span the full content width or clearly align with the layout grid.

**Rules:**
- Do not use decorative flourishes, curves, or organic shapes.
- Dividers are structural, not ornamental. They should feel like part of the layout, not an added decoration.

#### Line-Led Framework Graphics

Networks of thin, connected lines that suggest technical diagrams, circuit patterns, or structural frameworks. These appear as background texture behind content sections.

**Structure:**
- Stroke: `1px`, `--color-border-edge` at `0.1`–`0.2` opacity.
- Nodes: Small circles (`3px`–`5px`) at intersection points.
- Pattern: Orthogonal or angular — no curves, no organic flow. Grid-aligned where possible.
- Density: Sparse. The pattern should never be busier than the content above it.
- Coverage: Partial — occupying 30–50% of the section area, fading at edges.

**Rules:**
- Line-led graphics must feel like technical annotation, not decoration.
- They should recede when content is present and become slightly more visible in empty margins.
- Do not animate line networks (no drawing effects, no pulsing nodes).

#### Subtle Diagrammatic Accents

Small abstract diagrams (flow arrows, connection graphs, hierarchy trees) used as supporting visuals near feature descriptions or value propositions.

**Structure:**
- Monochrome: `--color-text-tertiary` or `--color-border-divider` strokes. No filled areas, no gradient fills.
- Size: `120px`–`240px` — small enough to support text, not replace it.
- Style: Thin-line, geometric, precise. Straight edges and clean angles.

**Rules:**
- Diagrams must feel like they could be real technical artifacts — not abstract art or marketing illustration.
- Do not use icons as diagrams. Icons are functional UI elements; diagrams are atmospheric brand elements.
- Do not use more than one diagrammatic accent per content section.

#### Logo-Adjacent Framing

Geometric line work or structural elements that frame or extend from the EverGray logo in hero contexts.

**Structure:**
- Lines extending from logo corners or edges, creating a framwork or grid-like emanation.
- Stroke: `1px`, `--color-border-edge` to `--color-border-glint`.
- Must respect the logo's clear space (see brand assets).
- Must not alter the logo itself or connect to it in a way that creates a new mark.

#### Abstract Structural Backgrounds

Large-scale geometric patterns (grids, isometric planes, perspective grids) used as very faint background textures.

**Structure:**
- Opacity: `0.03`–`0.08` — barely visible, creating subtle texture rather than a visible pattern.
- Color: `--color-border-edge` or `--color-text-tertiary`.
- Scale: Lines at `60px`–`120px` intervals. Dense grids feel like graph paper (too literal); wide spacing feels engineered.
- Coverage: Full-section or full-bleed, fading at edges.

### 2.2 Graphic Character Boundaries

All supporting graphics must pass this test: **Would this feel at home on a precision tooling manufacturer's website, or on a creative agency's portfolio?** EverGray graphics feel like the former — technical, structural, precise.

**Acceptable character:**
- Geometric, angular, grid-aligned.
- Monochrome or very faintly tinted.
- Sparse, deliberate, precisely placed.
- Line-based with minimal fills.

**Unacceptable character:**
- Organic, curved, flowing, or hand-drawn.
- Colorful, gradient-filled, or photographic.
- Dense, busy, or competing with content.
- Illustrative, figurative, or narrative.
- 3D-rendered objects, realistic textures, or material simulations.

---

## 3. Motion Restraint for Marketing Surfaces

Website motion creates presence and polish. But motion on EverGray surfaces must feel like precision engineering — not spectacle. Every animation earns its existence by improving comprehension or creating a measured sense of quality.

### 3.1 Permitted Motion Types

#### Hero Ambient Motion

Very slow, continuous motion in the hero background that creates a sense of environment.

**Rules:**
- Duration: `30s+` per cycle. This is barely perceptible motion — a slow drift, not an animation.
- Amplitude: `10px–30px` of movement range. The eye should not track this motion consciously.
- Type: Gradient position shift, subtle parallax of background elements, slow rotation of a radial highlight (`<1° per second`).
- Opacity variation: `±0.02`–`±0.04` oscillation maximum.
- No sudden changes, no direction reversals, no pulsing.

#### Section Reveal Motion

Content sections fade or translate into view as the user scrolls.

**Rules:**
- Duration: `--motion-duration-normal` (`250ms`) to `400ms` per element.
- Easing: `--motion-easing-out`.
- Translation: `16px`–`24px` upward. No horizontal translation, no scaling, no rotation.
- Opacity: `0` → `1`.
- Stagger: If multiple elements reveal in sequence, stagger by `50ms`–`80ms` per element. Maximum `3–4` elements in a stagger group.
- Each element reveals once. No re-animation on scroll-up.
- Trigger: When the element enters the viewport (50% visibility threshold).

#### Hover Transitions

Interactive elements on the website (buttons, cards, links) use controlled hover transitions.

**Rules:**
- Duration: `--motion-duration-fast` (`150ms`).
- Properties: Background color, border color, text color, box-shadow. No transform (scale, rotate, translate) on hover for text elements. Cards may use `translateY(-2px)` maximum with a subtle shadow increase.
- Easing: `--motion-easing-default`.

#### CTA Emphasis Motion

Call-to-action buttons or sections may use very subtle attention cues.

**Rules:**
- A faint pulse of the button's box-shadow (opacity oscillation `0.0`–`0.1`) with a `3s+` cycle is acceptable.
- No scaling, bouncing, shaking, or color-cycling.
- The pulse must be ignorable — it creates ambient presence, not distraction.
- Only one CTA per page may have emphasis motion.

### 3.2 What Crosses Into Spectacle

These treatments are prohibited because they prioritize visual impression over information delivery:

- **Parallax scrolling** with more than one layer of differential movement.
- **Scroll-jacking** — taking over native scroll behavior.
- **Auto-playing video** backgrounds.
- **Particle systems**, animated noise, or generative art.
- **Text animation** — typing effects, letter-by-letter reveals, morphing text.
- **3D transforms** — perspective rotation, card flips, depth effects.
- **Looping attention-seekers** — bouncing arrows, pulsing rings, animated gradients faster than 10s/cycle.
- **Page transition animations** that delay content delivery.
- **Counter animations** ("counting up" from 0 to N).

### 3.3 Timing Reference

| Motion Type | Duration | Easing | Max Amplitude |
|---|---|---|---|
| Hero ambient drift | `30s+` cycle | `linear` or `ease-in-out` | `10px–30px` |
| Section reveal | `250ms–400ms` | `--motion-easing-out` | `16px–24px` translateY |
| Reveal stagger | `50ms–80ms` offset | — | 3–4 elements max |
| Hover transition | `150ms` | `--motion-easing-default` | Color/shadow only |
| CTA pulse | `3s+` cycle | `ease-in-out` | `0.1` opacity shadow |
| Radial highlight drift | `20s+` cycle | `linear` | `±0.04` opacity |

---

## 4. Surface-Atmosphere Interaction

Atmospheric treatments must coexist with the dark-surface model — they strengthen the machined layering, not weaken it.

### 4.1 Layering with Surfaces

**Atmosphere sits below surfaces.** Any gradient field, radial highlight, or background pattern exists at the canvas level. Surface panels, cards, and content containers sit on top and are not affected by the atmosphere beneath them.

**Rules:**
- Surface panels (`--color-neutral-surface`) must maintain their solid background — no transparency to "show through" the atmosphere below.
- Borders (`--color-border-edge`, `--color-border-glint`) remain consistent regardless of the atmospheric treatment behind them.
- Atmospheric treatments must not bleed into or tint surfaces above them.

### 4.2 Edge Glints and Atmosphere

The system's edge glint (`--color-border-glint`) creates a faint metallic catch on surface top edges. On atmospheric sections, this may be slightly more visible due to the tonal variation behind it. This is acceptable — it reinforces the machined quality.

**Rules:**
- Do not increase glint brightness or modify glint tokens for atmospheric sections. The existing token value creates natural variation.
- Do not add additional glow or highlight effects to surface edges on atmospheric backgrounds. The glint alone is sufficient.

### 4.3 Shadow and Depth

Shadows on atmospheric backgrounds must remain neutral.

**Rules:**
- Shadow color: Always `rgba(0, 0, 0, *)` — never tinted.
- Shadow spread: Same values as non-atmospheric sections. Do not increase shadow intensity to "stand out" against gradients.
- If a surface is hard to distinguish against an atmospheric background, increase the surface's border contrast (use `--color-border-divider` instead of `--color-border-edge`) rather than adding shadow.

### 4.4 Section Separators

Sections on atmospheric pages need clear separation without heavy dividers.

**Options:**
- **Tonal shift:** The gradient/atmosphere changes character between sections (e.g., a radial highlight in the hero fades to flat canvas in the next section). The change itself is the separator.
- **Geometric divider:** A thin `1px` line at the section boundary, styled per Section 2.1.
- **Spacing:** `--spacing-3xl` (`64px`) or more between sections, creating a visual pause.
- **Surface change:** One section uses canvas, the next uses `--color-neutral-surface` as its background, creating a tonal step.

**Rules:**
- Do not use colored section dividers, gradient separators, or decorative wave/curve shapes between sections.
- Choose one separation strategy per page and apply it consistently.

### 4.5 Text Contrast on Atmospheric Backgrounds

Text on atmospheric sections must remain readable. The atmosphere is subordinate to the content.

**Rules:**
- All text must meet WCAG AA contrast against its effective background (the darkest point of the gradient beneath it, not the average).
- `--color-text-primary` on any atmospheric treatment must maintain `7:1`+ contrast. This is a stricter target than the `4.5:1` minimum — marketing text should be effortlessly readable, not minimum-compliant.
- If an atmospheric treatment makes text harder to read, reduce the atmosphere's opacity — never brighten the text as compensation.
- Headlines may use `--color-text-primary` at `--typography-weight-bold` for strong presence on atmospheric hero sections.

---

## 5. Accessibility and Reduced Motion

All atmospheric treatments and motion are secondary to content. When they conflict with accessibility, they disappear.

### 5.1 Reduced-Motion Behavior

When the user has `prefers-reduced-motion: reduce` enabled:

| Treatment | Behavior |
|---|---|
| Hero ambient motion | Stops entirely. Show the gradient at its center position, static. |
| Section reveal animations | Elements appear instantly at their final position. No fade, no translate. |
| CTA pulse | Stops entirely. Button appears at its rest state. |
| Hover transitions | Reduced to `0ms` duration — instant state changes. |
| Background pattern animation (if any) | Stops entirely. Show static pattern. |
| Radial highlight drift | Stops. Static highlight at center position. |

**Rule:** `prefers-reduced-motion` disables all motion, not just "distracting" motion. The user has requested stillness — respect it completely.

### 5.2 Contrast Preservation

- Atmospheric gradients must never create areas where text contrast drops below WCAG AA.
- Test contrast at the lightest point of any gradient beneath text, not the average.
- When a radial highlight sits behind text, ensure the highlight's center (brightest point) still provides sufficient text contrast above it.
- Semantic colors in badges or CTAs must maintain their contrast independently of any atmospheric background.

### 5.3 Content Independence

Atmospheric treatments carry zero information. Nothing should be lost if:
- All gradients are replaced with flat `--color-neutral-canvas`.
- All graphic motifs are removed.
- All motion is disabled.

The page must be fully functional, fully readable, and fully navigable as a flat, static dark surface. Atmosphere is polish, not structure.

---

## 6. Examples and Dos/Don'ts

### 6.1 Acceptable Hero Treatment

```
┌────────────────────────────────────────────────────────────────────┐
│ ░░░░░░░░░░░░░░╲╲╲╲░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │  nav: solid, no atmosphere
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│         ·  ·  ·              ·                                     │  line-led framework graphic
│         ·──·──·              ·                                     │  opacity 0.1, --color-border-edge
│            ·                                                       │
│                                                                    │
│                                                                    │  radial highlight (0.08 opacity)
│           EverGray Technology                                      │  centered behind headline
│           ──────────────────────                                   │  
│           Precision tools for                                      │  headline: text-primary, weight-bold
│           modern workflows.                                        │  subhead: text-secondary
│                                                                    │
│           ┌─────────────────┐                                      │
│           │   Get Started   │                                      │  primary CTA
│           └─────────────────┘                                      │
│                                                            ○       │  ambient gradient: corner radial
│                                                          ○         │  accent-adjacent tint, 0.10 opacity
│                                                        ○           │  fading to canvas
│                                                                    │
├ ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ─┤  geometric divider (1px)
│                                                                    │
│           Next section content...                                  │  flat canvas, no atmosphere
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### 6.2 Acceptable Section Background

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │  linear gradient: top-left to
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │  bottom-right, canvas → canvas+5%
│  ░░                                                        ░░  │  brightness shift
│  ░░     Feature Section Title                              ░░  │
│  ░░     ─────────────────                                  ░░  │  text: full contrast preserved
│  ░░                                                        ░░  │
│  ░░     ┌────────────┐  ┌────────────┐  ┌────────────┐     ░░  │  surface cards sit on top
│  ░░     │  Feature 1 │  │  Feature 2 │  │  Feature 3 │     ░░  │  solid --color-neutral-surface
│  ░░     │            │  │            │  │            │     ░░  │  borders unaffected
│  ░░     └────────────┘  └────────────┘  └────────────┘     ░░  │
│  ░░                                                        ░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### 6.3 Dos and Don'ts

**Atmosphere:**

| ✓ Do | ✗ Don't |
|---|---|
| Use soft, large-radius radial gradients at `0.06–0.12` opacity | Use small, sharp, saturated glow spots |
| Fade gradients to canvas at their edges | Create hard-edged color boundaries |
| Keep gradient color range within `5–8%` brightness of canvas | Use bright or saturated gradient endpoints |
| Place atmosphere below content in the z-stack | Let atmosphere bleed into surface panels |
| Test text contrast at the lightest gradient point | Assume average gradient brightness is sufficient |

**Graphics:**

| ✓ Do | ✗ Don't |
|---|---|
| Use thin-line geometric patterns at `0.1–0.2` opacity | Use thick lines, filled shapes, or solid patterns |
| Keep diagrams monochrome and sparse | Use colorful, illustrated, or figurative graphics |
| Align graphic elements to the layout grid | Place graphics randomly or asymmetrically without intention |
| Use graphics to reinforce technical precision | Use graphics as decorative filler |
| Limit to one diagrammatic accent per section | Layer multiple graphic motifs in the same area |

**Motion:**

| ✓ Do | ✗ Don't |
|---|---|
| Use `250ms–400ms` section reveals with scroll trigger | Use scroll-jacking or parallax effects |
| Keep hero ambient motion at `30s+` cycles | Use fast-cycling animations or loops under `10s` |
| Stagger reveals by `50–80ms` for 3–4 elements max | Stagger more than 4 elements or use long delays |
| Disable all motion when `prefers-reduced-motion` is set | Selectively keep "subtle" motion for reduced-motion users |
| Use opacity and translateY only for reveals | Use scale, rotate, 3D transforms, or perspective |

### 6.4 Token Quick Reference

| Purpose | Token / Value |
|---|---|
| Canvas background (atmosphere base) | `--color-neutral-canvas` |
| Gradient tint maximum | `0.15` opacity colored layer |
| Radial highlight center opacity | `0.06`–`0.12` |
| Background pattern stroke | `--color-border-edge` at `0.1`–`0.2` opacity |
| Tonal overlay range | `rgba(18, 18, 22, 0.7)` to `rgba(18, 18, 22, 0.85)` |
| Graphic stroke weight | `1px` |
| Edge glint | `--color-border-glint` (unmodified) |
| Surface background | `--color-neutral-surface` (solid, no transparency) |
| Section reveal duration | `250ms`–`400ms` |
| Section reveal easing | `--motion-easing-out` |
| Reveal translate | `16px`–`24px` translateY |
| Reveal stagger | `50ms`–`80ms` per element |
| Hover transition | `--motion-duration-fast` / `--motion-easing-default` |
| Hero ambient cycle | `30s+` |
| CTA pulse cycle | `3s+`, `0.1` max shadow opacity |
| Text contrast target | `7:1`+ for marketing headlines |

---

## Cross-References

- [System Spec — Visual Language](system-spec.md#3-visual-language) — overall expression principles and what the system prohibits.
- [System Spec — Surface Model](system-spec.md#6-surface-model) — edge treatment, depth model, and glint behavior.
- [System Spec — Motion](system-spec.md#10-motion) — motion philosophy shared across applications and website.
- [System Spec — Marketing Website](system-spec.md#131-marketing-website) — website-class expression scope.
- [Consumption Guide](consumption-guide.md) — how downstream projects import and use design-system tokens.
