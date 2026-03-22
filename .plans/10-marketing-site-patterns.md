# Plan: Marketing Site Composition and CTA Patterns Guidance

## Objective
Define shared design-system guidance for marketing-site composition, section structure, and CTA hierarchy so EverGray Tech web properties can build public-facing pages with a consistent, slightly more cinematic expression that still clearly belongs to the same system as the applications.

## Customer Value
- Gives `evergraytech.com` and future marketing properties reusable composition rules instead of a parallel local visual grammar
- Makes hero sections, proof blocks, CTA structure, and marketing hierarchy more consistent across sites
- Clarifies how the website expression can feel more spacious and branded without becoming generic SaaS or decorative theater

## Scope Decisions (Locked)
- This plan defines reusable marketing patterns and posture, not site maps, copy strategy, or one mandatory landing-page template
- Guidance should support recurring marketing sections while preserving flexibility for future pages and launches
- CTA hierarchy must distinguish primary, secondary, quiet, and inline/contact-oriented actions without requiring a shared component library
- Responsive guidance remains pattern-based; exact implementation details and breakpoints stay local to consuming sites
- Marketing guidance must remain aligned with the canonical system's structure-first, typography-led hierarchy

## Prerequisites
- `docs/system-spec.md`
- `09-website-brand-atmosphere-and-graphics.md`

## Implementation Checklist

### 1. Marketing Composition Guidance
- [x] Create a dedicated guidance doc for recurring marketing-site structures including hero sections, intro/value sections, credibility or leadership proof blocks, grouped service/capability lists, CTA sections, and footer structure
- [x] Define the intended posture of each section type without prescribing one exact page composition
- [x] Clarify how section framing, spacing, and containment should support a premium technical brand expression

### 2. Section Hierarchy and Content Framing
- [x] Document hierarchy rules for eyebrow/kicker text, primary headlines, supporting lead paragraphs, body copy, grouped lists, supporting metadata, and section transitions
- [x] Clarify how marketing surfaces should create emphasis through typography, spacing, layout, and restraint rather than decorative styling
- [x] Define when separators, borders, or spacing alone should carry section boundaries

### 3. CTA and Link-Emphasis Hierarchy
- [x] Define the recommended hierarchy for primary CTAs, secondary CTAs, quiet/tertiary links, inline text links, and contact-oriented actions
- [x] Clarify when brand accent is appropriate versus when neutral treatment should lead
- [x] Document hover, focus, and active-state expectations in a marketing context

### 4. Responsive Posture
- [x] Provide guidance for headline wrapping, width constraints, section spacing changes, stacked versus multi-column content blocks, CTA regrouping, and contact/info card behavior on smaller screens
- [x] Ensure mobile adaptations preserve clarity, hierarchy, and composure rather than simply shrinking desktop patterns
- [x] Clarify which marketing structures may simplify or collapse on narrow viewports

### 5. Website-Specific Dos and Don'ts
- [x] Document practical boundaries for atmosphere, card treatment, border/divider use, and section emphasis so marketing pages remain premium and composed
- [x] Capture the limits that prevent drift into generic SaaS styling, glass-heavy presentation, or overbuilt marketing chrome
- [x] Cross-reference website atmosphere guidance where section composition and background treatment overlap

### 6. Examples and Reference Structures
- [x] Add representative examples of hero, section, proof, and CTA structures
- [x] Include annotated responsive examples or equivalent rules for mobile adaptation
- [x] Optionally define recommended marketing-pattern naming if it improves downstream reuse without overformalizing implementation

## Acceptance Criteria
- [x] Downstream marketing sites can compose key sections without inventing a parallel local visual grammar
- [x] CTA hierarchy is clearer and more reusable across marketing surfaces
- [x] The website's “slightly more cinematic” expression becomes concrete enough to implement consistently
- [x] Marketing layouts remain recognizably part of the same system as EverGray Tech applications
- [x] The guidance clearly supports `evergraytech.com` adoption work and future EverGray Tech marketing pages
