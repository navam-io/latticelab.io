/**
 * Feature Slice 31: Stripe Buy Button Integration Tests
 *
 * Tests for the StripeBuyButton component and its integration
 * across the homepage and pricing pages. Without Stripe env vars
 * configured, tests verify the placeholder button behavior.
 */
import { test, expect } from '@playwright/test';

test.describe('Feature 31: Stripe Buy Button Integration', () => {
  test.describe('StripeBuyButton Component (Placeholder Mode)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('homepage pricing section has buy button wrapper', async ({ page }) => {
      const ctaContainer = page.getByTestId('pricing-cta-container');
      await expect(ctaContainer).toBeVisible();

      const buyButton = page.getByTestId('pricing-cta');
      await expect(buyButton).toBeVisible();
    });

    test('buy button shows placeholder when Stripe not configured', async ({ page }) => {
      // Without env vars, we should see the placeholder button
      const placeholderButton = page.getByTestId('pricing-cta-placeholder');
      await expect(placeholderButton).toBeVisible();
    });

    test('placeholder button has correct text with price', async ({ page }) => {
      const placeholderButton = page.getByTestId('pricing-cta-placeholder');
      await expect(placeholderButton).toContainText('Get Lattice for $99');
    });

    test('placeholder button links to pricing page', async ({ page }) => {
      const placeholderButton = page.getByTestId('pricing-cta-placeholder');
      await expect(placeholderButton).toHaveAttribute('href', '/pricing');
    });

    test('placeholder button has credit card icon', async ({ page }) => {
      const placeholderButton = page.getByTestId('pricing-cta-placeholder');
      const svg = placeholderButton.locator('svg');
      await expect(svg).toBeVisible();
    });

    test('placeholder shows configuration note', async ({ page }) => {
      const note = page.getByTestId('pricing-cta-placeholder-note');
      await expect(note).toBeVisible();
      await expect(note).toContainText('Stripe integration pending');
    });

    test('buy button wrapper has stripe-configured attribute', async ({ page }) => {
      const wrapper = page.getByTestId('pricing-cta');
      // In Astro, boolean false renders as empty string for data attributes
      const attr = await wrapper.getAttribute('data-stripe-configured');
      // Should exist (either 'false', '', or 'true' when configured)
      expect(attr).not.toBeNull();
    });
  });

  test.describe('Homepage Pricing Section Integration', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('pricing section is visible on homepage', async ({ page }) => {
      await expect(page.getByTestId('pricing-section')).toBeVisible();
    });

    test('pricing section has buy button container', async ({ page }) => {
      await expect(page.getByTestId('pricing-cta-container')).toBeVisible();
    });

    test('pricing section still shows price display', async ({ page }) => {
      await expect(page.getByTestId('price-amount')).toContainText('$99');
    });

    test('pricing section still shows benefits list', async ({ page }) => {
      await expect(page.getByTestId('benefits-list')).toBeVisible();
    });

    test('FUDs reduction still visible below buy button', async ({ page }) => {
      await expect(page.getByTestId('pricing-fuds')).toBeVisible();
    });

    test('placeholder button navigates to pricing page', async ({ page }) => {
      const placeholderButton = page.getByTestId('pricing-cta-placeholder');
      await placeholderButton.click();
      await expect(page).toHaveURL('/pricing');
    });
  });

  test.describe('Homepage Final CTA Integration', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('final CTA section is visible', async ({ page }) => {
      await expect(page.getByTestId('final-cta-section')).toBeVisible();
    });

    test('final CTA has buy button container', async ({ page }) => {
      await expect(page.getByTestId('final-cta-button-container')).toBeVisible();
    });

    test('final CTA has StripeBuyButton component', async ({ page }) => {
      const buyButton = page.getByTestId('final-cta-button');
      await expect(buyButton).toBeVisible();
    });

    test('final CTA placeholder button has correct text', async ({ page }) => {
      const placeholderButton = page.getByTestId('final-cta-button-placeholder');
      await expect(placeholderButton).toContainText('Get Lattice for $99');
    });

    test('final CTA FUDs reduction still visible', async ({ page }) => {
      await expect(page.getByTestId('final-cta-fuds')).toBeVisible();
    });
  });

  test.describe('Pricing Page Integration', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/pricing');
    });

    test('pricing page main card has buy button', async ({ page }) => {
      await expect(page.getByTestId('pricing-main-cta')).toBeVisible();
    });

    test('pricing page main buy button shows placeholder', async ({ page }) => {
      const placeholder = page.getByTestId('pricing-main-cta-placeholder');
      await expect(placeholder).toBeVisible();
    });

    test('pricing page stripe note is visible', async ({ page }) => {
      await expect(page.getByTestId('pricing-main-stripe-note')).toContainText('Secure checkout powered by Stripe');
    });

    test('pricing page final section has buy button', async ({ page }) => {
      await expect(page.getByTestId('pricing-final-cta')).toBeVisible();
    });

    test('pricing page final section buy button shows placeholder', async ({ page }) => {
      const placeholder = page.getByTestId('pricing-final-cta-placeholder');
      await expect(placeholder).toBeVisible();
    });

    test('pricing page FUDs reduction visible on main card', async ({ page }) => {
      await expect(page.getByTestId('pricing-main-fuds')).toBeVisible();
    });

    test('pricing page FUDs reduction visible on final section', async ({ page }) => {
      await expect(page.getByTestId('pricing-final-fuds')).toBeVisible();
    });

    test('pricing page learn more button still works', async ({ page }) => {
      const learnMore = page.getByTestId('pricing-final-learn-more');
      await expect(learnMore).toBeVisible();
      await expect(learnMore).toHaveAttribute('href', '/');
    });
  });

  test.describe('Placeholder Button Styling', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('placeholder button has proper styling classes', async ({ page }) => {
      const placeholderButton = page.getByTestId('pricing-cta-placeholder');
      await expect(placeholderButton).toHaveClass(/bg-accent/);
      await expect(placeholderButton).toHaveClass(/rounded-lg/);
    });

    test('placeholder button is keyboard accessible', async ({ page }) => {
      const placeholderButton = page.getByTestId('pricing-cta-placeholder');
      await placeholderButton.focus();
      const isFocused = await placeholderButton.evaluate((el) => document.activeElement === el);
      expect(isFocused).toBe(true);
    });

    test('placeholder button has focus ring styles', async ({ page }) => {
      const placeholderButton = page.getByTestId('pricing-cta-placeholder');
      await expect(placeholderButton).toHaveClass(/focus-visible:ring-2/);
    });
  });

  test.describe('Responsive Design', () => {
    test('buy button displays correctly on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const placeholderButton = page.getByTestId('pricing-cta-placeholder');
      await expect(placeholderButton).toBeVisible();
    });

    test('buy button displays correctly on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/');

      const placeholderButton = page.getByTestId('pricing-cta-placeholder');
      await expect(placeholderButton).toBeVisible();
    });

    test('buy button displays correctly on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto('/');

      const placeholderButton = page.getByTestId('pricing-cta-placeholder');
      await expect(placeholderButton).toBeVisible();
    });

    test('pricing page buy buttons visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/pricing');

      await expect(page.getByTestId('pricing-main-cta-placeholder')).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('placeholder button has accessible role', async ({ page }) => {
      const placeholderButton = page.getByTestId('pricing-cta-placeholder');
      // It's an anchor tag, which is inherently accessible
      const tagName = await placeholderButton.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('a');
    });

    test('placeholder button icon is hidden from screen readers', async ({ page }) => {
      const placeholderButton = page.getByTestId('pricing-cta-placeholder');
      const svg = placeholderButton.locator('svg');
      await expect(svg).toHaveAttribute('aria-hidden', 'true');
    });

    test('buy button wrapper is in pricing card', async ({ page }) => {
      const pricingCard = page.getByTestId('pricing-card');
      const buyButton = pricingCard.getByTestId('pricing-cta');
      await expect(buyButton).toBeVisible();
    });
  });

  test.describe('Button Variants', () => {
    test('homepage pricing section uses large button', async ({ page }) => {
      await page.goto('/');
      const placeholderButton = page.getByTestId('pricing-cta-placeholder');
      // Large size has py-4 px-8
      await expect(placeholderButton).toHaveClass(/py-4/);
    });

    test('pricing page uses large button', async ({ page }) => {
      await page.goto('/pricing');
      const placeholderButton = page.getByTestId('pricing-main-cta-placeholder');
      await expect(placeholderButton).toHaveClass(/py-4/);
    });
  });

  test.describe('Integration Consistency', () => {
    test('all buy buttons show price in placeholder mode', async ({ page }) => {
      await page.goto('/');

      // Homepage pricing section
      const pricingPlaceholder = page.getByTestId('pricing-cta-placeholder');
      await expect(pricingPlaceholder).toContainText('$99');

      // Final CTA
      const finalCtaPlaceholder = page.getByTestId('final-cta-button-placeholder');
      await expect(finalCtaPlaceholder).toContainText('$99');
    });

    test('pricing page all buy buttons show price', async ({ page }) => {
      await page.goto('/pricing');

      // Main card
      const mainPlaceholder = page.getByTestId('pricing-main-cta-placeholder');
      await expect(mainPlaceholder).toContainText('$99');

      // Final section
      const finalPlaceholder = page.getByTestId('pricing-final-cta-placeholder');
      await expect(finalPlaceholder).toContainText('$99');
    });

    test('all placeholder buttons link to pricing', async ({ page }) => {
      await page.goto('/');

      const placeholders = [
        page.getByTestId('pricing-cta-placeholder'),
        page.getByTestId('final-cta-button-placeholder'),
      ];

      for (const placeholder of placeholders) {
        await expect(placeholder).toHaveAttribute('href', '/pricing');
      }
    });
  });
});
