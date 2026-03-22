# Plan: Application Logo Usage and Company Brand Link Guidance

## Objective
Define shared guidance for how EverGray Tech applications should present both the EverGray Tech company logo and each product's own app logo so identity remains clear, hierarchy stays operational, and navigation patterns stay consistent across products.

## Customer Value
- Gives downstream application teams a consistent rule set for placing company and product identity without inventing local header conventions
- Preserves a clear path back to the EverGray Tech company page while keeping applications operational first and branded second
- Reduces ambiguity around when to show the company logo, the app logo, or both across shells and lightweight product surfaces

## Scope Decisions (Locked)
- This plan defines guidance and usage rules, not a framework-specific implementation or component API
- The EverGray Tech company logo is treated as a persistent brand anchor that links to the company page when shown in applications
- Each application's own logo remains the primary product-identity marker inside the shell
- Guidance must distinguish operational application surfaces from marketing or company-web surfaces so branding behavior does not drift
- Recommendations must stay aligned with `docs/system-spec.md` and `docs/application-shell-and-navigation.md`, especially the rule that applications feel operational first and branded second

## Prerequisites
- `docs/system-spec.md`
- `docs/application-shell-and-navigation.md`
- `docs/consumption-guide.md`
- `docs/website-brand-atmosphere-and-graphics.md`

## Implementation Checklist

### 1. Identity Hierarchy Guidance
- [x] Define the hierarchy between the EverGray Tech company logo and the local application logo in shared application shells
- [x] Clarify which mark functions as the company anchor versus the product identifier
- [x] Document when both logos should appear together, when only the app logo should appear, and when the company logo should be omitted

### 2. Placement and Navigation Behavior
- [x] Define recommended placement patterns for the company logo link back to the company page within top app bars or lightweight shells
- [x] Define recommended placement patterns for the application logo within the shell so product identity remains clear without becoming banner-like
- [x] Clarify interaction expectations for the company-logo link, including its role as a quiet global escape rather than a promoted CTA

### 3. Visual Posture and Restraint
- [x] Document how both logos should behave visually in application contexts: restrained scale, adequate clear space, no decorative framing, and no marketing-style emphasis
- [x] Clarify that logo usage in apps must avoid atmospheric treatments, gradient overuse, loud hover states, or shell treatments that compete with navigation and task surfaces
- [x] Define how identity presentation should remain compatible with dense workspace shells and lighter utility shells

### 4. Responsive and Variant Guidance
- [x] Define how logo treatment may simplify on reduced-width shells, including when the company logo may reduce to a mark or move into a quieter supporting position
- [x] Clarify how the app logo behaves in collapsed or compact navigation patterns without losing orientation
- [x] Ensure responsive guidance preserves product recognition and company wayfinding without overcrowding the shell

### 5. Examples and Cross-References
- [x] Add representative examples for a standard app shell and a lighter shell showing company-logo link plus app-logo usage
- [x] Cross-reference any related guidance in consumption, application-shell, or marketing/site documentation as needed
- [x] Ensure the resulting guidance is explicit enough for downstream teams to implement without inventing local branding rules

## Acceptance Criteria
- [x] Downstream apps can consistently place the EverGray Tech company logo as a link back to the company page
- [x] Downstream apps can consistently present their own app logo without conflicting with the company brand anchor
- [x] Logo behavior is clearly differentiated between operational application shells and more expressive website/brand surfaces
- [x] The guidance preserves the system's principle that applications are operational first and branded second
- [x] Application teams can choose a shell pattern without re-deciding basic brand-placement rules
