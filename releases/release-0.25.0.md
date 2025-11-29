# Release 0.25.0 — Chat Preview Component

**Release Date**: 2025-11-28
**Phase**: Phase 3 (Interactive Previews)
**Feature Slice**: 25

---

## Summary

This release introduces the ChatPreview component, an interactive demo that simulates the full Lattice Lab chat experience. The component showcases the Lab panel with typing indicators, streaming responses, inline citations, collapsible thinking steps, and artifact cards—all powered by pre-scripted conversation data.

---

## New Components

### ChatPreview (`src/components/previews/ChatPreview.tsx`)

A comprehensive React component that demonstrates:

- **Pre-scripted Conversation Playback**
  - Automatically plays demo conversation on component mount
  - User query appears with animation
  - AI response streams character-by-character

- **Typing Indicator Animation**
  - Shows animated dots while AI is "thinking"
  - Natural transition from thinking to streaming

- **Character-by-Character Streaming**
  - Variable speed for natural feel
  - Slower on punctuation for realistic pacing
  - Cursor animation during streaming

- **Thinking Steps (Collapsible)**
  - Displays analysis steps with progress indicators
  - Steps show checkmarks as they complete
  - Toggle button to show/hide thinking steps
  - Count display (e.g., "4/4 steps")

- **Citation Pills**
  - Inline citations rendered in response text
  - Uses CitationPill component from shared utilities
  - Hover for source details

- **Artifact Card Sidebar**
  - Slides in after response completes
  - Shows artifact type and title
  - Preview of generated content

- **Status Bar**
  - Real-time phase indicator (idle, thinking, streaming, complete)
  - Citation and artifact count display

- **Replay Button**
  - Restarts demo from beginning
  - Cleans up timers and state

---

## Demo Phases

The ChatPreview implements a state machine with five phases:

1. **idle** — Initial state, demo starting
2. **user-message** — User query appears
3. **thinking** — Thinking steps animate
4. **streaming** — Response streams in
5. **complete** — Response finished, artifact appears

---

## New Pages

### Chat Preview Demo (`/chat-preview-demo`)
- Development page for testing the ChatPreview
- Lists all demo features
- Noindex to prevent search indexing

---

## Component Enhancements

### PreviewContainer
- Added `data-testid` prop support for custom test IDs

### MessageBubble
- Added `data-testid` prop support for custom test IDs

---

## Test Coverage

56 new tests added in `tests/feature-25-chat-preview.spec.ts`:

- **Demo Page**: 3 tests
- **ChatPreview Container**: 5 tests
- **Demo Playback**: 8 tests
- **Thinking Steps**: 6 tests
- **Streaming Response**: 6 tests
- **Citations**: 5 tests
- **Artifact Sidebar**: 5 tests
- **Message Bubbles**: 5 tests
- **Accessibility**: 5 tests
- **Responsive Design**: 4 tests
- **Animation States**: 4 tests

**Total Test Count**: 1,354 tests (all passing)

---

## Files Created

```
src/components/previews/ChatPreview.tsx
src/pages/chat-preview-demo.astro
tests/feature-25-chat-preview.spec.ts
```

---

## Files Modified

```
src/components/previews/shared/PreviewContainer.tsx  — Added data-testid prop
src/components/previews/shared/MessageBubble.tsx     — Added data-testid prop
package.json                                          — Version bump to 0.25.0
```

---

## Technical Details

### Animation Timings
- User message delay: 500ms after mount
- Thinking phase delay: 1000ms after user message
- Each thinking step: 400ms apart
- Streaming delay: 10ms base, 80ms on punctuation
- Sidebar appearance: 300ms after streaming completes

### State Management
- Uses React `useState` for demo phase tracking
- Uses `useRef` for cleanup of timers
- Proper cleanup on unmount to prevent memory leaks

### Accessibility
- Keyboard accessible replay and toggle buttons
- Decorative icons use `aria-hidden="true"`
- Status indicators use both color and text
- Citation pills have proper aria-labels

---

## Usage

```tsx
import { ChatPreview } from '@/components/previews/ChatPreview';

// As an Astro React island
<ChatPreview client:visible />
```

---

## Next Steps

Feature Slice 26 (SourcesPreview Component) will create:
- File upload dropzone (visual only)
- Source cards with metadata
- Filter/search functionality
- Hover states on source cards

---

## Backlog Status

- **Phase 1 (Foundation)**: Complete (13/13 slices)
- **Phase 2 (Content)**: Complete (10/10 slices)
- **Phase 3 (Interactive)**: In Progress (2/7 slices)
- **Phase 4 (Purchase)**: Planned
- **Phase 5 (Polish)**: Planned

**Overall Progress**: 25/40 feature slices complete (62.5%)
