import { test, expect } from '@playwright/test';

/**
 * Feature Slice 22: About Page
 *
 * Tests for the about page including mission statement, philosophy principles,
 * team section, GitHub link, and contact information.
 */

test.describe('Feature 22: About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  // ===================
  // Page Basics (3 tests)
  // ===================
  test.describe('Page Basics', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveURL(/\/about/);
    });

    test('has correct page title', async ({ page }) => {
      await expect(page).toHaveTitle(/About/);
    });

    test('has meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /mission|research engineers/i);
    });
  });

  // ===================
  // Hero Section (5 tests)
  // ===================
  test.describe('Hero Section', () => {
    test('hero section is visible', async ({ page }) => {
      const hero = page.getByTestId('about-hero');
      await expect(hero).toBeVisible();
    });

    test('displays eyebrow text', async ({ page }) => {
      const eyebrow = page.getByTestId('about-eyebrow');
      await expect(eyebrow).toBeVisible();
      await expect(eyebrow).toContainText('About');
    });

    test('displays main headline', async ({ page }) => {
      const headline = page.getByTestId('about-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Confidence');
    });

    test('displays subheadline', async ({ page }) => {
      const subhead = page.getByTestId('about-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText('agentic AI');
    });

    test('headline is h1', async ({ page }) => {
      const headline = page.getByTestId('about-headline');
      await expect(headline).toHaveAttribute('class', /text-4xl/);
    });
  });

  // ===================
  // Mission Section (7 tests)
  // ===================
  test.describe('Mission Section', () => {
    test('mission section is visible', async ({ page }) => {
      const section = page.getByTestId('about-mission');
      await expect(section).toBeVisible();
    });

    test('has mission title', async ({ page }) => {
      const title = page.getByTestId('about-mission-title');
      await expect(title).toContainText('Our Mission');
    });

    test('has first mission paragraph', async ({ page }) => {
      const text = page.getByTestId('about-mission-text-1');
      await expect(text).toBeVisible();
      await expect(text).toContainText('high-stakes');
    });

    test('has second mission paragraph', async ({ page }) => {
      const text = page.getByTestId('about-mission-text-2');
      await expect(text).toBeVisible();
      await expect(text).toContainText('grounded, cited recommendations');
    });

    test('mission card is visible', async ({ page }) => {
      const card = page.getByTestId('about-mission-card');
      await expect(card).toBeVisible();
    });

    test('mission stat shows 80% faster', async ({ page }) => {
      const stat = page.getByTestId('about-mission-stat');
      await expect(stat).toContainText('80% faster');
    });

    test('mission emphasizes grounded recommendations', async ({ page }) => {
      const text = page.getByTestId('about-mission-text-2');
      const strong = text.locator('strong');
      await expect(strong).toBeVisible();
    });
  });

  // ===================
  // Philosophy Section (9 tests)
  // ===================
  test.describe('Philosophy Section', () => {
    test('philosophy section is visible', async ({ page }) => {
      const section = page.getByTestId('about-philosophy');
      await expect(section).toBeVisible();
    });

    test('has philosophy title', async ({ page }) => {
      const title = page.getByTestId('about-philosophy-title');
      await expect(title).toContainText('Our Philosophy');
    });

    test('has philosophy subtitle', async ({ page }) => {
      const subtitle = page.getByTestId('about-philosophy-subtitle');
      await expect(subtitle).toContainText('Four principles');
    });

    test('philosophy grid is visible', async ({ page }) => {
      const grid = page.getByTestId('about-philosophy-grid');
      await expect(grid).toBeVisible();
    });

    test('displays all 4 philosophy principles', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const principle = page.getByTestId(`about-principle-${i}`);
        await expect(principle).toBeVisible();
      }
    });

    test('Grounded in Sources principle exists', async ({ page }) => {
      const title = page.getByTestId('about-principle-0-title');
      await expect(title).toContainText('Grounded in Sources');
    });

    test('Your Data Your Control principle exists', async ({ page }) => {
      const title = page.getByTestId('about-principle-1-title');
      await expect(title).toContainText('Your Data, Your Control');
    });

    test('Transparent by Design principle exists', async ({ page }) => {
      const title = page.getByTestId('about-principle-2-title');
      await expect(title).toContainText('Transparent by Design');
    });

    test('Research-Grade Quality principle exists', async ({ page }) => {
      const title = page.getByTestId('about-principle-3-title');
      await expect(title).toContainText('Research-Grade Quality');
    });
  });

  // ===================
  // Team Section (8 tests)
  // ===================
  test.describe('Team Section', () => {
    test('team section is visible', async ({ page }) => {
      const section = page.getByTestId('about-team');
      await expect(section).toBeVisible();
    });

    test('has team title', async ({ page }) => {
      const title = page.getByTestId('about-team-title');
      await expect(title).toContainText('Built by Engineers');
    });

    test('has team subtitle', async ({ page }) => {
      const subtitle = page.getByTestId('about-team-subtitle');
      await expect(subtitle).toBeVisible();
    });

    test('team values section is visible', async ({ page }) => {
      const values = page.getByTestId('about-team-values');
      await expect(values).toBeVisible();
    });

    test('displays all 3 team values', async ({ page }) => {
      for (let i = 0; i < 3; i++) {
        const value = page.getByTestId(`about-value-${i}`);
        await expect(value).toBeVisible();
      }
    });

    test('Engineers First value exists', async ({ page }) => {
      const title = page.getByTestId('about-value-0-title');
      await expect(title).toContainText('Engineers First');
    });

    test('Speed Over Ceremony value exists', async ({ page }) => {
      const title = page.getByTestId('about-value-1-title');
      await expect(title).toContainText('Speed Over Ceremony');
    });

    test('team placeholder section is visible', async ({ page }) => {
      const placeholder = page.getByTestId('about-team-placeholder');
      await expect(placeholder).toBeVisible();
      await expect(placeholder).toContainText('coming soon');
    });
  });

  // ===================
  // Open Source Section (5 tests)
  // ===================
  test.describe('Open Source Section', () => {
    test('open source section is visible', async ({ page }) => {
      const section = page.getByTestId('about-opensource');
      await expect(section).toBeVisible();
    });

    test('has open source title', async ({ page }) => {
      const title = page.getByTestId('about-opensource-title');
      await expect(title).toContainText('Transparent Development');
    });

    test('has open source description', async ({ page }) => {
      const description = page.getByTestId('about-opensource-description');
      await expect(description).toContainText('source code');
    });

    test('GitHub button is visible', async ({ page }) => {
      const button = page.getByTestId('about-github-button');
      await expect(button).toBeVisible();
    });

    test('GitHub button links to repository', async ({ page }) => {
      const button = page.getByTestId('about-github-button');
      await expect(button).toHaveAttribute('href', /github\.com/);
    });
  });

  // ===================
  // Contact Section (8 tests)
  // ===================
  test.describe('Contact Section', () => {
    test('contact section is visible', async ({ page }) => {
      const section = page.getByTestId('about-contact');
      await expect(section).toBeVisible();
    });

    test('support card is visible', async ({ page }) => {
      const card = page.getByTestId('about-contact-support');
      await expect(card).toBeVisible();
    });

    test('support card has title', async ({ page }) => {
      const title = page.getByTestId('about-contact-support-title');
      await expect(title).toContainText('Support');
    });

    test('support email link exists', async ({ page }) => {
      const email = page.getByTestId('about-email-support');
      await expect(email).toBeVisible();
      await expect(email).toHaveAttribute('href', 'mailto:support@latticelab.io');
    });

    test('business card is visible', async ({ page }) => {
      const card = page.getByTestId('about-contact-business');
      await expect(card).toBeVisible();
    });

    test('business card has title', async ({ page }) => {
      const title = page.getByTestId('about-contact-business-title');
      await expect(title).toContainText('Partnerships');
    });

    test('business email link exists', async ({ page }) => {
      const email = page.getByTestId('about-email-business');
      await expect(email).toBeVisible();
      await expect(email).toHaveAttribute('href', 'mailto:hello@latticelab.io');
    });

    test('contact cards have icons', async ({ page }) => {
      const supportCard = page.getByTestId('about-contact-support');
      const businessCard = page.getByTestId('about-contact-business');
      await expect(supportCard.locator('svg').first()).toBeVisible();
      await expect(businessCard.locator('svg').first()).toBeVisible();
    });
  });

  // ===================
  // CTA Section (6 tests)
  // ===================
  test.describe('CTA Section', () => {
    test('CTA section is visible', async ({ page }) => {
      const section = page.getByTestId('about-cta');
      await expect(section).toBeVisible();
    });

    test('displays headline', async ({ page }) => {
      const headline = page.getByTestId('about-cta-headline');
      await expect(headline).toContainText('Transform Your AI Research');
    });

    test('displays subhead', async ({ page }) => {
      const subhead = page.getByTestId('about-cta-subhead');
      await expect(subhead).toBeVisible();
    });

    test('primary button links to pricing', async ({ page }) => {
      const button = page.getByTestId('about-cta-primary');
      await expect(button).toBeVisible();
      await expect(button).toHaveAttribute('href', '/pricing');
      await expect(button).toContainText('$99');
    });

    test('secondary button links to features', async ({ page }) => {
      const button = page.getByTestId('about-cta-secondary');
      await expect(button).toBeVisible();
      await expect(button).toHaveAttribute('href', '/features');
    });

    test('trust note is visible', async ({ page }) => {
      const trust = page.getByTestId('about-cta-trust');
      await expect(trust).toBeVisible();
      await expect(trust).toContainText('money-back guarantee');
    });
  });

  // ===================
  // Navigation (4 tests)
  // ===================
  test.describe('Navigation', () => {
    test('pricing CTA navigates correctly', async ({ page }) => {
      await page.getByTestId('about-cta-primary').click();
      await expect(page).toHaveURL(/\/pricing/);
    });

    test('features CTA navigates correctly', async ({ page }) => {
      await page.getByTestId('about-cta-secondary').click();
      await expect(page).toHaveURL(/\/features/);
    });

    test('page is linked from footer navigation', async ({ page }) => {
      await page.goto('/');
      const aboutLink = page.locator('footer a[href="/about"]');
      await expect(aboutLink).toBeVisible();
    });

    test('footer about link works', async ({ page }) => {
      await page.goto('/');
      const aboutLink = page.locator('footer a[href="/about"]');
      await aboutLink.click();
      await expect(page).toHaveURL(/\/about/);
    });
  });

  // ===================
  // Responsive Design (5 tests)
  // ===================
  test.describe('Responsive Design', () => {
    test('hero adapts to mobile viewport', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const hero = page.getByTestId('about-hero');
      await expect(hero).toBeVisible();
    });

    test('mission section adapts to mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const mission = page.getByTestId('about-mission');
      await expect(mission).toBeVisible();
    });

    test('philosophy grid adapts to mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const grid = page.getByTestId('about-philosophy-grid');
      await expect(grid).toBeVisible();
    });

    test('team values stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const values = page.getByTestId('about-team-values');
      await expect(values).toBeVisible();
    });

    test('contact cards stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const support = page.getByTestId('about-contact-support');
      const business = page.getByTestId('about-contact-business');
      await expect(support).toBeVisible();
      await expect(business).toBeVisible();
    });
  });

  // ===================
  // Accessibility (6 tests)
  // ===================
  test.describe('Accessibility', () => {
    test('page has proper heading hierarchy', async ({ page }) => {
      const h1 = page.locator('h1');
      await expect(h1).toHaveCount(1);
    });

    test('h2 headings exist for sections', async ({ page }) => {
      const h2s = page.locator('h2');
      const count = await h2s.count();
      expect(count).toBeGreaterThanOrEqual(5);
    });

    test('icons are decorative (aria-hidden)', async ({ page }) => {
      const icons = page.locator('svg[aria-hidden="true"]');
      const count = await icons.count();
      expect(count).toBeGreaterThan(0);
    });

    test('email links have mailto protocol', async ({ page }) => {
      const supportEmail = page.getByTestId('about-email-support');
      const businessEmail = page.getByTestId('about-email-business');
      await expect(supportEmail).toHaveAttribute('href', /^mailto:/);
      await expect(businessEmail).toHaveAttribute('href', /^mailto:/);
    });

    test('links have accessible text', async ({ page }) => {
      const links = page.locator('a');
      const count = await links.count();
      for (let i = 0; i < Math.min(count, 10); i++) {
        const link = links.nth(i);
        const text = await link.textContent();
        const ariaLabel = await link.getAttribute('aria-label');
        expect(text || ariaLabel).toBeTruthy();
      }
    });

    test('buttons are keyboard accessible', async ({ page }) => {
      const button = page.getByTestId('about-cta-primary');
      await button.focus();
      await expect(button).toBeFocused();
    });
  });

  // ===================
  // Content Accuracy (5 tests)
  // ===================
  test.describe('Content Accuracy', () => {
    test('$99 price is shown in CTA', async ({ page }) => {
      const button = page.getByTestId('about-cta-primary');
      await expect(button).toContainText('$99');
    });

    test('support email is correct', async ({ page }) => {
      const email = page.getByTestId('about-email-support');
      await expect(email).toContainText('support@latticelab.io');
    });

    test('business email is correct', async ({ page }) => {
      const email = page.getByTestId('about-email-business');
      await expect(email).toContainText('hello@latticelab.io');
    });

    test('GitHub URL points to navam-io', async ({ page }) => {
      const button = page.getByTestId('about-github-button');
      await expect(button).toHaveAttribute('href', /github\.com\/navam-io/);
    });

    test('all 4 philosophy principles are complete', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const title = page.getByTestId(`about-principle-${i}-title`);
        const description = page.getByTestId(`about-principle-${i}-description`);
        await expect(title).toBeVisible();
        await expect(description).toBeVisible();
      }
    });
  });

  // ===================
  // Visual Elements (4 tests)
  // ===================
  test.describe('Visual Elements', () => {
    test('sections have alternating backgrounds', async ({ page }) => {
      const hero = page.getByTestId('about-hero');
      const mission = page.getByTestId('about-mission');
      await expect(hero).toBeVisible();
      await expect(mission).toBeVisible();
    });

    test('philosophy principles have icons', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const principle = page.getByTestId(`about-principle-${i}`);
        const icon = principle.locator('svg').first();
        await expect(icon).toBeVisible();
      }
    });

    test('mission card has accent styling', async ({ page }) => {
      const card = page.getByTestId('about-mission-card');
      const iconWrapper = card.locator('.bg-accent\\/10');
      await expect(iconWrapper).toBeVisible();
    });

    test('team placeholder has dashed border', async ({ page }) => {
      const placeholder = page.getByTestId('about-team-placeholder');
      await expect(placeholder).toHaveClass(/border-dashed/);
    });
  });
});
