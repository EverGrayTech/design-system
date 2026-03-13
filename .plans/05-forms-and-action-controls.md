# Plan: Forms and Action Controls Guidance

## Objective
Define shared design-system guidance for core form controls, action variants, and supporting form text so EverGray applications can present workflow-heavy forms with a consistent, calm, and operational interaction language.

## Customer Value
- Gives Plot Your Path and future products a reusable baseline for common inputs and actions
- Reduces local reinvention around button hierarchy, validation styling, and helper text behavior
- Improves consistency in form density, usability, and state clarity across operational dark-theme interfaces

## Scope Decisions (Locked)
- This plan defines design-system guidance and variant/state rules, not a full component-library API
- Initial scope covers the most common operational controls first: text input, textarea, select/dropdown trigger, button hierarchy, and optionally checkbox/radio and icon-only actions if they can be defined cleanly
- Guidance must distinguish semantic behavior and visual priority without requiring framework-specific implementations
- Density guidance should support efficient workflows while preserving calm spacing and readability
- Advanced or highly specialized input types are deferred unless they are necessary to explain the baseline form language

## Prerequisites
- `docs/system-spec.md`
- `04-application-shell-and-navigation.md`

## Implementation Checklist

### 1. Control Pattern Guidance
- [x] Create a dedicated guidance doc for core controls including text inputs, textareas, select/dropdown triggers, button variants, and any approved checkbox/radio or icon-only action posture
- [x] Define baseline structural expectations for each supported control type, including containment, edge treatment, and emphasis posture
- [x] Clarify which controls are considered foundational versus optional in the initial design-system pattern set

### 2. Action Hierarchy
- [x] Define visual and behavioral distinctions between primary, secondary, tertiary/quiet, destructive, disabled, and loading actions
- [x] Document where accent is appropriate for actions and where neutral treatment should remain the default
- [x] Clarify how button hierarchy should operate within dense forms, page headers, and inline workflow contexts

### 3. Form Support Text Patterns
- [x] Document consistent rules for labels, helper text, inline validation, success confirmation, and error messaging
- [x] Define message hierarchy so support text remains clear without overwhelming the control itself
- [x] Clarify placement and tone expectations for recovery guidance and short confirmation messaging

### 4. Density and Spacing Posture
- [x] Define how control sizing and spacing should support operational efficiency without feeling cramped
- [x] Cover grouped controls, stacked forms, and inline action clusters
- [x] Ensure spacing guidance aligns with the shared system's premium technical character rather than generic consumer-SaaS softness

### 5. Examples and Naming Guidance
- [x] Add representative examples of common control states and validation scenarios
- [x] Provide recommended naming for shared action variants or semantic slots if doing so improves downstream consistency
- [x] Cross-link the guidance from broader design-system docs where appropriate

## Acceptance Criteria
- [x] Consuming apps can style forms and actions consistently without local reinvention
- [x] Action hierarchy is visually and behaviorally coherent across products
- [x] Validation, helper text, and confirmation patterns are predictable and reusable
- [x] Control density guidance supports calm operational interfaces rather than cramped or oversized forms
- [x] The guidance clearly supports Plot Your Path plans 28 and 30 and future EverGray application forms
