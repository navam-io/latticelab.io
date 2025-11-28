import { test, expect } from '@playwright/test';

/**
 * Feature Slice 2: Design System — CSS Variables & Base Styles
 *
 * These tests verify that the design system is correctly implemented
 * with CSS variables, Tailwind theme integration, and base styles.
 */

test.describe('Feature 2: Design System CSS Variables', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Color Palette', () => {
    test('has background color CSS variable', async ({ page }) => {
      const bgColor = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--color-background');
      });
      expect(bgColor.trim()).toBe('#ffffff');
    });

    test('has foreground color CSS variable', async ({ page }) => {
      const fgColor = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--color-foreground');
      });
      expect(fgColor.trim()).toBe('#1a1a1c');
    });

    test('has primary color CSS variable', async ({ page }) => {
      const primaryColor = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
      });
      expect(primaryColor.trim()).toBe('#27272a');
    });

    test('has accent color CSS variable', async ({ page }) => {
      const accentColor = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--color-accent');
      });
      expect(accentColor.trim()).toBe('#3b82f6');
    });

    test('has muted color CSS variable', async ({ page }) => {
      const mutedColor = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--color-muted');
      });
      expect(mutedColor.trim()).toBe('#f4f4f5');
    });

    test('has border color CSS variable', async ({ page }) => {
      const borderColor = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--color-border');
      });
      expect(borderColor.trim()).toBe('#e4e4e7');
    });

    test('has surface colors CSS variables', async ({ page }) => {
      const surface1 = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--color-surface-1');
      });
      const surface2 = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--color-surface-2');
      });
      expect(surface1.trim()).toBe('#ffffff');
      expect(surface2.trim()).toBe('#fafafa');
    });

    test('has status colors CSS variables', async ({ page }) => {
      const success = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--color-success');
      });
      const warning = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--color-warning');
      });
      const destructive = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--color-destructive');
      });
      expect(success.trim()).toBe('#22c55e');
      expect(warning.trim()).toBe('#f59e0b');
      expect(destructive.trim()).toBe('#ef4444');
    });
  });

  test.describe('Typography', () => {
    test('has font-sans CSS variable with Geist', async ({ page }) => {
      const fontSans = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--font-sans');
      });
      expect(fontSans).toContain('Geist');
    });

    test('has font-mono CSS variable with Geist Mono', async ({ page }) => {
      const fontMono = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--font-mono');
      });
      expect(fontMono).toContain('Geist Mono');
    });

    test('has font size CSS variables', async ({ page }) => {
      const textBase = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--text-base');
      });
      const textLg = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--text-lg');
      });
      expect(textBase.trim()).toBe('1rem');
      expect(textLg.trim()).toBe('1.125rem');
    });

    test('has line height CSS variables', async ({ page }) => {
      const leadingNormal = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--leading-normal');
      });
      expect(leadingNormal.trim()).toBe('1.5');
    });

    test('has font weight CSS variables', async ({ page }) => {
      const fontMedium = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--font-medium');
      });
      const fontSemibold = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--font-semibold');
      });
      expect(fontMedium.trim()).toBe('500');
      expect(fontSemibold.trim()).toBe('600');
    });
  });

  test.describe('Spacing', () => {
    test('has spacing scale CSS variables', async ({ page }) => {
      const space4 = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--space-4');
      });
      const space8 = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--space-8');
      });
      expect(space4.trim()).toBe('1rem');
      expect(space8.trim()).toBe('2rem');
    });
  });

  test.describe('Border Radius', () => {
    test('has border radius CSS variables', async ({ page }) => {
      const radiusSm = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--radius-sm');
      });
      const radiusLg = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--radius-lg');
      });
      expect(radiusSm.trim()).toBe('0.375rem');
      expect(radiusLg.trim()).toBe('0.625rem');
    });
  });

  test.describe('Shadows', () => {
    test('has shadow CSS variables', async ({ page }) => {
      const shadowSm = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--shadow-sm');
      });
      const shadowMd = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--shadow-md');
      });
      expect(shadowSm.trim()).not.toBe('');
      expect(shadowMd.trim()).not.toBe('');
    });
  });

  test.describe('Transitions', () => {
    test('has transition CSS variables', async ({ page }) => {
      const transitionFast = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--transition-fast');
      });
      const transitionNormal = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--transition-normal');
      });
      expect(transitionFast.trim()).toBe('150ms');
      expect(transitionNormal.trim()).toBe('200ms');
    });
  });

  test.describe('Container Widths', () => {
    test('has container width CSS variables', async ({ page }) => {
      const containerLg = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--container-lg');
      });
      const containerXl = await page.evaluate(() => {
        return getComputedStyle(document.documentElement).getPropertyValue('--container-xl');
      });
      expect(containerLg.trim()).toBe('1024px');
      expect(containerXl.trim()).toBe('1280px');
    });
  });
});

test.describe('Tailwind Theme Integration', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ui-showcase');
  });

  test('bg-background class applies correct background color', async ({ page }) => {
    // Check section with default background
    const section = page.getByTestId('section-default');
    const bgColor = await section.evaluate((el) => {
      return getComputedStyle(el).backgroundColor;
    });
    // Should be white (#ffffff) which is rgb(255, 255, 255)
    expect(bgColor).toBe('rgb(255, 255, 255)');
  });

  test('text-foreground class applies correct text color', async ({ page }) => {
    const heading = page.locator('h2').first();
    const textColor = await heading.evaluate((el) => {
      return getComputedStyle(el).color;
    });
    // Should be #1a1a1c which is rgb(26, 26, 28)
    expect(textColor).toBe('rgb(26, 26, 28)');
  });

  test('bg-accent class applies correct accent color', async ({ page }) => {
    const primaryBtn = page.getByTestId('btn-primary');
    const bgColor = await primaryBtn.evaluate((el) => {
      return getComputedStyle(el).backgroundColor;
    });
    // Should be #3b82f6 which is rgb(59, 130, 246)
    expect(bgColor).toBe('rgb(59, 130, 246)');
  });

  test('text-muted-foreground class applies correct muted text color', async ({ page }) => {
    // Use text in card description which has muted-foreground class
    const mutedText = page.locator('p.text-muted-foreground').first();
    const textColor = await mutedText.evaluate((el) => {
      return getComputedStyle(el).color;
    });
    // Should be #71717a which is rgb(113, 113, 122)
    expect(textColor).toBe('rgb(113, 113, 122)');
  });

  test('border-border class applies correct border color', async ({ page }) => {
    const secondaryBtn = page.getByTestId('btn-secondary');
    const borderColor = await secondaryBtn.evaluate((el) => {
      return getComputedStyle(el).borderColor;
    });
    // Should be #e4e4e7 which is rgb(228, 228, 231)
    expect(borderColor).toBe('rgb(228, 228, 231)');
  });

  test('shadow-md class applies shadow', async ({ page }) => {
    const elevatedCard = page.getByTestId('card-elevated');
    const boxShadow = await elevatedCard.evaluate((el) => {
      return getComputedStyle(el).boxShadow;
    });
    expect(boxShadow).not.toBe('none');
  });
});

test.describe('Base Styles', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('html has Geist font family applied', async ({ page }) => {
    const fontFamily = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).fontFamily;
    });
    expect(fontFamily).toContain('Geist');
  });

  test('html has correct background color', async ({ page }) => {
    const bgColor = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).backgroundColor;
    });
    expect(bgColor).toBe('rgb(255, 255, 255)');
  });

  test('html has antialiased text rendering', async ({ page }) => {
    const webkitSmoothing = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('-webkit-font-smoothing');
    });
    expect(webkitSmoothing).toBe('antialiased');
  });

  test('body has no margin', async ({ page }) => {
    const margin = await page.evaluate(() => {
      return getComputedStyle(document.body).margin;
    });
    expect(margin).toBe('0px');
  });

  test('body has min-height 100vh', async ({ page }) => {
    const minHeight = await page.evaluate(() => {
      return getComputedStyle(document.body).minHeight;
    });
    // Should be viewport height
    expect(minHeight).not.toBe('0px');
  });
});

test.describe('Dark Mode Support', () => {
  test('dark mode CSS variables are defined', async ({ page }) => {
    await page.goto('/');

    // Add data-theme="dark" attribute
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
    });

    const bgColor = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--color-background');
    });
    expect(bgColor.trim()).toBe('#09090b');

    const fgColor = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--color-foreground');
    });
    expect(fgColor.trim()).toBe('#fafafa');
  });

  test('dark mode changes surface colors', async ({ page }) => {
    await page.goto('/');

    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
    });

    const surface1 = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--color-surface-1');
    });
    const surface2 = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--color-surface-2');
    });
    expect(surface1.trim()).toBe('#09090b');
    expect(surface2.trim()).toBe('#18181b');
  });
});

test.describe('Accessibility Features', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('focus-visible outline uses accent color', async ({ page }) => {
    // Tab to first focusable element
    await page.keyboard.press('Tab');

    const focusedElement = await page.evaluate(() => {
      const el = document.activeElement;
      if (el) {
        return getComputedStyle(el).outlineColor;
      }
      return null;
    });

    // Focus outline should be defined (accent color #3b82f6 = rgb(59, 130, 246))
    expect(focusedElement).toBe('rgb(59, 130, 246)');
  });

  test('selection uses accent colors', async ({ page }) => {
    // This tests that ::selection is defined - we can't directly test pseudo-elements
    // but we verify the CSS variable is available
    const accentColor = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--color-accent');
    });
    expect(accentColor.trim()).toBe('#3b82f6');
  });
});
