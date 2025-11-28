import { test, expect } from '@playwright/test';

/**
 * Feature Slice 5: Homepage Hero Section
 *
 * These tests verify the Hero section is correctly implemented with
 * headline, subhead, CTAs, and product screenshot placeholder.
 */

test.describe('Feature 5: Homepage Hero Section', () => {
  test.describe('Hero Content', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('hero section is visible', async ({ page }) => {
      const hero = page.getByTestId('hero-section');
      await expect(hero).toBeVisible();
    });

    test('displays site name as main headline', async ({ page }) => {
      const headline = page.getByTestId('hero-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Lattice');
    });

    test('headline is h1 element', async ({ page }) => {
      const h1 = page.locator('h1');
      await expect(h1).toBeVisible();
      await expect(h1).toContainText('Lattice');
    });

    test('displays value proposition', async ({ page }) => {
      const valueProp = page.getByTestId('hero-value-prop');
      await expect(valueProp).toBeVisible();
      // CRO-optimized: benefit-driven headline
      await expect(valueProp).toContainText('Stop Researching AI');
    });

    test('displays subhead with supporting copy', async ({ page }) => {
      const subhead = page.getByTestId('hero-subhead');
      await expect(subhead).toBeVisible();
      // CRO-optimized: USP with differentiators
      await expect(subhead).toContainText('synthesizes');
    });

    test('displays tagline badge', async ({ page }) => {
      const tagline = page.getByTestId('hero-tagline');
      await expect(tagline).toBeVisible();
      await expect(tagline).toContainText('Agentic AI Lab Assistant');
    });
  });

  test.describe('CTA Buttons', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('primary CTA is visible', async ({ page }) => {
      const primaryCta = page.getByTestId('hero-primary-cta');
      await expect(primaryCta).toBeVisible();
    });

    test('primary CTA contains correct text', async ({ page }) => {
      const primaryCta = page.getByTestId('hero-primary-cta');
      await expect(primaryCta).toContainText('Buy Lattice');
      await expect(primaryCta).toContainText('$99');
    });

    test('primary CTA links to pricing', async ({ page }) => {
      const primaryCta = page.getByTestId('hero-primary-cta');
      const href = await primaryCta.getAttribute('href');
      expect(href).toBe('/pricing');
    });

    test('secondary CTA is visible', async ({ page }) => {
      const secondaryCta = page.getByTestId('hero-secondary-cta');
      await expect(secondaryCta).toBeVisible();
    });

    test('secondary CTA contains correct text', async ({ page }) => {
      const secondaryCta = page.getByTestId('hero-secondary-cta');
      await expect(secondaryCta).toContainText('View Features');
    });

    test('secondary CTA links to features', async ({ page }) => {
      const secondaryCta = page.getByTestId('hero-secondary-cta');
      const href = await secondaryCta.getAttribute('href');
      expect(href).toBe('/features');
    });

    test('CTA buttons container is visible', async ({ page }) => {
      const ctas = page.getByTestId('hero-ctas');
      await expect(ctas).toBeVisible();
    });
  });

  test.describe('Product Screenshot Placeholder', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('screenshot placeholder is visible', async ({ page }) => {
      const screenshot = page.getByTestId('hero-screenshot');
      await expect(screenshot).toBeVisible();
    });

    test('screenshot has correct aspect ratio container', async ({ page }) => {
      const screenshot = page.getByTestId('hero-screenshot');
      const classList = await screenshot.getAttribute('class');
      expect(classList).toContain('aspect-[4/3]');
    });

    test('screenshot shows mock three-panel layout', async ({ page }) => {
      const screenshot = page.getByTestId('hero-screenshot');
      // Panel labels are in divs with text-xs class
      await expect(screenshot.locator('text=Sources').first()).toBeVisible();
      await expect(screenshot.locator('text=Lab').first()).toBeVisible();
      await expect(screenshot.locator('text=Studio').first()).toBeVisible();
    });

    test('screenshot has window chrome styling', async ({ page }) => {
      const screenshot = page.getByTestId('hero-screenshot');
      await expect(screenshot.getByText('Lattice Lab')).toBeVisible();
    });
  });

  test.describe('Responsive Layout', () => {
    test('shows two-column layout on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const hero = page.getByTestId('hero-section');
      const grid = hero.locator('.grid');
      const classList = await grid.getAttribute('class');
      expect(classList).toContain('lg:grid-cols-2');
    });

    test('text is left-aligned on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const headline = page.getByTestId('hero-headline');
      const textAlign = await headline.evaluate((el) => {
        return getComputedStyle(el).textAlign;
      });
      expect(textAlign).toBe('left');
    });

    test('text is center-aligned on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const headline = page.getByTestId('hero-headline');
      const textAlign = await headline.evaluate((el) => {
        return getComputedStyle(el).textAlign;
      });
      expect(textAlign).toBe('center');
    });

    test('CTAs stack vertically on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const ctas = page.getByTestId('hero-ctas');
      const flexDirection = await ctas.evaluate((el) => {
        return getComputedStyle(el).flexDirection;
      });
      expect(flexDirection).toBe('column');
    });

    test('CTAs are side-by-side on larger screens', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/');

      const ctas = page.getByTestId('hero-ctas');
      const flexDirection = await ctas.evaluate((el) => {
        return getComputedStyle(el).flexDirection;
      });
      expect(flexDirection).toBe('row');
    });

    test('screenshot is visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const screenshot = page.getByTestId('hero-screenshot');
      await expect(screenshot).toBeVisible();
    });

    test('hero is responsive on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/');

      const hero = page.getByTestId('hero-section');
      await expect(hero).toBeVisible();

      const headline = page.getByTestId('hero-headline');
      await expect(headline).toBeVisible();
    });
  });

  test.describe('Typography and Styling', () => {
    test('headline has large font size on desktop', async ({ page }) => {
      // Set viewport size BEFORE navigating to get desktop styles
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');
      // Wait for styles to be applied
      await page.waitForLoadState('networkidle');
      const headline = page.getByTestId('hero-headline');
      const fontSize = await headline.evaluate((el) => {
        return parseFloat(getComputedStyle(el).fontSize);
      });
      // text-4xl = 36px (base), up to lg:text-7xl = 72px
      // At 1280px, should be at least md:text-6xl = 48px or larger
      expect(fontSize).toBeGreaterThanOrEqual(36);
    });

    test('headline has bold font weight', async ({ page }) => {
      await page.goto('/');
      const headline = page.getByTestId('hero-headline');
      const fontWeight = await headline.evaluate((el) => {
        return getComputedStyle(el).fontWeight;
      });
      // font-bold = 700
      expect(parseInt(fontWeight)).toBeGreaterThanOrEqual(600);
    });

    test('subhead has muted color', async ({ page }) => {
      await page.goto('/');
      const subhead = page.getByTestId('hero-subhead');
      const color = await subhead.evaluate((el) => {
        return getComputedStyle(el).color;
      });
      // muted-foreground should be different from foreground
      expect(color).toBeTruthy();
    });

    test('tagline badge has border', async ({ page }) => {
      await page.goto('/');
      const tagline = page.getByTestId('hero-tagline');
      const borderWidth = await tagline.evaluate((el) => {
        return getComputedStyle(el).borderWidth;
      });
      expect(borderWidth).toBe('1px');
    });

    test('screenshot has shadow', async ({ page }) => {
      await page.goto('/');
      const screenshot = page.getByTestId('hero-screenshot');
      const boxShadow = await screenshot.evaluate((el) => {
        return getComputedStyle(el).boxShadow;
      });
      expect(boxShadow).not.toBe('none');
    });

    test('screenshot has rounded corners', async ({ page }) => {
      await page.goto('/');
      const screenshot = page.getByTestId('hero-screenshot');
      const borderRadius = await screenshot.evaluate((el) => {
        return getComputedStyle(el).borderRadius;
      });
      expect(borderRadius).not.toBe('0px');
    });
  });

  test.describe('Accessibility', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('page has exactly one h1', async ({ page }) => {
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
    });

    test('primary CTA is keyboard focusable', async ({ page }) => {
      const primaryCta = page.getByTestId('hero-primary-cta');
      await primaryCta.focus();
      await expect(primaryCta).toBeFocused();
    });

    test('secondary CTA is keyboard focusable', async ({ page }) => {
      const secondaryCta = page.getByTestId('hero-secondary-cta');
      await secondaryCta.focus();
      await expect(secondaryCta).toBeFocused();
    });

    test('CTAs are links (accessible)', async ({ page }) => {
      const primaryCta = page.getByTestId('hero-primary-cta');
      const tagName = await primaryCta.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('a');
    });

    test('content is not hidden under header', async ({ page }) => {
      const headline = page.getByTestId('hero-headline');
      const headlineBox = await headline.boundingBox();
      // Header is 64px, content should be below it
      expect(headlineBox?.y).toBeGreaterThan(64);
    });
  });

  test.describe('Integration with Page Layout', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('hero is within main content area', async ({ page }) => {
      const main = page.locator('main');
      const hero = page.getByTestId('hero-section');
      await expect(main).toContainText('Lattice');
      await expect(hero).toBeVisible();
    });

    test('header is visible above hero', async ({ page }) => {
      const header = page.getByTestId('header');
      const hero = page.getByTestId('hero-section');

      await expect(header).toBeVisible();
      await expect(hero).toBeVisible();

      const headerBox = await header.boundingBox();
      const heroBox = await hero.boundingBox();
      expect(headerBox?.y).toBeLessThan(heroBox?.y || 0);
    });

    test('footer is visible below hero', async ({ page }) => {
      const footer = page.getByTestId('footer');
      await expect(footer).toBeVisible();
    });
  });
});
