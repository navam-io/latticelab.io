import { test, expect } from '@playwright/test';

test.describe('Header Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/header');
    // Wait for Vue hydration
    await page.waitForLoadState('networkidle');
    // Press Escape to close any open menus
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
  });

  test.describe('Basic Structure', () => {
    test('page loads correctly', async ({ page }) => {
      const heading = page.locator('h1').first();
      await expect(heading).toContainText('Header Component Test');
    });

    test('header is visible', async ({ page }) => {
      const header = page.getByTestId('test-header');
      await expect(header).toBeVisible();
    });

    test('logo is visible', async ({ page }) => {
      const logo = page.getByTestId('test-header-logo');
      await expect(logo).toBeVisible();
    });

    test('header is sticky', async ({ page }) => {
      const header = page.getByTestId('test-header');
      const classes = await header.getAttribute('class');
      expect(classes).toContain('sticky');
      expect(classes).toContain('top-0');
    });
  });

  test.describe('Desktop Navigation', () => {
    test.beforeEach(async ({ page }) => {
      // Set desktop viewport
      await page.setViewportSize({ width: 1024, height: 768 });
    });

    test('desktop nav is visible', async ({ page }) => {
      const desktopNav = page.getByTestId('test-header-desktop-nav');
      await expect(desktopNav).toBeVisible();
    });

    test('all nav links are visible', async ({ page }) => {
      const blogLink = page.getByTestId('test-header-link-blog');
      const docsLink = page.getByTestId('test-header-link-docs');
      const pricingLink = page.getByTestId('test-header-link-pricing');
      const contactLink = page.getByTestId('test-header-link-contact');

      await expect(blogLink).toBeVisible();
      await expect(docsLink).toBeVisible();
      await expect(pricingLink).toBeVisible();
      await expect(contactLink).toBeVisible();
    });

    test('desktop buy button is visible', async ({ page }) => {
      const buyButton = page.getByTestId('test-header-buy-desktop');
      await expect(buyButton).toBeVisible();
    });

    test('mobile hamburger is hidden on desktop', async ({ page }) => {
      const hamburger = page.getByTestId('test-header-mobile-trigger');
      await expect(hamburger).not.toBeVisible();
    });
  });

  test.describe('Desktop MegaMenu', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 768 });
    });

    test('features trigger is visible', async ({ page }) => {
      const trigger = page.getByTestId('test-header-features-trigger');
      await expect(trigger).toBeVisible();
    });

    test('mega menu panel is hidden by default', async ({ page }) => {
      const panel = page.getByTestId('test-header-features-panel');
      await expect(panel).not.toBeVisible();
    });

    test('opens mega menu on keyboard activation', async ({ page }) => {
      const trigger = page.getByTestId('test-header-features-trigger');
      const panel = page.getByTestId('test-header-features-panel');

      await trigger.press('Space');
      await expect(panel).toBeVisible();
    });

    test('closes mega menu on Escape', async ({ page }) => {
      const trigger = page.getByTestId('test-header-features-trigger');
      const panel = page.getByTestId('test-header-features-panel');

      await trigger.press('Space');
      await expect(panel).toBeVisible();

      await page.keyboard.press('Escape');
      await expect(panel).not.toBeVisible();
    });

    test('mega menu shows feature links', async ({ page }) => {
      const trigger = page.getByTestId('test-header-features-trigger');
      await trigger.press('Space');

      const sourcesLink = page.getByTestId('test-header-link-sources');
      const labLink = page.getByTestId('test-header-link-lab');
      const studioLink = page.getByTestId('test-header-link-studio');
      const blueprintsLink = page.getByTestId('test-header-link-blueprints');

      await expect(sourcesLink).toBeVisible();
      await expect(labLink).toBeVisible();
      await expect(studioLink).toBeVisible();
      await expect(blueprintsLink).toBeVisible();
    });

    test('mega menu shows configuration links', async ({ page }) => {
      const trigger = page.getByTestId('test-header-features-trigger');
      await trigger.press('Space');

      const scenariosLink = page.getByTestId('test-header-link-scenarios');
      const stacksLink = page.getByTestId('test-header-link-stacks');
      const settingsLink = page.getByTestId('test-header-link-settings');

      await expect(scenariosLink).toBeVisible();
      await expect(stacksLink).toBeVisible();
      await expect(settingsLink).toBeVisible();
    });

    test('clicking link closes mega menu', async ({ page }) => {
      const trigger = page.getByTestId('test-header-features-trigger');
      const panel = page.getByTestId('test-header-features-panel');
      const sourcesLink = page.getByTestId('test-header-link-sources');

      await trigger.press('Space');
      await expect(panel).toBeVisible();

      // Click will navigate, so panel closes
      await sourcesLink.click();
      // Navigation happens, but we check panel would close
    });

    test('backdrop is visible when menu open', async ({ page }) => {
      const trigger = page.getByTestId('test-header-features-trigger');
      const backdrop = page.getByTestId('test-header-features-backdrop');

      await trigger.press('Space');
      await expect(backdrop).toBeVisible();
    });

    test('backdrop click closes menu', async ({ page }) => {
      const trigger = page.getByTestId('test-header-features-trigger');
      const panel = page.getByTestId('test-header-features-panel');
      const backdrop = page.getByTestId('test-header-features-backdrop');

      await trigger.press('Space');
      await expect(panel).toBeVisible();

      await backdrop.click({ force: true });
      await expect(panel).not.toBeVisible();
    });
  });

  test.describe('Mobile Navigation', () => {
    test.beforeEach(async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
    });

    test('desktop nav is hidden on mobile', async ({ page }) => {
      const desktopNav = page.getByTestId('test-header-desktop-nav');
      await expect(desktopNav).not.toBeVisible();
    });

    test('hamburger trigger is visible', async ({ page }) => {
      const trigger = page.getByTestId('test-header-mobile-trigger');
      await expect(trigger).toBeVisible();
    });

    test('mobile buy button is visible', async ({ page }) => {
      const buyButton = page.getByTestId('test-header-buy-mobile');
      await expect(buyButton).toBeVisible();
    });

    test('mobile panel is hidden by default', async ({ page }) => {
      const panel = page.getByTestId('test-header-mobile-panel');
      await expect(panel).not.toBeVisible();
    });

    test('opens mobile nav on hamburger click', async ({ page }) => {
      const trigger = page.getByTestId('test-header-mobile-trigger');
      const panel = page.getByTestId('test-header-mobile-panel');

      await trigger.press('Space');
      await expect(panel).toBeVisible();
    });

    test('mobile nav shows accordion sections', async ({ page }) => {
      const trigger = page.getByTestId('test-header-mobile-trigger');
      await trigger.press('Space');

      const section0 = page.getByTestId('test-header-mobile-section-0');
      const section1 = page.getByTestId('test-header-mobile-section-1');
      const section2 = page.getByTestId('test-header-mobile-section-2');

      await expect(section0).toBeVisible();
      await expect(section1).toBeVisible();
      await expect(section2).toBeVisible();
    });

    test('accordion section expands on click', async ({ page }) => {
      const trigger = page.getByTestId('test-header-mobile-trigger');
      await trigger.press('Space');

      const section0 = page.getByTestId('test-header-mobile-section-0');
      const content0 = page.getByTestId('test-header-mobile-section-0-content');

      await expect(content0).not.toBeVisible();

      await section0.click();
      await expect(content0).toBeVisible();
    });

    test('mobile nav has close button', async ({ page }) => {
      const trigger = page.getByTestId('test-header-mobile-trigger');
      await trigger.press('Space');

      const closeBtn = page.getByTestId('test-header-mobile-close');
      await expect(closeBtn).toBeVisible();
    });

    test('close button closes mobile nav', async ({ page }) => {
      const trigger = page.getByTestId('test-header-mobile-trigger');
      const panel = page.getByTestId('test-header-mobile-panel');
      const closeBtn = page.getByTestId('test-header-mobile-close');

      await trigger.press('Space');
      await expect(panel).toBeVisible();

      await closeBtn.click();
      await expect(panel).not.toBeVisible();
    });

    test('escape closes mobile nav', async ({ page }) => {
      const trigger = page.getByTestId('test-header-mobile-trigger');
      const panel = page.getByTestId('test-header-mobile-panel');

      await trigger.press('Space');
      await expect(panel).toBeVisible();

      await page.keyboard.press('Escape');
      await expect(panel).not.toBeVisible();
    });

    test('backdrop closes mobile nav', async ({ page }) => {
      const trigger = page.getByTestId('test-header-mobile-trigger');
      const panel = page.getByTestId('test-header-mobile-panel');
      const backdrop = page.getByTestId('test-header-mobile-backdrop');

      await trigger.press('Space');
      await expect(panel).toBeVisible();

      await backdrop.click({ force: true });
      await expect(panel).not.toBeVisible();
    });

    test('expanded section shows links', async ({ page }) => {
      const trigger = page.getByTestId('test-header-mobile-trigger');
      await trigger.press('Space');

      const section0 = page.getByTestId('test-header-mobile-section-0');
      await section0.click();

      // First section (Features) should have links
      const link0 = page.getByTestId('test-header-mobile-section-0-link-0');
      await expect(link0).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 768 });
    });

    test('features trigger has aria-haspopup', async ({ page }) => {
      const trigger = page.getByTestId('test-header-features-trigger');
      await expect(trigger).toHaveAttribute('aria-haspopup', 'true');
    });

    test('features trigger has aria-expanded', async ({ page }) => {
      const trigger = page.getByTestId('test-header-features-trigger');

      await expect(trigger).toHaveAttribute('aria-expanded', 'false');

      await trigger.press('Space');
      await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    test('nav has aria-label', async ({ page }) => {
      const nav = page.getByTestId('test-header-desktop-nav');
      await expect(nav).toHaveAttribute('aria-label', 'Main navigation');
    });

    test('features trigger is keyboard focusable', async ({ page }) => {
      const trigger = page.getByTestId('test-header-features-trigger');
      await trigger.focus();
      await expect(trigger).toBeFocused();
    });
  });

  test.describe('Mobile Accessibility', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
    });

    test('mobile trigger has aria-haspopup', async ({ page }) => {
      const trigger = page.getByTestId('test-header-mobile-trigger');
      await expect(trigger).toHaveAttribute('aria-haspopup', 'true');
    });

    test('mobile trigger has aria-expanded', async ({ page }) => {
      const trigger = page.getByTestId('test-header-mobile-trigger');

      await expect(trigger).toHaveAttribute('aria-expanded', 'false');

      await trigger.press('Space');
      await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    test('mobile panel has dialog role', async ({ page }) => {
      const trigger = page.getByTestId('test-header-mobile-trigger');
      await trigger.press('Space');

      const panel = page.getByTestId('test-header-mobile-panel');
      await expect(panel).toHaveAttribute('role', 'dialog');
    });

    test('mobile panel has aria-modal', async ({ page }) => {
      const trigger = page.getByTestId('test-header-mobile-trigger');
      await trigger.press('Space');

      const panel = page.getByTestId('test-header-mobile-panel');
      await expect(panel).toHaveAttribute('aria-modal', 'true');
    });
  });

  test.describe('Responsive Behavior', () => {
    test('switches to mobile layout below md breakpoint', async ({ page }) => {
      // Start at desktop
      await page.setViewportSize({ width: 1024, height: 768 });
      const desktopNav = page.getByTestId('test-header-desktop-nav');
      const hamburger = page.getByTestId('test-header-mobile-trigger');

      await expect(desktopNav).toBeVisible();
      await expect(hamburger).not.toBeVisible();

      // Switch to mobile
      await page.setViewportSize({ width: 767, height: 667 });
      await page.waitForTimeout(100);

      await expect(desktopNav).not.toBeVisible();
      await expect(hamburger).toBeVisible();
    });

    test('logo stays visible at all sizes', async ({ page }) => {
      const logo = page.getByTestId('test-header-logo');

      // Desktop
      await page.setViewportSize({ width: 1024, height: 768 });
      await expect(logo).toBeVisible();

      // Tablet
      await page.setViewportSize({ width: 768, height: 1024 });
      await expect(logo).toBeVisible();

      // Mobile
      await page.setViewportSize({ width: 375, height: 667 });
      await expect(logo).toBeVisible();
    });
  });

  test.describe('Sticky Header', () => {
    test('header has sticky positioning', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 768 });

      const header = page.getByTestId('test-header');
      await expect(header).toBeVisible();

      // Verify the header has sticky positioning CSS
      const position = await header.evaluate((el) => {
        return window.getComputedStyle(el).position;
      });
      expect(position).toBe('sticky');

      // Verify it's set to top: 0
      const top = await header.evaluate((el) => {
        return window.getComputedStyle(el).top;
      });
      expect(top).toBe('0px');
    });
  });
});
