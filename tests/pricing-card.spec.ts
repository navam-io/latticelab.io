import { test, expect } from '@playwright/test';

test.describe('PricingCard Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/pricing-card');
    await page.waitForLoadState('domcontentloaded');
  });

  test.describe('Basic Structure', () => {
    test('page loads correctly', async ({ page }) => {
      const heading = page.locator('h1').first();
      await expect(heading).toContainText('PricingCard Component Test');
    });

    test('default pricing card is visible', async ({ page }) => {
      const card = page.getByTestId('default-pricing');
      await expect(card).toBeVisible();
    });

    test('pricing section is a section element', async ({ page }) => {
      const section = page.getByTestId('default-pricing');
      const tagName = await section.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('section');
    });

    test('card container exists', async ({ page }) => {
      const container = page.getByTestId('default-pricing-container');
      await expect(container).toBeVisible();
    });

    test('card element exists', async ({ page }) => {
      const card = page.getByTestId('default-pricing-card');
      await expect(card).toBeVisible();
    });

    test('card is an article element', async ({ page }) => {
      const card = page.getByTestId('default-pricing-card');
      const tagName = await card.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('article');
    });
  });

  test.describe('Section Header', () => {
    test('header is visible by default', async ({ page }) => {
      const header = page.getByTestId('default-pricing-header');
      await expect(header).toBeVisible();
    });

    test('title displays correctly', async ({ page }) => {
      const title = page.getByTestId('default-pricing-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Simple, One-Time Pricing');
    });

    test('description displays correctly', async ({ page }) => {
      const description = page.getByTestId('default-pricing-description');
      await expect(description).toBeVisible();
      await expect(description).toContainText('lifetime access');
    });

    test('header is hidden when showHeader is false', async ({ page }) => {
      const header = page.getByTestId('no-header-pricing-header');
      await expect(header).not.toBeAttached();
    });

    test('custom title displays correctly', async ({ page }) => {
      const title = page.getByTestId('custom-header-pricing-title');
      await expect(title).toContainText('Invest in Your AI Future');
    });

    test('custom description displays correctly', async ({ page }) => {
      const description = page.getByTestId('custom-header-pricing-description');
      await expect(description).toContainText('confident infrastructure decisions');
    });
  });

  test.describe('Price Display', () => {
    test('price is visible', async ({ page }) => {
      const price = page.getByTestId('default-pricing-price');
      await expect(price).toBeVisible();
    });

    test('price shows $99 by default', async ({ page }) => {
      const price = page.getByTestId('default-pricing-price');
      await expect(price).toContainText('$99');
    });

    test('price has large typography', async ({ page }) => {
      const price = page.getByTestId('default-pricing-price');
      const classes = await price.getAttribute('class');
      expect(classes).toContain('text-7xl');
      expect(classes).toContain('font-bold');
    });

    test('price has gradient text', async ({ page }) => {
      const price = page.getByTestId('default-pricing-price');
      const classes = await price.getAttribute('class');
      expect(classes).toContain('bg-gradient-to-r');
      expect(classes).toContain('bg-clip-text');
      expect(classes).toContain('text-transparent');
    });

    test('custom price displays correctly', async ({ page }) => {
      const price = page.getByTestId('custom-price-pricing-price');
      await expect(price).toContainText('$149');
    });
  });

  test.describe('Tagline', () => {
    test('tagline is visible', async ({ page }) => {
      const tagline = page.getByTestId('default-pricing-tagline');
      await expect(tagline).toBeVisible();
    });

    test('tagline shows default text', async ({ page }) => {
      const tagline = page.getByTestId('default-pricing-tagline');
      await expect(tagline).toContainText('One-time payment. Lifetime access.');
    });

    test('tagline has correct styling', async ({ page }) => {
      const tagline = page.getByTestId('default-pricing-tagline');
      const classes = await tagline.getAttribute('class');
      expect(classes).toContain('text-xl');
      expect(classes).toContain('font-medium');
    });

    test('custom tagline displays correctly', async ({ page }) => {
      const tagline = page.getByTestId('custom-price-pricing-tagline');
      await expect(tagline).toContainText('Early bird pricing');
    });
  });

  test.describe('Features List', () => {
    test('features list is visible', async ({ page }) => {
      const features = page.getByTestId('default-pricing-features');
      await expect(features).toBeVisible();
    });

    test('default has 6 features', async ({ page }) => {
      const features = page.getByTestId('default-pricing-features');
      const items = features.locator('li');
      await expect(items).toHaveCount(6);
    });

    test('first feature has check icon', async ({ page }) => {
      const icon = page.getByTestId('default-pricing-feature-0-icon');
      await expect(icon).toBeVisible();
    });

    test('first feature mentions Sources, Lab, Studio', async ({ page }) => {
      const feature = page.getByTestId('default-pricing-feature-0');
      await expect(feature).toContainText('Sources');
      await expect(feature).toContainText('Lab');
      await expect(feature).toContainText('Studio');
    });

    test('second feature mentions blueprints', async ({ page }) => {
      const feature = page.getByTestId('default-pricing-feature-1');
      await expect(feature).toContainText('34');
      await expect(feature).toContainText('blueprints');
    });

    test('custom features display correctly', async ({ page }) => {
      const features = page.getByTestId('custom-features-pricing-features');
      const items = features.locator('li');
      await expect(items).toHaveCount(3);
    });

    test('custom feature text is correct', async ({ page }) => {
      const feature = page.getByTestId('custom-features-pricing-feature-0');
      await expect(feature).toContainText('Feature one');
    });
  });

  test.describe('CTA Section', () => {
    test('CTA section is visible', async ({ page }) => {
      const cta = page.getByTestId('default-pricing-cta-section');
      await expect(cta).toBeVisible();
    });

    test('Stripe container is visible by default', async ({ page }) => {
      const stripe = page.getByTestId('default-pricing-stripe-container');
      await expect(stripe).toBeVisible();
    });

    test('CTA button shown when Stripe disabled', async ({ page }) => {
      const button = page.getByTestId('cta-button-pricing-cta-button');
      await expect(button).toBeVisible();
      await expect(button).toContainText('Purchase Now');
    });

    test('CTA button has correct href', async ({ page }) => {
      const button = page.getByTestId('cta-button-pricing-cta-button');
      await expect(button).toHaveAttribute('href', '/checkout');
    });

    test('CTA button has gradient background', async ({ page }) => {
      const button = page.getByTestId('cta-button-pricing-cta-button');
      const classes = await button.getAttribute('class');
      expect(classes).toContain('bg-gradient-to-r');
    });
  });

  test.describe('Trust Text', () => {
    test('trust text is visible by default', async ({ page }) => {
      const trust = page.getByTestId('default-pricing-trust-text');
      await expect(trust).toBeVisible();
      await expect(trust).toContainText('Secure payment via Stripe');
    });

    test('trust text hidden when empty', async ({ page }) => {
      const trust = page.getByTestId('no-trust-pricing-trust-text');
      await expect(trust).not.toBeAttached();
    });
  });

  test.describe('Card Styling', () => {
    test('card has rounded corners', async ({ page }) => {
      const card = page.getByTestId('default-pricing-card');
      const classes = await card.getAttribute('class');
      expect(classes).toContain('rounded-3xl');
    });

    test('card has border', async ({ page }) => {
      const card = page.getByTestId('default-pricing-card');
      const classes = await card.getAttribute('class');
      expect(classes).toContain('border');
    });

    test('card has shadow', async ({ page }) => {
      const card = page.getByTestId('default-pricing-card');
      const classes = await card.getAttribute('class');
      expect(classes).toContain('shadow-xl');
    });

    test('card has white background', async ({ page }) => {
      const card = page.getByTestId('default-pricing-card');
      const classes = await card.getAttribute('class');
      expect(classes).toContain('bg-white');
    });

    test('gradient overlay exists', async ({ page }) => {
      const gradient = page.getByTestId('default-pricing-gradient');
      await expect(gradient).toBeAttached();
    });
  });

  test.describe('Background Variants', () => {
    test('default has gray background', async ({ page }) => {
      const section = page.getByTestId('default-pricing');
      const classes = await section.getAttribute('class');
      expect(classes).toContain('bg-gray-50');
    });

    test('white background variant', async ({ page }) => {
      const section = page.getByTestId('white-bg-pricing');
      const classes = await section.getAttribute('class');
      expect(classes).toContain('bg-white');
    });

    test('gradient background variant', async ({ page }) => {
      const section = page.getByTestId('gradient-bg-pricing');
      const classes = await section.getAttribute('class');
      expect(classes).toContain('bg-gradient-to-b');
    });
  });

  test.describe('Responsive Behavior', () => {
    test('pricing card visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const card = page.getByTestId('default-pricing-card');
      await expect(card).toBeVisible();
    });

    test('pricing card visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      const card = page.getByTestId('default-pricing-card');
      await expect(card).toBeVisible();
    });

    test('pricing card visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const card = page.getByTestId('default-pricing-card');
      await expect(card).toBeVisible();
    });

    test('price scales on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const price = page.getByTestId('default-pricing-price');
      const classes = await price.getAttribute('class');
      expect(classes).toContain('md:text-8xl');
    });
  });

  test.describe('Accessibility', () => {
    test('section has padding', async ({ page }) => {
      const section = page.getByTestId('default-pricing');
      const classes = await section.getAttribute('class');
      expect(classes).toContain('py-16');
    });

    test('card container is centered', async ({ page }) => {
      const container = page.getByTestId('default-pricing-container');
      const classes = await container.getAttribute('class');
      expect(classes).toContain('mx-auto');
    });

    test('check icons have proper color', async ({ page }) => {
      const icon = page.getByTestId('default-pricing-feature-0-icon');
      const classes = await icon.getAttribute('class');
      expect(classes).toContain('text-emerald-500');
    });
  });
});
