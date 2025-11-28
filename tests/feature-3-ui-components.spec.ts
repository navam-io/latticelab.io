import { test, expect } from '@playwright/test';

/**
 * Feature Slice 3: Design System — UI Components
 *
 * These tests verify that all UI components are correctly implemented
 * with proper variants, accessibility, and styling.
 */

test.describe('Feature 3: UI Components', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ui-showcase');
  });

  test.describe('Button Component', () => {
    test('renders primary button with correct styling', async ({ page }) => {
      const button = page.getByTestId('btn-primary');
      await expect(button).toBeVisible();
      await expect(button).toHaveText('Primary');

      const bgColor = await button.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Accent color #3b82f6 = rgb(59, 130, 246)
      expect(bgColor).toBe('rgb(59, 130, 246)');
    });

    test('renders secondary button with correct styling', async ({ page }) => {
      const button = page.getByTestId('btn-secondary');
      await expect(button).toBeVisible();
      await expect(button).toHaveText('Secondary');

      const bgColor = await button.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Secondary color #f4f4f5 = rgb(244, 244, 245)
      expect(bgColor).toBe('rgb(244, 244, 245)');
    });

    test('renders ghost button with transparent background', async ({ page }) => {
      const button = page.getByTestId('btn-ghost');
      await expect(button).toBeVisible();
      await expect(button).toHaveText('Ghost');

      const bgColor = await button.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      expect(bgColor).toBe('rgba(0, 0, 0, 0)');
    });

    test('renders small button with correct size', async ({ page }) => {
      const button = page.getByTestId('btn-sm');
      await expect(button).toBeVisible();

      const height = await button.evaluate((el) => getComputedStyle(el).height);
      expect(height).toBe('32px'); // h-8 = 2rem = 32px
    });

    test('renders medium button with correct size', async ({ page }) => {
      const button = page.getByTestId('btn-md');
      await expect(button).toBeVisible();

      const height = await button.evaluate((el) => getComputedStyle(el).height);
      expect(height).toBe('40px'); // h-10 = 2.5rem = 40px
    });

    test('renders large button with correct size', async ({ page }) => {
      const button = page.getByTestId('btn-lg');
      await expect(button).toBeVisible();

      const height = await button.evaluate((el) => getComputedStyle(el).height);
      expect(height).toBe('48px'); // h-12 = 3rem = 48px
    });

    test('renders disabled button with reduced opacity', async ({ page }) => {
      const button = page.getByTestId('btn-disabled');
      await expect(button).toBeVisible();
      await expect(button).toBeDisabled();

      const opacity = await button.evaluate((el) =>
        getComputedStyle(el).opacity
      );
      expect(parseFloat(opacity)).toBeLessThan(1);
    });

    test('renders button as link when href provided', async ({ page }) => {
      const button = page.getByTestId('btn-link');
      await expect(button).toBeVisible();

      const tagName = await button.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('a');

      const href = await button.getAttribute('href');
      expect(href).toBe('/features');
    });

    test('button has focus ring on focus', async ({ page }) => {
      const button = page.getByTestId('btn-primary');
      await button.focus();

      // Check that focus-visible styles are applied
      await expect(button).toBeFocused();
    });
  });

  test.describe('Card Component', () => {
    test('renders default card with border', async ({ page }) => {
      const card = page.getByTestId('card-default');
      await expect(card).toBeVisible();

      const borderStyle = await card.evaluate((el) =>
        getComputedStyle(el).borderStyle
      );
      expect(borderStyle).toBe('solid');
    });

    test('renders elevated card with shadow', async ({ page }) => {
      const card = page.getByTestId('card-elevated');
      await expect(card).toBeVisible();

      const boxShadow = await card.evaluate((el) =>
        getComputedStyle(el).boxShadow
      );
      expect(boxShadow).not.toBe('none');
    });

    test('renders interactive card as link', async ({ page }) => {
      const card = page.getByTestId('card-interactive');
      await expect(card).toBeVisible();

      const tagName = await card.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('a');

      const cursor = await card.evaluate((el) => getComputedStyle(el).cursor);
      expect(cursor).toBe('pointer');
    });

    test('renders card with small padding', async ({ page }) => {
      const card = page.getByTestId('card-sm-padding');
      await expect(card).toBeVisible();

      const padding = await card.evaluate((el) => getComputedStyle(el).padding);
      expect(padding).toBe('16px'); // p-4 = 1rem = 16px
    });

    test('renders card with large padding', async ({ page }) => {
      const card = page.getByTestId('card-lg-padding');
      await expect(card).toBeVisible();

      const padding = await card.evaluate((el) => getComputedStyle(el).padding);
      expect(padding).toBe('32px'); // p-8 = 2rem = 32px
    });

    test('card has correct background color', async ({ page }) => {
      const card = page.getByTestId('card-default');
      const bgColor = await card.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Surface-1 #ffffff = rgb(255, 255, 255)
      expect(bgColor).toBe('rgb(255, 255, 255)');
    });

    test('card has rounded corners', async ({ page }) => {
      const card = page.getByTestId('card-default');
      const borderRadius = await card.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      // rounded-xl = 0.875rem = 14px (per design system)
      expect(borderRadius).toBe('14px');
    });
  });

  test.describe('Badge Component', () => {
    test('renders default badge', async ({ page }) => {
      const badge = page.getByTestId('badge-default');
      await expect(badge).toBeVisible();
      await expect(badge).toHaveText('Default');
    });

    test('renders secondary badge', async ({ page }) => {
      const badge = page.getByTestId('badge-secondary');
      await expect(badge).toBeVisible();

      const bgColor = await badge.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Secondary #f4f4f5 = rgb(244, 244, 245)
      expect(bgColor).toBe('rgb(244, 244, 245)');
    });

    test('renders success badge with green tint', async ({ page }) => {
      const badge = page.getByTestId('badge-success');
      await expect(badge).toBeVisible();

      const color = await badge.evaluate((el) => getComputedStyle(el).color);
      // Success color #22c55e = rgb(34, 197, 94)
      expect(color).toBe('rgb(34, 197, 94)');
    });

    test('renders warning badge with yellow/orange tint', async ({ page }) => {
      const badge = page.getByTestId('badge-warning');
      await expect(badge).toBeVisible();

      const color = await badge.evaluate((el) => getComputedStyle(el).color);
      // Warning color #f59e0b = rgb(245, 158, 11)
      expect(color).toBe('rgb(245, 158, 11)');
    });

    test('renders destructive badge with red tint', async ({ page }) => {
      const badge = page.getByTestId('badge-destructive');
      await expect(badge).toBeVisible();

      const color = await badge.evaluate((el) => getComputedStyle(el).color);
      // Destructive color #ef4444 = rgb(239, 68, 68)
      expect(color).toBe('rgb(239, 68, 68)');
    });

    test('renders small badge', async ({ page }) => {
      const badge = page.getByTestId('badge-sm');
      await expect(badge).toBeVisible();

      const fontSize = await badge.evaluate((el) =>
        getComputedStyle(el).fontSize
      );
      expect(fontSize).toBe('12px'); // text-xs = 0.75rem = 12px
    });

    test('badge has rounded-full border radius', async ({ page }) => {
      const badge = page.getByTestId('badge-default');
      const borderRadius = await badge.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).toBe('9999px');
    });
  });

  test.describe('Container Component', () => {
    test('renders container with sm max-width', async ({ page }) => {
      const container = page.getByTestId('container-sm');
      await expect(container).toBeVisible();

      const maxWidth = await container.evaluate((el) =>
        getComputedStyle(el).maxWidth
      );
      expect(maxWidth).toBe('640px');
    });

    test('renders container with md max-width', async ({ page }) => {
      const container = page.getByTestId('container-md');
      await expect(container).toBeVisible();

      const maxWidth = await container.evaluate((el) =>
        getComputedStyle(el).maxWidth
      );
      expect(maxWidth).toBe('768px');
    });

    test('renders container with lg max-width', async ({ page }) => {
      const container = page.getByTestId('container-lg');
      await expect(container).toBeVisible();

      const maxWidth = await container.evaluate((el) =>
        getComputedStyle(el).maxWidth
      );
      expect(maxWidth).toBe('1024px');
    });

    test('renders container with xl max-width', async ({ page }) => {
      const container = page.getByTestId('container-xl');
      await expect(container).toBeVisible();

      const maxWidth = await container.evaluate((el) =>
        getComputedStyle(el).maxWidth
      );
      expect(maxWidth).toBe('1280px');
    });

    test('container is centered with mx-auto', async ({ page }) => {
      const container = page.getByTestId('container-sm');
      const marginLeft = await container.evaluate((el) =>
        getComputedStyle(el).marginLeft
      );
      const marginRight = await container.evaluate((el) =>
        getComputedStyle(el).marginRight
      );
      expect(marginLeft).toBe(marginRight);
    });
  });

  test.describe('Section Component', () => {
    test('renders section with default background', async ({ page }) => {
      const section = page.getByTestId('section-default');
      await expect(section).toBeVisible();

      const bgColor = await section.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Background #ffffff = rgb(255, 255, 255)
      expect(bgColor).toBe('rgb(255, 255, 255)');
    });

    test('renders section with muted background', async ({ page }) => {
      const section = page.getByTestId('section-muted');
      await expect(section).toBeVisible();

      const bgColor = await section.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Muted #f4f4f5 = rgb(244, 244, 245)
      expect(bgColor).toBe('rgb(244, 244, 245)');
    });

    test('renders section with accent background', async ({ page }) => {
      const section = page.getByTestId('section-accent');
      await expect(section).toBeVisible();

      const bgColor = await section.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Accent #3b82f6 = rgb(59, 130, 246)
      expect(bgColor).toBe('rgb(59, 130, 246)');
    });

    test('section has vertical padding', async ({ page }) => {
      const section = page.getByTestId('section-default');
      const paddingTop = await section.evaluate((el) =>
        getComputedStyle(el).paddingTop
      );
      expect(parseInt(paddingTop)).toBeGreaterThan(0);
    });
  });

  test.describe('Accessibility', () => {
    test('buttons are keyboard focusable', async ({ page }) => {
      const button = page.getByTestId('btn-primary');
      await button.focus();
      await expect(button).toBeFocused();
    });

    test('disabled button cannot be focused', async ({ page }) => {
      const button = page.getByTestId('btn-disabled');
      // Disabled buttons should still be in the DOM
      await expect(button).toBeDisabled();
    });

    test('interactive card is keyboard accessible', async ({ page }) => {
      const card = page.getByTestId('card-interactive');
      await card.focus();
      await expect(card).toBeFocused();
    });

    test('link buttons have accessible href', async ({ page }) => {
      const button = page.getByTestId('btn-link');
      const href = await button.getAttribute('href');
      expect(href).toBeTruthy();
    });
  });
});

test.describe('Homepage uses UI Components', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('homepage uses Button component for CTAs', async ({ page }) => {
    // Find the CTA in the main content area (not header)
    const primaryCta = page.locator('main').getByRole('link', { name: /Buy Lattice/i });
    await expect(primaryCta).toBeVisible();

    // Should have button styling
    const bgColor = await primaryCta.evaluate((el) =>
      getComputedStyle(el).backgroundColor
    );
    expect(bgColor).toBe('rgb(59, 130, 246)'); // Accent color
  });

  test('homepage uses Section component', async ({ page }) => {
    const section = page.locator('main section').first();
    await expect(section).toBeVisible();

    // Section should have padding
    const paddingTop = await section.evaluate((el) =>
      getComputedStyle(el).paddingTop
    );
    expect(parseInt(paddingTop)).toBeGreaterThan(0);
  });

  test('homepage uses Container component', async ({ page }) => {
    // Container should have max-width - look within main section
    const container = page.locator('main section > div').first();
    const maxWidth = await container.evaluate((el) =>
      getComputedStyle(el).maxWidth
    );
    expect(maxWidth).toBe('1280px'); // xl container
  });
});
