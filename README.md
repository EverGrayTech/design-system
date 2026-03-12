# EverGray Tech: Design System

This repository is the canonical source of truth for the `EverGray Tech`'s visual system.

It defines the shared design language used across the company website ([evergraytech.com](https://evergraytech.com)) and all web applications, including design principles, visual rules, tokens, and generated outputs that products consume. The goal is consistency without duplication: products should reference this repository’s outputs rather than re-implementing colors, spacing, radii, motion, and related styling decisions independently.

## Purpose

This repository exists to:

- define the shared visual system in one authoritative place
- prevent visual drift across products
- separate design decisions from app-specific implementation details
- enable versioned, reviewable changes to brand and UI foundations
- provide reusable outputs that applications can consume directly

## Source of Truth

The authoritative written specification is:

- [SYSTEM_SPEC.md](SYSTEM_SPEC.md)

That document defines the visual intent, principles, and behavioral rules for the system. If implementation details appear to conflict with the spec, the spec wins unless it is intentionally revised.

## Repository Responsibilities

This repository is responsible for:

- visual system documentation
- design tokens
- generated token outputs
- shared brand assets, if applicable
- usage guidance for consuming products

This repository is not responsible for product-specific layout decisions, feature logic, or one-off styling exceptions unless those decisions are intended to become part of the shared system.

## Operating Model

The website and applications share one design system, with different expression levels:

- the website is the slightly more cinematic expression
- the applications are the stricter operational expression

Shared foundations should remain consistent across both.

## Principles

The system is based on the following high-level principles:

- precision over decoration
- clarity over flourish
- geometry as identity
- restraint creates value
- motion is feedback, not spectacle
- layering should feel machined, not outlined

For the full definition, refer to [SYSTEM_SPEC.md](SYSTEM_SPEC.md).

## Consuming the Design System

For integration instructions, see the [Consumption Guide](docs/consumption-guide.md).

## Development

### Prerequisites

- Node.js (LTS recommended)
- pnpm

### Install dependencies

```sh
pnpm install
```

### Build generated outputs

```sh
pnpm build
```

This generates consumable token outputs under `dist/`:

| Output | Path | Format |
|---|---|---|
| CSS custom properties | `dist/css/variables.css` | `:root` block with `--`-prefixed variables |
| JSON flat export | `dist/json/tokens.json` | PascalCase key → value pairs |

Source tokens live in `tokens/` — see [tokens/README.md](tokens/README.md) for the structure and design rationale.

### Clean

```sh
pnpm clean
```
