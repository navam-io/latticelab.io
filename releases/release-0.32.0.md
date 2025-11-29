# Release 0.32.0 — Analytics Integration

**Release Date**: 2025-11-28
**Phase**: Phase 4 (Purchase Flow)
**Feature Slice**: 32

---

## Summary

This release integrates Plausible Analytics for privacy-friendly, GDPR-compliant user behavior tracking. The analytics system automatically tracks page views, CTA clicks, buy button clicks, FAQ interactions, and preview component engagement. In development mode, events are logged to the console instead of being sent to Plausible.

---

## New Components

### Analytics (`src/components/Analytics.astro`)

A core analytics component that:
- Loads Plausible script when `PUBLIC_PLAUSIBLE_DOMAIN` is configured
- Provides `window.plausible()` function for custom events
- Provides `window.trackEvent()` helper function
- In dev mode, logs all events to console with `[Analytics Dev]` prefix
- No cookies, no tracking in development, GDPR-compliant

### Analytics Events (`src/scripts/analytics-events.ts`)

An auto-tracking module that initializes on page load:
- **CTA Tracking**: Elements with `data-track="cta"` trigger named events
- **Buy Tracking**: Elements with `data-track="buy"` track purchases with value
- **FAQ Tracking**: Details elements trigger open/close events
- **Preview Engagement**: Chat preview scroll/focus interactions
- **Outbound Links**: External link clicks tracked automatically

---

## Environment Variables

Added to `.env.example`:

```bash
# Plausible Analytics (optional)
PUBLIC_PLAUSIBLE_DOMAIN=latticelab.io
# PUBLIC_PLAUSIBLE_API_HOST=plausible.io
```

### How It Works:
- **Development (no env vars)**: Events log to browser console
- **Production (with env vars)**: Events sent to Plausible
- Script only loads when `PUBLIC_PLAUSIBLE_DOMAIN` is set

---

## Tracking Attributes Added

### Hero Section (`Hero.astro`)
```astro
<Button data-track="cta" data-track-name="Hero Primary CTA">
<Button data-track="cta" data-track-name="Hero Secondary CTA">
```

### Interactive Preview Section (`InteractivePreview.astro`)
```astro
<Button data-track="cta" data-track-name="Interactive Preview Features CTA">
<Button data-track="cta" data-track-name="Interactive Preview Pricing CTA">
```

### Stripe Buy Button (`StripeBuyButton.astro`)
```astro
<a data-track="buy" data-track-value="99">
```

---

## Event Types Tracked

| Event Name | Trigger | Properties |
|------------|---------|------------|
| CTA Click | Click on `[data-track="cta"]` | name |
| Purchase Intent | Click on `[data-track="buy"]` | value |
| FAQ Open/Close | Toggle `<details>` elements | id |
| Preview Engagement | Scroll/focus in preview | type |
| Outbound Click | Click on external links | url |

---

## Dev Mode Console Output

When analytics env vars are not set:
```
[Analytics Dev] CTA Click {name: "Hero Primary CTA"}
[Analytics Dev] Purchase Intent {value: "99"}
[Analytics Dev] FAQ Toggle {id: "faq-1", open: true}
```

---

## BaseLayout Integration

The Analytics component is imported in `BaseLayout.astro`:

```astro
import Analytics from '@/components/Analytics.astro';
// In <head>:
<Analytics />
```

Re-initializes tracking on Astro page transitions via `astro:page-load` event.

---

## Test Coverage

25 new tests added in `tests/feature-32-analytics-integration.spec.ts`:

- **Analytics Script Presence**: 3 tests
- **CTA Tracking Attributes**: 4 tests
- **Buy Button Tracking Attributes**: 2 tests
- **Pricing Page Tracking**: 2 tests
- **FAQ Accordion Tracking**: 2 tests
- **Preview Component Tracking**: 1 test
- **Event Tracking Function**: 2 tests
- **Auto-Tracking Initialization**: 2 tests
- **Responsive Tracking**: 2 tests
- **Analytics Across Pages**: 3 tests
- **GDPR Compliance**: 2 tests

**Total Test Count**: 1,674 tests (1,653 passed, 20 flaky passed on retry, 1 pre-existing unrelated flaky)

---

## Files Created

```
src/components/Analytics.astro
src/scripts/analytics-events.ts
tests/feature-32-analytics-integration.spec.ts
releases/release-0.32.0.md
```

---

## Files Modified

```
src/layouts/BaseLayout.astro              — Added Analytics component
src/components/sections/Hero.astro        — Added tracking attributes to CTAs
src/components/sections/InteractivePreview.astro — Added tracking attributes to CTAs
src/components/ui/StripeBuyButton.astro   — Added tracking attributes to placeholder
.env.example                              — Added Plausible configuration
package.json                              — Version bump to 0.32.0
backlog/active.md                         — Updated backlog status
```

---

## Acceptance Criteria Completion

| Criteria | Status |
|----------|--------|
| Plausible Analytics script integrated | ✅ |
| Page view tracking (automatic) | ✅ |
| CTA button click tracking | ✅ |
| Buy button click tracking | ✅ |
| FAQ accordion open tracking | ✅ |
| Interactive preview engagement tracking | ✅ |
| Environment variable configuration | ✅ |
| Development mode console logging | ✅ |
| GDPR-compliant (no cookies) | ✅ |

---

## Usage

### Custom Event Tracking

In client-side JavaScript:
```javascript
// Using trackEvent helper
window.trackEvent('Custom Event', { key: 'value' });

// Using plausible directly
window.plausible('Event Name', { props: { key: 'value' } });
```

### Adding Tracking to Elements

```astro
<!-- CTA buttons -->
<button data-track="cta" data-track-name="My CTA">Click me</button>

<!-- Buy buttons -->
<button data-track="buy" data-track-value="99">Buy Now</button>
```

### Enabling Plausible in Production

1. Set up Plausible account at plausible.io
2. Add your domain
3. Set environment variables:
   - `PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com`
   - `PUBLIC_PLAUSIBLE_API_HOST=plausible.io` (optional, for self-hosted)
4. Deploy

---

## Privacy Features

- **No Cookies**: Plausible is cookieless by design
- **No Personal Data**: Only aggregated metrics
- **No Cross-Site Tracking**: Single-site analytics only
- **EU Hosted**: Plausible servers in EU
- **Open Source**: Self-hosting option available
- **No Consent Banner Required**: GDPR-compliant without opt-in

---

## Next Steps

Feature Slice 33 (Thank You Page) will:
- Create /thank-you page for post-purchase
- Display order confirmation message
- Provide next steps for customers
- Link to documentation/getting started

---

## Backlog Status

- **Phase 1 (Foundation)**: Complete (13/13 slices)
- **Phase 2 (Content)**: Complete (10/10 slices)
- **Phase 3 (Interactive)**: Complete (7/7 slices)
- **Phase 4 (Purchase)**: Complete (2/2 slices)
- **Phase 5 (Polish)**: Planned

**Overall Progress**: 32/40 feature slices complete (80%)
