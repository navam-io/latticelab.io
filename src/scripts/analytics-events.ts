/**
 * Analytics Event Tracking
 *
 * Auto-tracks important user interactions using data attributes.
 * Uses Plausible's trackEvent helper (or console.log in dev mode).
 *
 * Feature Slice 32: Analytics Integration
 *
 * Tracked Events:
 * - CTA Click: Any element with data-track="cta"
 * - Buy Click: Any element with data-track="buy"
 * - FAQ Open: Any details element opening
 * - Preview Engagement: Interactions with preview components
 *
 * Usage:
 *   <button data-track="cta" data-track-name="Hero CTA">Get Started</button>
 *   <a data-track="buy" data-track-value="99">Buy Now</a>
 */

declare global {
  interface Window {
    trackEvent: (eventName: string, props?: Record<string, string | number>) => void;
    plausible: (eventName: string, options?: { props?: Record<string, string | number> }) => void;
  }
}

/**
 * Initialize analytics event tracking
 */
export function initAnalyticsEvents(): void {
  // Track CTA button clicks
  trackCTAClicks();

  // Track Buy button clicks
  trackBuyClicks();

  // Track FAQ accordion opens
  trackFAQOpens();

  // Track interactive preview engagement
  trackPreviewEngagement();

  // Track outbound links
  trackOutboundLinks();
}

/**
 * Track CTA button clicks
 * Elements with data-track="cta"
 */
function trackCTAClicks(): void {
  document.querySelectorAll('[data-track="cta"]').forEach((element) => {
    element.addEventListener('click', () => {
      const name = element.getAttribute('data-track-name') || 'Unknown CTA';
      const location = element.getAttribute('data-track-location') || getPageSection(element);

      window.trackEvent?.('CTA Click', {
        name,
        location,
        page: window.location.pathname,
      });
    });
  });
}

/**
 * Track Buy button clicks
 * Elements with data-track="buy"
 */
function trackBuyClicks(): void {
  document.querySelectorAll('[data-track="buy"]').forEach((element) => {
    element.addEventListener('click', () => {
      const value = element.getAttribute('data-track-value') || '99';
      const location = element.getAttribute('data-track-location') || getPageSection(element);

      window.trackEvent?.('Buy Click', {
        value,
        location,
        page: window.location.pathname,
      });
    });
  });
}

/**
 * Track FAQ accordion opens
 * All details elements in FAQ sections
 */
function trackFAQOpens(): void {
  document.querySelectorAll('details').forEach((details) => {
    details.addEventListener('toggle', () => {
      if ((details as HTMLDetailsElement).open) {
        const summary = details.querySelector('summary');
        const question = summary?.textContent?.trim().slice(0, 50) || 'Unknown';
        const faqId = details.getAttribute('data-testid') || 'unknown';

        window.trackEvent?.('FAQ Open', {
          question,
          faqId,
          page: window.location.pathname,
        });
      }
    });
  });
}

/**
 * Track interactive preview engagement
 * First interaction with preview components
 */
function trackPreviewEngagement(): void {
  const previewSelectors = [
    '[data-testid="chat-preview"]',
    '[data-testid="sources-preview"]',
    '[data-testid="blueprint-preview"]',
    '[data-testid="scenario-preview"]',
  ];

  previewSelectors.forEach((selector) => {
    const preview = document.querySelector(selector);
    if (preview) {
      let hasTracked = false;

      const trackEngagement = () => {
        if (!hasTracked) {
          hasTracked = true;
          const previewType = selector.match(/testid="([^"]+)"/)?.[1] || 'unknown';

          window.trackEvent?.('Preview Engagement', {
            type: previewType,
            page: window.location.pathname,
          });
        }
      };

      // Track on first click or focus within preview
      preview.addEventListener('click', trackEngagement, { once: true });
      preview.addEventListener('focusin', trackEngagement, { once: true });
    }
  });
}

/**
 * Track outbound link clicks
 */
function trackOutboundLinks(): void {
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && !href.includes(window.location.hostname)) {
      link.addEventListener('click', () => {
        window.trackEvent?.('Outbound Link', {
          url: href,
          page: window.location.pathname,
        });
      });
    }
  });
}

/**
 * Get the page section containing an element
 */
function getPageSection(element: Element): string {
  const section = element.closest('section[data-testid]');
  if (section) {
    return section.getAttribute('data-testid') || 'unknown';
  }
  return 'unknown';
}

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnalyticsEvents);
  } else {
    initAnalyticsEvents();
  }
}

export {};
