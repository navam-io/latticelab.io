import { test, expect } from '@playwright/test';

/**
 * Feature Slice 15: Thank You Page Tests
 *
 * Tests for the post-purchase confirmation page shown after Stripe payment.
 * Validates all sections, content, and user experience elements.
 */

test.describe('Feature 15: Thank You Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/thank-you');
  });

  test.describe('Page Basics', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveURL(/\/thank-you/);
    });

    test('has correct page title', async ({ page }) => {
      await expect(page).toHaveTitle(/Thank You/);
    });

    test('has meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute(
        'content',
        /thank you|purchase|GitHub/i
      );
    });
  });

  test.describe('Hero / Confirmation Section', () => {
    test('hero section is visible', async ({ page }) => {
      const hero = page.getByTestId('thank-you-hero');
      await expect(hero).toBeVisible();
    });

    test('displays success icon', async ({ page }) => {
      const icon = page.getByTestId('thank-you-icon');
      await expect(icon).toBeVisible();
    });

    test('shows thank you headline', async ({ page }) => {
      const headline = page.getByTestId('thank-you-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Thank You');
    });

    test('shows purchase confirmation subhead', async ({ page }) => {
      const subhead = page.getByTestId('thank-you-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText('lifetime access');
    });

    test('shows email confirmation note', async ({ page }) => {
      const confirmation = page.getByTestId('thank-you-confirmation');
      await expect(confirmation).toBeVisible();
      await expect(confirmation).toContainText('confirmation email');
    });
  });

  test.describe('Next Steps Section', () => {
    test('steps section is visible', async ({ page }) => {
      const section = page.getByTestId('thank-you-steps');
      await expect(section).toBeVisible();
    });

    test('shows "What Happens Next" headline', async ({ page }) => {
      const headline = page.getByTestId('thank-you-steps-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('What Happens Next');
    });

    test('displays 4 next steps', async ({ page }) => {
      const stepsList = page.getByTestId('thank-you-steps-list');
      await expect(stepsList).toBeVisible();

      for (let i = 0; i < 4; i++) {
        const step = page.getByTestId(`thank-you-step-${i}`);
        await expect(step).toBeVisible();
      }
    });

    test('step 1: Check Your Email', async ({ page }) => {
      const stepNumber = page.getByTestId('thank-you-step-0-number');
      const stepTitle = page.getByTestId('thank-you-step-0-title');
      const stepDesc = page.getByTestId('thank-you-step-0-desc');
      const stepTimeline = page.getByTestId('thank-you-step-0-timeline');

      await expect(stepNumber).toContainText('1');
      await expect(stepTitle).toContainText('Check Your Email');
      await expect(stepDesc).toContainText('confirmation email');
      await expect(stepTimeline).toContainText('Immediately');
    });

    test('step 2: Accept GitHub Invitation', async ({ page }) => {
      const stepNumber = page.getByTestId('thank-you-step-1-number');
      const stepTitle = page.getByTestId('thank-you-step-1-title');
      const stepDesc = page.getByTestId('thank-you-step-1-desc');
      const stepTimeline = page.getByTestId('thank-you-step-1-timeline');

      await expect(stepNumber).toContainText('2');
      await expect(stepTitle).toContainText('GitHub Invitation');
      await expect(stepDesc).toContainText('private GitHub repository');
      await expect(stepTimeline).toContainText('24 hours');
    });

    test('step 3: Clone the Repository', async ({ page }) => {
      const stepNumber = page.getByTestId('thank-you-step-2-number');
      const stepTitle = page.getByTestId('thank-you-step-2-title');
      const stepDesc = page.getByTestId('thank-you-step-2-desc');
      const stepTimeline = page.getByTestId('thank-you-step-2-timeline');

      await expect(stepNumber).toContainText('3');
      await expect(stepTitle).toContainText('Clone');
      await expect(stepDesc).toContainText('git clone');
      await expect(stepTimeline).toContainText('After invite');
    });

    test('step 4: Run Lattice', async ({ page }) => {
      const stepNumber = page.getByTestId('thank-you-step-3-number');
      const stepTitle = page.getByTestId('thank-you-step-3-title');
      const stepDesc = page.getByTestId('thank-you-step-3-desc');
      const stepTimeline = page.getByTestId('thank-you-step-3-timeline');

      await expect(stepNumber).toContainText('4');
      await expect(stepTitle).toContainText('Run Lattice');
      await expect(stepDesc).toContainText('Quick Start');
      await expect(stepTimeline).toContainText('5 minutes');
    });

    test('each step has numbered indicator', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const stepNumber = page.getByTestId(`thank-you-step-${i}-number`);
        await expect(stepNumber).toContainText(`${i + 1}`);
      }
    });
  });

  test.describe('Expectations Section', () => {
    test('expectations section is visible', async ({ page }) => {
      const section = page.getByTestId('thank-you-expectations');
      await expect(section).toBeVisible();
    });

    test('shows "What to Expect" headline', async ({ page }) => {
      const headline = page.getByTestId('thank-you-expectations-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('What to Expect');
    });

    test('displays 3 expectation cards', async ({ page }) => {
      const grid = page.getByTestId('thank-you-expectations-grid');
      await expect(grid).toBeVisible();

      for (let i = 0; i < 3; i++) {
        const card = page.getByTestId(`thank-you-expectation-${i}`);
        await expect(card).toBeVisible();
      }
    });

    test('expectation 1: GitHub Access Timeline', async ({ page }) => {
      const title = page.getByTestId('thank-you-expectation-0-title');
      const desc = page.getByTestId('thank-you-expectation-0-desc');

      await expect(title).toContainText('GitHub Access Timeline');
      await expect(desc).toContainText('24 hours');
    });

    test('expectation 2: Check Spam Folder', async ({ page }) => {
      const title = page.getByTestId('thank-you-expectation-1-title');
      const desc = page.getByTestId('thank-you-expectation-1-desc');

      await expect(title).toContainText('Spam Folder');
      await expect(desc).toContainText('spam');
    });

    test('expectation 3: Need Help', async ({ page }) => {
      const title = page.getByTestId('thank-you-expectation-2-title');
      const desc = page.getByTestId('thank-you-expectation-2-desc');

      await expect(title).toContainText('Need Help');
      await expect(desc).toContainText('contact us');
    });

    test('expectations have icons', async ({ page }) => {
      for (let i = 0; i < 3; i++) {
        const card = page.getByTestId(`thank-you-expectation-${i}`);
        const icon = card.locator('svg');
        await expect(icon).toBeVisible();
      }
    });
  });

  test.describe('Support Section', () => {
    test('support section is visible', async ({ page }) => {
      const section = page.getByTestId('thank-you-support');
      await expect(section).toBeVisible();
    });

    test('shows support headline', async ({ page }) => {
      const headline = page.getByTestId('thank-you-support-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Help');
    });

    test('shows support subhead', async ({ page }) => {
      const subhead = page.getByTestId('thank-you-support-subhead');
      await expect(subhead).toBeVisible();
    });

    test('displays support buttons', async ({ page }) => {
      const buttons = page.getByTestId('thank-you-support-buttons');
      await expect(buttons).toBeVisible();
    });

    test('has contact support button', async ({ page }) => {
      const contactBtn = page.getByTestId('thank-you-contact-btn');
      await expect(contactBtn).toBeVisible();
      await expect(contactBtn).toContainText('Contact Support');
      await expect(contactBtn).toHaveAttribute('href', 'mailto:hello@latticelab.io');
    });

    test('has return to homepage button', async ({ page }) => {
      const homeBtn = page.getByTestId('thank-you-home-btn');
      await expect(homeBtn).toBeVisible();
      await expect(homeBtn).toContainText('Homepage');
      await expect(homeBtn).toHaveAttribute('href', '/');
    });

    test('shows quick start resources', async ({ page }) => {
      const info = page.getByTestId('thank-you-support-info');
      await expect(info).toBeVisible();
    });

    test('quick start info has title', async ({ page }) => {
      const title = page.getByTestId('thank-you-support-info-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Quick Start Resources');
    });

    test('quick start info has list items', async ({ page }) => {
      const list = page.getByTestId('thank-you-support-info-list');
      await expect(list).toBeVisible();

      const items = list.locator('li');
      await expect(items).toHaveCount(3);
    });

    test('mentions documentation in README', async ({ page }) => {
      const list = page.getByTestId('thank-you-support-info-list');
      await expect(list).toContainText('README');
    });

    test('mentions Docker deployment', async ({ page }) => {
      const list = page.getByTestId('thank-you-support-info-list');
      await expect(list).toContainText('Docker');
    });

    test('shows email contact at bottom', async ({ page }) => {
      const email = page.getByTestId('thank-you-email');
      await expect(email).toBeVisible();
    });

    test('email link is clickable', async ({ page }) => {
      const emailLink = page.getByTestId('thank-you-email-link');
      await expect(emailLink).toBeVisible();
      await expect(emailLink).toHaveAttribute('href', 'mailto:hello@latticelab.io');
      await expect(emailLink).toContainText('hello@latticelab.io');
    });
  });

  test.describe('Navigation & Layout', () => {
    test('header is visible', async ({ page }) => {
      const header = page.locator('header');
      await expect(header).toBeVisible();
    });

    test('footer is visible', async ({ page }) => {
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });

    test('homepage link works', async ({ page }) => {
      const homeBtn = page.getByTestId('thank-you-home-btn');
      await homeBtn.click();
      await expect(page).toHaveURL('/');
    });
  });

  test.describe('Responsive Design', () => {
    test('hero section adapts to mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const hero = page.getByTestId('thank-you-hero');
      await expect(hero).toBeVisible();

      const headline = page.getByTestId('thank-you-headline');
      await expect(headline).toBeVisible();
    });

    test('steps stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const stepsList = page.getByTestId('thank-you-steps-list');
      await expect(stepsList).toBeVisible();

      // All steps should still be visible
      for (let i = 0; i < 4; i++) {
        const step = page.getByTestId(`thank-you-step-${i}`);
        await expect(step).toBeVisible();
      }
    });

    test('expectations grid adapts to mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const grid = page.getByTestId('thank-you-expectations-grid');
      await expect(grid).toBeVisible();

      // All cards should still be visible
      for (let i = 0; i < 3; i++) {
        const card = page.getByTestId(`thank-you-expectation-${i}`);
        await expect(card).toBeVisible();
      }
    });

    test('support buttons stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const buttons = page.getByTestId('thank-you-support-buttons');
      await expect(buttons).toBeVisible();

      const contactBtn = page.getByTestId('thank-you-contact-btn');
      const homeBtn = page.getByTestId('thank-you-home-btn');
      await expect(contactBtn).toBeVisible();
      await expect(homeBtn).toBeVisible();
    });

    test('page renders correctly on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });

      const hero = page.getByTestId('thank-you-hero');
      const steps = page.getByTestId('thank-you-steps');
      const expectations = page.getByTestId('thank-you-expectations');
      const support = page.getByTestId('thank-you-support');

      await expect(hero).toBeVisible();
      await expect(steps).toBeVisible();
      await expect(expectations).toBeVisible();
      await expect(support).toBeVisible();
    });

    test('expectations display in 3-column grid on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const grid = page.getByTestId('thank-you-expectations-grid');
      await expect(grid).toHaveClass(/sm:grid-cols-3/);
    });
  });

  test.describe('Accessibility', () => {
    test('has proper heading hierarchy', async ({ page }) => {
      const h1 = page.locator('h1');
      await expect(h1).toHaveCount(1);

      const h2 = page.locator('h2');
      const h2Count = await h2.count();
      expect(h2Count).toBeGreaterThanOrEqual(3); // Steps, Expectations, Support headlines
    });

    test('success icon has aria-hidden', async ({ page }) => {
      const icon = page.getByTestId('thank-you-icon').locator('svg');
      await expect(icon).toHaveAttribute('aria-hidden', 'true');
    });

    test('buttons have accessible labels', async ({ page }) => {
      const contactBtn = page.getByTestId('thank-you-contact-btn');
      const homeBtn = page.getByTestId('thank-you-home-btn');

      const contactText = await contactBtn.textContent();
      const homeText = await homeBtn.textContent();

      expect(contactText?.length).toBeGreaterThan(0);
      expect(homeText?.length).toBeGreaterThan(0);
    });

    test('email links are accessible', async ({ page }) => {
      const emailLink = page.getByTestId('thank-you-email-link');
      await expect(emailLink).toHaveAttribute('href', 'mailto:hello@latticelab.io');
    });
  });

  test.describe('Content Accuracy', () => {
    test('mentions Lattice Lab product name', async ({ page }) => {
      const subhead = page.getByTestId('thank-you-subhead');
      await expect(subhead).toContainText('Lattice Lab');
    });

    test('mentions lifetime access', async ({ page }) => {
      const subhead = page.getByTestId('thank-you-subhead');
      await expect(subhead).toContainText('lifetime access');
    });

    test('mentions GitHub repository', async ({ page }) => {
      const step = page.getByTestId('thank-you-step-1-desc');
      await expect(step).toContainText('GitHub repository');
    });

    test('mentions 24-hour access timeline', async ({ page }) => {
      const timeline = page.getByTestId('thank-you-step-1-timeline');
      await expect(timeline).toContainText('24 hours');
    });

    test('mentions 5-minute setup', async ({ page }) => {
      const timeline = page.getByTestId('thank-you-step-3-timeline');
      await expect(timeline).toContainText('5 minutes');
    });

    test('mentions Docker deployment', async ({ page }) => {
      const step = page.getByTestId('thank-you-step-3-desc');
      await expect(step).toContainText('Docker');
    });

    test('includes correct support email', async ({ page }) => {
      const emailLink = page.getByTestId('thank-you-email-link');
      await expect(emailLink).toContainText('hello@latticelab.io');
    });
  });

  test.describe('Visual Elements', () => {
    test('success icon has green styling', async ({ page }) => {
      const iconContainer = page.getByTestId('thank-you-icon');
      await expect(iconContainer).toHaveClass(/bg-success/);
    });

    test('step numbers have accent styling', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const stepNumber = page.getByTestId(`thank-you-step-${i}-number`);
        await expect(stepNumber).toHaveClass(/bg-accent/);
      }
    });

    test('confirmation note has check icon', async ({ page }) => {
      const confirmation = page.getByTestId('thank-you-confirmation');
      const icon = confirmation.locator('svg');
      await expect(icon).toBeVisible();
    });

    test('quick start list items have check icons', async ({ page }) => {
      const list = page.getByTestId('thank-you-support-info-list');
      const icons = list.locator('svg');
      await expect(icons).toHaveCount(3);
    });
  });
});
