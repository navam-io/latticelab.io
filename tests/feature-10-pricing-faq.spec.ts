import { test, expect } from '@playwright/test';

/**
 * Feature Slice 10: Pricing & FAQ Sections
 *
 * Tests verify pricing display, FUDs reduction, benefits list,
 * FAQ accordion functionality, and CRO compliance.
 */

test.describe('Feature 10: Pricing & FAQ Sections', () => {
  test.describe('Pricing Section', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('pricing section is visible', async ({ page }) => {
      const section = page.getByTestId('pricing-section');
      await expect(section).toBeVisible();
    });

    test('pricing section has eyebrow text', async ({ page }) => {
      const eyebrow = page.getByTestId('pricing-eyebrow');
      await expect(eyebrow).toContainText('Simple Pricing');
    });

    test('pricing section has headline', async ({ page }) => {
      const headline = page.getByTestId('pricing-headline');
      await expect(headline).toContainText('One Price');
      await expect(headline).toContainText('Lifetime Access');
    });

    test('pricing section has subhead', async ({ page }) => {
      const subhead = page.getByTestId('pricing-subhead');
      await expect(subhead).toContainText('Pay once');
    });

    test('pricing card is visible', async ({ page }) => {
      const card = page.getByTestId('pricing-card');
      await expect(card).toBeVisible();
    });

    test('pricing card has popular badge', async ({ page }) => {
      const badge = page.getByTestId('pricing-badge');
      await expect(badge).toContainText('Popular');
    });
  });

  test.describe('Price Display', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('price amount shows $99', async ({ page }) => {
      const priceAmount = page.getByTestId('price-amount');
      await expect(priceAmount).toContainText('$99');
    });

    test('price label shows one-time', async ({ page }) => {
      const priceLabel = page.getByTestId('price-label');
      await expect(priceLabel).toContainText('one-time');
    });

    test('price subtitle mentions no subscriptions', async ({ page }) => {
      const subtitle = page.getByTestId('price-subtitle');
      await expect(subtitle).toContainText('No subscriptions');
    });

    test('price display is prominent', async ({ page }) => {
      const priceAmount = page.getByTestId('price-amount');
      await expect(priceAmount).toHaveClass(/text-5xl|text-6xl/);
    });
  });

  test.describe('Benefits List', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('benefits list is visible', async ({ page }) => {
      const list = page.getByTestId('benefits-list');
      await expect(list).toBeVisible();
    });

    test('displays at least 5 benefit items', async ({ page }) => {
      const list = page.getByTestId('benefits-list');
      const items = list.locator('li');
      const count = await items.count();
      expect(count).toBeGreaterThanOrEqual(5);
    });

    test('first benefit is highlighted (lifetime access)', async ({ page }) => {
      const firstBenefit = page.getByTestId('benefit-item-0');
      await expect(firstBenefit).toContainText('Lifetime');
    });

    test('benefits include vendor blueprints', async ({ page }) => {
      const list = page.getByTestId('benefits-list');
      await expect(list).toContainText('blueprint');
    });

    test('benefits include GitHub access', async ({ page }) => {
      const list = page.getByTestId('benefits-list');
      await expect(list).toContainText('GitHub');
    });

    test('benefits include self-hosted', async ({ page }) => {
      const list = page.getByTestId('benefits-list');
      await expect(list).toContainText('Self-hosted');
    });

    test('benefits include future updates', async ({ page }) => {
      const list = page.getByTestId('benefits-list');
      await expect(list).toContainText('updates');
    });

    test('benefits are benefit-driven not feature-driven', async ({ page }) => {
      const list = page.getByTestId('benefits-list');
      const text = await list.textContent();
      // Should focus on outcomes, not technical specs
      expect(text).toContain('Lifetime');
      expect(text).toContain('included');
    });
  });

  test.describe('Pricing CTA', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('CTA button is visible', async ({ page }) => {
      const cta = page.getByTestId('pricing-cta');
      await expect(cta).toBeVisible();
    });

    test('CTA button has action text', async ({ page }) => {
      const cta = page.getByTestId('pricing-cta');
      await expect(cta).toContainText('Get Lattice');
    });

    test('CTA button links to pricing page', async ({ page }) => {
      const cta = page.getByTestId('pricing-cta');
      const href = await cta.getAttribute('href');
      expect(href).toBe('/pricing');
    });
  });

  test.describe('FUDs Reduction in Pricing', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('FUDs reduction section is visible in pricing', async ({ page }) => {
      const fuds = page.getByTestId('pricing-fuds');
      await expect(fuds).toBeVisible();
    });

    test('FUDs include money-back guarantee', async ({ page }) => {
      const fuds = page.getByTestId('pricing-fuds');
      await expect(fuds).toContainText('30-day');
      await expect(fuds).toContainText('money-back');
    });

    test('FUDs include quick deployment', async ({ page }) => {
      const fuds = page.getByTestId('pricing-fuds');
      await expect(fuds).toContainText('5 minutes');
    });

    test('FUDs include privacy assurance', async ({ page }) => {
      const fuds = page.getByTestId('pricing-fuds');
      await expect(fuds).toContainText('No data leaves');
    });
  });

  test.describe('Trust Signals', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('trust signals section is visible', async ({ page }) => {
      const signals = page.getByTestId('pricing-trust-signals');
      await expect(signals).toBeVisible();
    });

    test('trust signals include self-hosted', async ({ page }) => {
      const signals = page.getByTestId('pricing-trust-signals');
      await expect(signals).toContainText('Self-hosted');
    });

    test('trust signals include private repo', async ({ page }) => {
      const signals = page.getByTestId('pricing-trust-signals');
      await expect(signals).toContainText('Private repo');
    });

    test('trust signals include deploy anywhere', async ({ page }) => {
      const signals = page.getByTestId('pricing-trust-signals');
      await expect(signals).toContainText('Deploy anywhere');
    });
  });

  test.describe('FAQ Section', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('FAQ section is visible', async ({ page }) => {
      const section = page.getByTestId('faq-section');
      await expect(section).toBeVisible();
    });

    test('FAQ section has eyebrow text', async ({ page }) => {
      const eyebrow = page.getByTestId('faq-eyebrow');
      await expect(eyebrow).toContainText('Questions');
    });

    test('FAQ section has headline', async ({ page }) => {
      const headline = page.getByTestId('faq-headline');
      await expect(headline).toContainText('Everything You Need');
    });

    test('FAQ section has subhead', async ({ page }) => {
      const subhead = page.getByTestId('faq-subhead');
      await expect(subhead).toBeVisible();
    });

    test('FAQ list is visible', async ({ page }) => {
      const list = page.getByTestId('faq-list');
      await expect(list).toBeVisible();
    });

    test('displays at least 5 FAQ items', async ({ page }) => {
      const list = page.getByTestId('faq-list');
      const items = list.locator('[data-testid^="faq-"]');
      const count = await items.count();
      expect(count).toBeGreaterThanOrEqual(5);
    });
  });

  test.describe('FAQ Accordion Functionality', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('FAQ items are initially collapsed', async ({ page }) => {
      const details = page.getByTestId('faq-1-details');
      await expect(details).not.toHaveAttribute('open');
    });

    test('clicking FAQ question expands answer', async ({ page }) => {
      const question = page.getByTestId('faq-1-question');
      await question.click();

      const details = page.getByTestId('faq-1-details');
      await expect(details).toHaveAttribute('open');

      const answer = page.getByTestId('faq-1-answer');
      await expect(answer).toBeVisible();
    });

    test('clicking expanded FAQ collapses it', async ({ page }) => {
      const question = page.getByTestId('faq-1-question');

      // Open
      await question.click();
      const details = page.getByTestId('faq-1-details');
      await expect(details).toHaveAttribute('open');

      // Close
      await question.click();
      await expect(details).not.toHaveAttribute('open');
    });

    test('multiple FAQs can be open simultaneously', async ({ page }) => {
      await page.getByTestId('faq-1-question').click();
      await page.getByTestId('faq-2-question').click();

      await expect(page.getByTestId('faq-1-details')).toHaveAttribute('open');
      await expect(page.getByTestId('faq-2-details')).toHaveAttribute('open');
    });

    test('FAQ answers have readable content', async ({ page }) => {
      await page.getByTestId('faq-1-question').click();
      const answer = page.getByTestId('faq-1-answer');
      const text = await answer.textContent();
      expect(text?.length).toBeGreaterThan(50);
    });
  });

  test.describe('FAQ Content - Objection Handling', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('FAQ addresses ChatGPT comparison objection', async ({ page }) => {
      const list = page.getByTestId('faq-list');
      await expect(list).toContainText('ChatGPT');
    });

    test('FAQ addresses refund question', async ({ page }) => {
      const list = page.getByTestId('faq-list');
      await expect(list).toContainText('refund');
    });

    test('FAQ addresses technical requirements', async ({ page }) => {
      const list = page.getByTestId('faq-list');
      await expect(list).toContainText('technical');
    });

    test('FAQ addresses air-gapped deployment', async ({ page }) => {
      const list = page.getByTestId('faq-list');
      await expect(list).toContainText('air-gapped');
    });

    test('FAQ addresses post-purchase process', async ({ page }) => {
      const list = page.getByTestId('faq-list');
      await expect(list).toContainText('purchase');
    });

    test('FAQ addresses updates', async ({ page }) => {
      const list = page.getByTestId('faq-list');
      await expect(list).toContainText('updates');
    });
  });

  test.describe('FAQ Contact CTA', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('contact section is visible', async ({ page }) => {
      const contact = page.getByTestId('faq-contact');
      await expect(contact).toBeVisible();
    });

    test('contact link is visible', async ({ page }) => {
      const link = page.getByTestId('faq-contact-link');
      await expect(link).toBeVisible();
    });

    test('contact link is email link', async ({ page }) => {
      const link = page.getByTestId('faq-contact-link');
      const href = await link.getAttribute('href');
      expect(href).toContain('mailto:');
    });
  });

  test.describe('FAQ Accessibility', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('FAQ questions are keyboard focusable', async ({ page }) => {
      const question = page.getByTestId('faq-1-question');
      await question.focus();
      await expect(question).toBeFocused();
    });

    test('FAQ can be toggled with keyboard', async ({ page }) => {
      const question = page.getByTestId('faq-1-question');
      await question.focus();
      await page.keyboard.press('Enter');

      const details = page.getByTestId('faq-1-details');
      await expect(details).toHaveAttribute('open');
    });

    test('FAQ uses native details/summary elements', async ({ page }) => {
      const details = page.locator('details[data-testid="faq-1-details"]');
      await expect(details).toBeVisible();

      const summary = details.locator('summary');
      await expect(summary).toBeVisible();
    });

    test('FAQ chevron icons are hidden from screen readers', async ({
      page,
    }) => {
      await page.getByTestId('faq-1-question').click();
      const svg = page.getByTestId('faq-1-question').locator('svg');
      await expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  test.describe('Responsive Layout', () => {
    test('pricing section visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      await expect(page.getByTestId('pricing-section')).toBeVisible();
      await expect(page.getByTestId('price-amount')).toBeVisible();
    });

    test('FAQ section visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      await expect(page.getByTestId('faq-section')).toBeVisible();
      await expect(page.getByTestId('faq-1')).toBeVisible();
    });

    test('FAQ accordion works on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      await page.getByTestId('faq-1-question').click();
      await expect(page.getByTestId('faq-1-details')).toHaveAttribute('open');
    });

    test('pricing card centered on all viewports', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const card = page.getByTestId('pricing-card');
      await expect(card).toBeVisible();
    });
  });

  test.describe('Section Order on Homepage', () => {
    test('pricing section appears after social proof', async ({ page }) => {
      await page.goto('/');

      const socialProof = page.getByTestId('social-proof-section');
      const pricing = page.getByTestId('pricing-section');

      const socialBox = await socialProof.boundingBox();
      const pricingBox = await pricing.boundingBox();

      expect(socialBox?.y).toBeLessThan(pricingBox?.y || 0);
    });

    test('FAQ section appears after pricing', async ({ page }) => {
      await page.goto('/');

      const pricing = page.getByTestId('pricing-section');
      const faq = page.getByTestId('faq-section');

      const pricingBox = await pricing.boundingBox();
      const faqBox = await faq.boundingBox();

      expect(pricingBox?.y).toBeLessThan(faqBox?.y || 0);
    });
  });

  test.describe('CRO Compliance', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('price is prominently displayed', async ({ page }) => {
      const price = page.getByTestId('price-amount');
      await expect(price).toBeVisible();
      await expect(price).toHaveClass(/font-bold/);
    });

    test('FUDs appear below CTA in pricing', async ({ page }) => {
      const cta = page.getByTestId('pricing-cta-container');
      const fuds = page.getByTestId('pricing-fuds');

      const ctaBox = await cta.boundingBox();
      const fudsBox = await fuds.boundingBox();

      expect(ctaBox?.y).toBeLessThan(fudsBox?.y || 0);
    });

    test('guarantee is prominently mentioned', async ({ page }) => {
      const pricing = page.getByTestId('pricing-section');
      await expect(pricing).toContainText('money-back guarantee');
    });

    test('FAQ addresses objections proactively', async ({ page }) => {
      const faq = page.getByTestId('faq-list');
      // Should address common objections
      await expect(faq).toContainText('refund');
      await expect(faq).toContainText('different');
    });
  });
});
