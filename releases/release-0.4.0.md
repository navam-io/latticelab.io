# Release 0.4.0

**Release Date**: November 28, 2025

---

## Feature Slice 4: Layout Components

**Spec Reference**: `website-spec.md` → Project Structure (layouts/, components/layout/)

**Summary**: Create base layout and core layout components: Header, Footer, Navigation, MobileMenu. This establishes the site-wide layout structure with responsive navigation.

### Completed Acceptance Criteria

- [x] `BaseLayout.astro` — HTML skeleton with meta tags, fonts, global styles (existed from Feature 1)
- [x] `PageLayout.astro` — Standard page layout with Header/Footer
- [x] `Header.astro` — Fixed header with blur backdrop, logo, nav links, CTA
- [x] `Footer.astro` — Links, GitHub, contact info
- [x] `Navigation.astro` — Desktop navigation links
- [x] `MobileMenu.tsx` — React component for mobile hamburger menu with slide-out drawer
- [x] Navigation items defined in `lib/constants.ts` (existed from Feature 1)
- [x] Responsive behavior: desktop nav hidden on mobile, hamburger shown

### Technical Details

**Header Component (`src/components/layout/Header.astro`)**:
- Fixed position at top with z-index 50
- Semi-transparent background with backdrop blur
- Border bottom for visual separation
- Contains logo, navigation, and CTA button
- Height: 64px (h-16)

```astro
<header class="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
```

**Navigation Component (`src/components/layout/Navigation.astro`)**:
- Desktop-only navigation (hidden on mobile)
- Displays navigation items from `mainNav` constant
- Supports external links with external icon
- Accessible with proper aria-label
- Keyboard focusable links with focus ring

**MobileMenu Component (`src/components/layout/MobileMenu.tsx`)**:
- React component with Framer Motion animations
- Slide-out drawer from right side
- Hamburger button toggles menu
- Backdrop overlay closes menu on click
- Closes on Escape key press
- Accessible with proper ARIA attributes:
  - `aria-expanded` on button
  - `role="dialog"` and `aria-modal="true"` on drawer
  - `aria-label` for screen readers
- Prevents body scroll when open
- Contains navigation links and CTA button

**Footer Component (`src/components/layout/Footer.astro`)**:
- Three-column layout: Brand, Quick Links, Connect
- Brand column with logo and description
- Quick links section with navigation
- Connect section with GitHub and email links
- Copyright notice with current year
- Built with Astro credit
- Uses surface-2 background

**PageLayout Component (`src/layouts/PageLayout.astro`)**:
- Wraps BaseLayout with Header and Footer
- Main content area with minimum height
- Used by all pages for consistent layout

```astro
<BaseLayout title={title} description={description}>
  <Header />
  <main class="min-h-[calc(100vh-16rem)]">
    <slot />
  </main>
  <Footer />
</BaseLayout>
```

**Component Index (`src/components/layout/index.ts`)**:
- Barrel export for all layout components

**Pages Updated**:
- `src/pages/index.astro` - Uses PageLayout
- `src/pages/ui-showcase.astro` - Uses PageLayout

### Tests Added

40 new Playwright tests covering:

**Header Component (10 tests)**:
- Fixed position and z-index
- Blur backdrop effect
- Background styling
- Logo visibility and link
- Logo displays site name
- CTA button visibility on desktop
- CTA links to pricing
- Correct height (64px)

**Desktop Navigation (5 tests)**:
- Visibility on desktop
- Contains expected links (Features, Journeys, Blueprints, Docs, Pricing)
- Links have correct hrefs
- Keyboard focusable
- Hidden on mobile

**Mobile Menu (9 tests)**:
- Button visible on mobile, hidden on desktop
- Opens when clicked
- Contains navigation links
- Has CTA button
- Closes when clicking outside
- Closes on Escape key
- Button has accessible attributes
- Dialog has proper ARIA role

**Footer Component (8 tests)**:
- Visibility
- Displays site name
- GitHub link present
- Email link present
- Copyright notice with current year
- Quick links section
- Correct background color (surface-2)
- External links open in new tab

**Page Layout Integration (3 tests)**:
- Homepage has header and footer
- UI showcase page has header and footer
- Content not hidden under fixed header

**Responsive Behavior (2 tests)**:
- Header adapts on tablet (nav visible, menu button hidden)
- Footer is responsive (no overflow)

**Accessibility (4 tests)**:
- Header navigation has aria-label
- Footer navigation has aria-label
- Logo link is accessible
- Mobile menu button has aria-label

**Total Tests:** 132 (20 + 33 + 39 + 40)

### Files Created/Modified

**Created:**
- `src/components/layout/Header.astro`
- `src/components/layout/Footer.astro`
- `src/components/layout/Navigation.astro`
- `src/components/layout/MobileMenu.tsx`
- `src/components/layout/index.ts`
- `src/layouts/PageLayout.astro`
- `tests/feature-4-layout-components.spec.ts`

**Modified:**
- `src/pages/index.astro` — Uses PageLayout instead of BaseLayout
- `src/pages/ui-showcase.astro` — Uses PageLayout instead of BaseLayout
- `tests/feature-1-project-init.spec.ts` — Updated tagline test
- `tests/feature-2-design-system.spec.ts` — Updated Tailwind integration tests to use ui-showcase
- `tests/feature-3-ui-components.spec.ts` — Updated homepage selectors for new layout

### Breaking Changes

None

---

*Next: Feature Slice 5 - Homepage Hero Section*
