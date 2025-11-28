import { test, expect } from '@playwright/test';

/**
 * Feature Slice 7: Homepage — Hero CRO Enhancement (Above-the-Fold Optimization)
 *
 * These tests verify the CRO optimizations applied to the Hero section:
 * - Benefit-driven headline (6-8 words max)
 * - Sub-headline with USP
 * - Social proof (2 forms minimum)
 * - Clear CTA with FUDs reduction underneath
 * - Visual hierarchy for 5-second rule
 */

test.describe('Feature 7: Hero CRO Enhancement', () => {
  test.describe('Benefit-Driven Headline', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('displays benefit-driven value proposition', async ({ page }) => {
      const valueProp = page.getByTestId('hero-value-prop');
      await expect(valueProp).toBeVisible();
      // CRO: "Stop Researching AI. Start Deciding." - benefit-focused
      await expect(valueProp).toContainText('Stop Researching AI');
      await expect(valueProp).toContainText('Start Deciding');
    });

    test('headline is 6-8 words max', async ({ page }) => {
      const valueProp = page.getByTestId('hero-value-prop');
      const text = await valueProp.textContent();
      // Count words (excluding punctuation as separate words)
      const wordCount = text?.trim().split(/\s+/).length || 0;
      expect(wordCount).toBeLessThanOrEqual(8);
      expect(wordCount).toBeGreaterThanOrEqual(4); // Sanity check
    });

    test('headline has bold/semibold font weight', async ({ page }) => {
      const valueProp = page.getByTestId('hero-value-prop');
      const fontWeight = await valueProp.evaluate((el) => {
        return getComputedStyle(el).fontWeight;
      });
      // font-semibold = 600, font-bold = 700
      expect(parseInt(fontWeight)).toBeGreaterThanOrEqual(600);
    });
  });

  test.describe('Sub-headline with USP', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('displays sub-headline with USP', async ({ page }) => {
      const subhead = page.getByTestId('hero-subhead');
      await expect(subhead).toBeVisible();
    });

    test('sub-headline explains what product does', async ({ page }) => {
      const subhead = page.getByTestId('hero-subhead');
      // Should explain the product synthesizes/grounds recommendations
      await expect(subhead).toContainText('synthesizes');
    });

    test('sub-headline includes differentiator', async ({ page }) => {
      const subhead = page.getByTestId('hero-subhead');
      // Differentiators: self-hosted, privacy-first, citations
      const text = await subhead.textContent();
      const hasDifferentiator =
        text?.includes('Self-hosted') ||
        text?.includes('privacy') ||
        text?.includes('citations');
      expect(hasDifferentiator).toBe(true);
    });
  });

  test.describe('Social Proof Above the Fold', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('social proof section is visible', async ({ page }) => {
      const socialProof = page.getByTestId('hero-social-proof');
      await expect(socialProof).toBeVisible();
    });

    test('review snippet is visible', async ({ page }) => {
      const reviewSnippet = page.getByTestId('review-snippet');
      await expect(reviewSnippet).toBeVisible();
    });

    test('review snippet shows star rating', async ({ page }) => {
      const stars = page.getByTestId('review-stars');
      await expect(stars).toBeVisible();
      // Should have 5 star SVGs
      const starCount = await stars.locator('svg').count();
      expect(starCount).toBe(5);
    });

    test('review snippet shows quote', async ({ page }) => {
      const quote = page.getByTestId('review-quote');
      await expect(quote).toBeVisible();
      await expect(quote).toContainText('Saved us weeks');
    });

    test('trust signals section is visible', async ({ page }) => {
      const trustSignals = page.getByTestId('hero-trust-signals');
      await expect(trustSignals).toBeVisible();
    });

    test('logo bar is visible', async ({ page }) => {
      const logoBar = page.getByTestId('logo-bar');
      await expect(logoBar).toBeVisible();
    });

    test('logo bar has label', async ({ page }) => {
      const label = page.getByTestId('logo-bar-label');
      await expect(label).toBeVisible();
      await expect(label).toContainText('Why teams choose Lattice');
    });

    test('logo bar shows at least 3 trust signals', async ({ page }) => {
      const heroSection = page.getByTestId('hero-trust-signals');
      const signals = heroSection.getByTestId('logo-bar-signals');
      await expect(signals).toBeVisible();

      // Check individual trust signals (scoped to hero section)
      await expect(heroSection.getByTestId('trust-signal-0')).toBeVisible();
      await expect(heroSection.getByTestId('trust-signal-1')).toBeVisible();
      await expect(heroSection.getByTestId('trust-signal-2')).toBeVisible();
    });

    test('trust signals include Self-Hosted', async ({ page }) => {
      const signals = page.getByTestId('logo-bar-signals');
      await expect(signals).toContainText('Self-Hosted');
    });

    test('trust signals include Privacy-First', async ({ page }) => {
      const signals = page.getByTestId('logo-bar-signals');
      await expect(signals).toContainText('Privacy-First');
    });

    test('trust signals include Citations', async ({ page }) => {
      const signals = page.getByTestId('logo-bar-signals');
      await expect(signals).toContainText('Citations');
    });
  });

  test.describe('FUDs Reduction Under CTA', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('FUDs reduction section is visible', async ({ page }) => {
      const fuds = page.getByTestId('hero-fuds');
      await expect(fuds).toBeVisible();
    });

    test('FUDs reduction container is visible', async ({ page }) => {
      const heroFuds = page.getByTestId('hero-fuds');
      const fudsReduction = heroFuds.getByTestId('fuds-reduction');
      await expect(fudsReduction).toBeVisible();
    });

    test('FUDs reduction shows at least 3 items', async ({ page }) => {
      const heroFuds = page.getByTestId('hero-fuds');
      await expect(heroFuds.getByTestId('fud-item-0')).toBeVisible();
      await expect(heroFuds.getByTestId('fud-item-1')).toBeVisible();
      await expect(heroFuds.getByTestId('fud-item-2')).toBeVisible();
    });

    test('FUDs include money-back guarantee', async ({ page }) => {
      const heroFuds = page.getByTestId('hero-fuds');
      const fuds = heroFuds.getByTestId('fuds-reduction');
      await expect(fuds).toContainText('money-back guarantee');
    });

    test('FUDs include quick deployment', async ({ page }) => {
      const heroFuds = page.getByTestId('hero-fuds');
      const fuds = heroFuds.getByTestId('fuds-reduction');
      await expect(fuds).toContainText('Deploy in under 5 minutes');
    });

    test('FUDs include privacy assurance', async ({ page }) => {
      const heroFuds = page.getByTestId('hero-fuds');
      const fuds = heroFuds.getByTestId('fuds-reduction');
      await expect(fuds).toContainText('No data leaves your machine');
    });

    test('FUDs appear after CTA buttons', async ({ page }) => {
      const ctas = page.getByTestId('hero-ctas');
      const fuds = page.getByTestId('hero-fuds');

      const ctasBox = await ctas.boundingBox();
      const fudsBox = await fuds.boundingBox();

      // FUDs should be below CTAs
      expect(fudsBox?.y).toBeGreaterThan((ctasBox?.y || 0) + (ctasBox?.height || 0) - 10);
    });

    test('FUDs have small text size', async ({ page }) => {
      const heroFuds = page.getByTestId('hero-fuds');
      const fuds = heroFuds.getByTestId('fuds-reduction');
      const fontSize = await fuds.evaluate((el) => {
        return parseFloat(getComputedStyle(el).fontSize);
      });
      // text-xs = 12px
      expect(fontSize).toBeLessThanOrEqual(14);
    });
  });

  test.describe('Visual Hierarchy', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('headline appears before subhead', async ({ page }) => {
      const valueProp = page.getByTestId('hero-value-prop');
      const subhead = page.getByTestId('hero-subhead');

      const valuePropBox = await valueProp.boundingBox();
      const subheadBox = await subhead.boundingBox();

      expect(valuePropBox?.y).toBeLessThan(subheadBox?.y || 0);
    });

    test('social proof appears before CTAs', async ({ page }) => {
      const socialProof = page.getByTestId('hero-social-proof');
      const ctas = page.getByTestId('hero-ctas');

      const socialProofBox = await socialProof.boundingBox();
      const ctasBox = await ctas.boundingBox();

      expect(socialProofBox?.y).toBeLessThan(ctasBox?.y || 0);
    });

    test('CTAs appear before FUDs', async ({ page }) => {
      const ctas = page.getByTestId('hero-ctas');
      const fuds = page.getByTestId('hero-fuds');

      const ctasBox = await ctas.boundingBox();
      const fudsBox = await fuds.boundingBox();

      expect(ctasBox?.y).toBeLessThan(fudsBox?.y || 0);
    });

    test('FUDs appear before trust signals', async ({ page }) => {
      const fuds = page.getByTestId('hero-fuds');
      const trustSignals = page.getByTestId('hero-trust-signals');

      const fudsBox = await fuds.boundingBox();
      const trustSignalsBox = await trustSignals.boundingBox();

      expect(fudsBox?.y).toBeLessThan(trustSignalsBox?.y || 0);
    });
  });

  test.describe('Above-the-Fold Visibility', () => {
    test('all key elements visible on desktop without scrolling', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      // All these should be visible without scrolling
      await expect(page.getByTestId('hero-headline')).toBeInViewport();
      await expect(page.getByTestId('hero-value-prop')).toBeInViewport();
      await expect(page.getByTestId('hero-subhead')).toBeInViewport();
      await expect(page.getByTestId('hero-ctas')).toBeInViewport();
    });

    test('headline and value prop visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      await expect(page.getByTestId('hero-headline')).toBeInViewport();
      await expect(page.getByTestId('hero-value-prop')).toBeInViewport();
    });

    test('CTA visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      // Primary CTA should be visible (may need slight scroll on very small screens)
      const primaryCta = page.getByTestId('hero-primary-cta');
      await expect(primaryCta).toBeVisible();
    });
  });

  test.describe('Responsive Social Proof', () => {
    test('trust signals show quotes on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const signals = page.getByTestId('logo-bar-signals');
      // Quotes should be visible on desktop (sm:inline)
      await expect(signals).toContainText('Deploy on your infrastructure');
    });

    test('review snippet visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const reviewSnippet = page.getByTestId('review-snippet');
      await expect(reviewSnippet).toBeVisible();
    });

    test('FUDs wrap properly on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const heroFuds = page.getByTestId('hero-fuds');
      const fuds = heroFuds.getByTestId('fuds-reduction');
      await expect(fuds).toBeVisible();

      // Check flex-wrap is applied
      const classList = await fuds.getAttribute('class');
      expect(classList).toContain('flex-wrap');
    });
  });

  test.describe('Accessibility', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('star rating has aria-label', async ({ page }) => {
      const stars = page.getByTestId('review-stars');
      const ariaLabel = await stars.getAttribute('aria-label');
      expect(ariaLabel).toContain('out of 5 stars');
    });

    test('FUD icons are hidden from screen readers', async ({ page }) => {
      const heroFuds = page.getByTestId('hero-fuds');
      const fudItem = heroFuds.getByTestId('fud-item-0');
      const icon = fudItem.locator('svg');
      const ariaHidden = await icon.getAttribute('aria-hidden');
      expect(ariaHidden).toBe('true');
    });

    test('trust signal icons are hidden from screen readers', async ({ page }) => {
      const heroSection = page.getByTestId('hero-trust-signals');
      const signal = heroSection.getByTestId('trust-signal-0');
      const icon = signal.locator('span[aria-hidden="true"]');
      await expect(icon).toBeVisible();
    });
  });
});
