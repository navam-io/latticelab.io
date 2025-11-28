# Release 0.3.0

**Release Date**: November 28, 2025

---

## Feature Slice 3: Design System — UI Components

**Spec Reference**: `website-spec.md` → Design System (Component Patterns)

**Summary**: Create reusable Astro UI components matching spec patterns: Button, Card, Badge, Container, Section. All components use the design system CSS variables from Feature Slice 2 and follow Tailwind CSS 4 patterns.

### Completed Acceptance Criteria

- [x] `Button.astro` — Primary, Secondary, Ghost variants with hover states
- [x] `Card.astro` — Default and elevated variants
- [x] `Badge.astro` — For tags, labels, status indicators
- [x] `Container.astro` — Centered container with max-width variants
- [x] `Section.astro` — Page section wrapper with consistent spacing
- [x] All components use design system CSS variables
- [x] Components are accessible (focus states, ARIA where needed)
- [x] TypeScript props interfaces defined

### Technical Details

**Button Component (`src/components/ui/Button.astro`)**:
- Variants: `primary`, `secondary`, `ghost`
- Sizes: `sm` (32px), `md` (40px), `lg` (48px)
- States: disabled, fullWidth
- Renders as `<a>` when `href` prop is provided
- Uses accent color for primary, secondary for secondary, transparent for ghost
- Focus ring using accent color with offset
- Smooth transitions on hover

```astro
<Button variant="primary" size="lg" href="/pricing">Buy Lattice</Button>
<Button variant="secondary">Learn More</Button>
<Button variant="ghost" disabled>Disabled</Button>
```

**Card Component (`src/components/ui/Card.astro`)**:
- Variants: `default` (border), `elevated` (shadow)
- Padding: `none`, `sm` (16px), `md` (24px), `lg` (32px)
- Interactive mode with hover effects
- Renders as `<a>` when `href` prop is provided
- Uses surface-1 background, border color from design system
- Rounded corners (14px per design system)

```astro
<Card variant="elevated" padding="lg">Content</Card>
<Card interactive href="/features">Clickable Card</Card>
```

**Badge Component (`src/components/ui/Badge.astro`)**:
- Variants: `default`, `secondary`, `success`, `warning`, `destructive`
- Sizes: `sm` (12px font), `md` (14px font)
- Status colors from design system
- Fully rounded (pill shape)
- Uses opacity for background tints

```astro
<Badge variant="success">Active</Badge>
<Badge variant="warning" size="sm">Beta</Badge>
```

**Container Component (`src/components/ui/Container.astro`)**:
- Sizes: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px), `full`
- Centered with auto margins
- Optional horizontal padding
- Matches design system container widths

```astro
<Container size="xl">Page content</Container>
```

**Section Component (`src/components/ui/Section.astro`)**:
- Spacing: `sm`, `md`, `lg`, `xl` (responsive padding)
- Backgrounds: `default`, `muted`, `accent`
- Optional built-in Container
- Configurable container size

```astro
<Section spacing="lg" background="muted">
  Section content with muted background
</Section>
```

**Component Index (`src/components/ui/index.ts`)**:
- Barrel export for all UI components
- Usage: `import { Button, Card, Badge, Container, Section } from '@components/ui'`

**UI Showcase Page (`src/pages/ui-showcase.astro`)**:
- Demonstrates all component variants
- Used for visual testing and Playwright test targets
- Shows buttons, cards, badges, containers, sections

**Homepage Integration**:
- Updated `src/pages/index.astro` to use new UI components
- Hero section uses Button, Section, and Container
- CTAs styled with primary and secondary variants

### Tests Added

39 new Playwright tests covering:

**Button Component (9 tests)**:
- Primary, secondary, ghost variant styling
- Small, medium, large size dimensions
- Disabled state with reduced opacity
- Link rendering when href provided
- Focus ring on focus

**Card Component (7 tests)**:
- Default card with border
- Elevated card with shadow
- Interactive card as link
- Small and large padding
- Background color
- Rounded corners

**Badge Component (7 tests)**:
- Default, secondary, success, warning, destructive variants
- Small badge size
- Rounded-full border radius

**Container Component (5 tests)**:
- SM, MD, LG, XL max-widths
- Centered with auto margins

**Section Component (4 tests)**:
- Default, muted, accent backgrounds
- Vertical padding

**Accessibility (4 tests)**:
- Keyboard focusable buttons
- Disabled button state
- Interactive card keyboard access
- Link buttons with accessible href

**Homepage Integration (3 tests)**:
- Button component used for CTAs
- Section component with padding
- Container component with max-width

**Total Tests:** 92 (20 from Feature 1 + 33 from Feature 2 + 39 from Feature 3)

### Files Created/Modified

**Created:**
- `src/components/ui/Button.astro`
- `src/components/ui/Card.astro`
- `src/components/ui/Badge.astro`
- `src/components/ui/Container.astro`
- `src/components/ui/Section.astro`
- `src/components/ui/index.ts`
- `src/pages/ui-showcase.astro`
- `tests/feature-3-ui-components.spec.ts`

**Modified:**
- `src/pages/index.astro` — Uses new UI components

### Breaking Changes

None

---

*Next: Feature Slice 4 - Layout Components*
