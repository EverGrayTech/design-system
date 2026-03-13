# Plan: Data-Dense Workspace Patterns Guidance

## Objective
Define shared design-system guidance for lists, table-like layouts, row summaries, grouped metadata, and other data-dense workspace surfaces so EverGray applications can present operational information with consistent hierarchy, calm density, and precise interaction states.

## Customer Value
- Gives workflow-heavy products a reusable approach to dense information surfaces without sacrificing scanability
- Reduces drift in how lists, records, separators, and inline state information are structured across applications
- Helps downstream teams keep dense views premium and composed instead of cluttered, bare, or overly custom

## Scope Decisions (Locked)
- This plan defines pattern guidance, not a universal record-row component or product-specific information architecture
- Guidance may cover both table-like and stacked row-summary patterns when each has a clear use case
- The system should define hierarchy and interaction posture for dense surfaces without prescribing app-specific content models
- Dense surface guidance must stay aligned with the application's restrained, operational expression rather than marketing presentation
- Inline state and priority cues may be referenced where necessary, but product taxonomies remain out of scope

## Prerequisites
- `docs/system-spec.md`
- `05-forms-and-action-controls.md`

## Implementation Checklist

### 1. Dense-Surface Structure Guidance
- [x] Create a dedicated guidance doc for lists, table-like layouts, stacked metadata blocks, panel internals, and grouping/separation patterns
- [x] Define how dense surfaces should use spacing, dividers, and containment to stay legible without feeling striped or ornamental
- [x] Clarify when table patterns are appropriate versus when stacked row summaries are preferred

### 2. Scan Hierarchy Rules
- [x] Document how to prioritize primary record identity, supporting metadata, state information, next-action cues, and secondary analytics
- [x] Define expectations for typographic hierarchy and metadata de-emphasis within dense rows and grouped panels
- [x] Clarify how comparison-friendly layouts should preserve fast scanning in dark-theme contexts

### 3. Density Posture
- [x] Define the acceptable compactness range for operational applications so dense views feel efficient but not cramped
- [x] Cover row padding, grouping rhythm, and separator strength at a pattern level
- [x] Ensure guidance reflects the system's premium technical tone rather than generic dashboard styling

### 4. Embedded Interaction Posture
- [ ] Document expectations for hover, selection, keyboard focus, inline actions, and expand/collapse behavior in dense rows or cards
- [ ] Clarify how interaction states should remain visible without disrupting the calm structure of the surface
- [ ] Address how selectable rows and embedded actions should coexist without ambiguous affordances

### 5. Examples and Comparison Guidance
- [ ] Add representative examples of list-row hierarchy, separator behavior, and selectable data-row states
- [ ] Include guidance for comparing multiple records or metadata groups side by side when relevant
- [ ] Cross-reference related status-signal guidance if compact indicators are used within dense surfaces

## Acceptance Criteria
- [ ] Consuming apps can build dense operational surfaces that feel consistent, readable, and premium
- [ ] Record-list hierarchy is easier to standardize across products
- [ ] Dense views remain calm and scan-friendly rather than cluttered or generic
- [ ] Interaction-state guidance is clear enough for selectable rows and inline actions to behave consistently
- [ ] The guidance clearly supports Plot Your Path plan 30 and future EverGray workflow-heavy tools
