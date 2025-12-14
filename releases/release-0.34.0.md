# Release 0.34.0

**Release Date:** December 14, 2025
**Phase:** Phase 6 - Tools Section
**Feature:** 6.3 - ToolDemo Component

## Summary

Created the ToolDemo Vue component for wrapping interactive tool demonstrations with consistent UI including loading, error, and placeholder states, multiple color schemes, and accessibility features.

## Changes

### New Files
- `src/components/tools/ToolDemo.vue` - Interactive demo wrapper component
- `src/pages/test-utils/tool-demo.astro` - Test page with 14 demo variants
- `tests/tool-demo.spec.ts` - 54 tests for ToolDemo component

### Component Features

**ToolDemo Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | 'Interactive Demo' | Demo title |
| subtitle | string | - | Demo subtitle |
| isLoading | boolean | false | Show loading state |
| loadingText | string | 'Loading demo...' | Loading indicator text |
| hasError | boolean | false | Show error state |
| errorTitle | string | 'Demo Unavailable' | Error title |
| errorMessage | string | 'There was an error...' | Error description |
| showPlaceholder | boolean | false | Show placeholder state |
| placeholderTitle | string | 'Ready to Explore' | Placeholder title |
| placeholderDescription | string | 'Click the button...' | Placeholder description |
| placeholderIcon | string | (play icon path) | SVG path for placeholder icon |
| showStartBtn | boolean | true | Show start button |
| startBtnText | string | 'Start Demo' | Start button text |
| showHeader | boolean | true | Show header section |
| showFooter | boolean | false | Show footer section |
| footerText | string | 'This is an interactive demo...' | Footer text |
| docsLink | string | - | Documentation link URL |
| showResetBtn | boolean | true | Show reset button |
| showFullscreenBtn | boolean | false | Show fullscreen button |
| height | 'sm' \| 'md' \| 'lg' \| 'xl' \| 'auto' | 'md' | Container height |
| colorScheme | 'violet' \| 'blue' \| 'emerald' \| 'amber' \| 'rose' | 'violet' | Color theme |
| testId | string | 'tool-demo' | Test ID prefix |

**Events:**
| Event | Payload | Description |
|-------|---------|-------------|
| reset | void | Emitted when reset button clicked |
| start | void | Emitted when start button clicked |
| retry | void | Emitted when retry button clicked |
| fullscreen | boolean | Emitted when fullscreen toggled |

**Height Variants:**
- **sm**: 200px minimum height
- **md**: 300px minimum height (default)
- **lg**: 400px minimum height
- **xl**: 500px minimum height
- **auto**: 200px minimum, grows with content

**Color Schemes:**
- **violet**: Violet-600 accent (default)
- **blue**: Blue-600 accent
- **emerald**: Emerald-600 accent
- **amber**: Amber-600 accent
- **rose**: Rose-600 accent

**Visual States:**
- **Loading**: Spinner with customizable text, white overlay
- **Error**: Red styling, error icon, retry button
- **Placeholder**: Icon, title, description, start button
- **Content**: Slot for actual demo content

## Test Coverage

- 54 new tests added
- Tests verify:
  - Default placeholder state rendering
  - Loading state with spinner and text
  - Error state with retry button and red styling
  - Slot content rendering
  - Height variants (sm, md, lg)
  - Color schemes (blue, emerald, rose, amber)
  - Footer with docs link
  - Header visibility toggle
  - Custom placeholder content
  - Fullscreen button
  - Start button visibility toggle
  - Container styling (rounded, border, shadow)
  - Accessibility (aria-labels, heading roles, link roles)

## Usage Example

```vue
<ToolDemo
  title="Memory Calculator"
  subtitle="Estimate GPU memory requirements"
  colorScheme="blue"
  height="lg"
  showFooter
  footerText="Results are estimates only"
  docsLink="/docs/tools/memory-calculator"
  @start="initializeDemo"
  @reset="resetDemo"
>
  <div class="p-6">
    <!-- Actual demo content -->
  </div>
</ToolDemo>
```

## Breaking Changes

None

## Feature Specification

**Spec Reference:** Part 5, Section 5.2

**Acceptance Criteria:**
- [x] Placeholder for tool-specific demos
- [x] Loading state handling
- [x] Responsive container

## Next Steps

- Feature 6.4: Tools Hub Page
- Feature 6.5: Tool Content Files
