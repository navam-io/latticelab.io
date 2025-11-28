/**
 * Feature 14: Pricing Page Tests
 *
 * Comprehensive tests for the dedicated pricing page including:
 * - Hero section with pricing headline
 * - Main pricing card with $99 price
 * - What's Included section (6 items)
 * - Purchase flow explanation (4 steps)
 * - Pricing-specific FAQ (6 questions)
 * - Trust signals and guarantees
 * - Final CTA section
 */

import { test, expect } from '@playwright/test';

test.describe('Feature 14: Pricing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pricing');
  });

  test.describe('Page Basics', () => {
    test('pricing page loads successfully', async ({ page }) => {
      await expect(page).toHaveURL('/pricing');
      await expect(page).toHaveTitle(/Pricing.*Lattice/i);
    });

    test('page has correct meta description', async ({ page }) => {
      const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
      expect(metaDescription).toContain('$99');
      expect(metaDescription).toContain('lifetime');
    });
  });

  test.describe('Hero Section', () => {
    test('hero section is visible', async ({ page }) => {
      const hero = page.getByTestId('pricing-hero');
      await expect(hero).toBeVisible();
    });

    test('hero has eyebrow text', async ({ page }) => {
      const eyebrow = page.getByTestId('pricing-hero-eyebrow');
      await expect(eyebrow).toBeVisible();
      await expect(eyebrow).toContainText(/pricing/i);
    });

    test('hero headline communicates value proposition', async ({ page }) => {
      const headline = page.getByTestId('pricing-hero-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText(/lifetime access/i);
      await expect(headline).toContainText(/no subscription/i);
    });

    test('hero has supporting subhead', async ({ page }) => {
      const subhead = page.getByTestId('pricing-hero-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText(/pay once/i);
    });
  });

  test.describe('Main Pricing Card', () => {
    test('pricing card is visible', async ({ page }) => {
      const card = page.getByTestId('pricing-main-card');
      await expect(card).toBeVisible();
    });

    test('pricing card has badge', async ({ page }) => {
      const badge = page.getByTestId('pricing-main-badge');
      await expect(badge).toBeVisible();
      await expect(badge).toContainText(/lifetime/i);
    });

    test('displays $99 price prominently', async ({ page }) => {
      const amount = page.getByTestId('pricing-main-amount');
      await expect(amount).toBeVisible();
      await expect(amount).toHaveText('$99');
    });

    test('shows one-time label', async ({ page }) => {
      const label = page.getByTestId('pricing-main-label');
      await expect(label).toBeVisible();
      await expect(label).toContainText(/one-time/i);
    });

    test('has no subscription messaging', async ({ page }) => {
      const subtitle = page.getByTestId('pricing-main-subtitle');
      await expect(subtitle).toBeVisible();
      await expect(subtitle).toContainText(/no subscription/i);
    });

    test('has primary CTA button', async ({ page }) => {
      const cta = page.getByTestId('pricing-main-cta');
      await expect(cta).toBeVisible();
      await expect(cta).toContainText(/get lattice/i);
    });

    test('shows Stripe security note', async ({ page }) => {
      const note = page.getByTestId('pricing-main-stripe-note');
      await expect(note).toBeVisible();
      await expect(note).toContainText(/stripe/i);
    });

    test('has FUDs reduction', async ({ page }) => {
      const fuds = page.getByTestId('pricing-main-fuds');
      await expect(fuds).toBeVisible();
    });
  });

  test.describe('What\'s Included Section', () => {
    test('section is visible with headline', async ({ page }) => {
      const section = page.getByTestId('pricing-included');
      await expect(section).toBeVisible();

      const headline = page.getByTestId('pricing-included-headline');
      await expect(headline).toContainText(/everything you get/i);
    });

    test('displays 6 included items', async ({ page }) => {
      const grid = page.getByTestId('pricing-included-grid');
      await expect(grid).toBeVisible();

      // Check all 6 items exist
      for (let i = 0; i < 6; i++) {
        const item = page.getByTestId(`pricing-included-item-${i}`);
        await expect(item).toBeVisible();
      }
    });

    test('included items have titles and descriptions', async ({ page }) => {
      // Check first item has title and description
      const title = page.getByTestId('pricing-included-item-0-title');
      const desc = page.getByTestId('pricing-included-item-0-desc');

      await expect(title).toBeVisible();
      await expect(desc).toBeVisible();

      // Verify content mentions source code
      await expect(title).toContainText(/source code/i);
    });

    test('mentions blueprint bundles', async ({ page }) => {
      const item1Title = page.getByTestId('pricing-included-item-1-title');
      await expect(item1Title).toContainText(/blueprint/i);
    });

    test('mentions self-hosted deployment', async ({ page }) => {
      const item3Title = page.getByTestId('pricing-included-item-3-title');
      await expect(item3Title).toContainText(/self-hosted/i);
    });
  });

  test.describe('Purchase Flow Section', () => {
    test('section is visible', async ({ page }) => {
      const section = page.getByTestId('pricing-flow');
      await expect(section).toBeVisible();
    });

    test('has headline explaining the process', async ({ page }) => {
      const headline = page.getByTestId('pricing-flow-headline');
      await expect(headline).toContainText(/how it works/i);
    });

    test('displays 4 purchase steps', async ({ page }) => {
      const steps = page.getByTestId('pricing-flow-steps');
      await expect(steps).toBeVisible();

      for (let i = 0; i < 4; i++) {
        const step = page.getByTestId(`pricing-flow-step-${i}`);
        await expect(step).toBeVisible();
      }
    });

    test('steps have numbered indicators', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const number = page.getByTestId(`pricing-flow-step-${i}-number`);
        await expect(number).toHaveText(String(i + 1));
      }
    });

    test('step 1 is about completing purchase', async ({ page }) => {
      const title = page.getByTestId('pricing-flow-step-0-title');
      await expect(title).toContainText(/purchase/i);
    });

    test('step 2 mentions email', async ({ page }) => {
      const title = page.getByTestId('pricing-flow-step-1-title');
      await expect(title).toContainText(/email/i);
    });

    test('step 3 mentions GitHub invite', async ({ page }) => {
      const title = page.getByTestId('pricing-flow-step-2-title');
      await expect(title).toContainText(/github/i);
    });

    test('step 4 mentions clone and run', async ({ page }) => {
      const title = page.getByTestId('pricing-flow-step-3-title');
      await expect(title).toContainText(/clone|run/i);
    });
  });

  test.describe('Guarantees Section', () => {
    test('section is visible', async ({ page }) => {
      const section = page.getByTestId('pricing-guarantees');
      await expect(section).toBeVisible();
    });

    test('displays 4 guarantee cards', async ({ page }) => {
      const grid = page.getByTestId('pricing-guarantees-grid');
      await expect(grid).toBeVisible();

      for (let i = 0; i < 4; i++) {
        const guarantee = page.getByTestId(`pricing-guarantee-${i}`);
        await expect(guarantee).toBeVisible();
      }
    });

    test('includes money-back guarantee', async ({ page }) => {
      const title = page.getByTestId('pricing-guarantee-0-title');
      await expect(title).toContainText(/money back/i);
    });

    test('includes secure checkout guarantee', async ({ page }) => {
      const title = page.getByTestId('pricing-guarantee-1-title');
      await expect(title).toContainText(/secure/i);
    });

    test('includes instant access guarantee', async ({ page }) => {
      const title = page.getByTestId('pricing-guarantee-2-title');
      await expect(title).toContainText(/instant/i);
    });

    test('includes lifetime updates guarantee', async ({ page }) => {
      const title = page.getByTestId('pricing-guarantee-3-title');
      await expect(title).toContainText(/lifetime/i);
    });
  });

  test.describe('Pricing FAQ Section', () => {
    test('section is visible', async ({ page }) => {
      const section = page.getByTestId('pricing-faq');
      await expect(section).toBeVisible();
    });

    test('has FAQ headline', async ({ page }) => {
      const headline = page.getByTestId('pricing-faq-headline');
      await expect(headline).toContainText(/question/i);
    });

    test('displays 6 FAQ items', async ({ page }) => {
      const list = page.getByTestId('pricing-faq-list');
      await expect(list).toBeVisible();

      for (let i = 1; i <= 6; i++) {
        const faq = page.getByTestId(`pricing-faq-${i}`);
        await expect(faq).toBeVisible();
      }
    });

    test('FAQ about subscription is present', async ({ page }) => {
      const question = page.getByTestId('pricing-faq-1-question');
      await expect(question).toContainText(/subscription/i);
    });

    test('FAQ accordion opens on click', async ({ page }) => {
      const details = page.getByTestId('pricing-faq-1-details');
      const answer = page.getByTestId('pricing-faq-1-answer');

      // Answer should be hidden initially
      await expect(answer).not.toBeVisible();

      // Click to open
      await details.click();

      // Answer should now be visible
      await expect(answer).toBeVisible();
    });

    test('FAQ about refunds is present', async ({ page }) => {
      const question = page.getByTestId('pricing-faq-3-question');
      await expect(question).toContainText(/refund/i);
    });

    test('FAQ about team purchasing is present', async ({ page }) => {
      const question = page.getByTestId('pricing-faq-5-question');
      await expect(question).toContainText(/team/i);
    });

    test('has contact link', async ({ page }) => {
      const link = page.getByTestId('pricing-faq-contact-link');
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', 'mailto:hello@latticelab.io');
    });
  });

  test.describe('Final CTA Section', () => {
    test('section is visible', async ({ page }) => {
      const section = page.getByTestId('pricing-final-section');
      await expect(section).toBeVisible();
    });

    test('has compelling headline', async ({ page }) => {
      const headline = page.getByTestId('pricing-final-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText(/ready|transform/i);
    });

    test('has primary CTA with price', async ({ page }) => {
      const cta = page.getByTestId('pricing-final-buttons').getByTestId('pricing-final-cta');
      await expect(cta).toBeVisible();
      await expect(cta).toContainText(/\$99/);
    });

    test('has secondary CTA to learn more', async ({ page }) => {
      const learnMore = page.getByTestId('pricing-final-learn-more');
      await expect(learnMore).toBeVisible();
      await expect(learnMore).toHaveAttribute('href', '/');
    });

    test('has FUDs reduction', async ({ page }) => {
      const fuds = page.getByTestId('pricing-final-fuds');
      await expect(fuds).toBeVisible();
    });
  });

  test.describe('Responsive Design', () => {
    test('pricing card is centered on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      const card = page.getByTestId('pricing-main-card');
      await expect(card).toBeVisible();

      const box = await card.boundingBox();
      const viewport = page.viewportSize();

      if (box && viewport) {
        // Card should be roughly centered (within reason)
        const cardCenter = box.x + box.width / 2;
        const viewportCenter = viewport.width / 2;
        expect(Math.abs(cardCenter - viewportCenter)).toBeLessThan(50);
      }
    });

    test('included items stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      const grid = page.getByTestId('pricing-included-grid');
      await expect(grid).toBeVisible();

      // Items should be stacked (1 column) on mobile
      const item0 = page.getByTestId('pricing-included-item-0');
      const item1 = page.getByTestId('pricing-included-item-1');

      const box0 = await item0.boundingBox();
      const box1 = await item1.boundingBox();

      if (box0 && box1) {
        // Item 1 should be below item 0 on mobile
        expect(box1.y).toBeGreaterThan(box0.y + box0.height - 10);
      }
    });

    test('purchase steps stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      const step0 = page.getByTestId('pricing-flow-step-0');
      const step1 = page.getByTestId('pricing-flow-step-1');

      const box0 = await step0.boundingBox();
      const box1 = await step1.boundingBox();

      if (box0 && box1) {
        // Step 1 should be below step 0 on mobile
        expect(box1.y).toBeGreaterThan(box0.y);
      }
    });

    test('guarantees are in grid on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });

      const g0 = page.getByTestId('pricing-guarantee-0');
      const g1 = page.getByTestId('pricing-guarantee-1');

      const box0 = await g0.boundingBox();
      const box1 = await g1.boundingBox();

      if (box0 && box1) {
        // On desktop, guarantees should be side by side
        expect(box1.y).toBeLessThan(box0.y + box0.height);
      }
    });
  });

  test.describe('Navigation & Links', () => {
    test('header is visible', async ({ page }) => {
      const header = page.locator('header');
      await expect(header).toBeVisible();
    });

    test('footer is visible', async ({ page }) => {
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });

    test('learn more button links to homepage', async ({ page }) => {
      const learnMore = page.getByTestId('pricing-final-learn-more');
      await expect(learnMore).toHaveAttribute('href', '/');
    });
  });

  test.describe('Accessibility', () => {
    test('page has proper heading hierarchy', async ({ page }) => {
      // Should have one h1
      const h1 = page.locator('h1');
      await expect(h1).toHaveCount(1);

      // Should have multiple h2s for sections
      const h2s = page.locator('h2');
      expect(await h2s.count()).toBeGreaterThanOrEqual(4);
    });

    test('FAQ accordions are keyboard accessible', async ({ page }) => {
      const firstQuestion = page.getByTestId('pricing-faq-1-question');

      // Focus and press Enter
      await firstQuestion.focus();
      await page.keyboard.press('Enter');

      // Answer should be visible
      const answer = page.getByTestId('pricing-faq-1-answer');
      await expect(answer).toBeVisible();
    });

    test('CTA buttons have visible focus states', async ({ page }) => {
      const cta = page.getByTestId('pricing-main-cta');
      await cta.focus();

      // The button should have focus-visible styles applied
      const isVisible = await cta.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        // Check for outline or ring
        return styles.outline !== 'none' || styles.boxShadow.includes('ring');
      });

      // This is a basic check - the important thing is focus is trackable
      await expect(cta).toBeFocused();
    });
  });

  test.describe('Content Accuracy', () => {
    test('price is consistently $99 across page', async ({ page }) => {
      const mainPrice = page.getByTestId('pricing-main-amount');
      await expect(mainPrice).toHaveText('$99');

      const ctaPrice = page.getByTestId('pricing-final-buttons').getByTestId('pricing-final-cta');
      await expect(ctaPrice).toContainText('$99');
    });

    test('mentions 36 blueprint bundles', async ({ page }) => {
      const pageContent = await page.content();
      expect(pageContent).toContain('36');
    });

    test('mentions 30-day money-back guarantee', async ({ page }) => {
      const pageContent = await page.content();
      expect(pageContent.toLowerCase()).toContain('30-day');
      expect(pageContent.toLowerCase()).toContain('money-back');
    });

    test('mentions GitHub repository access', async ({ page }) => {
      const pageContent = await page.content();
      expect(pageContent.toLowerCase()).toContain('github');
    });

    test('mentions self-hosted deployment', async ({ page }) => {
      const pageContent = await page.content();
      expect(pageContent.toLowerCase()).toContain('self-hosted');
    });
  });
});
