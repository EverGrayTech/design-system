# Application Logo Usage Guidance

This document defines how EverGray Tech applications should use the EverGray Tech company logo alongside each product's own app logo. It ensures application identity stays clear, hierarchy remains operational, and products provide a consistent path back to the company page without turning the shell into a marketing surface.

This guidance follows the application expression defined in [System Spec](system-spec.md): applications are operational first and branded second. It also extends the shell guidance in [Application Shell and Navigation Guidance](application-shell-and-navigation.md) by clarifying how identity should be presented inside shared application chrome.

---

## 1. Identity Hierarchy

Applications within the EverGray Tech ecosystem may present two distinct identities:

1. **EverGray Tech company identity** — the parent brand anchor.
2. **Application identity** — the local product or app logo.

These identities do not carry equal visual weight in application shells.

### 1.1 Company Logo Role

The EverGray Tech logo is a **company anchor**, not the primary application identifier.

**Its role in applications is to:**
- indicate the product belongs to EverGray Tech
- provide a quiet path back to the EverGray Tech company page
- reinforce brand continuity across multiple products

**Its role is not to:**
- dominate the shell
- replace the app's own identity
- behave like a promotional banner or marketing hero mark

When present in an application shell, the EverGray Tech logo should link to the company page. It functions as a quiet global escape, not as a high-emphasis CTA.

### 1.2 App Logo Role

The application logo is the **primary product identifier** within the shell.

**Its role is to:**
- tell the user which product they are currently using
- anchor orientation within the app
- support page and navigation context when paired with product naming

The app logo may appear with the product name, a wordmark, or a compact icon depending on the shell pattern. In all cases, it should read as the product identity first.

### 1.3 Hierarchy Rule

When both logos appear together:

- the **app logo leads** as the product identity
- the **company logo supports** as the parent-brand link
- spacing, scale, and placement must make the distinction obvious

The shell should never make users decide whether they are in EverGray Tech generally or in a specific product. The product identity must answer “where am I?”; the company logo answers “who is this product from?”

---

## 2. When to Show Each Logo

Application shells may show both logos, only the app logo, or in limited cases only the company logo. The correct choice depends on the shell context.

### 2.1 Standard Rule for Full Application Shells

In a standard application shell:

- show the **app logo** as the primary product identifier
- show the **EverGray Tech company logo** as a secondary, quieter link back to the company page

This is the preferred default when the shell has enough space to support both identities cleanly.

### 2.2 App-Only Cases

Use only the app logo when:

- shell space is constrained and including both marks creates crowding
- the application already makes company ownership obvious elsewhere in the shell or surrounding context
- a compact sub-shell, embedded workspace, or dense utility context needs maximum operational clarity

In these cases, company wayfinding may move to a quieter supporting location such as an account menu, overflow area, or lightweight supporting link, provided the route back to the company page remains available somewhere appropriate.

### 2.3 Company-Only Cases

Use only the EverGray Tech company logo in rare cases such as:

- a lightweight company-owned utility with no distinct product identity
- a pre-product or platform-level experience where a separate app logo does not exist
- a cross-product launcher or company-level workspace that represents EverGray Tech more than one specific app

If a product has its own identity, the product logo should normally appear. A company-only treatment should not erase legitimate product identity.

### 2.4 Do Not Duplicate Identity Unnecessarily

Avoid showing the same identity repeatedly in the same shell.

- Do not place the company logo in multiple shell regions.
- Do not repeat the app logo in both the top bar and page header unless there is a strong orientation reason.
- Do not combine a large company wordmark, a large app wordmark, and separate breadcrumb branding in the same view.

Identity should orient the user once, then get out of the way.

---

## 3. Placement Patterns

Logo placement should follow the structural logic of EverGray Tech application shells. Identity belongs in shell chrome, not inside the workspace body.

### 3.1 Preferred Pattern for the Top App Bar

The preferred application-shell pattern is:

1. **Company logo link** at the far left or in a quiet leading-support position.
2. **App logo and/or app name** immediately after it, or as the main identity anchor of the shell cluster.
3. Primary navigation and utility controls following the identity cluster.

This pattern works when the shell needs to show both parent brand and product identity in a compact, readable way.

**Recommended posture:**
- The company logo should be smaller or quieter than the app identity.
- A subtle separator, spacing break, or clear alignment difference may distinguish company identity from app identity.
- The app logo cluster should visually own the product area of the bar.

### 3.2 Lightweight Shell Pattern

For simpler shells — settings flows, onboarding utilities, focused tools, or secondary products — use a lighter identity pattern:

- place the **app logo** as the main leading identity
- place the **company logo link** in a quieter adjacent position or secondary supporting row if needed
- if space is limited, retain the app logo and move company navigation to a secondary affordance

In these shells, orientation remains more important than full brand expression.

### 3.3 Sidebar and Navigation Context

When an application uses a side navigation pattern:

- the app logo may live at the top of the sidebar if that is the main product anchor
- the company logo should still remain secondary and should not compete with primary navigation
- if both logos appear in the sidebar, they must read as a compact identity cluster, not as stacked promotional badges

Avoid using the company logo as though it were a navigation item. It is a brand anchor and link target, not a peer to product sections.

### 3.4 Workspace and Page Header Restrictions

Do not treat logos as normal content elements inside the workspace.

- Do not place the company logo inside page headers by default.
- Do not repeat brand marks inside section headers or surface panels.
- Do not use logos as decorative content fillers in dashboards, empty states, or dense workspaces.

The shell owns identity. The workspace owns tasks.

---

## 4. Interaction and Navigation Behavior

The EverGray Tech logo in applications must behave like a link back to the company page.

### 4.1 Company Logo Link Behavior

The company logo link should:

- navigate to the EverGray Tech company page or company homepage
- be reachable from the primary shell without searching
- remain visually quiet compared with task and navigation controls

This link is useful because it provides:
- a parent-brand anchor
- an escape route to company-level context
- continuity across a multi-product ecosystem

### 4.2 Interaction Posture

The company logo link should feel interactive, but restrained.

**Hover:**
- subtle contrast increase
- optional understated background shift if the shell pattern uses shared interactive containers
- no dramatic motion, glow, or promotional emphasis

**Focus:**
- visible focus ring consistent with shell guidance
- keyboard accessibility must be preserved

**Active:**
- mild tonal compression only
- no exaggerated press effects

The company logo link should never be more visually assertive than the selected navigation item or the page's primary action.

### 4.3 App Logo Interaction

Whether the app logo also links somewhere is a product decision, but the design system recommends restraint.

Acceptable destinations may include:
- the application's main landing page
- the default workspace or dashboard
- the app's home route

If the app logo is clickable:
- its destination should be predictable
- it should not compete with the company-logo link's role
- users should not have to guess which logo returns them to the app home versus the company site

If both logos are clickable, their labels, hover behavior, and placement must make the distinction obvious.

---

## 5. Visual Posture and Restraint

Logo usage in applications must remain consistent with EverGray's operational shell posture.

### 5.1 Scale and Emphasis

- Keep both logos compact.
- The app logo may lead, but it should still feel structural rather than expressive.
- The company logo should usually be smaller, quieter, or otherwise visually subordinate.

Application shells are not brand showcases. Logos provide orientation, not spectacle.

### 5.2 Clear Space and Alignment

- Preserve adequate clear space around both marks.
- Align identity elements precisely to the shell grid.
- Use spacing to clarify hierarchy rather than decorative containers.

If two identities appear in one cluster, they should feel intentionally related but clearly distinct.

### 5.3 Prohibited Treatments in Application Shells

The following are not appropriate for logo usage in applications:

- atmospheric or glowing logo backplates
- large gradient fills behind the logos
- oversized wordmarks that dominate the top bar
- animated logo treatments
- decorative framing that makes identity heavier than navigation
- hover states that feel like CTA buttons

Applications must avoid importing website-style brand atmosphere into operational chrome.

### 5.4 Compatibility with Dense and Lightweight Shells

In dense workspace shells:
- identity should compress cleanly
- navigation and task controls retain priority after orientation is established
- logos should not consume vertical or horizontal space needed for workflow clarity

In lightweight shells:
- identity may be slightly more explicit because fewer shell elements compete for attention
- even so, the shell must remain calm, quiet, and structurally disciplined

---

## 6. Responsive Guidance

As shell width decreases, identity treatment should simplify without losing meaning.

### 6.1 Reduced-Width Priorities

On smaller shells, preserve identity in this order:

1. app recognition
2. company wayfinding
3. full wordmark expression

If something must simplify first, simplify length and detail before removing product recognition.

### 6.2 Company Logo Simplification

The company logo may simplify on smaller widths by:

- reducing from a wider wordmark treatment to a compact mark
- moving into a quieter supporting position
- shifting from always-visible placement to a secondary shell area when necessary

The company route should remain available, but it does not need to dominate narrow shells.

### 6.3 App Logo Simplification

The app logo may simplify by:

- reducing from logo + name to a compact logo mark
- truncating or shortening product naming when needed
- moving from a large identity cluster into a tighter shell anchor

Even when simplified, the app identity should remain the clearest answer to which product the user is in.

### 6.4 Collapsed Navigation Patterns

In collapsed or icon-led shells:

- preserve at least one recognizable app identifier in the persistent shell region
- avoid forcing both company and product identity to remain fully visible if this harms clarity
- use tooltips, accessible labels, or secondary navigation locations as needed to maintain meaning

Do not let reduced-width behavior create an identity pile-up at the edge of the viewport.

---

## 7. Reference Patterns

### 7.1 Standard Application Shell

```
┌──────────────────────────────────────────────────────────────────┐
│ [EverGray]  |  [App Logo] Product Name     nav · nav     util   │
├─────────────┬────────────────────────────────────────────────────┤
│ side nav    │ workspace                                          │
│             │                                                    │
└─────────────┴────────────────────────────────────────────────────┘
```

**Interpretation:**
- `EverGray` is the quiet parent-brand link to the company page.
- `App Logo + Product Name` is the primary product identity.
- Navigation and utilities remain structurally clear and visually more important than any decorative branding treatment.

### 7.2 Lightweight Utility Shell

```
┌──────────────────────────────────────────────────────────────┐
│ [App Logo] Product Name                  [EverGray]    [👤] │
├──────────────────────────────────────────────────────────────┤
│ focused utility content                                      │
└──────────────────────────────────────────────────────────────┘
```

**Interpretation:**
- The app identity leads because this is the operational context.
- The company link remains available, but quieter and secondary.
- This pattern is appropriate when the shell is simplified and space is limited.

### 7.3 Compact or Collapsed Context

```
┌───────────────────────────────┐
│ [App Mark]   [menu]   [user]  │
│                               │
│ company link available in     │
│ menu / account / support area │
└───────────────────────────────┘
```

**Interpretation:**
- The app identifier remains persistent.
- The company link remains available, but not necessarily always visible as a full logo.
- Operational clarity takes precedence over full dual-logo expression.

---

## 8. Dos and Don'ts

### Do

- Use the EverGray Tech logo as a link back to the company page when it appears in apps.
- Let the app logo lead as the product identifier.
- Keep both marks restrained, compact, and structurally aligned.
- Use shell placement, spacing, and scale to clarify identity hierarchy.
- Simplify identity patterns on smaller screens before the shell becomes crowded.

### Don't

- Don't make the company logo the dominant mark in an app with its own product identity.
- Don't use logos as decorative content inside the workspace.
- Don't style either logo like a CTA, promo banner, or hero element.
- Don't import website atmosphere, glow, or dramatic gradients into application-logo treatment.
- Don't force both logos to stay fully expressed at all breakpoints if doing so harms orientation.

---

## Cross-References

- [System Spec](system-spec.md) — canonical visual posture and brand/application expression rules.
- [Application Shell and Navigation Guidance](application-shell-and-navigation.md) — shell structure, hierarchy, and responsive behavior.
- [Marketing Site Composition and CTA Patterns Guidance](marketing-site-patterns.md) — website-only composition and company-brand surface behavior.
- [Website Brand Atmosphere, Graphics, and Motion Restraint Guidance](website-brand-atmosphere-and-graphics.md) — website-only expressive treatments that should not leak into app shells.
- [Consumption Guide](consumption-guide.md) — downstream design-system consumption guidance.
