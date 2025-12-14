import { test, expect } from '@playwright/test';

test.describe('Animation Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/animations');
  });

  test.describe('Transition Utilities', () => {
    test('transition-base has 200ms duration', async ({ page }) => {
      const element = page.getByTestId('transition-base');
      await expect(element).toBeVisible();

      const transitionDuration = await element.evaluate((el) =>
        window.getComputedStyle(el).transitionDuration
      );
      expect(transitionDuration).toBe('0.2s');
    });

    test('transition-fast has 150ms duration', async ({ page }) => {
      const element = page.getByTestId('transition-fast');
      const transitionDuration = await element.evaluate((el) =>
        window.getComputedStyle(el).transitionDuration
      );
      expect(transitionDuration).toBe('0.15s');
    });

    test('transition-slow has 300ms duration', async ({ page }) => {
      const element = page.getByTestId('transition-slow');
      const transitionDuration = await element.evaluate((el) =>
        window.getComputedStyle(el).transitionDuration
      );
      expect(transitionDuration).toBe('0.3s');
    });

    test('transition-opacity has opacity property', async ({ page }) => {
      const element = page.getByTestId('transition-opacity');
      const transitionProperty = await element.evaluate((el) =>
        window.getComputedStyle(el).transitionProperty
      );
      expect(transitionProperty).toContain('opacity');
    });

    test('transition-transform has transform property', async ({ page }) => {
      const element = page.getByTestId('transition-transform');
      const transitionProperty = await element.evaluate((el) =>
        window.getComputedStyle(el).transitionProperty
      );
      expect(transitionProperty).toContain('transform');
    });

    test('transition-shadow has box-shadow property', async ({ page }) => {
      const element = page.getByTestId('transition-shadow');
      const transitionProperty = await element.evaluate((el) =>
        window.getComputedStyle(el).transitionProperty
      );
      expect(transitionProperty).toContain('box-shadow');
    });
  });

  test.describe('Fade Animations', () => {
    test('animate-fade-in has fade-in animation', async ({ page }) => {
      const element = page.getByTestId('animate-fade-in');
      await expect(element).toBeVisible();

      const animation = await element.evaluate((el) =>
        window.getComputedStyle(el).animationName
      );
      expect(animation).toBe('fade-in');
    });

    test('animate-fade-in-up has fade-in-up animation', async ({ page }) => {
      const element = page.getByTestId('animate-fade-in-up');
      const animation = await element.evaluate((el) =>
        window.getComputedStyle(el).animationName
      );
      expect(animation).toBe('fade-in-up');
    });

    test('animate-fade-in-down has fade-in-down animation', async ({ page }) => {
      const element = page.getByTestId('animate-fade-in-down');
      const animation = await element.evaluate((el) =>
        window.getComputedStyle(el).animationName
      );
      expect(animation).toBe('fade-in-down');
    });
  });

  test.describe('Slide Animations', () => {
    test('animate-slide-in-left has slide-in-left animation', async ({ page }) => {
      const element = page.getByTestId('animate-slide-in-left');
      await expect(element).toBeVisible();

      const animation = await element.evaluate((el) =>
        window.getComputedStyle(el).animationName
      );
      expect(animation).toBe('slide-in-left');
    });

    test('animate-slide-in-right has slide-in-right animation', async ({ page }) => {
      const element = page.getByTestId('animate-slide-in-right');
      const animation = await element.evaluate((el) =>
        window.getComputedStyle(el).animationName
      );
      expect(animation).toBe('slide-in-right');
    });

    test('animate-slide-in-up has slide-in-up animation', async ({ page }) => {
      const element = page.getByTestId('animate-slide-in-up');
      const animation = await element.evaluate((el) =>
        window.getComputedStyle(el).animationName
      );
      expect(animation).toBe('slide-in-up');
    });

    test('animate-slide-in-down has slide-in-down animation', async ({ page }) => {
      const element = page.getByTestId('animate-slide-in-down');
      const animation = await element.evaluate((el) =>
        window.getComputedStyle(el).animationName
      );
      expect(animation).toBe('slide-in-down');
    });
  });

  test.describe('Scale Animations', () => {
    test('animate-scale-in has scale-in animation', async ({ page }) => {
      const element = page.getByTestId('animate-scale-in');
      await expect(element).toBeVisible();

      const animation = await element.evaluate((el) =>
        window.getComputedStyle(el).animationName
      );
      expect(animation).toBe('scale-in');
    });

    test('hover-scale has transition on transform', async ({ page }) => {
      const element = page.getByTestId('hover-scale');
      const transitionProperty = await element.evaluate((el) =>
        window.getComputedStyle(el).transitionProperty
      );
      expect(transitionProperty).toContain('transform');
    });

    test('hover-scale scales on hover', async ({ page }) => {
      const element = page.getByTestId('hover-scale');

      // Get initial transform
      const initialTransform = await element.evaluate((el) =>
        window.getComputedStyle(el).transform
      );

      // Hover over element
      await element.hover();

      // Wait for transition
      await page.waitForTimeout(250);

      // Get transform after hover
      const hoverTransform = await element.evaluate((el) =>
        window.getComputedStyle(el).transform
      );

      // Transform should change (from none/matrix to scaled matrix)
      expect(hoverTransform).not.toBe(initialTransform);
    });
  });

  test.describe('Backdrop Blur Effects', () => {
    test('backdrop-blur-sm has 4px blur', async ({ page }) => {
      const element = page.getByTestId('backdrop-blur-sm');
      await expect(element).toBeVisible();

      const backdropFilter = await element.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return computed.backdropFilter || computed.webkitBackdropFilter;
      });
      expect(backdropFilter).toContain('blur(4px)');
    });

    test('backdrop-blur-base has 8px blur', async ({ page }) => {
      const element = page.getByTestId('backdrop-blur-base');
      const backdropFilter = await element.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return computed.backdropFilter || computed.webkitBackdropFilter;
      });
      expect(backdropFilter).toContain('blur(8px)');
    });

    test('backdrop-blur-md has 12px blur', async ({ page }) => {
      const element = page.getByTestId('backdrop-blur-md');
      const backdropFilter = await element.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return computed.backdropFilter || computed.webkitBackdropFilter;
      });
      expect(backdropFilter).toContain('blur(12px)');
    });

    test('backdrop-blur-lg has 16px blur', async ({ page }) => {
      const element = page.getByTestId('backdrop-blur-lg');
      const backdropFilter = await element.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return computed.backdropFilter || computed.webkitBackdropFilter;
      });
      expect(backdropFilter).toContain('blur(16px)');
    });

    test('backdrop-blur-xl has 24px blur', async ({ page }) => {
      const element = page.getByTestId('backdrop-blur-xl');
      const backdropFilter = await element.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return computed.backdropFilter || computed.webkitBackdropFilter;
      });
      expect(backdropFilter).toContain('blur(24px)');
    });
  });

  test.describe('Backdrop Overlays', () => {
    test('backdrop-overlay has dark background and blur', async ({ page }) => {
      const element = page.getByTestId('backdrop-overlay');
      await expect(element).toBeVisible();

      const styles = await element.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          backgroundColor: computed.backgroundColor,
          backdropFilter: computed.backdropFilter || computed.webkitBackdropFilter,
        };
      });

      // Should have semi-transparent dark background
      expect(styles.backgroundColor).toContain('rgba');
      expect(styles.backdropFilter).toContain('blur');
    });

    test('backdrop-overlay-light has light background and blur', async ({ page }) => {
      const element = page.getByTestId('backdrop-overlay-light');
      const styles = await element.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          backgroundColor: computed.backgroundColor,
          backdropFilter: computed.backdropFilter || computed.webkitBackdropFilter,
        };
      });

      expect(styles.backgroundColor).toContain('rgba');
      expect(styles.backdropFilter).toContain('blur');
    });
  });

  test.describe('Scroll-Triggered Animations', () => {
    test('scroll-animate has initial opacity 0', async ({ page }) => {
      const element = page.getByTestId('scroll-animate');

      // Remove in-view class first to test initial state
      await element.evaluate((el) => el.classList.remove('in-view'));

      const opacity = await element.evaluate((el) =>
        window.getComputedStyle(el).opacity
      );
      expect(opacity).toBe('0');
    });

    test('scroll-animate has transform translateY', async ({ page }) => {
      const element = page.getByTestId('scroll-animate');

      // Remove in-view class to test initial state
      await element.evaluate((el) => el.classList.remove('in-view'));

      const transform = await element.evaluate((el) =>
        window.getComputedStyle(el).transform
      );
      // Should have translateY(30px)
      expect(transform).toContain('matrix');
    });

    test('scroll-animate.in-view has opacity 1', async ({ page }) => {
      const element = page.getByTestId('scroll-animate');

      // Add in-view class
      await element.evaluate((el) => el.classList.add('in-view'));
      await page.waitForTimeout(600); // Wait for transition

      const opacity = await element.evaluate((el) =>
        window.getComputedStyle(el).opacity
      );
      expect(opacity).toBe('1');
    });

    test('scroll-animate-scale has initial opacity 0', async ({ page }) => {
      const element = page.getByTestId('scroll-animate-scale');

      await element.evaluate((el) => el.classList.remove('in-view'));

      const opacity = await element.evaluate((el) =>
        window.getComputedStyle(el).opacity
      );
      expect(opacity).toBe('0');
    });

    test('stagger classes have transition delays', async ({ page }) => {
      const stagger1 = page.getByTestId('scroll-animate-stagger-1');
      const stagger2 = page.getByTestId('scroll-animate-stagger-2');
      const stagger3 = page.getByTestId('scroll-animate-stagger-3');

      const delay1 = await stagger1.evaluate((el) =>
        window.getComputedStyle(el).transitionDelay
      );
      const delay2 = await stagger2.evaluate((el) =>
        window.getComputedStyle(el).transitionDelay
      );
      const delay3 = await stagger3.evaluate((el) =>
        window.getComputedStyle(el).transitionDelay
      );

      // Each stagger should have increasing delay
      expect(delay1).toBe('0s');
      expect(delay2).toBe('0.1s');
      expect(delay3).toBe('0.2s');
    });
  });

  test.describe('Interactive State Transitions', () => {
    test('card-hover has transition on transform and box-shadow', async ({ page }) => {
      const element = page.getByTestId('card-hover');
      await expect(element).toBeVisible();

      const transitionProperty = await element.evaluate((el) =>
        window.getComputedStyle(el).transitionProperty
      );
      expect(transitionProperty).toContain('transform');
      expect(transitionProperty).toContain('box-shadow');
    });

    test('card-hover transforms on hover', async ({ page }) => {
      const element = page.getByTestId('card-hover');

      const initialTransform = await element.evaluate((el) =>
        window.getComputedStyle(el).transform
      );

      await element.hover();
      await page.waitForTimeout(250);

      const hoverTransform = await element.evaluate((el) =>
        window.getComputedStyle(el).transform
      );

      // Should have translateY(-4px) on hover
      expect(hoverTransform).not.toBe(initialTransform);
    });

    test('btn-hover has transition properties', async ({ page }) => {
      const element = page.getByTestId('btn-hover');
      const transitionProperty = await element.evaluate((el) =>
        window.getComputedStyle(el).transitionProperty
      );
      expect(transitionProperty).toContain('transform');
    });

    test('link-underline has pseudo-element for underline', async ({ page }) => {
      const element = page.getByTestId('link-underline');
      await expect(element).toBeVisible();

      // Check position is relative
      const position = await element.evaluate((el) =>
        window.getComputedStyle(el).position
      );
      expect(position).toBe('relative');
    });
  });

  test.describe('Menu Animation States', () => {
    test('dropdown-enter has initial opacity 0', async ({ page }) => {
      const element = page.getByTestId('dropdown-enter');
      await expect(element).toBeVisible();

      const opacity = await element.evaluate((el) =>
        window.getComputedStyle(el).opacity
      );
      expect(opacity).toBe('0');
    });

    test('dropdown-enter-active has opacity 1', async ({ page }) => {
      const element = page.getByTestId('dropdown-enter-active');
      const opacity = await element.evaluate((el) =>
        window.getComputedStyle(el).opacity
      );
      expect(opacity).toBe('1');
    });

    test('dropdown-enter-active has transitions', async ({ page }) => {
      const element = page.getByTestId('dropdown-enter-active');
      const transitionProperty = await element.evaluate((el) =>
        window.getComputedStyle(el).transitionProperty
      );
      expect(transitionProperty).toContain('opacity');
      expect(transitionProperty).toContain('transform');
    });
  });

  test.describe('Loading Animations', () => {
    test('animate-pulse-slow has pulse animation', async ({ page }) => {
      const element = page.getByTestId('animate-pulse-slow');
      await expect(element).toBeVisible();

      const animation = await element.evaluate((el) =>
        window.getComputedStyle(el).animationName
      );
      expect(animation).toBe('pulse');
    });

    test('animate-pulse-slow has 2s duration', async ({ page }) => {
      const element = page.getByTestId('animate-pulse-slow');
      const animationDuration = await element.evaluate((el) =>
        window.getComputedStyle(el).animationDuration
      );
      expect(animationDuration).toBe('2s');
    });

    test('skeleton-shimmer has shimmer animation', async ({ page }) => {
      const element = page.getByTestId('skeleton-shimmer');
      await expect(element).toBeVisible();

      const animation = await element.evaluate((el) =>
        window.getComputedStyle(el).animationName
      );
      expect(animation).toBe('shimmer');
    });

    test('skeleton-shimmer has infinite iteration', async ({ page }) => {
      const element = page.getByTestId('skeleton-shimmer');
      const animationIterationCount = await element.evaluate((el) =>
        window.getComputedStyle(el).animationIterationCount
      );
      expect(animationIterationCount).toBe('infinite');
    });
  });

  test.describe('CSS Variables', () => {
    test('duration variables are defined', async ({ page }) => {
      const durations = await page.evaluate(() => {
        const root = document.documentElement;
        const computed = window.getComputedStyle(root);
        return {
          instant: computed.getPropertyValue('--duration-instant').trim(),
          fast: computed.getPropertyValue('--duration-fast').trim(),
          normal: computed.getPropertyValue('--duration-normal').trim(),
          slow: computed.getPropertyValue('--duration-slow').trim(),
          slower: computed.getPropertyValue('--duration-slower').trim(),
        };
      });

      expect(durations.instant).toBe('0ms');
      expect(durations.fast).toBe('150ms');
      expect(durations.normal).toBe('200ms');
      expect(durations.slow).toBe('300ms');
      expect(durations.slower).toBe('500ms');
    });

    test('easing variables are defined', async ({ page }) => {
      const easings = await page.evaluate(() => {
        const root = document.documentElement;
        const computed = window.getComputedStyle(root);
        return {
          default: computed.getPropertyValue('--ease-default').trim(),
          in: computed.getPropertyValue('--ease-in').trim(),
          out: computed.getPropertyValue('--ease-out').trim(),
          inOut: computed.getPropertyValue('--ease-in-out').trim(),
          bounce: computed.getPropertyValue('--ease-bounce').trim(),
          spring: computed.getPropertyValue('--ease-spring').trim(),
        };
      });

      expect(easings.default).toContain('cubic-bezier');
      expect(easings.in).toContain('cubic-bezier');
      expect(easings.out).toContain('cubic-bezier');
      expect(easings.inOut).toContain('cubic-bezier');
      expect(easings.bounce).toContain('cubic-bezier');
      expect(easings.spring).toContain('cubic-bezier');
    });
  });
});
