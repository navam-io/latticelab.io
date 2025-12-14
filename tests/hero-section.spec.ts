import { test, expect } from '@playwright/test';

test.describe('HeroSection Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/hero-section');
    await page.waitForLoadState('networkidle');
  });

  test.describe('Basic Structure', () => {
    test('page loads correctly', async ({ page }) => {
      const heading = page.locator('h1').first();
      await expect(heading).toContainText('HeroSection Component Test');
    });

    test('default hero section is visible', async ({ page }) => {
      const hero = page.getByTestId('default-hero');
      await expect(hero).toBeVisible();
    });

    test('hero has dark gradient background', async ({ page }) => {
      const hero = page.getByTestId('default-hero');
      const classes = await hero.getAttribute('class');

      expect(classes).toContain('bg-gradient-to-br');
      expect(classes).toContain('from-gray-900');
    });

    test('hero takes minimum full screen height', async ({ page }) => {
      const hero = page.getByTestId('default-hero');
      const classes = await hero.getAttribute('class');

      expect(classes).toContain('min-h-screen');
    });
  });

  test.describe('Headline', () => {
    test('headline is visible', async ({ page }) => {
      const headline = page.getByTestId('default-hero-headline');
      await expect(headline).toBeVisible();
    });

    test('default headline shows "Lattice"', async ({ page }) => {
      const headline = page.getByTestId('default-hero-headline');
      await expect(headline).toContainText('Lattice');
    });

    test('custom headline shows custom text', async ({ page }) => {
      const headline = page.getByTestId('custom-hero-headline');
      await expect(headline).toContainText('Custom');
    });

    test('headline has large font size (120px+)', async ({ page }) => {
      const headline = page.getByTestId('default-hero-headline');
      const fontSize = await headline.evaluate((el) => {
        return window.getComputedStyle(el).fontSize;
      });

      // Font size should be at least 64px (4rem) at minimum viewport
      const fontSizeValue = parseFloat(fontSize);
      expect(fontSizeValue).toBeGreaterThanOrEqual(64);
    });

    test('headline has gradient text styling', async ({ page }) => {
      const gradientSpan = page.getByTestId('default-hero-headline').locator('span');
      const classes = await gradientSpan.getAttribute('class');

      expect(classes).toContain('gradient-text-hero');
    });
  });

  test.describe('Tagline', () => {
    test('tagline is visible', async ({ page }) => {
      const tagline = page.getByTestId('default-hero-tagline');
      await expect(tagline).toBeVisible();
    });

    test('default tagline contains expected text', async ({ page }) => {
      const tagline = page.getByTestId('default-hero-tagline');
      await expect(tagline).toContainText('AI Infrastructure Decisions');
      await expect(tagline).toContainText('Grounded in Evidence');
    });

    test('custom tagline shows custom text', async ({ page }) => {
      const tagline = page.getByTestId('custom-hero-tagline');
      await expect(tagline).toContainText('custom tagline for testing');
    });

    test('tagline has light text color for dark background', async ({ page }) => {
      const tagline = page.getByTestId('default-hero-tagline');
      const classes = await tagline.getAttribute('class');

      expect(classes).toContain('text-white/90');
    });
  });

  test.describe('Dual CTAs', () => {
    test('CTAs container is visible', async ({ page }) => {
      const ctas = page.getByTestId('default-hero-ctas');
      await expect(ctas).toBeVisible();
    });

    test('buy button is visible with default label', async ({ page }) => {
      const buyButton = page.getByTestId('default-hero-buy-button');
      await expect(buyButton).toBeVisible();
      await expect(buyButton).toContainText('Buy $99');
    });

    test('learn more button is visible with default label', async ({ page }) => {
      const learnMore = page.getByTestId('default-hero-learn-more');
      await expect(learnMore).toBeVisible();
      await expect(learnMore).toContainText('Learn more');
    });

    test('custom CTA labels are displayed', async ({ page }) => {
      const buyButton = page.getByTestId('custom-cta-hero-buy-button');
      const learnMore = page.getByTestId('custom-cta-hero-learn-more');

      await expect(buyButton).toContainText('Get Started');
      await expect(learnMore).toContainText('Watch Demo');
    });

    test('buy button has correct href', async ({ page }) => {
      const buyButton = page.getByTestId('default-hero-buy-button');
      await expect(buyButton).toHaveAttribute('href', '/#pricing');
    });

    test('learn more button has correct href', async ({ page }) => {
      const learnMore = page.getByTestId('default-hero-learn-more');
      await expect(learnMore).toHaveAttribute('href', '#features');
    });
  });

  test.describe('Product Image', () => {
    test('product image container is visible', async ({ page }) => {
      const imageContainer = page.getByTestId('default-hero-product-image');
      await expect(imageContainer).toBeVisible();
    });

    test('screenshot is visible when image provided', async ({ page }) => {
      const screenshot = page.getByTestId('default-hero-screenshot');
      await expect(screenshot).toBeVisible();
    });

    test('placeholder is shown when no image', async ({ page }) => {
      const placeholder = page.getByTestId('placeholder-hero-placeholder');
      await expect(placeholder).toBeVisible();
    });

    test('glow effect is present', async ({ page }) => {
      const glow = page.getByTestId('default-hero-glow');
      await expect(glow).toBeAttached();
    });

    test('image has alt text', async ({ page }) => {
      const screenshot = page.getByTestId('default-hero-screenshot');
      await expect(screenshot).toHaveAttribute('alt', 'Lattice AI Infrastructure Platform');
    });

    test('custom image and alt text', async ({ page }) => {
      const screenshot = page.getByTestId('full-custom-hero-screenshot');
      await expect(screenshot).toHaveAttribute('alt', 'Lattice Studio - Artifact Export');
    });
  });

  test.describe('Background Elements', () => {
    test('pattern background is present', async ({ page }) => {
      const pattern = page.getByTestId('default-hero-pattern');
      await expect(pattern).toBeAttached();
    });

    test('bottom glow is present', async ({ page }) => {
      const bottomGlow = page.getByTestId('default-hero-bottom-glow');
      await expect(bottomGlow).toBeAttached();
    });
  });

  test.describe('Responsive Behavior', () => {
    test('hero section is visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const hero = page.getByTestId('default-hero');
      await expect(hero).toBeVisible();
    });

    test('headline is visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const headline = page.getByTestId('default-hero-headline');
      await expect(headline).toBeVisible();
    });

    test('CTAs are visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const buyButton = page.getByTestId('default-hero-buy-button');
      const learnMore = page.getByTestId('default-hero-learn-more');

      await expect(buyButton).toBeVisible();
      await expect(learnMore).toBeVisible();
    });

    test('hero section is visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      const hero = page.getByTestId('default-hero');
      await expect(hero).toBeVisible();
    });

    test('hero section is visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const hero = page.getByTestId('default-hero');
      await expect(hero).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('headline is h1 element', async ({ page }) => {
      const headline = page.getByTestId('default-hero-headline');
      const tagName = await headline.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('h1');
    });

    test('image has alt text for accessibility', async ({ page }) => {
      const screenshot = page.getByTestId('default-hero-screenshot');
      const alt = await screenshot.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt!.length).toBeGreaterThan(0);
    });

    test('CTA buttons are keyboard focusable', async ({ page }) => {
      const buyButton = page.getByTestId('default-hero-buy-button');
      await buyButton.focus();
      await expect(buyButton).toBeFocused();
    });
  });

  test.describe('Custom Props', () => {
    test('fully customized hero shows all custom values', async ({ page }) => {
      const headline = page.getByTestId('full-custom-hero-headline');
      const tagline = page.getByTestId('full-custom-hero-tagline');
      const buyButton = page.getByTestId('full-custom-hero-buy-button');
      const learnMore = page.getByTestId('full-custom-hero-learn-more');

      await expect(headline).toContainText('Studio');
      await expect(tagline).toContainText('Turn AI responses into reusable artifacts');
      await expect(buyButton).toContainText('Try Studio');
      await expect(learnMore).toContainText('View Docs');
    });
  });
});
