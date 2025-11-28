# Release 0.2.0

**Release Date**: November 28, 2025

---

## Feature Slice 2: Design System — CSS Variables & Base Styles

**Spec Reference**: `website-spec.md` → Design System (Color Palette, Typography, Spacing & Layout)

**Summary**: Implement design tokens as CSS variables in `globals.css`. Configure Tailwind CSS 4 to use these tokens via `@theme` directive. Set up comprehensive base styles and dark mode support.

### Completed Acceptance Criteria

- [x] Color palette CSS variables (light mode + dark mode) in `globals.css`
- [x] Typography CSS variables (font families, sizes, weights, line heights)
- [x] Spacing scale CSS variables
- [x] Border radius CSS variables
- [x] Container width variables
- [x] Tailwind configured to extend theme with CSS variables via `@theme`
- [x] Dark mode toggle support via `data-theme` attribute
- [x] Geist fonts loaded and applied as default
- [x] Base HTML/body styles applied

### Technical Details

**Tailwind CSS 4 Theme Configuration:**
- Added `@theme` block to define design tokens as Tailwind utilities
- Colors mapped to utilities: `bg-background`, `text-foreground`, `bg-accent`, etc.
- Custom spacing, radii, shadows, and transitions available as Tailwind classes
- Fonts configured via `--font-sans` and `--font-mono`

**CSS Variables Added:**
```css
/* Colors (13 tokens + foreground variants) */
--color-background, --color-foreground
--color-primary, --color-primary-foreground
--color-secondary, --color-secondary-foreground
--color-accent, --color-accent-foreground
--color-muted, --color-muted-foreground
--color-border, --color-border-subtle
--color-success, --color-warning, --color-destructive
--color-surface-1, --color-surface-2, --color-surface-3

/* Typography */
--font-sans, --font-mono
--text-xs through --text-6xl
--leading-tight, --leading-normal, --leading-relaxed
--font-normal, --font-medium, --font-semibold, --font-bold

/* Spacing */
--space-1 through --space-24

/* Border Radius */
--radius-sm through --radius-full

/* Shadows */
--shadow-sm, --shadow-md, --shadow-lg, --shadow-xl

/* Transitions */
--transition-fast (150ms), --transition-normal (200ms), --transition-slow (300ms)

/* Container Widths */
--container-sm through --container-2xl
```

**Dark Mode Support:**
- `data-theme="dark"` attribute on HTML element
- `prefers-color-scheme: dark` media query fallback
- Darker shadows for dark mode
- All color tokens switch automatically

**Base Styles:**
- Smooth scroll behavior
- Antialiased text rendering
- Typography defaults for headings (h1-h6)
- Link styles with hover transitions
- Code block styling
- Focus-visible outline with accent color
- Selection styling with accent color

**Accessibility Features:**
- `.visually-hidden` utility class
- `.skip-link` for keyboard navigation
- `prefers-reduced-motion` support

**Homepage Updated:**
- Refactored to use Tailwind theme classes (`bg-background`, `text-foreground`, etc.)
- Removed inline `var()` usage in favor of Tailwind utilities
- Added shadow and transition utilities

### Tests Added

33 new Playwright tests covering:
- Color palette CSS variables (9 tests)
- Typography CSS variables (5 tests)
- Spacing CSS variables (1 test)
- Border radius CSS variables (1 test)
- Shadow CSS variables (1 test)
- Transition CSS variables (1 test)
- Container width CSS variables (1 test)
- Tailwind theme integration (6 tests)
- Base styles (5 tests)
- Dark mode support (2 tests)
- Accessibility features (2 tests)

**Total Tests:** 53 (20 from Feature 1 + 33 from Feature 2)

### Breaking Changes

None

---

*Next: Feature Slice 3 - Design System — UI Components*
