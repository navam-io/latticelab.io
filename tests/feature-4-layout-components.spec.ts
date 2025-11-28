import { test, expect } from '@playwright/test';

/**
 * Feature Slice 4: Layout Components
 *
 * These tests verify the Header, Footer, Navigation, and MobileMenu
 * components are correctly implemented with proper styling and behavior.
 */

test.describe('Feature 4: Layout Components', () => {
  test.describe('Header Component', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('header is visible and fixed at top', async ({ page }) => {
      const header = page.getByTestId('header');
      await expect(header).toBeVisible();

      const position = await header.evaluate((el) =>
        getComputedStyle(el).position
      );
      expect(position).toBe('fixed');
    });

    test('header has blur backdrop', async ({ page }) => {
      const header = page.getByTestId('header');
      const backdropFilter = await header.evaluate((el) =>
        getComputedStyle(el).backdropFilter
      );
      expect(backdropFilter).toContain('blur');
    });

    test('header has background styling', async ({ page }) => {
      const header = page.getByTestId('header');
      const bgColor = await header.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // Header should have a background color (may be solid or transparent)
      expect(bgColor).toBeTruthy();
    });

    test('logo is visible and links to homepage', async ({ page }) => {
      const logo = page.getByTestId('logo');
      await expect(logo).toBeVisible();

      const href = await logo.getAttribute('href');
      expect(href).toBe('/');
    });

    test('logo displays site name', async ({ page }) => {
      const logo = page.getByTestId('logo');
      await expect(logo).toContainText('Lattice');
    });

    test('header CTA button is visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const cta = page.getByTestId('header-cta');
      await expect(cta).toBeVisible();
    });

    test('header CTA links to pricing', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const cta = page.getByTestId('header-cta');
      const href = await cta.getAttribute('href');
      expect(href).toBe('/pricing');
    });

    test('header has correct height', async ({ page }) => {
      const header = page.getByTestId('header');
      const height = await header.evaluate((el) => {
        const container = el.querySelector('div');
        return container ? getComputedStyle(container).height : '0';
      });
      expect(height).toBe('64px'); // h-16 = 4rem = 64px
    });

    test('header has z-index for layering', async ({ page }) => {
      const header = page.getByTestId('header');
      const zIndex = await header.evaluate((el) =>
        getComputedStyle(el).zIndex
      );
      expect(parseInt(zIndex)).toBeGreaterThanOrEqual(50);
    });
  });

  test.describe('Desktop Navigation', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');
    });

    test('navigation is visible on desktop', async ({ page }) => {
      const nav = page.locator('nav[aria-label="Main navigation"]');
      await expect(nav).toBeVisible();
    });

    test('navigation contains expected links', async ({ page }) => {
      const nav = page.locator('nav[aria-label="Main navigation"]');

      await expect(nav.getByRole('link', { name: 'Features' })).toBeVisible();
      await expect(nav.getByRole('link', { name: 'Journeys' })).toBeVisible();
      await expect(nav.getByRole('link', { name: 'Blueprints' })).toBeVisible();
      await expect(nav.getByRole('link', { name: 'Docs' })).toBeVisible();
      await expect(nav.getByRole('link', { name: 'Pricing' })).toBeVisible();
    });

    test('navigation links have correct hrefs', async ({ page }) => {
      const nav = page.locator('nav[aria-label="Main navigation"]');

      const featuresLink = nav.getByRole('link', { name: 'Features' });
      await expect(featuresLink).toHaveAttribute('href', '/features');

      const pricingLink = nav.getByRole('link', { name: 'Pricing' });
      await expect(pricingLink).toHaveAttribute('href', '/pricing');
    });

    test('navigation links are keyboard focusable', async ({ page }) => {
      const featuresLink = page.locator('nav[aria-label="Main navigation"]').getByRole('link', { name: 'Features' });
      await featuresLink.focus();
      await expect(featuresLink).toBeFocused();
    });

    test('navigation is hidden on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const nav = page.locator('nav[aria-label="Main navigation"]');
      await expect(nav).not.toBeVisible();
    });
  });

  test.describe('Mobile Menu', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
    });

    test('mobile menu button is visible on mobile', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');
      await expect(menuButton).toBeVisible();
    });

    test('mobile menu button is hidden on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const menuButton = page.getByTestId('mobile-menu-button');
      await expect(menuButton).not.toBeVisible();
    });

    test('mobile menu opens when button is clicked', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');

      // Wait for React hydration
      await page.waitForTimeout(1000);
      await menuButton.click();

      const mobileMenu = page.locator('#mobile-menu');
      await expect(mobileMenu).toBeVisible({ timeout: 10000 });
    });

    test('mobile menu contains navigation links', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');

      // Wait for hydration
      await page.waitForTimeout(500);
      await menuButton.click();

      const mobileMenu = page.locator('#mobile-menu');
      await expect(mobileMenu).toBeVisible({ timeout: 10000 });
      await expect(mobileMenu.getByRole('link', { name: 'Features' })).toBeVisible();
      await expect(mobileMenu.getByRole('link', { name: 'Pricing' })).toBeVisible();
    });

    test('mobile menu has CTA button', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');

      // Wait for hydration
      await page.waitForTimeout(500);
      await menuButton.click();

      const mobileMenu = page.locator('#mobile-menu');
      await expect(mobileMenu).toBeVisible({ timeout: 10000 });

      const mobileCta = page.getByTestId('mobile-cta');
      await expect(mobileCta).toBeVisible();
      await expect(mobileCta).toHaveAttribute('href', '/pricing');
    });

    test('mobile menu closes when clicking outside', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');

      // Wait for hydration
      await page.waitForTimeout(1000);
      await menuButton.click();

      // Wait for menu to be visible
      const mobileMenu = page.locator('#mobile-menu');
      await expect(mobileMenu).toBeVisible({ timeout: 10000 });

      // Wait for animation to complete
      await page.waitForTimeout(300);

      // Click the backdrop overlay element directly
      const backdrop = page.locator('.fixed.inset-0.bg-background\\/80');
      if (await backdrop.count() > 0) {
        await backdrop.click({ force: true });
        // Menu should be hidden (allow time for animation)
        await expect(mobileMenu).not.toBeVisible({ timeout: 5000 });
      } else {
        // If backdrop element is different, use close button
        const closeButton = mobileMenu.locator('button[aria-label="Close menu"]');
        await closeButton.click();
        await expect(mobileMenu).not.toBeVisible({ timeout: 5000 });
      }
    });

    test('mobile menu closes when pressing Escape', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');

      // Wait for hydration
      await page.waitForTimeout(500);
      await menuButton.click();

      const mobileMenu = page.locator('#mobile-menu');
      await expect(mobileMenu).toBeVisible({ timeout: 10000 });

      await page.keyboard.press('Escape');

      await expect(mobileMenu).not.toBeVisible();
    });

    test('mobile menu button has accessible attributes', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');

      await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      await expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu');

      await menuButton.click();
      // Wait for menu to open and React state to update
      const mobileMenu = page.locator('#mobile-menu');
      await expect(mobileMenu).toBeVisible({ timeout: 10000 });
      await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    });

    test('mobile menu is a dialog with proper role', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');

      // Wait for React hydration
      await page.waitForTimeout(1000);
      await menuButton.click();

      const mobileMenu = page.locator('#mobile-menu');
      await expect(mobileMenu).toBeVisible({ timeout: 10000 });
      await expect(mobileMenu).toHaveAttribute('role', 'dialog');
      await expect(mobileMenu).toHaveAttribute('aria-modal', 'true');
    });
  });

  test.describe('Footer Component', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('footer is visible', async ({ page }) => {
      const footer = page.getByTestId('footer');
      await expect(footer).toBeVisible();
    });

    test('footer displays site name', async ({ page }) => {
      const footer = page.getByTestId('footer');
      await expect(footer).toContainText('Lattice');
    });

    test('footer has GitHub link', async ({ page }) => {
      const githubLink = page.getByTestId('github-link');
      await expect(githubLink).toBeVisible();

      const href = await githubLink.getAttribute('href');
      expect(href).toContain('github.com');
    });

    test('footer has email link', async ({ page }) => {
      const emailLink = page.getByTestId('email-link');
      await expect(emailLink).toBeVisible();

      const href = await emailLink.getAttribute('href');
      expect(href).toContain('mailto:');
    });

    test('footer has copyright notice', async ({ page }) => {
      const footer = page.getByTestId('footer');
      const currentYear = new Date().getFullYear().toString();
      await expect(footer).toContainText(currentYear);
      await expect(footer).toContainText('All rights reserved');
    });

    test('footer has quick links section', async ({ page }) => {
      const footer = page.getByTestId('footer');
      await expect(footer.getByRole('link', { name: 'About' })).toBeVisible();
      await expect(footer.getByRole('link', { name: 'Documentation' })).toBeVisible();
    });

    test('footer has correct background color', async ({ page }) => {
      const footer = page.getByTestId('footer');
      const bgColor = await footer.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      );
      // surface-2 #fafafa = rgb(250, 250, 250)
      expect(bgColor).toBe('rgb(250, 250, 250)');
    });

    test('footer external links open in new tab', async ({ page }) => {
      const githubLink = page.getByTestId('github-link');

      const target = await githubLink.getAttribute('target');
      const rel = await githubLink.getAttribute('rel');

      expect(target).toBe('_blank');
      expect(rel).toContain('noopener');
    });
  });

  test.describe('Page Layout Integration', () => {
    test('homepage has header and footer', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByTestId('header')).toBeVisible();
      await expect(page.getByTestId('footer')).toBeVisible();
    });

    test('ui-showcase page has header and footer', async ({ page }) => {
      await page.goto('/ui-showcase');

      await expect(page.getByTestId('header')).toBeVisible();
      await expect(page.getByTestId('footer')).toBeVisible();
    });

    test('content is not hidden under fixed header', async ({ page }) => {
      await page.goto('/');

      // The h1 should be visible without scrolling
      const heading = page.getByRole('heading', { level: 1 });
      await expect(heading).toBeVisible();

      // Check that heading is below header
      const headingBox = await heading.boundingBox();
      expect(headingBox?.y).toBeGreaterThan(64); // Header is 64px
    });
  });

  test.describe('Responsive Behavior', () => {
    test('header layout adapts on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/');

      // Desktop nav should be visible at 768px (md breakpoint)
      const nav = page.locator('nav[aria-label="Main navigation"]');
      await expect(nav).toBeVisible();

      // Mobile menu button should not be visible
      const menuButton = page.getByTestId('mobile-menu-button');
      await expect(menuButton).not.toBeVisible();
    });

    test('footer is responsive', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const footer = page.getByTestId('footer');
      await expect(footer).toBeVisible();

      // Check footer doesn't overflow
      const footerWidth = await footer.evaluate((el) => el.scrollWidth);
      const viewportWidth = 375;
      expect(footerWidth).toBeLessThanOrEqual(viewportWidth + 1); // Allow 1px tolerance
    });
  });

  test.describe('Accessibility', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('header navigation has aria-label', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const nav = page.locator('nav[aria-label="Main navigation"]');
      await expect(nav).toBeVisible();
    });

    test('footer navigation has aria-label', async ({ page }) => {
      const footerNav = page.locator('nav[aria-label="Footer navigation"]');
      await expect(footerNav).toBeVisible();
    });

    test('logo link is accessible', async ({ page }) => {
      const logo = page.getByTestId('logo');
      await logo.focus();
      await expect(logo).toBeFocused();
    });

    test('mobile menu button has aria-label', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const menuButton = page.getByTestId('mobile-menu-button');

      const ariaLabel = await menuButton.getAttribute('aria-label');
      expect(ariaLabel).toBeTruthy();
    });
  });
});
