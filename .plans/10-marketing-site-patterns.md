# Plan: Marketing Site Composition and CTA Patterns Guidance

## Objective
Define shared design-system guidance for marketing-site composition, section structure, and CTA hierarchy so EverGray web properties can build public-facing pages with a consistent, slightly more cinematic expression that still clearly belongs to the same system as the applications.

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
- [ ] Create a dedicated guidance doc for recurring marketing-site structures including hero sections, intro/value sections, credibility or leadership proof blocks, grouped service/capability lists, CTA sections, and footer structure
- [ ] Define the intended posture of each section type without prescribing one exact page composition
- [ ] Clarify how section framing, spacing, and containment should support a premium technical brand expression

### 2. Section Hierarchy and Content Framing
- [ ] Document hierarchy rules for eyebrow/kicker text, primary headlines, supporting lead paragraphs, body copy, grouped lists, supporting metadata, and section transitions
- [ ] Clarify how marketing surfaces should create emphasis through typography, spacing, layout, and restraint rather than decorative styling
- [ ] Define when separators, borders, or spacing alone should carry section boundaries

### 3. CTA and Link-Emphasis Hierarchy
- [ ] Define the recommended hierarchy for primary CTAs, secondary CTAs, quiet/tertiary links, inline text links, and contact-oriented actions
- [ ] Clarify when brand accent is appropriate versus when neutral treatment should lead
- [ ] Document hover, focus, and active-state expectations in a marketing context

### 4. Responsive Posture
- [ ] Provide guidance for headline wrapping, width constraints, section spacing changes, stacked versus multi-column content blocks, CTA regrouping, and contact/info card behavior on smaller screens
- [ ] Ensure mobile adaptations preserve clarity, hierarchy, and composure rather than simply shrinking desktop patterns
- [ ] Clarify which marketing structures may simplify or collapse on narrow viewports

### 5. Website-Specific Dos and Don'ts
- [ ] Document practical boundaries for atmosphere, card treatment, border/divider use, and section emphasis so marketing pages remain premium and composed
- [ ] Capture the limits that prevent drift into generic SaaS styling, glass-heavy presentation, or overbuilt marketing chrome
- [ ] Cross-reference website atmosphere guidance where section composition and background treatment overlap

### 6. Examples and Reference Structures
- [ ] Add representative examples of hero, section, proof, and CTA structures
- [ ] Include annotated responsive examples or equivalent rules for mobile adaptation
- [ ] Optionally define recommended marketing-pattern naming if it improves downstream reuse without overformalizing implementation

## Acceptance Criteria
- [ ] Downstream marketing sites can compose key sections without inventing a parallel local visual grammar
- [ ] CTA hierarchy is clearer and more reusable across marketing surfaces
- [ ] The website's “slightly more cinematic” expression becomes concrete enough to implement consistently
- [ ] Marketing layouts remain recognizably part of the same system as EverGray applications
- [ ] The guidance clearly supports `evergraytech.com` adoption work and future EverGray marketing pages
