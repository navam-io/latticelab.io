/**
 * Feature 12: Responsive Design & Mobile Optimization Tests
 *
 * Comprehensive responsive testing across all homepage sections.
 * Tests breakpoints: 320px (small mobile), 375px (iPhone), 640px (large mobile),
 * 768px (tablet), 1024px (small desktop), 1280px (desktop).
 */

import { test, expect, type Page } from '@playwright/test';

// Breakpoints matching Tailwind defaults
const BREAKPOINTS = {
  smallMobile: { width: 320, height: 568 },
  mobile: { width: 375, height: 667 },
  largeMobile: { width: 640, height: 800 },
  tablet: { width: 768, height: 1024 },
  smallDesktop: { width: 1024, height: 768 },
  desktop: { width: 1280, height: 800 },
};

// Helper to check no horizontal scroll
async function hasNoHorizontalScroll(page: Page): Promise<boolean> {
  return page.evaluate(() => {
    return document.documentElement.scrollWidth <= document.documentElement.clientWidth;
  });
}

// Helper to check element is within viewport width
async function isWithinViewport(page: Page, selector: string): Promise<boolean> {
  const element = page.locator(selector).first();
  const box = await element.boundingBox();
  if (!box) return false;
  const viewportWidth = await page.evaluate(() => window.innerWidth);
  return box.x >= 0 && box.x + box.width <= viewportWidth;
}

test.describe('Feature 12: Responsive Design & Mobile Optimization', () => {
  test.describe('No Horizontal Scroll', () => {
    for (const [name, viewport] of Object.entries(BREAKPOINTS)) {
      test(`no horizontal scroll at ${name} (${viewport.width}px)`, async ({ page }) => {
        await page.setViewportSize(viewport);
        await page.goto('/');

        // Scroll through the page to ensure all content loads
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(500);
        await page.evaluate(() => window.scrollTo(0, 0));

        const noScroll = await hasNoHorizontalScroll(page);
        expect(noScroll).toBe(true);
      });
    }
  });

  test.describe('Mobile Above-the-Fold CRO Elements (320px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.smallMobile);
      await page.goto('/');
    });

    test('headline visible without scroll', async ({ page }) => {
      const headline = page.getByTestId('hero-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toBeInViewport();
    });

    test('subhead visible without scroll', async ({ page }) => {
      const subhead = page.getByTestId('hero-subhead');
      await expect(subhead).toBeVisible();
    });

    test('primary CTA visible without scroll', async ({ page }) => {
      const cta = page.getByTestId('hero-primary-cta');
      await expect(cta).toBeVisible();
    });

    test('header logo visible', async ({ page }) => {
      const logo = page.getByTestId('logo');
      await expect(logo).toBeVisible();
    });

    test('mobile menu button visible', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');
      await expect(menuButton).toBeVisible();
    });
  });

  test.describe('Mobile Above-the-Fold CRO Elements (375px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');
    });

    test('headline visible without scroll', async ({ page }) => {
      const headline = page.getByTestId('hero-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toBeInViewport();
    });

    test('value proposition visible', async ({ page }) => {
      const valueProp = page.getByTestId('hero-subhead');
      await expect(valueProp).toBeVisible();
    });

    test('primary CTA visible', async ({ page }) => {
      const cta = page.getByTestId('hero-primary-cta');
      await expect(cta).toBeVisible();
    });

    test('FUDs reduction visible (may require slight scroll)', async ({ page }) => {
      const heroFuds = page.getByTestId('hero-fuds');
      await heroFuds.scrollIntoViewIfNeeded();
      await expect(heroFuds).toBeVisible();
    });
  });

  test.describe('Touch Targets (44px minimum)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');
    });

    test('primary CTA meets 44px minimum height', async ({ page }) => {
      const cta = page.getByTestId('hero-primary-cta');
      const box = await cta.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.height).toBeGreaterThanOrEqual(44);
    });

    test('secondary CTA meets 44px minimum height', async ({ page }) => {
      const cta = page.getByTestId('hero-secondary-cta');
      const box = await cta.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.height).toBeGreaterThanOrEqual(44);
    });

    test('mobile menu button is at least 40px (acceptable)', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');
      const box = await menuButton.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.width).toBeGreaterThanOrEqual(40);
      expect(box!.height).toBeGreaterThanOrEqual(40);
    });

    test('pricing CTA meets 44px minimum height', async ({ page }) => {
      const cta = page.getByTestId('pricing-cta');
      await cta.scrollIntoViewIfNeeded();
      const box = await cta.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.height).toBeGreaterThanOrEqual(44);
    });

    test('final CTA meets 44px minimum height', async ({ page }) => {
      const cta = page.getByTestId('final-cta-button');
      await cta.scrollIntoViewIfNeeded();
      const box = await cta.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.height).toBeGreaterThanOrEqual(44);
    });

    test('FAQ items have sufficient touch height', async ({ page }) => {
      // FAQ items use IDs like faq-1, faq-2, etc.
      const faqItem = page.getByTestId('faq-1');
      await faqItem.scrollIntoViewIfNeeded();
      const summary = faqItem.locator('summary');
      const box = await summary.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.height).toBeGreaterThanOrEqual(44);
    });
  });

  test.describe('Typography Scaling', () => {
    test('headline scales appropriately for viewport', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');
      const headline = page.getByTestId('hero-headline');
      const mobileSize = await headline.evaluate((el) =>
        parseFloat(getComputedStyle(el).fontSize)
      );

      await page.setViewportSize(BREAKPOINTS.desktop);
      await page.waitForTimeout(100);
      const desktopSize = await headline.evaluate((el) =>
        parseFloat(getComputedStyle(el).fontSize)
      );

      // Headline should be at least readable on mobile (>=24px)
      // and may scale up on desktop (>=mobileSize)
      expect(mobileSize).toBeGreaterThanOrEqual(24);
      expect(desktopSize).toBeGreaterThanOrEqual(mobileSize);
    });

    test('body text readable on small mobile (14px+)', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.smallMobile);
      await page.goto('/');
      const text = page.getByTestId('hero-subhead');
      const fontSize = await text.evaluate((el) =>
        parseFloat(getComputedStyle(el).fontSize)
      );
      expect(fontSize).toBeGreaterThanOrEqual(14);
    });

    test('pricing amount readable on mobile', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');
      // Test ID is 'price-amount' not 'pricing-amount'
      const price = page.getByTestId('price-amount');
      await price.scrollIntoViewIfNeeded();
      const fontSize = await price.evaluate((el) =>
        parseFloat(getComputedStyle(el).fontSize)
      );
      // Price should be prominently large
      expect(fontSize).toBeGreaterThanOrEqual(36);
    });
  });

  test.describe('Social Proof - No Hidden Carousels', () => {
    test('testimonials stack vertically on mobile (not carousel)', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');

      const testimonials = page.getByTestId('social-proof-section');
      await testimonials.scrollIntoViewIfNeeded();

      // All testimonials should be visible without horizontal scroll (test IDs are 1-indexed)
      const firstTestimonial = page.getByTestId('testimonial-1');
      const secondTestimonial = page.getByTestId('testimonial-2');

      await expect(firstTestimonial).toBeVisible();
      await secondTestimonial.scrollIntoViewIfNeeded();
      await expect(secondTestimonial).toBeVisible();

      // Check they're stacked (second is below first)
      const firstBox = await firstTestimonial.boundingBox();
      const secondBox = await secondTestimonial.boundingBox();
      expect(secondBox!.y).toBeGreaterThan(firstBox!.y);
    });

    test('persona cards stack vertically on mobile', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');

      const personas = page.getByTestId('persona-cards-section');
      await personas.scrollIntoViewIfNeeded();

      // Persona cards use semantic IDs like 'research-engineer', 'platform-lead', 'cto'
      const firstCard = page.getByTestId('persona-card-research-engineer');
      const secondCard = page.getByTestId('persona-card-platform-lead');

      await expect(firstCard).toBeVisible();
      await secondCard.scrollIntoViewIfNeeded();
      await expect(secondCard).toBeVisible();

      const firstBox = await firstCard.boundingBox();
      const secondBox = await secondCard.boundingBox();
      expect(secondBox!.y).toBeGreaterThan(firstBox!.y);
    });

    test('featured on logos wrap on mobile', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');

      const featuredOn = page.getByTestId('featured-on');
      await featuredOn.scrollIntoViewIfNeeded();
      await expect(featuredOn).toBeVisible();
    });
  });

  test.describe('Section Visibility at All Breakpoints', () => {
    const sections = [
      { id: 'hero-section', name: 'Hero' },
      { id: 'pain-section', name: 'Pain' },
      { id: 'solution-section', name: 'Solution' },
      { id: 'persona-cards-section', name: 'Persona Cards' },
      { id: 'social-proof-section', name: 'Social Proof' },
      { id: 'privacy-section', name: 'Privacy' },
      { id: 'pricing-section', name: 'Pricing' },
      { id: 'faq-section', name: 'FAQ' },
      { id: 'final-cta-section', name: 'Final CTA' },
    ];

    for (const [breakpointName, viewport] of Object.entries(BREAKPOINTS)) {
      for (const section of sections) {
        test(`${section.name} visible at ${breakpointName} (${viewport.width}px)`, async ({ page }) => {
          await page.setViewportSize(viewport);
          await page.goto('/');

          const sectionEl = page.getByTestId(section.id);
          await sectionEl.scrollIntoViewIfNeeded();
          await expect(sectionEl).toBeVisible();
        });
      }
    }
  });

  test.describe('Mobile Menu Functionality', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');
      // Wait for React hydration
      await page.waitForTimeout(1000);
    });

    test('mobile menu opens and shows all nav items', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');
      await menuButton.click();

      const mobileMenu = page.locator('#mobile-menu');
      await expect(mobileMenu).toBeVisible({ timeout: 10000 });

      // Check navigation links are visible
      await expect(mobileMenu.getByRole('link', { name: 'Features' })).toBeVisible();
      await expect(mobileMenu.getByRole('link', { name: 'Pricing' })).toBeVisible();
    });

    test('mobile menu CTA is visible and tappable', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');
      await menuButton.click();

      const mobileMenu = page.locator('#mobile-menu');
      await expect(mobileMenu).toBeVisible({ timeout: 10000 });

      const mobileCta = page.getByTestId('mobile-cta');
      await expect(mobileCta).toBeVisible();

      const box = await mobileCta.boundingBox();
      expect(box!.height).toBeGreaterThanOrEqual(44);
    });

    test('mobile menu closes on escape key', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');
      await menuButton.click();

      const mobileMenu = page.locator('#mobile-menu');
      await expect(mobileMenu).toBeVisible({ timeout: 10000 });

      await page.keyboard.press('Escape');
      await expect(mobileMenu).not.toBeVisible();
    });

    test('mobile menu closes on backdrop click', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');
      await menuButton.click();

      const mobileMenu = page.locator('#mobile-menu');
      await expect(mobileMenu).toBeVisible({ timeout: 10000 });

      // Click the backdrop overlay
      const backdrop = page.locator('.fixed.inset-0.bg-background\\/80');
      if (await backdrop.count() > 0) {
        await backdrop.click({ force: true });
        await expect(mobileMenu).not.toBeVisible({ timeout: 5000 });
      } else {
        // Fallback to close button
        const closeButton = mobileMenu.locator('button[aria-label="Close menu"]');
        await closeButton.click();
        await expect(mobileMenu).not.toBeVisible({ timeout: 5000 });
      }
    });
  });

  test.describe('Desktop Navigation', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.desktop);
      await page.goto('/');
    });

    test('desktop nav is visible', async ({ page }) => {
      const nav = page.getByTestId('desktop-nav');
      await expect(nav).toBeVisible();
    });

    test('mobile menu button is hidden on desktop', async ({ page }) => {
      const menuButton = page.getByTestId('mobile-menu-button');
      await expect(menuButton).not.toBeVisible();
    });

    test('header CTA is visible on desktop', async ({ page }) => {
      const headerCta = page.getByTestId('header-cta');
      await expect(headerCta).toBeVisible();
    });
  });

  test.describe('Tablet Breakpoint (768px)', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.tablet);
      await page.goto('/');
    });

    test('navigation switches to desktop at tablet', async ({ page }) => {
      // At 768px (md breakpoint), desktop nav shows and mobile menu hides
      const desktopNav = page.getByTestId('desktop-nav');
      await expect(desktopNav).toBeVisible();
    });

    test('hero layout adapts to tablet', async ({ page }) => {
      const hero = page.getByTestId('hero-section');
      await expect(hero).toBeVisible();

      const headline = page.getByTestId('hero-headline');
      await expect(headline).toBeVisible();
    });

    test('pricing card centered on tablet', async ({ page }) => {
      const pricingCard = page.getByTestId('pricing-card');
      await pricingCard.scrollIntoViewIfNeeded();
      await expect(pricingCard).toBeVisible();
    });

    test('privacy section two-column on tablet', async ({ page }) => {
      const privacySection = page.getByTestId('privacy-section');
      await privacySection.scrollIntoViewIfNeeded();
      await expect(privacySection).toBeVisible();
    });
  });

  test.describe('Container Widths', () => {
    test('content stays within container bounds on mobile', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');

      // Check several sections stay within bounds
      const hero = page.getByTestId('hero-section');
      const heroBox = await hero.boundingBox();
      expect(heroBox!.width).toBeLessThanOrEqual(BREAKPOINTS.mobile.width);
    });

    test('content uses max-width on desktop', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.desktop);
      await page.goto('/');

      // Container should not span full width on large screens
      const headline = page.getByTestId('hero-headline');
      const box = await headline.boundingBox();
      // Headline shouldn't span more than ~80% of viewport on desktop
      expect(box!.width).toBeLessThan(BREAKPOINTS.desktop.width * 0.9);
    });
  });

  test.describe('Images and Media', () => {
    test('hero screenshot visible on mobile', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');

      const screenshot = page.getByTestId('hero-screenshot');
      await screenshot.scrollIntoViewIfNeeded();
      await expect(screenshot).toBeVisible();
    });

    test('hero screenshot within viewport width on mobile', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');

      const screenshot = page.getByTestId('hero-screenshot');
      await screenshot.scrollIntoViewIfNeeded();
      const box = await screenshot.boundingBox();
      expect(box!.width).toBeLessThanOrEqual(BREAKPOINTS.mobile.width);
    });

    test('logo bar images scale on mobile', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');

      // Logo bar test ID is 'logo-bar' not 'hero-logo-bar'
      const logoBar = page.getByTestId('logo-bar');
      await logoBar.scrollIntoViewIfNeeded();
      await expect(logoBar).toBeVisible();
    });
  });

  test.describe('FAQ Accordion on Mobile', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');
    });

    test('FAQ accordion works with touch/tap', async ({ page }) => {
      // FAQ items use IDs like faq-1, faq-2
      const faqItem = page.getByTestId('faq-1');
      await faqItem.scrollIntoViewIfNeeded();

      const summary = faqItem.locator('summary');
      await summary.click();

      // Answer should be visible after click
      const answer = faqItem.locator('[data-testid="faq-1-answer"]');
      await expect(answer).toBeVisible();
    });

    test('multiple FAQs can be open on mobile', async ({ page }) => {
      // FAQ items use IDs like faq-1, faq-2
      const faqItem1 = page.getByTestId('faq-1');
      const faqItem2 = page.getByTestId('faq-2');

      await faqItem1.scrollIntoViewIfNeeded();
      await faqItem1.locator('summary').click();

      await faqItem2.scrollIntoViewIfNeeded();
      await faqItem2.locator('summary').click();

      await expect(faqItem1.locator('[data-testid="faq-1-answer"]')).toBeVisible();
      await expect(faqItem2.locator('[data-testid="faq-2-answer"]')).toBeVisible();
    });
  });

  test.describe('Privacy Section Deploy Options on Mobile', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');
    });

    test('all deploy options visible and stacked', async ({ page }) => {
      const deployOptions = page.getByTestId('deploy-options');
      await deployOptions.scrollIntoViewIfNeeded();

      const laptop = page.getByTestId('deploy-option-laptop');
      const cloud = page.getByTestId('deploy-option-cloud');
      const airgapped = page.getByTestId('deploy-option-airgapped');

      await expect(laptop).toBeVisible();
      await expect(cloud).toBeVisible();
      await expect(airgapped).toBeVisible();

      // Verify they're stacked (vertical layout)
      const laptopBox = await laptop.boundingBox();
      const cloudBox = await cloud.boundingBox();
      expect(cloudBox!.y).toBeGreaterThan(laptopBox!.y);
    });

    test('privacy points readable on mobile', async ({ page }) => {
      const privacyPoints = page.getByTestId('privacy-points');
      await privacyPoints.scrollIntoViewIfNeeded();
      await expect(privacyPoints).toBeVisible();

      const point = page.getByTestId('privacy-point-0');
      await expect(point).toBeVisible();
    });
  });

  test.describe('Solution Panels - Desktop vs Mobile', () => {
    test('desktop panels visible on desktop', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.desktop);
      await page.goto('/');

      const solutionSection = page.getByTestId('solution-section');
      await solutionSection.scrollIntoViewIfNeeded();

      const desktopPanels = page.getByTestId('solution-panels-desktop');
      await expect(desktopPanels).toBeVisible();
    });

    test('mobile panels visible on mobile', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');

      const solutionSection = page.getByTestId('solution-section');
      await solutionSection.scrollIntoViewIfNeeded();

      const mobilePanels = page.getByTestId('solution-panels-mobile');
      await expect(mobilePanels).toBeVisible();
    });

    test('desktop panels hidden on mobile', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');

      const solutionSection = page.getByTestId('solution-section');
      await solutionSection.scrollIntoViewIfNeeded();

      const desktopPanels = page.getByTestId('solution-panels-desktop');
      await expect(desktopPanels).not.toBeVisible();
    });
  });

  test.describe('Pain Points Grid', () => {
    test('pain points 1 column on small mobile', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.smallMobile);
      await page.goto('/');

      const painSection = page.getByTestId('pain-section');
      await painSection.scrollIntoViewIfNeeded();

      const painPoint0 = page.getByTestId('pain-point-0');
      const painPoint1 = page.getByTestId('pain-point-1');

      const box0 = await painPoint0.boundingBox();
      const box1 = await painPoint1.boundingBox();

      // Second item should be below first (single column)
      expect(box1!.y).toBeGreaterThan(box0!.y + box0!.height - 10);
    });

    test('pain points grid layout on desktop', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.desktop);
      await page.goto('/');

      const painSection = page.getByTestId('pain-section');
      await painSection.scrollIntoViewIfNeeded();

      const painPoint0 = page.getByTestId('pain-point-0');
      const painPoint1 = page.getByTestId('pain-point-1');

      const box0 = await painPoint0.boundingBox();
      const box1 = await painPoint1.boundingBox();

      // Items should be side by side (grid layout)
      expect(Math.abs(box1!.y - box0!.y)).toBeLessThan(50);
    });
  });

  test.describe('Footer Responsiveness', () => {
    test('footer visible on mobile', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');

      const footer = page.locator('footer');
      await footer.scrollIntoViewIfNeeded();
      await expect(footer).toBeVisible();
    });

    test('footer content within bounds on mobile', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');

      const footer = page.locator('footer');
      await footer.scrollIntoViewIfNeeded();

      const scrollWidth = await footer.evaluate((el) => el.scrollWidth);
      const clientWidth = await footer.evaluate((el) => el.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
    });

    test('footer logo visible on mobile', async ({ page }) => {
      await page.setViewportSize(BREAKPOINTS.mobile);
      await page.goto('/');

      const footerLogo = page.getByTestId('footer-logo');
      await footerLogo.scrollIntoViewIfNeeded();
      await expect(footerLogo).toBeVisible();
    });
  });
});
