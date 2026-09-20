# Visual Review Skill for Roshan's Portfolio

## Purpose
This skill enables critical visual inspection of the portfolio's frontend implementation to identify and fix the highest-impact visual and UX issues while preserving the editorial design identity.

## When to Invoke
Use this skill when:
- Making visual changes to the portfolio
- Preparing for a visual review or audit
- Noticing visual inconsistencies or regressions
- Wanting to ensure alignment with editorial design principles

## Review Process

### 1. Visual Hierarchy Evaluation
Check:
- Is the most important content visually prominent?
- Does typographic scale create clear hierarchy?
- Are secondary elements appropriately subdued?
- Does the eye flow naturally through the page?

### 2. Typography Inspection
Verify:
- Font usage matches editorial identity (Instrument Serif for display, Geist Sans for UI)
- Type scales are respected from globals.css
- Line heights, letter spacing, and paragraph spacing are correct
- No unintended font overrides or scaling

### 3. Spacing & Grid Alignment
Examine:
- Consistent use of 8px grid where applicable
- Intentional whitespace as active design element
- Proper column alignment in grid layouts
- Mobile/tablet spacing considerations

### 4. Composition Assessment
Review:
- Desktop composition is deliberate, not accidentally wrapped
- Mobile layouts are intentionally designed
- Asymmetry is used purposefully
- Visual balance and rhythm

### 5. Responsive Behavior
Test:
- Breakpoints work as intended
- Content reflows appropriately
- No accidental wrapping causing composition issues
- Touch targets are adequate on mobile

### 6. Interaction Quality
Assess:
- Hover/focus states are visible and appropriate
- Motion is used sparingly and meaningfully
- Reduced motion preferences are respected
- Interactive elements have clear affordances

### 7. Accessibility Check
Confirm:
- Color contrast meets WCAG guidelines
- Focus visibility is maintained
- Semantic HTML is used appropriately
- ARIA labels are present where needed
- Text can be resized without breaking layout

### 8. Editorial Design Consistency
Validate:
- Warm paper background is preserved
- Black/ink typography is primary visual element
- Terracotta accents are used sparingly
- No generic AI-generated patterns appear

### 9. Originality & AI-Slop Detection
Check for:
- Generic gradients (should use flat colors/textures from design)
- Glassmorphism (not in established visual language)
- Excessive rounded corners (use intentionally)
- Dashboard-like layouts (avoid unless for data display)
- Meaningless decorative elements
- Excessive badges/tags/UI chrome
- Invented metrics, clients, or outcomes

### 10. Unnecessary UI Identification
Look for:
- Card-overload patterns
- Excessive UI elements
- Interactive elements without clear purpose
- "Just one more" UI additions that don't serve core goals

## Issue Reporting Format
For each identified issue, provide:

**Issue:** [Clear description]
**Why it matters:** [Impact on UX, accessibility, or design integrity]
**Likely cause:** [Implementation reason]
**Smallest effective fix:** [Minimal change to resolve]

## Implementation Guidelines
When fixing issues:
- Make surgical changes rather than rewrites
- Reuse existing design tokens and components
- Prefer existing CSS/Motion over new dependencies
- Never invent portfolio content, metrics, clients, or outcomes
- Run lint and build after implementation
- Check desktop and mobile layouts after visual changes
- Do not redesign unrelated sections
- Do not introduce unnecessary dependencies

## ANTI-AI-SLOP REMINDER
Before considering fixes complete, ask:
- Am I using generic gradients when the design calls for flat colors?
- Have I avoided glassmorphism not in the visual language?
- Are rounded corners used intentionally and sparingly?
- Is this avoiding dashboard patterns unless specifically required?
- Are decorative elements serving a clear purpose?
- Am I avoiding invented metrics, clients, or outcomes?
- Is the UI avoiding excessive badges or card-overload?
- Have I resisted the urge to add "just one more" UI element?
- On desktop: Is composition deliberate or accidentally wrapped?
- On mobile: Is layout intentionally designed or merely responsive wrapping?
- Is motion being used sparingly and meaningfully?
- Does all animation respect prefers-reduced-motion?
- Have I reused existing design tokens and components?
- Am I preferring existing CSS over new styles where possible?