# Design Tokens

Source token files for the EverGray Tech visual system. These are the authored source of truth — all generated outputs (CSS variables, JSON exports) are derived from these files.

## Structure

```
tokens/
├── color/
│   ├── neutrals.json    Charcoal-based surface layers (canvas → overlay)
│   ├── text.json         Text hierarchy (primary → disabled, inverse)
│   ├── border.json       Edge glints, structural dividers, focus rings
│   ├── accent.json       Brand gradient stops + solid accent fallbacks
│   └── semantic.json     Success, warning, error, info (independent from brand)
├── typography.json        Font families, size scale, weight, line-height, letter-spacing
├── spacing.json           4px-based spatial progression
├── radii.json             Restrained corner radius scale
└── motion.json            Duration and easing tokens
```

## Design Decisions

**Color is split by role, not by hue.** Neutrals, text, borders, accent, and semantic states each have distinct files because they serve different purposes in the system. This prevents accidental coupling — for example, semantic error red must never be confused with the brand gradient's burgundy stop.

**The brand gradient is a named accent, not a fill language.** The three gradient stops (`#A21534` → `#0F263D` → `#3A7ABB`) are extracted directly from the logo SVG. Solid fallbacks exist for contexts where gradients are impractical. Accent is reserved for brand moments, primary CTAs, and emphasis — not routine interactive chrome.

**Semantic states are fully independent.** Success, warning, error, and info each have foreground/background pairs that function without any reference to the brand accent. This is a deliberate separation required by the spec.

**One token set serves both expressions.** The website (more cinematic) and applications (stricter) draw from the same tokens. Expression-specific overrides are not included because the spec describes a shared system with behavioral differences, not different value sets. If overrides become necessary, they should be added as a separate layer — not by forking these source files.

**Granularity is deliberately restrained.** The type scale has 9 steps, spacing has 10, radii has 6, and motion has 4 durations × 4 easings. This is intentionally fewer values than many systems use. The goal is to force consistency rather than offer unlimited choice.

## Tradeoffs

- **Border tokens use `rgba()` instead of hex.** This allows transparency-based edge treatment that adapts to any surface below it. Some build tools may need configuration to preserve these values.
- **No component-level tokens.** Tokens describe the visual language, not component API (e.g., no `button-padding` or `card-radius`). Component decisions belong in consuming implementations.
- **No light theme.** The spec defines a charcoal-based dark system exclusively. A light theme is not part of the current direction.
- **Font families are suggestive, not final.** Inter and JetBrains Mono are chosen as strong defaults matching the spec's "premium-tech" direction. They may be replaced after visual review — the token names will remain stable.
