# Plan: Status, Priority, and Decision Signals Guidance

## Objective
Define shared design-system guidance for compact status, priority, urgency, and decision-support signals so EverGray applications can represent operational state consistently, accessibly, and without relying on noisy or color-only treatments.

## Customer Value
- Gives Plot Your Path and future workflow tools a reusable visual grammar for status-heavy interfaces
- Reduces local invention around badges, labels, counters, and row-level signals
- Improves accessibility and comparison across dense operational surfaces

## Scope Decisions (Locked)
- This plan defines pattern guidance for compact signals, not product-specific taxonomies or scoring systems
- Multiple compact indicator types may be supported when each serves a distinct role, but the set should remain restrained
- Signals must remain understandable through text, position, contrast, and optional iconography or shape — never color alone
- Urgency guidance must preserve calm operational tone and avoid alarmist visual noise
- This plan complements, but does not replace, semantic color tokens and broader feedback-state guidance

## Prerequisites
- `docs/system-spec.md`
- `06-data-dense-workspace-patterns.md`
- `07-overlays-and-feedback-states.md`

## Implementation Checklist

### 1. Compact Signal Pattern Guidance
- [ ] Create a dedicated guidance doc covering badges, pills/tags, inline status labels, subtle counters, and row-level priority markers
- [ ] Define the intended role of each supported pattern so downstream products can choose intentionally rather than interchangeably
- [ ] Clarify which patterns are best for dense lists, dashboards, detail panels, and inline metadata contexts

### 2. Color and Non-Color Signaling Rules
- [ ] Document how state signals remain understandable through text, placement, contrast, and optional iconography or shape
- [ ] Define accessibility expectations for compact indicators in dark-theme dense surfaces
- [ ] Clarify when neutral styling is preferable to semantic color and when accent should remain out of bounds

### 3. Priority and Urgency Posture
- [ ] Define how to communicate urgency, importance, caution, and opportunity without making interfaces feel alarmist
- [ ] Document escalation rules so stronger treatments are reserved for meaningfully higher-severity states
- [ ] Ensure compact signals remain compatible with the system's premium technical restraint

### 4. Comparative Signal Guidance
- [ ] Define how compact signals should support side-by-side comparison in rows, lists, and dashboards
- [ ] Clarify how multiple signals can coexist within a record without collapsing hierarchy
- [ ] Address when row-level markers are more appropriate than inline badges or counters

### 5. Examples and Usage Boundaries
- [ ] Add representative examples of compact status and priority treatments
- [ ] Include dos/don'ts for overusing color, stacking too many signals, or conflating urgency with general metadata
- [ ] Cross-reference related dense-surface and feedback guidance where pattern overlap exists

## Acceptance Criteria
- [ ] Consuming apps can represent operational state consistently and accessibly
- [ ] Priority and urgency signals remain calm and controlled rather than noisy or alarmist
- [ ] Products no longer need to invent local visual grammar for status-heavy workflows
- [ ] Compact indicators are understandable without relying on color alone
- [ ] The guidance clearly supports Plot Your Path plan 30 and future EverGray workflow products
