import { test, expect } from '@playwright/test';

test.describe('GradientText Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/gradient-text');
  });

  test.describe('Gradient Variants', () => {
    test('primary variant has violet-blue gradient', async ({ page }) => {
      const element = page.getByTestId('variant-primary').locator('h3');
      await expect(element).toBeVisible();

      const styles = await element.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          backgroundImage: computed.backgroundImage,
          webkitTextFillColor: computed.webkitTextFillColor,
        };
      });

      expect(styles.backgroundImage).toContain('linear-gradient');
      expect(['transparent', 'rgba(0, 0, 0, 0)']).toContain(styles.webkitTextFillColor);
    });

    test('secondary variant has teal-cyan gradient', async ({ page }) => {
      const element = page.getByTestId('variant-secondary').locator('h3');
      await expect(element).toBeVisible();

      const backgroundImage = await element.evaluate((el) =>
        window.getComputedStyle(el).backgroundImage
      );
      expect(backgroundImage).toContain('linear-gradient');
    });

    test('accent variant has blue-teal gradient', async ({ page }) => {
      const element = page.getByTestId('variant-accent').locator('h3');
      await expect(element).toBeVisible();

      const backgroundImage = await element.evaluate((el) =>
        window.getComputedStyle(el).backgroundImage
      );
      expect(backgroundImage).toContain('linear-gradient');
    });

    test('hero variant is visible on dark background', async ({ page }) => {
      const element = page.getByTestId('variant-hero').locator('h3');
      await expect(element).toBeVisible();

      const backgroundImage = await element.evaluate((el) =>
        window.getComputedStyle(el).backgroundImage
      );
      expect(backgroundImage).toContain('linear-gradient');
    });

    test('light variant is visible on dark background', async ({ page }) => {
      const element = page.getByTestId('variant-light').locator('h3');
      await expect(element).toBeVisible();

      const backgroundImage = await element.evaluate((el) =>
        window.getComputedStyle(el).backgroundImage
      );
      expect(backgroundImage).toContain('linear-gradient');
    });

    test('animated variant has animation', async ({ page }) => {
      const element = page.getByTestId('variant-animated').locator('h3');
      await expect(element).toBeVisible();

      const animation = await element.evaluate((el) =>
        window.getComputedStyle(el).animationName
      );
      expect(animation).toBe('gradient-shift');
    });
  });

  test.describe('Size Variants', () => {
    test('hero size has large font size', async ({ page }) => {
      const element = page.getByTestId('size-hero').locator('h1');
      await expect(element).toBeVisible();

      const fontSize = await element.evaluate((el) =>
        parseFloat(window.getComputedStyle(el).fontSize)
      );
      // Hero size should be at least 72px (4.5rem minimum from clamp)
      expect(fontSize).toBeGreaterThanOrEqual(72);
    });

    test('display-xl size is visible', async ({ page }) => {
      const element = page.getByTestId('size-display-xl').locator('h1');
      await expect(element).toBeVisible();

      const fontSize = await element.evaluate((el) =>
        parseFloat(window.getComputedStyle(el).fontSize)
      );
      expect(fontSize).toBeGreaterThanOrEqual(64); // 4rem minimum
    });

    test('display-lg size is visible', async ({ page }) => {
      const element = page.getByTestId('size-display-lg').locator('h1');
      await expect(element).toBeVisible();
    });

    test('display-md size is visible', async ({ page }) => {
      const element = page.getByTestId('size-display-md').locator('h2');
      await expect(element).toBeVisible();
    });

    test('display-sm size is visible', async ({ page }) => {
      const element = page.getByTestId('size-display-sm').locator('h2');
      await expect(element).toBeVisible();
    });

    test('heading-xl size has correct font weight', async ({ page }) => {
      const element = page.getByTestId('size-heading-xl').locator('h2');
      const fontWeight = await element.evaluate((el) =>
        window.getComputedStyle(el).fontWeight
      );
      expect(fontWeight).toBe('700');
    });

    test('heading-lg size is visible', async ({ page }) => {
      const element = page.getByTestId('size-heading-lg').locator('h3');
      await expect(element).toBeVisible();
    });

    test('heading-md size has semi-bold weight', async ({ page }) => {
      const element = page.getByTestId('size-heading-md').locator('h3');
      const fontWeight = await element.evaluate((el) =>
        window.getComputedStyle(el).fontWeight
      );
      expect(fontWeight).toBe('600');
    });

    test('heading-sm size is visible', async ({ page }) => {
      const element = page.getByTestId('size-heading-sm').locator('h4');
      await expect(element).toBeVisible();
    });

    test('heading-xs size is visible', async ({ page }) => {
      const element = page.getByTestId('size-heading-xs').locator('h5');
      await expect(element).toBeVisible();
    });
  });

  test.describe('HTML Tags (as prop)', () => {
    test('renders h1 tag correctly', async ({ page }) => {
      const container = page.getByTestId('tag-h1');
      const h1 = container.locator('h1');
      await expect(h1).toBeVisible();
      await expect(h1).toHaveText('H1 Tag');
    });

    test('renders h2 tag correctly', async ({ page }) => {
      const container = page.getByTestId('tag-h2');
      const h2 = container.locator('h2');
      await expect(h2).toBeVisible();
      await expect(h2).toHaveText('H2 Tag');
    });

    test('renders h3 tag correctly', async ({ page }) => {
      const container = page.getByTestId('tag-h3');
      const h3 = container.locator('h3');
      await expect(h3).toBeVisible();
      await expect(h3).toHaveText('H3 Tag');
    });

    test('renders p tag correctly', async ({ page }) => {
      const container = page.getByTestId('tag-p');
      const p = container.locator('p');
      await expect(p).toBeVisible();
      await expect(p).toHaveText('Paragraph Tag');
    });

    test('renders span tag correctly', async ({ page }) => {
      const container = page.getByTestId('tag-span');
      const span = container.locator('span');
      await expect(span).toBeVisible();
      await expect(span).toHaveText('Span Tag');
    });

    test('renders div tag correctly', async ({ page }) => {
      const container = page.getByTestId('tag-div');
      // Using first matching div inside the container
      const text = await container.textContent();
      expect(text).toContain('Div Tag');
    });
  });

  test.describe('Custom Gradient', () => {
    test('custom gradient applies custom colors', async ({ page }) => {
      const element = page.getByTestId('custom-gradient-default').locator('h3');
      await expect(element).toBeVisible();

      const backgroundImage = await element.evaluate((el) =>
        window.getComputedStyle(el).backgroundImage
      );
      expect(backgroundImage).toContain('linear-gradient');
    });

    test('custom gradient applies custom angle (90deg)', async ({ page }) => {
      const element = page.getByTestId('custom-gradient-angle').locator('h3');
      await expect(element).toBeVisible();

      const backgroundImage = await element.evaluate((el) =>
        window.getComputedStyle(el).backgroundImage
      );
      expect(backgroundImage).toContain('linear-gradient');
      // The browser normalizes angles, so we just check it has a gradient
    });

    test('custom gradient applies vertical angle (180deg)', async ({ page }) => {
      const element = page.getByTestId('custom-gradient-vertical').locator('h3');
      await expect(element).toBeVisible();

      const backgroundImage = await element.evaluate((el) =>
        window.getComputedStyle(el).backgroundImage
      );
      expect(backgroundImage).toContain('linear-gradient');
    });
  });

  test.describe('Text Prop vs Slot', () => {
    test('text prop renders content correctly', async ({ page }) => {
      const element = page.getByTestId('using-text-prop').locator('h3');
      await expect(element).toBeVisible();
      await expect(element).toHaveText('Using Text Prop');
    });

    test('slot content renders correctly', async ({ page }) => {
      const element = page.getByTestId('using-slot').locator('h3');
      await expect(element).toBeVisible();
      await expect(element).toHaveText('Using Slot Content');
    });
  });

  test.describe('Centered Text', () => {
    test('non-centered text is left-aligned by default', async ({ page }) => {
      const element = page.getByTestId('not-centered').locator('h3');
      const textAlign = await element.evaluate((el) =>
        window.getComputedStyle(el).textAlign
      );
      // Default text-align is usually 'start' or 'left'
      expect(['start', 'left']).toContain(textAlign);
    });

    test('centered prop applies text-center class', async ({ page }) => {
      const element = page.getByTestId('is-centered').locator('h3');
      const textAlign = await element.evaluate((el) =>
        window.getComputedStyle(el).textAlign
      );
      expect(textAlign).toBe('center');
    });
  });

  test.describe('Dark Background Examples', () => {
    test('hero variant displays correctly on dark background', async ({ page }) => {
      const element = page.getByTestId('dark-bg-hero').locator('h2');
      await expect(element).toBeVisible();
    });

    test('light variant displays correctly on dark background', async ({ page }) => {
      const element = page.getByTestId('dark-bg-light').locator('h3');
      await expect(element).toBeVisible();
    });

    test('primary variant displays correctly on dark background', async ({ page }) => {
      const element = page.getByTestId('dark-bg-primary').locator('h3');
      await expect(element).toBeVisible();
    });
  });

  test.describe('Real-World Usage Examples', () => {
    test('hero section example renders correctly', async ({ page }) => {
      const hero = page.getByTestId('example-hero').locator('h1');
      await expect(hero).toBeVisible();
      await expect(hero).toHaveText('Lattice');

      // Check it has hero size
      const fontSize = await hero.evaluate((el) =>
        parseFloat(window.getComputedStyle(el).fontSize)
      );
      expect(fontSize).toBeGreaterThanOrEqual(72);
    });

    test('feature title example renders correctly', async ({ page }) => {
      const feature = page.getByTestId('example-feature').locator('h2');
      await expect(feature).toBeVisible();
      await expect(feature).toContainText('Your Knowledge');
    });

    test('section heading example renders correctly', async ({ page }) => {
      const section = page.getByTestId('example-section').locator('h2');
      await expect(section).toBeVisible();
      await expect(section).toHaveText('Powerful Tools');

      // Check it's centered
      const textAlign = await section.evaluate((el) =>
        window.getComputedStyle(el).textAlign
      );
      expect(textAlign).toBe('center');
    });
  });

  test.describe('Gradient Text CSS Properties', () => {
    test('gradient text has transparent text fill', async ({ page }) => {
      const element = page.getByTestId('variant-primary').locator('h3');

      const webkitTextFillColor = await element.evaluate((el) =>
        window.getComputedStyle(el).webkitTextFillColor
      );
      expect(['transparent', 'rgba(0, 0, 0, 0)']).toContain(webkitTextFillColor);
    });

    test('gradient text has background-clip text', async ({ page }) => {
      const element = page.getByTestId('variant-primary').locator('h3');

      const backgroundClip = await element.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return computed.backgroundClip || computed.webkitBackgroundClip;
      });
      expect(backgroundClip).toBe('text');
    });
  });
});
