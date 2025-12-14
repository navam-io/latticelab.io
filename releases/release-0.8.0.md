# Release 0.8.0

**Release Date:** December 14, 2025

## Overview

This release adds the MobileNav Component (Feature 2.3) to the navigation system. The MobileNav provides a full-screen mobile navigation overlay with accordion sections, body scroll locking, and smooth slide-in animation from the right.

## New Features

### Feature 2.3: MobileNav Component

**Spec Reference:** Part 1, Section 1.2
**Complexity:** M

#### Description

Full-screen mobile navigation component with accordion-style expandable sections for navigation categories. Designed for touch-friendly mobile experiences with 48px minimum tap targets and body scroll lock when open.

#### Files Added

- `src/components/navigation/MobileNav.vue` - Main mobile navigation component
- `src/pages/test-utils/mobile-nav.astro` - Test page for component validation
- `tests/mobile-nav.spec.ts` - 32 Playwright tests covering all functionality

#### Acceptance Criteria (All Complete)

- [x] Full-screen overlay on hamburger click
- [x] Accordion sections for each category
- [x] Touch-friendly tap targets (48px minimum)
- [x] Smooth slide-in animation from right
- [x] Body scroll lock when open

#### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sections` | `NavSection[]` | `[]` | Array of navigation sections with title and links |
| `showArrows` | `boolean` | `true` | Show arrow indicators on links |
| `closeOnLinkClick` | `boolean` | `true` | Close panel when clicking a link |
| `variant` | `'default' \| 'dark'` | `'default'` | Hamburger icon color variant |
| `testId` | `string` | `'mobile-nav'` | Test ID prefix for testing |

#### NavSection Interface

```typescript
interface NavSection {
  title: string
  links: NavLink[]
}

interface NavLink {
  label: string
  href: string
  description?: string
  icon?: string | object
  iconBg?: string
  badge?: string
}
```

#### Component Events

| Event | Payload | Description |
|-------|---------|-------------|
| `open` | - | Emitted when menu opens |
| `close` | - | Emitted when menu closes |
| `toggle` | `isOpen: boolean` | Emitted on state change |

#### Component Slots

| Slot | Props | Description |
|------|-------|-------------|
| `trigger` | - | Custom hamburger trigger content |
| `header` | - | Custom panel header content |
| `default` | `{ close, toggleSection, openSections }` | Custom navigation content |
| `footer` | `{ close }` | Optional footer content |

#### Features

- **Full-Screen Overlay**: Panel slides in from right, covering the viewport
- **Accordion Sections**: Expandable/collapsible navigation categories
- **Animated Hamburger**: Icon transforms to X when menu is open
- **Body Scroll Lock**: Prevents body scrolling when menu is open
- **Focus Trap**: Tab navigation stays within panel when open
- **Backdrop Click**: Closes menu when clicking outside the panel
- **Keyboard Navigation**: Escape to close, Tab to navigate
- **Touch Friendly**: All interactive elements have 48px minimum height
- **ARIA Attributes**: Proper `dialog`, `aria-modal`, `aria-expanded` attributes
- **SSR Safe**: Teleport only renders after mount to prevent hydration issues
- **Dark Variant**: Support for light-on-dark hamburger icon styling

#### Usage Example

```vue
<MobileNav
  :sections="[
    {
      title: 'Features',
      links: [
        { label: 'Sources', href: '/features/sources', description: 'Knowledge Management' },
        { label: 'Lab', href: '/features/lab', description: 'AI-Powered Analysis' },
        { label: 'Blueprints', href: '/features/blueprints', badge: '36' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Blog', href: '/blog' }
      ]
    }
  ]"
  testId="main-mobile-nav"
/>
```

#### Header Integration Example

```vue
<header class="flex items-center justify-between px-4 py-3">
  <Logo />
  <div class="flex items-center gap-3">
    <BuyButton />
    <MobileNav :sections="navSections" />
  </div>
</header>
```

## Technical Details

### Body Scroll Lock Implementation

The component implements a robust scroll lock mechanism:
1. Stores current scroll position
2. Sets `body` to `position: fixed` with negative top offset
3. Restores scroll position on close

This prevents the page from jumping and maintains scroll position across open/close cycles.

### Focus Trap Implementation

Focus is trapped within the panel when open:
- Tab from last element wraps to first
- Shift+Tab from first element wraps to last
- Focus returns to trigger button on close

### Animation Timing

Uses CSS variables from `animations.css`:
- Panel slide: 300ms ease-out (open), 200ms ease-in (close)
- Backdrop fade: 300ms ease-out (open), 200ms ease-in (close)
- Accordion expand: 200ms ease-out
- Hamburger transform: 300ms

## Dependency Changes

None - uses existing project dependencies.

## Migration Notes

No breaking changes. This component is standalone and ready for integration with Header.vue in Feature 2.4.

## Test Results

```
283 passed (26.5s)
```

All existing tests continue to pass, including:
- 47 NavDropdown tests
- 31 MegaMenu tests
- 32 MobileNav tests (new)
- 173 other component tests
