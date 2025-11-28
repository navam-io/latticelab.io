import { test, expect } from '@playwright/test';

/**
 * Feature Slice 9: Persona Cards & Social Proof (Verifiable)
 *
 * These tests verify the persona value proposition cards and
 * verifiable social proof sections on the homepage.
 */

test.describe('Feature 9: Persona Cards & Social Proof', () => {
  test.describe('Persona Cards Section', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('persona cards section is visible', async ({ page }) => {
      const section = page.getByTestId('persona-cards-section');
      await expect(section).toBeVisible();
    });

    test('persona section has eyebrow text', async ({ page }) => {
      const eyebrow = page.getByTestId('persona-eyebrow');
      await expect(eyebrow).toContainText('Built For You');
    });

    test('persona section has headline', async ({ page }) => {
      const headline = page.getByTestId('persona-headline');
      await expect(headline).toBeVisible();
    });

    test('persona section has subhead', async ({ page }) => {
      const subhead = page.getByTestId('persona-subhead');
      await expect(subhead).toBeVisible();
    });

    test('displays 3 persona cards', async ({ page }) => {
      const grid = page.getByTestId('persona-cards-grid');
      const cards = grid.locator('[data-testid^="persona-card-"]');
      await expect(cards).toHaveCount(3);
    });

    test('research engineer card is visible', async ({ page }) => {
      const card = page.getByTestId('persona-card-research-engineer');
      await expect(card).toBeVisible();
    });

    test('platform lead card is visible', async ({ page }) => {
      const card = page.getByTestId('persona-card-platform-lead');
      await expect(card).toBeVisible();
    });

    test('cto card is visible', async ({ page }) => {
      const card = page.getByTestId('persona-card-cto');
      await expect(card).toBeVisible();
    });
  });

  test.describe('Persona Cards - Benefit-Driven Headlines', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('research engineer has benefit headline about time savings', async ({
      page,
    }) => {
      const benefit = page.getByTestId('persona-benefit-research-engineer');
      await expect(benefit).toContainText('weeks');
      await expect(benefit).toContainText('hours');
    });

    test('platform lead has benefit headline about artifacts', async ({
      page,
    }) => {
      const benefit = page.getByTestId('persona-benefit-platform-lead');
      await expect(benefit).toContainText('Board-ready');
      await expect(benefit).toContainText('minutes');
    });

    test('cto has benefit headline about evidence', async ({ page }) => {
      const benefit = page.getByTestId('persona-benefit-cto');
      await expect(benefit).toContainText('De-risk');
      await expect(benefit).toContainText('evidence');
    });

    test('each card has persona title', async ({ page }) => {
      await expect(
        page.getByTestId('persona-title-research-engineer')
      ).toContainText('Research Engineer');
      await expect(
        page.getByTestId('persona-title-platform-lead')
      ).toContainText('Platform Lead');
      await expect(page.getByTestId('persona-title-cto')).toContainText('CTO');
    });

    test('each card has icon', async ({ page }) => {
      await expect(
        page.getByTestId('persona-icon-research-engineer')
      ).toBeVisible();
      await expect(
        page.getByTestId('persona-icon-platform-lead')
      ).toBeVisible();
      await expect(page.getByTestId('persona-icon-cto')).toBeVisible();
    });

    test('each card has description', async ({ page }) => {
      await expect(
        page.getByTestId('persona-description-research-engineer')
      ).toBeVisible();
      await expect(
        page.getByTestId('persona-description-platform-lead')
      ).toBeVisible();
      await expect(page.getByTestId('persona-description-cto')).toBeVisible();
    });
  });

  test.describe('Social Proof Section', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('social proof section is visible', async ({ page }) => {
      const section = page.getByTestId('social-proof-section');
      await expect(section).toBeVisible();
    });

    test('social proof has eyebrow text', async ({ page }) => {
      const eyebrow = page.getByTestId('social-proof-eyebrow');
      await expect(eyebrow).toContainText('Trusted by Engineers');
    });

    test('social proof has headline', async ({ page }) => {
      const headline = page.getByTestId('social-proof-headline');
      await expect(headline).toContainText('Teams Ship Faster');
    });

    test('social proof has subhead', async ({ page }) => {
      const subhead = page.getByTestId('social-proof-subhead');
      await expect(subhead).toBeVisible();
    });

    test('testimonials grid is visible (not carousel)', async ({ page }) => {
      const grid = page.getByTestId('testimonials-grid');
      await expect(grid).toBeVisible();
    });

    test('displays 3 testimonials', async ({ page }) => {
      // Count only the top-level testimonial cards (not nested elements)
      await expect(page.getByTestId('testimonial-1')).toBeVisible();
      await expect(page.getByTestId('testimonial-2')).toBeVisible();
      await expect(page.getByTestId('testimonial-3')).toBeVisible();
    });
  });

  test.describe('Verifiable Testimonial Structure', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('each testimonial has a quote', async ({ page }) => {
      await expect(page.getByTestId('testimonial-1-quote')).toBeVisible();
      await expect(page.getByTestId('testimonial-2-quote')).toBeVisible();
      await expect(page.getByTestId('testimonial-3-quote')).toBeVisible();
    });

    test('each testimonial has a photo placeholder', async ({ page }) => {
      await expect(page.getByTestId('testimonial-1-photo')).toBeVisible();
      await expect(page.getByTestId('testimonial-2-photo')).toBeVisible();
      await expect(page.getByTestId('testimonial-3-photo')).toBeVisible();
    });

    test('each testimonial has a name', async ({ page }) => {
      await expect(page.getByTestId('testimonial-1-name')).toBeVisible();
      await expect(page.getByTestId('testimonial-2-name')).toBeVisible();
      await expect(page.getByTestId('testimonial-3-name')).toBeVisible();
    });

    test('each testimonial has role and company', async ({ page }) => {
      await expect(page.getByTestId('testimonial-1-role')).toBeVisible();
      await expect(page.getByTestId('testimonial-2-role')).toBeVisible();
      await expect(page.getByTestId('testimonial-3-role')).toBeVisible();
    });

    test('each testimonial has source indicator', async ({ page }) => {
      const source1 = page.getByTestId('testimonial-1-source');
      const source2 = page.getByTestId('testimonial-2-source');
      const source3 = page.getByTestId('testimonial-3-source');

      await expect(source1).toBeVisible();
      await expect(source2).toBeVisible();
      await expect(source3).toBeVisible();
    });

    test('source indicators include platform names', async ({ page }) => {
      const sources = page.locator('[data-testid$="-source"]');
      const sourceTexts = await sources.allTextContents();
      const hasVia = sourceTexts.every((text) => text.includes('via'));
      expect(hasVia).toBe(true);
    });

    test('placeholder notice is visible', async ({ page }) => {
      const notice = page.getByTestId('testimonials-placeholder-notice');
      await expect(notice).toBeVisible();
      await expect(notice).toContainText('Representative');
    });
  });

  test.describe('Featured On Section', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('featured on section is visible', async ({ page }) => {
      const section = page.getByTestId('featured-on');
      await expect(section).toBeVisible();
    });

    test('featured on has label', async ({ page }) => {
      const label = page.getByTestId('featured-on-label');
      await expect(label).toContainText('Featured');
    });

    test('displays at least 3 publications', async ({ page }) => {
      const publications = page.getByTestId('featured-on-publications');
      const items = publications.locator('[data-testid^="publication-"]');
      const count = await items.count();
      expect(count).toBeGreaterThanOrEqual(3);
    });

    test('each publication has logo placeholder', async ({ page }) => {
      await expect(page.getByTestId('publication-logo-0')).toBeVisible();
      await expect(page.getByTestId('publication-logo-1')).toBeVisible();
      await expect(page.getByTestId('publication-logo-2')).toBeVisible();
    });

    test('each publication has name', async ({ page }) => {
      await expect(page.getByTestId('publication-name-0')).toBeVisible();
      await expect(page.getByTestId('publication-name-1')).toBeVisible();
      await expect(page.getByTestId('publication-name-2')).toBeVisible();
    });

    test('each publication has quote snippet', async ({ page }) => {
      await expect(page.getByTestId('publication-quote-0')).toBeVisible();
      await expect(page.getByTestId('publication-quote-1')).toBeVisible();
      await expect(page.getByTestId('publication-quote-2')).toBeVisible();
    });

    test('publication quotes are in italics', async ({ page }) => {
      const quote = page.getByTestId('publication-quote-0');
      await expect(quote).toHaveClass(/italic/);
    });

    test('featured on has placeholder notice', async ({ page }) => {
      const notice = page.getByTestId('featured-on-placeholder-notice');
      await expect(notice).toBeVisible();
    });
  });

  test.describe('Responsive Layout', () => {
    test('persona cards stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const grid = page.getByTestId('persona-cards-grid');
      await expect(grid).toBeVisible();

      // All cards should be visible (stacked vertically)
      await expect(
        page.getByTestId('persona-card-research-engineer')
      ).toBeVisible();
      await expect(
        page.getByTestId('persona-card-platform-lead')
      ).toBeVisible();
      await expect(page.getByTestId('persona-card-cto')).toBeVisible();
    });

    test('testimonials stack on mobile (not hidden in carousel)', async ({
      page,
    }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const grid = page.getByTestId('testimonials-grid');
      await expect(grid).toBeVisible();

      // All testimonials visible - not hidden
      await expect(page.getByTestId('testimonial-1')).toBeVisible();
      await expect(page.getByTestId('testimonial-2')).toBeVisible();
      await expect(page.getByTestId('testimonial-3')).toBeVisible();
    });

    test('featured on publications stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const section = page.getByTestId('featured-on');
      await expect(section).toBeVisible();

      // Publications should be visible (stacked)
      await expect(page.getByTestId('publication-0')).toBeVisible();
    });

    test('persona cards 3-column on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const grid = page.getByTestId('persona-cards-grid');
      await expect(grid).toHaveClass(/lg:grid-cols-3/);
    });

    test('testimonials 3-column on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const grid = page.getByTestId('testimonials-grid');
      await expect(grid).toHaveClass(/lg:grid-cols-3/);
    });
  });

  test.describe('CRO Compliance', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('testimonials are NOT in a carousel', async ({ page }) => {
      // Verify there is no carousel-like element
      const carouselElements = page.locator(
        '[class*="carousel"], [class*="slider"], [class*="swiper"]'
      );
      await expect(carouselElements).toHaveCount(0);
    });

    test('all testimonials visible without interaction', async ({ page }) => {
      // No need to click/swipe - all visible immediately
      await expect(page.getByTestId('testimonial-1')).toBeVisible();
      await expect(page.getByTestId('testimonial-2')).toBeVisible();
      await expect(page.getByTestId('testimonial-3')).toBeVisible();
    });

    test('persona headlines are outcome-focused (not feature-focused)', async ({
      page,
    }) => {
      const headlines = [
        await page.getByTestId('persona-benefit-research-engineer').textContent(),
        await page.getByTestId('persona-benefit-platform-lead').textContent(),
        await page.getByTestId('persona-benefit-cto').textContent(),
      ];

      // Check for outcome words (not feature words)
      const outcomeWords = ['Cut', 'Board-ready', 'De-risk', 'hours', 'minutes', 'evidence'];
      const hasOutcomes = headlines.some((headline) =>
        outcomeWords.some((word) => headline?.includes(word))
      );
      expect(hasOutcomes).toBe(true);
    });

    test('testimonials have verifiable structure', async ({ page }) => {
      // Each testimonial should have: photo, name, role, company, source
      const testimonial = page.getByTestId('testimonial-1');
      await expect(testimonial.getByTestId('testimonial-1-photo')).toBeVisible();
      await expect(testimonial.getByTestId('testimonial-1-name')).toBeVisible();
      await expect(testimonial.getByTestId('testimonial-1-role')).toBeVisible();
      await expect(testimonial.getByTestId('testimonial-1-source')).toBeVisible();
    });

    test('publications have quotes not just logos', async ({ page }) => {
      // Per CRO: "Not just logos — include snippet quote from each publication"
      await expect(page.getByTestId('publication-quote-0')).toBeVisible();
      const quoteText = await page
        .getByTestId('publication-quote-0')
        .textContent();
      expect(quoteText?.length).toBeGreaterThan(10);
    });
  });

  test.describe('Accessibility', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('persona icons are hidden from screen readers', async ({ page }) => {
      const icon = page.getByTestId('persona-icon-research-engineer').locator('svg');
      await expect(icon).toHaveAttribute('aria-hidden', 'true');
    });

    test('photo placeholders have accessible labels', async ({ page }) => {
      const photo = page.getByTestId('testimonial-1-photo');
      await expect(photo).toHaveAttribute('aria-label', /Photo of/);
    });

    test('publication logos have accessible labels', async ({ page }) => {
      const logo = page.getByTestId('publication-logo-0');
      await expect(logo).toHaveAttribute('aria-label', /logo/i);
    });
  });

  test.describe('Section Order on Homepage', () => {
    test('persona cards section appears after solution section', async ({
      page,
    }) => {
      await page.goto('/');

      const solutionSection = page.getByTestId('solution-section');
      const personaSection = page.getByTestId('persona-cards-section');

      const solutionBox = await solutionSection.boundingBox();
      const personaBox = await personaSection.boundingBox();

      expect(solutionBox?.y).toBeLessThan(personaBox?.y || 0);
    });

    test('social proof section appears after persona cards', async ({
      page,
    }) => {
      await page.goto('/');

      const personaSection = page.getByTestId('persona-cards-section');
      const socialSection = page.getByTestId('social-proof-section');

      const personaBox = await personaSection.boundingBox();
      const socialBox = await socialSection.boundingBox();

      expect(personaBox?.y).toBeLessThan(socialBox?.y || 0);
    });
  });
});
