# Plan: Token Build Pipeline — CSS Variables & JSON Export

## Objective
Set up a build process that transforms the authored source tokens under `tokens/` into consumable outputs (CSS custom properties and JSON) that downstream web applications can import directly.

## Customer Value
- Eliminates hardcoded design values in consuming applications
- Provides a single generation step that keeps all outputs in sync with the source tokens
- Gives downstream projects stable, predictable imports via `dist/`

## Scope Decisions (Locked)
- Source tokens in `tokens/` remain the only authored source of truth — the build reads them, never modifies them
- Generated artifacts land under `dist/` and are not committed (gitignored)
- Outputs are limited to CSS custom properties and a flat JSON export — no framework-specific wrappers yet
- Prefer a conventional token-build tool (e.g., Style Dictionary) over a custom ad hoc converter
- The token model is not redesigned unless the chosen build tool strictly requires structural changes
- No unrelated tooling is introduced

## Prerequisites
- `01-design-tokens.md` (source token files must exist under `tokens/`)

## Implementation Checklist

### 1. Package Configuration
- [x] Initialize package manifest (`package.json`) with project metadata if not already present
- [x] Add the chosen token-build tool as a dev dependency
- [x] Add a `build` script (and optionally a `clean` script) to the package manifest

### 2. Build Configuration
- [x] Create the build configuration file (e.g., `style-dictionary.config.js` or equivalent)
- [x] Register the `tokens/` directory as the source
- [x] Configure CSS custom properties output targeting `dist/css/`
- [x] Configure JSON export output targeting `dist/json/`
- [x] Ensure naming conventions produce predictable, stable variable names (e.g., `--color-neutral-canvas`, `--spacing-md`)

### 3. Output Organization
- [x] Verify `dist/` structure is clean and predictable:
  - `dist/css/variables.css` (or similar single-file / per-category split)
  - `dist/json/tokens.json` (or similar)
- [x] Add `dist/` to `.gitignore`

### 4. Generation Verification
- [x] Run the build and confirm CSS variables output is correct and complete
- [x] Run the build and confirm JSON export output is correct and complete
- [x] Verify outputs match the source token values with no drift or missing tokens

### 5. README Updates
- [x] Document how to install dependencies
- [x] Document how to run the build step
- [x] Briefly describe the output structure and how downstream projects should consume it

## Acceptance Criteria
- [x] A single build command generates both CSS custom properties and JSON from the source tokens
- [x] All authored tokens appear in both outputs with consistent, predictable naming
- [x] Generated files live under `dist/` and are gitignored
- [x] A developer can clone the repo, install dependencies, and run the build with no additional context beyond the README
- [x] The token model in `tokens/` is unchanged (or changes are minimal and justified by build-tool requirements)
