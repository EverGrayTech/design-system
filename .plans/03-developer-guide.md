# Plan: Developer Consumption Guide

## Objective
Create a concise, implementation-oriented guide that explains how downstream website and application repositories should consume the design system's generated outputs instead of hardcoding shared visual values.

## Customer Value
- Eliminates ambiguity about what consuming repos should import and what they should not duplicate
- Reduces drift between the design system and downstream implementations
- Gives engineers a single reference for integration patterns, update flow, and exception handling

## Scope Decisions (Locked)
- The guide covers consumption of CSS variables and JSON token outputs — no framework-specific wrappers
- No shared component library is introduced in this step
- The guide is implementation-oriented, not philosophical — practical examples over design rationale
- Engineers are directed to import from the design system, never copy token values into app repos
- Local decisions (e.g., layout-specific spacing, one-off component internals) are explicitly distinguished from system-governed values

## Prerequisites
- `01-design-tokens.md` (source tokens exist)
- `02-css-variables.md` (build pipeline generates CSS and JSON outputs under `dist/`)

## Implementation Checklist

### 1. Consumption Guide Document
- [x] Create `docs/consumption-guide.md` with the following sections:
  - **What to import** — which files from `dist/` to reference (CSS variables, JSON tokens) and how
  - **What must come from the design system** — colors, typography, spacing, radii, motion, semantic states, accent usage
  - **What remains a local decision** — layout composition, component-internal dimensions, app-specific breakpoints, content-driven spacing adjustments
  - **What must not be duplicated or hardcoded** — any value that exists in the token set (colors, spacing, radii, motion, type scale)
  - **Handling exceptions** — process for when a consuming app needs a value not in the token set (request upstream, document the gap, avoid silent duplication)
  - **Update flow** — how design system updates propagate to consuming repos (versioning, dependency update, rebuild)

### 2. Practical Examples
- [x] Include a CSS variables consumption example showing import and usage in a typical web app stylesheet
- [x] Include a JSON token consumption example showing import and usage in a JS/TS context (framework-neutral)
- [x] Include a Next.js-aware example (importing CSS variables in a global stylesheet or layout, using JSON tokens in a server component) — this acknowledges the primary consumer without prescribing Next.js as a requirement
- [x] Keep examples minimal and copy-pasteable

### 3. README Update
- [x] Add a section or link in the repository `README.md` pointing to `docs/consumption-guide.md`
- [x] Keep the pointer brief — one line with context, not a summary of the guide

## Acceptance Criteria
- [x] `docs/consumption-guide.md` exists and covers all required topics (imports, governed values, local decisions, no-hardcode rules, exceptions, update flow)
- [x] At least one CSS and one JSON practical example are included
- [x] `README.md` links to the consumption guide
- [x] The guide does not prescribe a single frontend framework
- [x] The guide explicitly discourages copying token values into consuming repos
