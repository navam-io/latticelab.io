# Release 0.1.0

**Release Date**: November 28, 2025

---

## Feature Slice 1: Project Initialization

**Spec Reference**: `website-spec.md` → Technical Stack, Project Structure

**Summary**: Initialize Astro 5.x project with React, Tailwind CSS 4, TypeScript, and MDX support. Configure project structure matching spec.

### Completed Acceptance Criteria

- [x] Astro 5.x project created with `npm create astro@latest`
- [x] Integrations installed: `@astrojs/react`, `@astrojs/tailwind` (via Vite plugin), `@astrojs/mdx`
- [x] Dependencies added: `react`, `react-dom`, `lucide-react`, `framer-motion`
- [x] Fonts installed: `@fontsource/geist-sans`, `@fontsource/geist-mono`
- [x] TypeScript configured with strict mode
- [x] Project structure created per spec (components/, content/, layouts/, pages/, lib/, styles/, types/)
- [x] Dev server runs successfully with `npm run dev`

### Technical Details

**Dependencies Installed:**
- Astro 5.16.2
- React 19.2.0
- Tailwind CSS 4.1.17 (via @tailwindcss/vite)
- MDX 4.3.12
- Framer Motion 12.23.24
- Lucide React 0.555.0
- Geist fonts 5.2.x

**Project Structure Created:**
```
src/
├── components/
│   ├── layout/
│   ├── ui/
│   ├── sections/
│   └── previews/shared/
├── content/
│   ├── features/
│   └── journeys/
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   ├── constants.ts
│   └── utils.ts
├── pages/
│   └── index.astro
├── styles/
│   └── globals.css
└── types/
    └── index.ts
```

**Configuration Files:**
- `astro.config.mjs` - Astro with React, MDX, and Tailwind CSS 4 via Vite
- `tsconfig.json` - Strict TypeScript with path aliases
- `playwright.config.ts` - E2E testing configuration
- `.prettierrc` - Code formatting

**Design System Foundation:**
- CSS custom properties for colors, typography, spacing, radii
- Light and dark mode support via `data-theme` attribute
- Geist fonts loaded and configured

### Tests Added

20 Playwright tests covering:
- Homepage loading and content
- Meta tags and SEO
- Design system CSS variables
- Tailwind CSS integration
- Responsive design (mobile, tablet, desktop)
- Accessibility (lang attribute, heading hierarchy, keyboard navigation)
- Error-free page rendering

### Breaking Changes

None (initial release)

---

*Next: Feature Slice 2 - Design System — CSS Variables & Base Styles*
