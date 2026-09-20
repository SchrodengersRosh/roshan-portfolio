# Roshan's Personal Portfolio

This is Roshan's personal professional portfolio. It features an intentional editorial / magazine / field-notes visual identity.

## Design Language
The portfolio uses an editorial visual identity with warm paper, black/ink typography, and restrained terracotta accents.
See the `frontend-design` skill for detailed guidelines.

## UX
- Desktop composition matters.
- Mobile must be intentionally designed, not merely allowed to wrap.
- Preserve accessibility.
- Respect prefers-reduced-motion.
- Motion should support hierarchy rather than distract.

## Engineering
- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Existing Motion library
- Server components by default
- Client components only when interaction/state requires them
- Reuse existing components and design tokens.
- Avoid unnecessary dependencies.
- Do not invent content, metrics, clients, testimonials, or outcomes.
- Do not expose confidential project information.
- Do not reveal private projects or confidential SIH/project details unless explicitly approved.
- Keep the future `/life` personal page separate from the professional portfolio.

## Workflow
- Inspect before editing.
- Prefer surgical changes over rewrites.
- Identify the actual layout/CSS cause instead of using arbitrary offsets.
- For significant changes, make a plan before implementation.
- Run lint and build after implementation.
- Check desktop and mobile layouts after visual changes.
- Never commit or push unless explicitly instructed.

## Commands
- `npm run dev`
- `npm run lint`
- `npm run build`