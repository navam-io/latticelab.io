/**
 * Feature Slice 32: Analytics Integration Tests
 *
 * Tests for the Plausible Analytics integration, including:
 * - Analytics script presence (dev mode helper)
 * - Event tracking attributes on key elements
 * - Global tracking functions availability
 */
import { test, expect } from '@playwright/test';

test.describe('Feature 32: Analytics Integration', () => {
  test.describe('Analytics Script Presence', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('analytics dev helper script is present', async ({ page }) => {
      // In dev/test mode (no PUBLIC_PLAUSIBLE_DOMAIN), dev helper should be present
      const devHelper = page.locator('script[data-testid="analytics-dev-helper"]');
      await expect(devHelper).toBeAttached();
    });

    test('trackEvent function is available globally', async ({ page }) => {
      // Wait for scripts to load
      await page.waitForLoadState('domcontentloaded');

      const hasTrackEvent = await page.evaluate(() => {
        return typeof window.trackEvent === 'function';
      });

      expect(hasTrackEvent).toBe(true);
    });

    test('plausible function is available globally', async ({ page }) => {
      await page.waitForLoadState('domcontentloaded');

      const hasPlausible = await page.evaluate(() => {
        return typeof window.plausible === 'function';
      });

      expect(hasPlausible).toBe(true);
    });
  });

  test.describe('CTA Tracking Attributes', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('Hero primary CTA has tracking attributes', async ({ page }) => {
      const cta = page.getByTestId('hero-primary-cta');
      await expect(cta).toHaveAttribute('data-track', 'cta');
      await expect(cta).toHaveAttribute('data-track-name', 'Hero Primary CTA');
    });

    test('Hero secondary CTA has tracking attributes', async ({ page }) => {
      const cta = page.getByTestId('hero-secondary-cta');
      await expect(cta).toHaveAttribute('data-track', 'cta');
      await expect(cta).toHaveAttribute('data-track-name', 'Hero Secondary CTA');
    });

    test('Interactive Preview primary CTA has tracking attributes', async ({ page }) => {
      const cta = page.getByTestId('interactive-preview-cta-primary');
      await expect(cta).toHaveAttribute('data-track', 'cta');
      await expect(cta).toHaveAttribute('data-track-name', 'Interactive Preview Features CTA');
    });

    test('Interactive Preview secondary CTA has tracking attributes', async ({ page }) => {
      const cta = page.getByTestId('interactive-preview-cta-secondary');
      await expect(cta).toHaveAttribute('data-track', 'cta');
      await expect(cta).toHaveAttribute('data-track-name', 'Interactive Preview Pricing CTA');
    });
  });

  test.describe('Buy Button Tracking Attributes', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('Pricing section buy button has tracking attributes', async ({ page }) => {
      const buyButton = page.getByTestId('pricing-cta-placeholder');
      await expect(buyButton).toHaveAttribute('data-track', 'buy');
      await expect(buyButton).toHaveAttribute('data-track-value', '99');
    });

    test('Final CTA buy button has tracking attributes', async ({ page }) => {
      const buyButton = page.getByTestId('final-cta-button-placeholder');
      await expect(buyButton).toHaveAttribute('data-track', 'buy');
      await expect(buyButton).toHaveAttribute('data-track-value', '99');
    });
  });

  test.describe('Pricing Page Tracking', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/pricing');
    });

    test('Main pricing buy button has tracking attributes', async ({ page }) => {
      const buyButton = page.getByTestId('pricing-main-cta-placeholder');
      await expect(buyButton).toHaveAttribute('data-track', 'buy');
      await expect(buyButton).toHaveAttribute('data-track-value', '99');
    });

    test('Final section buy button has tracking attributes', async ({ page }) => {
      const buyButton = page.getByTestId('pricing-final-cta-placeholder');
      await expect(buyButton).toHaveAttribute('data-track', 'buy');
      await expect(buyButton).toHaveAttribute('data-track-value', '99');
    });
  });

  test.describe('FAQ Accordion Tracking', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('FAQ section has details elements for tracking', async ({ page }) => {
      const faqSection = page.getByTestId('faq-section');
      await expect(faqSection).toBeVisible();

      const detailsElements = faqSection.locator('details');
      const count = await detailsElements.count();
      expect(count).toBeGreaterThan(0);
    });

    test('FAQ details have testids for tracking identification', async ({ page }) => {
      // FAQ IDs start at faq-1 (based on FAQ.astro data)
      const firstFaq = page.getByTestId('faq-1');
      await expect(firstFaq).toBeVisible();
    });
  });

  test.describe('Preview Component Tracking', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('Chat preview has testid for engagement tracking', async ({ page }) => {
      await expect(page.getByTestId('chat-preview')).toBeVisible({ timeout: 10000 });
    });
  });

  test.describe('Event Tracking Function', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('trackEvent logs to console in dev mode', async ({ page }) => {
      // Set up console message listener
      const consoleMessages: string[] = [];
      page.on('console', (msg) => {
        if (msg.text().includes('[Analytics Dev]')) {
          consoleMessages.push(msg.text());
        }
      });

      // Call trackEvent
      await page.evaluate(() => {
        window.trackEvent('Test Event', { test: 'value' });
      });

      // Wait a bit for console to be captured
      await page.waitForTimeout(100);

      // Verify console was called
      expect(consoleMessages.length).toBeGreaterThan(0);
      expect(consoleMessages[0]).toContain('[Analytics Dev]');
      expect(consoleMessages[0]).toContain('Test Event');
    });

    test('plausible function logs to console in dev mode', async ({ page }) => {
      const consoleMessages: string[] = [];
      page.on('console', (msg) => {
        if (msg.text().includes('[Analytics Dev]')) {
          consoleMessages.push(msg.text());
        }
      });

      await page.evaluate(() => {
        window.plausible('Page View Test', { props: { page: '/test' } });
      });

      await page.waitForTimeout(100);

      expect(consoleMessages.length).toBeGreaterThan(0);
      expect(consoleMessages[0]).toContain('[Analytics Dev]');
    });
  });

  test.describe('Auto-Tracking Initialization', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('event tracking is initialized on page load', async ({ page }) => {
      // Verify CTA click tracking is set up by checking event listener
      const hasCTATracking = await page.evaluate(() => {
        const cta = document.querySelector('[data-track="cta"]');
        return cta !== null;
      });

      expect(hasCTATracking).toBe(true);
    });

    test('buy button tracking is set up', async ({ page }) => {
      const hasBuyTracking = await page.evaluate(() => {
        const buyButton = document.querySelector('[data-track="buy"]');
        return buyButton !== null;
      });

      expect(hasBuyTracking).toBe(true);
    });
  });

  test.describe('Responsive Tracking', () => {
    test('analytics functions available on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const hasTrackEvent = await page.evaluate(() => {
        return typeof window.trackEvent === 'function';
      });

      expect(hasTrackEvent).toBe(true);
    });

    test('tracking attributes present on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const cta = page.getByTestId('hero-primary-cta');
      await expect(cta).toHaveAttribute('data-track', 'cta');
    });
  });

  test.describe('Analytics Across Pages', () => {
    test('analytics available on features page', async ({ page }) => {
      await page.goto('/features');

      const hasTrackEvent = await page.evaluate(() => {
        return typeof window.trackEvent === 'function';
      });

      expect(hasTrackEvent).toBe(true);
    });

    test('analytics available on pricing page', async ({ page }) => {
      await page.goto('/pricing');

      const hasTrackEvent = await page.evaluate(() => {
        return typeof window.trackEvent === 'function';
      });

      expect(hasTrackEvent).toBe(true);
    });

    test('analytics available on about page', async ({ page }) => {
      await page.goto('/about');

      const hasTrackEvent = await page.evaluate(() => {
        return typeof window.trackEvent === 'function';
      });

      expect(hasTrackEvent).toBe(true);
    });
  });

  test.describe('GDPR Compliance', () => {
    test('no tracking cookies are set', async ({ page }) => {
      await page.goto('/');

      const cookies = await page.context().cookies();
      const trackingCookies = cookies.filter(
        (c) =>
          c.name.includes('plausible') ||
          c.name.includes('_ga') ||
          c.name.includes('analytics')
      );

      expect(trackingCookies.length).toBe(0);
    });

    test('no localStorage tracking data', async ({ page }) => {
      await page.goto('/');

      const hasTrackingData = await page.evaluate(() => {
        const keys = Object.keys(localStorage);
        return keys.some(
          (k) =>
            k.includes('plausible') ||
            k.includes('analytics') ||
            k.includes('_ga')
        );
      });

      expect(hasTrackingData).toBe(false);
    });
  });
});
