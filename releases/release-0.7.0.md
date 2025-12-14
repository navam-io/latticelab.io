# Release 0.7.0

**Release Date:** December 14, 2025

## Overview

This release adds the MegaMenu Component (Feature 2.2) to the navigation system. The MegaMenu provides Apple-style full-width dropdown navigation panels with backdrop blur effects, multiple interaction modes, and full accessibility support.

## New Features

### Feature 2.2: MegaMenu Component

**Spec Reference:** Part 1, Section 1.1
**Complexity:** L

#### Description

Apple-style mega menu component with full-width dropdown panels for navigation categories like Features, Solutions, and Resources. The component uses Vue's Teleport for proper overlay rendering and includes both hover (desktop) and click (all devices) interaction modes.

#### Files Added

- `src/components/navigation/MegaMenu.vue` - Main mega menu component
- `src/pages/test-utils/mega-menu.astro` - Test page for component validation
- `tests/mega-menu.spec.ts` - 31 Playwright tests covering all functionality

#### Acceptance Criteria (All Complete)

- [x] Features mega menu with Explore/Configure/More columns
- [x] Solutions mega menu with By Role/By Workload/By Industry columns
- [x] Resources mega menu with Learn/Tools/Community columns
- [x] Backdrop blur effect on dropdown background
- [x] Click outside to close
- [x] Escape key to close

#### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Button label text |
| `showChevron` | `boolean` | `true` | Show/hide chevron indicator |
| `closeOnClick` | `boolean` | `true` | Close panel when clicking content |
| `closeDelay` | `number` | `150` | Delay (ms) before closing on mouse leave |
| `position` | `'full-width' \| 'dropdown'` | `'full-width'` | Panel positioning mode |
| `offset` | `number` | `65` | Top offset for panel (px) |
| `variant` | `'default' \| 'dark' \| 'light'` | `'default'` | Color variant |
| `testId` | `string` | `'mega-menu'` | Test ID prefix |

#### Component Events

| Event | Payload | Description |
|-------|---------|-------------|
| `open` | - | Emitted when menu opens |
| `close` | - | Emitted when menu closes |
| `toggle` | `isOpen: boolean` | Emitted on state change |

#### Features

- **Full-width Panel**: Dropdown spans entire viewport width with centered content
- **Backdrop Blur**: Glassmorphism effect using backdrop-filter
- **Multiple Variants**: Default (auto), dark, and light color schemes
- **Hover Behavior**: Desktop users can open/close via mouse hover
- **Click Support**: Click to toggle works on all devices
- **Keyboard Navigation**: Enter/Space to open, Escape to close
- **ARIA Attributes**: Proper `aria-expanded` and `aria-haspopup` for accessibility
- **Teleport Rendering**: Uses Vue Teleport to render overlay content at body level
- **SSR Safe**: Conditional rendering prevents hydration mismatches
- **Custom Trigger Slot**: Support for custom trigger button content

#### Usage Example

```vue
<MegaMenu label="Features" testId="features-menu">
  <div class="grid grid-cols-3 gap-8">
    <NavDropdown title="Explore" :links="exploreLinks" />
    <NavDropdown title="Configure" :links="configureLinks" />
    <NavDropdown title="More" :links="moreLinks" />
  </div>
</MegaMenu>
```

## Technical Details

### SSR Hydration Fix

The component implements a `v-if="isMounted"` guard on the Teleport element to prevent Vue hydration mismatches. The teleported content (backdrop and panel) only renders after the component mounts on the client side.

### Test Coverage

31 tests covering:
- Basic rendering and visibility
- Panel open/close behavior
- Multiple menus on same page
- Chevron visibility toggle
- Light and dark variants
- Custom trigger slots
- Accessibility attributes
- Panel styling classes
- Backdrop styling
- Container styling

## Dependency Changes

None - uses existing project dependencies.

## Migration Notes

No breaking changes. Feature 2.1 (NavDropdown) is required as it's used within MegaMenu panels.

## Test Results

```
251 passed (21.0s)
```

All existing tests continue to pass, including:
- 47 NavDropdown tests
- 31 MegaMenu tests
- 173 other component tests
