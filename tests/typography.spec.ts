import { test, expect } from '@playwright/test';

test.describe('Typography Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/typography');
  });

  test.describe('Display Typography', () => {
    test('text-hero has correct font size (clamped)', async ({ page }) => {
      const element = page.getByTestId('text-hero');
      await expect(element).toBeVisible();

      const fontSize = await element.evaluate((el) =>
        parseFloat(window.getComputedStyle(el).fontSize)
      );
      // Font size should be between 72px (4.5rem) and 144px (9rem) depending on viewport
      expect(fontSize).toBeGreaterThanOrEqual(72);
    });

    test('text-hero has correct font weight', async ({ page }) => {
      const element = page.getByTestId('text-hero');
      const fontWeight = await element.evaluate((el) =>
        window.getComputedStyle(el).fontWeight
      );
      expect(fontWeight).toBe('700');
    });

    test('text-display-xl has correct styling', async ({ page }) => {
      const element = page.getByTestId('text-display-xl');
      await expect(element).toBeVisible();

      const styles = await element.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          fontWeight: computed.fontWeight,
          letterSpacing: computed.letterSpacing,
        };
      });
      expect(styles.fontWeight).toBe('700');
    });

    test('all display sizes are visible', async ({ page }) => {
      await expect(page.getByTestId('text-display-lg')).toBeVisible();
      await expect(page.getByTestId('text-display-md')).toBeVisible();
      await expect(page.getByTestId('text-display-sm')).toBeVisible();
    });
  });

  test.describe('Heading Typography', () => {
    test('heading-xl has correct font weight', async ({ page }) => {
      const element = page.getByTestId('heading-xl');
      const fontWeight = await element.evaluate((el) =>
        window.getComputedStyle(el).fontWeight
      );
      expect(fontWeight).toBe('700');
    });

    test('heading-md has semi-bold weight', async ({ page }) => {
      const element = page.getByTestId('heading-md');
      const fontWeight = await element.evaluate((el) =>
        window.getComputedStyle(el).fontWeight
      );
      expect(fontWeight).toBe('600');
    });

    test('all heading sizes are visible', async ({ page }) => {
      await expect(page.getByTestId('heading-xl')).toBeVisible();
      await expect(page.getByTestId('heading-lg')).toBeVisible();
      await expect(page.getByTestId('heading-md')).toBeVisible();
      await expect(page.getByTestId('heading-sm')).toBeVisible();
      await expect(page.getByTestId('heading-xs')).toBeVisible();
    });
  });

  test.describe('Body Typography', () => {
    test('body-lg has correct font size', async ({ page }) => {
      const element = page.getByTestId('body-lg');
      const fontSize = await element.evaluate((el) =>
        parseFloat(window.getComputedStyle(el).fontSize)
      );
      expect(fontSize).toBe(18); // 1.125rem = 18px
    });

    test('body-md has correct font size', async ({ page }) => {
      const element = page.getByTestId('body-md');
      const fontSize = await element.evaluate((el) =>
        parseFloat(window.getComputedStyle(el).fontSize)
      );
      expect(fontSize).toBe(16); // 1rem = 16px
    });

    test('body-sm has correct font size', async ({ page }) => {
      const element = page.getByTestId('body-sm');
      const fontSize = await element.evaluate((el) =>
        parseFloat(window.getComputedStyle(el).fontSize)
      );
      expect(fontSize).toBe(14); // 0.875rem = 14px
    });

    test('body-xs has correct font size', async ({ page }) => {
      const element = page.getByTestId('body-xs');
      const fontSize = await element.evaluate((el) =>
        parseFloat(window.getComputedStyle(el).fontSize)
      );
      expect(fontSize).toBe(12); // 0.75rem = 12px
    });
  });

  test.describe('Gradient Text', () => {
    test('gradient-text-primary has transparent text fill', async ({ page }) => {
      const element = page.getByTestId('gradient-text-primary');
      await expect(element).toBeVisible();

      const webkitTextFillColor = await element.evaluate((el) =>
        window.getComputedStyle(el).webkitTextFillColor
      );
      // Browser may report 'transparent' or 'rgba(0, 0, 0, 0)'
      expect(['transparent', 'rgba(0, 0, 0, 0)']).toContain(webkitTextFillColor);
    });

    test('gradient-text-primary has background-clip text', async ({ page }) => {
      const element = page.getByTestId('gradient-text-primary');

      const backgroundClip = await element.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return computed.backgroundClip || computed.webkitBackgroundClip;
      });
      expect(backgroundClip).toBe('text');
    });

    test('gradient-text-secondary is visible', async ({ page }) => {
      await expect(page.getByTestId('gradient-text-secondary')).toBeVisible();
    });

    test('gradient-text-accent is visible', async ({ page }) => {
      await expect(page.getByTestId('gradient-text-accent')).toBeVisible();
    });

    test('gradient-text-hero works on dark background', async ({ page }) => {
      const element = page.getByTestId('gradient-text-hero');
      await expect(element).toBeVisible();
    });

    test('gradient-text-animated has animation', async ({ page }) => {
      const element = page.getByTestId('gradient-text-animated');

      const animation = await element.evaluate((el) =>
        window.getComputedStyle(el).animation
      );
      expect(animation).toContain('gradient-shift');
    });
  });

  test.describe('Special Styles', () => {
    test('tagline has uppercase text transform', async ({ page }) => {
      const element = page.getByTestId('tagline');
      const textTransform = await element.evaluate((el) =>
        window.getComputedStyle(el).textTransform
      );
      expect(textTransform).toBe('uppercase');
    });

    test('label has uppercase text transform', async ({ page }) => {
      const element = page.getByTestId('label');
      const textTransform = await element.evaluate((el) =>
        window.getComputedStyle(el).textTransform
      );
      expect(textTransform).toBe('uppercase');
    });

    test('price-display has bold font weight', async ({ page }) => {
      const element = page.getByTestId('price-display');
      const fontWeight = await element.evaluate((el) =>
        window.getComputedStyle(el).fontWeight
      );
      expect(fontWeight).toBe('700');
    });

    test('section-heading has correct font weight', async ({ page }) => {
      const element = page.getByTestId('section-heading');
      const fontWeight = await element.evaluate((el) =>
        window.getComputedStyle(el).fontWeight
      );
      expect(fontWeight).toBe('700');
    });
  });

  test.describe('Text Utilities', () => {
    test('truncate-lines-2 limits visible lines', async ({ page }) => {
      const element = page.getByTestId('truncate-lines-2');

      const webkitLineClamp = await element.evaluate((el) =>
        window.getComputedStyle(el).webkitLineClamp
      );
      expect(webkitLineClamp).toBe('2');
    });

    test('truncate-lines-2 has overflow hidden', async ({ page }) => {
      const element = page.getByTestId('truncate-lines-2');

      const overflow = await element.evaluate((el) =>
        window.getComputedStyle(el).overflow
      );
      expect(overflow).toBe('hidden');
    });
  });

  test.describe('Responsive Typography', () => {
    test('text-hero scales on mobile viewport', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/test-utils/typography');

      const element = page.getByTestId('text-hero');
      const mobileFontSize = await element.evaluate((el) =>
        parseFloat(window.getComputedStyle(el).fontSize)
      );

      // Set desktop viewport
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/test-utils/typography');

      const desktopFontSize = await element.evaluate((el) =>
        parseFloat(window.getComputedStyle(el).fontSize)
      );

      // Desktop should be larger than mobile due to clamp()
      expect(desktopFontSize).toBeGreaterThan(mobileFontSize);
    });
  });
});
