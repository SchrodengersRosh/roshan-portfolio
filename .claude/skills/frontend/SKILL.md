# Frontend Design Skill for Roshan's Portfolio

## Role Duality
When applying this skill, think simultaneously as:
1. **Senior Editorial Art Director** - Focus on visual identity, typography, composition, hierarchy, and intentional asymmetry
2. **Senior Frontend Engineer** - Focus on implementation fidelity, performance, accessibility, and maintainability

## Core Principles

### Preserve Editorial Visual Identity
- Maintain warm paper background (#F3F0E9 / #EAE6DC)
- Use black/ink typography as primary visual element (#121212, #4A4843, #8A877F)
- Apply restrained terracotta accents sparingly (#D4451D)
- Honor the intentional editorial / magazine / field-notes aesthetic

### Typography as Primary Tool
- Use Instrument Serif for display text (headlines, titles)
- Use Geist Sans for body and UI elements
- Respect existing type scales: display, h2, h3, lead, body, small, mono
- Preserve line heights, letter spacing, and paragraph spacing from globals.css
- Never override font families without explicit design justification

### Spacing & Composition
- Treat whitespace as active design element, not passive background
- Use intentional asymmetry in layouts
- Desktop composition must be deliberate - never rely on accidental wrapping
- Mobile layouts must be intentionally designed, not merely allowed to wrap
- Tablet layouts require specific consideration between breakpoints
- Maintain vertical rhythm consistent with 8px grid where applicable

### Motion & Interaction
- Use motion sparingly and meaningfully only
- Preserve existing Motion library patterns
- Respect prefers-reduced-motion - all animation must honor this setting
- Motion should support visual hierarchy, never distract
- Prefer existing motion variants over creating new animations

### Implementation Discipline
- Reuse existing design tokens from CSS variables
- Reuse existing components from @/components/ui and @/components/layout
- Prefer existing CSS and Motion over new dependencies
- Avoid unnecessary dependencies - audit package.json before adding
- Never invent portfolio content, metrics, clients, testimonials, or outcomes
- Inspect relevant implementation before changing it
- Make surgical changes rather than unnecessary rewrites
- Run lint and build after implementation
- Check desktop and mobile layouts after visual changes

## ANTI-AI-SLOP CHECK
Before considering any frontend task complete, ask:

### Generic Patterns
- [ ] Am I using generic gradients when the design calls for flat colors or subtle textures?
- [ ] Have I avoided glassmorphism effects that aren't in the established visual language?
- [ ] Are rounded corners used intentionally and sparingly, not as default styling?
- [ ] Is this layout avoiding dashboard patterns unless specifically required for data display?
- [ ] Are decorative elements serving a clear purpose or are they meaningless adornment?

### Content Integrity
- [ ] Have I avoided inventing metrics, clients, testimonials, or project outcomes?
- [ ] Am I preserving confidentiality by not exposing private project details without approval?
- [ ] Is all content truthful to Roshan's actual experience and skills?

### UI Restraint
- [ ] Have I avoided excessive badges, tags, or status indicators?
- [ ] Is the UI avoiding card-overload patterns?
- [ ] Are interactive elements restrained and purposeful?
- [ ] Have I resisted the urge to add "just one more" UI element?

### Layout Intentionality
- [ ] On desktop: Is composition deliberate or accidentally wrapped?
- [ ] On mobile: Is layout intentionally designed or merely responsive wrapping?
- [ ] On tablet: Have I considered this breakpoint specifically or ignored it?
- [ ] Is whitespace being used actively or treated as leftover space?

### Motion & Performance
- [ ] Is motion being used sparingly and meaningfully?
- [ ] Does all animation respect prefers-reduced-motion?
- [ ] Have I preserved existing Motion patterns rather than creating new ones?
- [ ] Am I avoiding performance-impacting effects for minimal visual gain?

### Technical Excellence
- [ ] Have I reused existing design tokens and components?
- [ ] Am I preferring existing CSS over new styles where possible?
- [ ] Have I run lint and build to verify no regressions?
- [ ] Is the change surgical rather than a wholesale rewrite?