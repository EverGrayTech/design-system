# Plan: Application Shell and Navigation Guidance

## Objective
Create shared design-system guidance for EverGray application shells and navigation patterns so operational products can build consistent workspace framing, navigation hierarchy, and state behavior without inventing local visual rules.

## Customer Value
- Gives Plot Your Path and future EverGray applications a reusable shell posture aligned with the canonical system
- Reduces UX drift around navigation placement, page framing, and action hierarchy across products
- Makes responsive application-shell decisions more consistent even when exact breakpoints remain product-specific

## Scope Decisions (Locked)
- This plan produces design-system guidance and examples, not a framework-specific shell implementation
- The design system defines approved shell patterns and state behavior, but does not define product-specific IA or routing
- Multiple shell patterns may be supported when justified, but each must have a clear intended use and hierarchy posture
- Responsive guidance remains principle- and pattern-based; exact breakpoint values stay local to consuming products
- Guidance must stay aligned with the application expression in `docs/system-spec.md`: quiet, operational, precise, and restrained

## Prerequisites
- `docs/system-spec.md`
- `03-developer-guide.md`

## Implementation Checklist

### 1. Shell Guidance Document
- [x] Create a dedicated application-shell guidance doc covering top app bars, side navigation, page headers, section headers, workspace containers, and utility areas such as settings/help/account
- [x] Clarify when each shell region should lead visually versus remain quiet and supportive
- [x] Define default containment and framing posture so workspaces feel structured without becoming heavy or card-like

### 2. Navigation-State Behavior
- [x] Document how navigation communicates current location, hover, focus, selected, and disabled states
- [x] Define how primary navigation should differ from secondary or utility navigation in emphasis and persistence
- [x] Include explicit guidance for quiet navigation that remains unmistakable without becoming loud

### 3. Hierarchy Rules
- [x] Define how applications should separate primary workflows, supporting utilities, and low-frequency administrative controls
- [x] Clarify the relationship between page-level actions, section-level actions, and background utility controls
- [x] Capture dos/don'ts that prevent marketing-style emphasis from leaking into operational application shells

### 4. Responsive Posture
- [x] Document how shell patterns should compress, collapse, or reorganize on smaller viewports
- [x] Cover navigation regrouping, header simplification, and utility-area fallback behavior without prescribing exact product layouts
- [x] Ensure reduced-space patterns preserve orientation and action clarity

### 5. Examples and Reference States
- [x] Add representative visual or annotated examples for active, hover, focus, disabled, and quiet navigation states
- [x] Include at least one example of a primary workspace shell and one lighter secondary shell pattern if both are supported
- [x] Cross-reference the guidance from any central documentation index or roadmap notes where appropriate

## Acceptance Criteria
- [x] Downstream products can build a consistent application shell without inventing new visual rules
- [x] Navigation state behavior is documented clearly enough that it is no longer inferred ad hoc from tokens alone
- [x] Primary, secondary, and utility hierarchy is reusable across EverGray applications
- [x] Responsive shell guidance preserves operational clarity without turning into product-specific IA rules
- [x] The guidance clearly supports Plot Your Path plan 29 and future EverGray application shells
