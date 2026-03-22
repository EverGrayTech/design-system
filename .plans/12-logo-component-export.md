# Plan: EverGray Tech Logo Component Export and Consumption Contract

## Objective
Make the EverGray Tech logo available as a first-class, reusable, application-safe export from `@evergraytech/design-system`, with clear downstream guidance for React and Next.js consumers.

## Customer Value
- Gives downstream applications a canonical, typed, reusable way to render the EverGray Tech logo without copying or re-creating SVG markup
- Removes fragile per-app asset handling and improves reliability in Next.js application-shell contexts
- Preserves brand fidelity and accessibility while keeping the design system as the source of truth for company identity assets

## Scope Decisions (Locked)
- The preferred integration path is a React component export that is safe for normal React and Next.js application usage
- The logo export must remain suitable for compact application-shell placement where visual weight is restrained and rendering must stay crisp at small sizes
- The exported API must support standard presentation props and accessible usage modes without forcing duplicated labels
- Package entrypoints, typings, and documentation must treat the logo integration path as a supported public contract rather than an incidental `dist/` file
- Raw asset support may remain available, but if retained it must be documented as a stable secondary contract with explicit usage guidance
- Implementation details should stay aligned with `docs/system-spec.md`, `docs/application-shell-and-navigation.md`, and `docs/application-logo-usage.md`, especially the rule that applications are operational first and branded second

## Prerequisites
- `docs/system-spec.md`
- `docs/application-shell-and-navigation.md`
- `docs/application-logo-usage.md`
- `docs/consumption-guide.md`
- Existing package build and export structure in `package.json` and current asset pipeline

## Implementation Checklist

### 1. Public Logo API Definition
- [x] Define the supported public API for consuming the EverGray Tech logo from the package entrypoints
- [x] Prefer a React component export such as `EverGrayTechLogo`, with a documented fallback asset contract only if needed as a secondary option
- [x] Define stable import path(s) so downstream applications do not rely on undocumented `dist/` internals
- [x] Ensure the export contract is appropriate for React and Next.js app-router consumers using standard dev and build flows

### 2. Component and Asset Behavior Requirements
- [x] Preserve the canonical EverGray Tech logo geometry, gradients, proportions, and `viewBox` behavior in the supported export
- [x] Ensure the reusable logo scales cleanly for compact shell usage, including small sizes around `16px` to `24px`
- [x] Support standard SVG and presentation customization from consumers, including `className`, `width`, `height`, and related props
- [x] Ensure the integration does not require per-app SVG loader customization or local markup duplication

### 3. Accessibility Contract
- [x] Define how the logo supports decorative usage with `aria-hidden`
- [x] Define how the logo supports labeled usage with `title`, `aria-label`, or equivalent accessible naming patterns
- [x] Ensure the API does not force duplicate accessible text when a consuming shell already provides a label nearby
- [x] Document expected accessible usage patterns for linked and non-linked logo placements

### 4. Packaging and Typing
- [x] Export the logo through package entrypoints rather than leaving it only as an undocumented built asset
- [x] Ship proper ESM exports and TypeScript typings for the supported public logo API
- [x] Verify published paths remain stable across releases for any raw asset contract that remains supported
- [x] Ensure package metadata and build outputs make the logo integration path durable enough to recommend to downstream product teams

### 5. Documentation and Consumer Guidance
- [x] Update design-system documentation to explain how applications should import and render the EverGray Tech logo
- [x] Clarify when to use the logo component versus any raw asset export
- [x] Add accessibility guidance covering decorative and labeled usage patterns
- [x] Add shell-specific guidance for quiet supporting-brand placement in compact application chrome
- [x] Include practical React and Next.js examples showing the recommended integration path

### 6. Validation and Acceptance Readiness
- [x] Validate that a downstream Next.js application can consume the logo from the design system without copying SVG markup locally
- [x] Verify the logo renders correctly in compact app-shell chrome at small sizes
- [x] Confirm the integration path is documented, typed, and suitable as the recommended product-facing API
- [x] Ensure the final contract is stable enough to serve as the canonical company-logo integration method for downstream teams

## Acceptance Criteria
- [x] A downstream Next.js app can consume the EverGray Tech logo from the design system without copying SVG markup locally
- [x] The recommended integration path works in standard React and Next.js dev/build flows without custom SVG-loader hacks
- [x] The logo preserves the canonical EverGray Tech mark, including gradient and proportion fidelity at small shell sizes
- [x] Consumers can use the logo decoratively or with accessible labeling without duplicated text being forced by the API
- [x] The public logo export is typed, exposed through package entrypoints, and documented as the canonical integration path
- [x] If a raw asset path remains supported, its published location and usage contract are explicitly documented and stable
