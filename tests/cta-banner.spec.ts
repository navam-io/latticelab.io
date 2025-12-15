import { test, expect } from '@playwright/test';

test.describe('CTABanner Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/cta-banner');
    await page.waitForLoadState('domcontentloaded');
  });

  test.describe('Basic Structure', () => {
    test('page loads correctly', async ({ page }) => {
      const heading = page.locator('h1').first();
      await expect(heading).toContainText('CTABanner Component Test');
    });

    test('default banner is visible', async ({ page }) => {
      const banner = page.getByTestId('default-banner');
      await expect(banner).toBeVisible();
    });

    test('banner is a section element', async ({ page }) => {
      const banner = page.getByTestId('default-banner');
      const tagName = await banner.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('section');
    });

    test('gradient background exists', async ({ page }) => {
      const gradient = page.getByTestId('default-banner-gradient');
      await expect(gradient).toBeAttached();
    });

    test('content container exists', async ({ page }) => {
      const content = page.getByTestId('default-banner-content');
      await expect(content).toBeVisible();
    });
  });

  test.describe('Headline', () => {
    test('headline is visible', async ({ page }) => {
      const headline = page.getByTestId('default-banner-headline');
      await expect(headline).toBeVisible();
    });

    test('default headline text is correct', async ({ page }) => {
      const headline = page.getByTestId('default-banner-headline');
      await expect(headline).toContainText('Start Making Confident Decisions');
    });

    test('headline has correct styling', async ({ page }) => {
      const headline = page.getByTestId('default-banner-headline');
      const classes = await headline.getAttribute('class');
      expect(classes).toContain('font-bold');
      expect(classes).toContain('text-white');
    });

    test('headline is h2 element', async ({ page }) => {
      const headline = page.getByTestId('default-banner-headline');
      const tagName = await headline.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('h2');
    });

    test('custom headline displays correctly', async ({ page }) => {
      const headline = page.getByTestId('custom-headline-banner-headline');
      await expect(headline).toContainText('Ready to Transform Your AI Stack?');
    });
  });

  test.describe('Subheadline', () => {
    test('subheadline is visible by default', async ({ page }) => {
      const subheadline = page.getByTestId('default-banner-subheadline');
      await expect(subheadline).toBeVisible();
    });

    test('default subheadline text is correct', async ({ page }) => {
      const subheadline = page.getByTestId('default-banner-subheadline');
      await expect(subheadline).toContainText('Join engineers who trust Lattice');
    });

    test('subheadline has correct styling', async ({ page }) => {
      const subheadline = page.getByTestId('default-banner-subheadline');
      const classes = await subheadline.getAttribute('class');
      expect(classes).toContain('text-white/90');
    });

    test('custom subheadline displays correctly', async ({ page }) => {
      const subheadline = page.getByTestId('custom-headline-banner-subheadline');
      await expect(subheadline).toContainText('34 blueprints');
    });

    test('subheadline hidden when empty', async ({ page }) => {
      const subheadline = page.getByTestId('no-subheadline-banner-subheadline');
      await expect(subheadline).not.toBeAttached();
    });
  });

  test.describe('CTAs', () => {
    test('CTA container is visible', async ({ page }) => {
      const ctaContainer = page.getByTestId('default-banner-cta-container');
      await expect(ctaContainer).toBeVisible();
    });

    test('primary CTA is visible', async ({ page }) => {
      const primaryCTA = page.getByTestId('default-banner-primary-cta');
      await expect(primaryCTA).toBeVisible();
    });

    test('secondary CTA is visible', async ({ page }) => {
      const secondaryCTA = page.getByTestId('default-banner-secondary-cta');
      await expect(secondaryCTA).toBeVisible();
    });

    test('default primary CTA text is correct', async ({ page }) => {
      const primaryCTA = page.getByTestId('default-banner-primary-cta');
      await expect(primaryCTA).toContainText('Get Started');
    });

    test('default secondary CTA text is correct', async ({ page }) => {
      const secondaryCTA = page.getByTestId('default-banner-secondary-cta');
      await expect(secondaryCTA).toContainText('View Documentation');
    });

    test('primary CTA has correct href', async ({ page }) => {
      const primaryCTA = page.getByTestId('default-banner-primary-cta');
      await expect(primaryCTA).toHaveAttribute('href', '/#pricing');
    });

    test('secondary CTA has correct href', async ({ page }) => {
      const secondaryCTA = page.getByTestId('default-banner-secondary-cta');
      await expect(secondaryCTA).toHaveAttribute('href', '/docs');
    });

    test('custom CTA labels display correctly', async ({ page }) => {
      const primaryCTA = page.getByTestId('custom-cta-banner-primary-cta');
      const secondaryCTA = page.getByTestId('custom-cta-banner-secondary-cta');
      await expect(primaryCTA).toContainText('Buy Now');
      await expect(secondaryCTA).toContainText('Learn More');
    });

    test('custom CTA hrefs are correct', async ({ page }) => {
      const primaryCTA = page.getByTestId('custom-cta-banner-primary-cta');
      const secondaryCTA = page.getByTestId('custom-cta-banner-secondary-cta');
      await expect(primaryCTA).toHaveAttribute('href', '/checkout');
      await expect(secondaryCTA).toHaveAttribute('href', '/features');
    });
  });

  test.describe('Gradient Background', () => {
    test('gradient has correct classes', async ({ page }) => {
      const gradient = page.getByTestId('default-banner-gradient');
      const classes = await gradient.getAttribute('class');
      expect(classes).toContain('bg-gradient-to-r');
      expect(classes).toContain('from-violet-600');
      expect(classes).toContain('to-blue-600');
    });

    test('gradient covers full area', async ({ page }) => {
      const gradient = page.getByTestId('default-banner-gradient');
      const classes = await gradient.getAttribute('class');
      expect(classes).toContain('absolute');
      expect(classes).toContain('inset-0');
    });
  });

  test.describe('Pattern Overlay', () => {
    test('pattern not visible by default', async ({ page }) => {
      const pattern = page.getByTestId('default-banner-pattern');
      await expect(pattern).not.toBeAttached();
    });

    test('pattern visible when enabled', async ({ page }) => {
      const pattern = page.getByTestId('pattern-banner-pattern');
      await expect(pattern).toBeAttached();
    });

    test('pattern has opacity class', async ({ page }) => {
      const pattern = page.getByTestId('pattern-banner-pattern');
      const classes = await pattern.getAttribute('class');
      expect(classes).toContain('opacity-10');
    });
  });

  test.describe('Content Alignment', () => {
    test('default content is centered', async ({ page }) => {
      const content = page.getByTestId('default-banner-content');
      const classes = await content.getAttribute('class');
      expect(classes).toContain('text-center');
    });

    test('left aligned content has correct class', async ({ page }) => {
      const content = page.getByTestId('left-aligned-banner-content');
      const classes = await content.getAttribute('class');
      expect(classes).toContain('text-left');
    });
  });

  test.describe('CTA Arrows', () => {
    test('arrows visible by default', async ({ page }) => {
      const primaryCTA = page.getByTestId('default-banner-primary-cta');
      const svg = primaryCTA.locator('svg');
      await expect(svg).toBeVisible();
    });

    test('arrows hidden when disabled', async ({ page }) => {
      const primaryCTA = page.getByTestId('no-arrows-banner-primary-cta');
      const svg = primaryCTA.locator('svg');
      await expect(svg).not.toBeAttached();
    });
  });

  test.describe('Responsive Behavior', () => {
    test('banner visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const banner = page.getByTestId('default-banner');
      await expect(banner).toBeVisible();
    });

    test('banner visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      const banner = page.getByTestId('default-banner');
      await expect(banner).toBeVisible();
    });

    test('banner visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const banner = page.getByTestId('default-banner');
      await expect(banner).toBeVisible();
    });

    test('headline scales on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const headline = page.getByTestId('default-banner-headline');
      const classes = await headline.getAttribute('class');
      expect(classes).toContain('lg:text-5xl');
    });
  });

  test.describe('Accessibility', () => {
    test('banner has overflow hidden', async ({ page }) => {
      const banner = page.getByTestId('default-banner');
      const classes = await banner.getAttribute('class');
      expect(classes).toContain('overflow-hidden');
    });

    test('content has proper z-index', async ({ page }) => {
      const content = page.getByTestId('default-banner-content');
      const classes = await content.getAttribute('class');
      expect(classes).toContain('z-10');
    });

    test('CTA buttons are focusable', async ({ page }) => {
      const primaryCTA = page.getByTestId('default-banner-primary-cta');
      await primaryCTA.focus();
      await expect(primaryCTA).toBeFocused();
    });
  });
});
