# Plan: Overlays and Feedback States Guidance

## Objective
Define shared design-system guidance for overlays, modal workflows, and common feedback states so EverGray applications can present interruptions, empty states, loading, progress, success, warning, and error messaging with a consistent dark-theme language that stays calm, legible, and structurally clear.

## Customer Value
- Gives Plot Your Path and future products a reusable approach to transient workflows and system feedback
- Reduces inconsistency in modal structure, layered surfaces, and state messaging
- Helps products communicate status clearly without becoming loud, decorative, or ambiguous

## Scope Decisions (Locked)
- This plan defines guidance and examples, not product-specific copy or logic governing when states appear
- Initial overlay scope focuses on modal and related elevated-surface patterns rather than every asynchronous UX pattern
- Feedback guidance covers empty, loading, progress, success, warning, and error states at a design-system level
- The design system should clarify when inline feedback is preferable to interruption, but should not replace product workflow decisions
- Motion guidance must remain subtle, accessible, and secondary to information clarity

## Prerequisites
- `docs/system-spec.md`
- `05-forms-and-action-controls.md`

## Implementation Checklist

### 1. Overlay and Modal Guidance
- [x] Create a dedicated guidance doc covering modal surfaces, headers, actions, close affordances, backdrop treatment, elevated-layer behavior, and enter/exit motion posture
- [x] Define how overlays should preserve machined layering and readable structure without glassy or glow-heavy effects
- [x] Clarify the difference between modal interruption, lightweight overlay support, and inline alternatives where relevant

### 2. Feedback-State Patterns
- [x] Document consistent guidance for empty, loading, progress, success, warning, and error states
- [x] Define how each state should communicate meaning while remaining restrained and low-overhead
- [x] Clarify where semantic color should lead and where typography, spacing, or structure should do more of the work

### 3. Tone and Prominence Rules
- [x] Define how visibility, semantic clarity, and restrained visual language should balance across different feedback intensities
- [x] Document how applications should avoid alarmist or celebratory treatments that conflict with the system's operational posture
- [x] Ensure feedback states remain usable in extended dark-theme sessions

### 4. Structured Message Anatomy
- [x] Provide a recommended message structure covering title, supporting explanation, recovery guidance, and follow-up action when applicable
- [x] Clarify when short inline messages are sufficient versus when fuller recovery guidance is appropriate
- [x] Define how message anatomy should scale across inline, panel, and modal contexts

### 5. Examples and Decision Guidance
- [x] Add representative state examples for empty/loading/success/error treatments and modal hierarchy
- [x] Include guidance for choosing inline feedback versus modal interruption when both are possible
- [x] Cross-reference related controls and status-signal guidance where semantic states overlap

## Acceptance Criteria
- [x] Consuming apps can present modal workflows and feedback states coherently
- [x] Feedback patterns feel calm, legible, and semantically clear in dark-theme products
- [x] Empty and error states no longer require product teams to invent their own visual language from scratch
- [x] Overlay structure, layering, and motion remain aligned with the system's machined and restrained posture
- [x] The guidance clearly supports Plot Your Path plans 28, 30, and 32 and future EverGray applications
