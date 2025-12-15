import { test, expect } from '@playwright/test';

test.describe('Homepage Assembly', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test.describe('Page Structure', () => {
    test('page loads correctly', async ({ page }) => {
      await expect(page).toHaveTitle(/Lattice/);
    });

    test('header is visible', async ({ page }) => {
      const header = page.locator('header').first();
      await expect(header).toBeVisible();
    });

    test('main content area exists', async ({ page }) => {
      const main = page.locator('main');
      await expect(main).toBeVisible();
    });

    test('footer is visible', async ({ page }) => {
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });
  });

  test.describe('Hero Section', () => {
    test('hero section is visible', async ({ page }) => {
      const hero = page.getByTestId('homepage-hero');
      await expect(hero).toBeVisible();
    });

    test('hero headline is visible', async ({ page }) => {
      const headline = page.getByTestId('homepage-hero-headline');
      await expect(headline).toBeVisible();
    });

    test('hero headline contains Lattice', async ({ page }) => {
      const headline = page.getByTestId('homepage-hero-headline');
      await expect(headline).toContainText('Lattice');
    });

    test('hero tagline is visible', async ({ page }) => {
      const tagline = page.getByTestId('homepage-hero-tagline');
      await expect(tagline).toBeVisible();
    });

    test('hero CTAs are visible', async ({ page }) => {
      const ctas = page.getByTestId('homepage-hero-ctas');
      await expect(ctas).toBeVisible();
    });

    test('hero buy button is visible', async ({ page }) => {
      const buyButton = page.getByTestId('homepage-hero-buy-button');
      await expect(buyButton).toBeVisible();
    });

    test('hero learn more button is visible', async ({ page }) => {
      const learnMore = page.getByTestId('homepage-hero-learn-more');
      await expect(learnMore).toBeVisible();
    });

    test('hero product image container is visible', async ({ page }) => {
      const productImage = page.getByTestId('homepage-hero-product-image');
      await expect(productImage).toBeVisible();
    });
  });

  test.describe('Vendor Ticker', () => {
    test('vendor ticker section exists', async ({ page }) => {
      const ticker = page.locator('section').filter({ hasText: 'Curated Blueprints from Leading AI Vendors' });
      await expect(ticker).toBeAttached();
    });
  });

  test.describe('Feature Grid Section', () => {
    test('feature grid section is visible', async ({ page }) => {
      const featureGrid = page.getByTestId('homepage-features');
      await expect(featureGrid).toBeVisible();
    });

    test('feature grid header is visible', async ({ page }) => {
      const header = page.getByTestId('homepage-features-header');
      await expect(header).toBeVisible();
    });

    test('feature grid title is correct', async ({ page }) => {
      const title = page.getByTestId('homepage-features-title');
      await expect(title).toContainText('Core Features');
    });

    test('feature grid has 4 feature cards', async ({ page }) => {
      const grid = page.getByTestId('homepage-features-grid');
      const cards = grid.locator('article');
      await expect(cards).toHaveCount(4);
    });

    test('sources card is visible', async ({ page }) => {
      const sourcesCard = page.getByTestId('homepage-features-sources');
      await expect(sourcesCard).toBeVisible();
    });

    test('lab card is visible', async ({ page }) => {
      const labCard = page.getByTestId('homepage-features-lab');
      await expect(labCard).toBeVisible();
    });

    test('studio card is visible', async ({ page }) => {
      const studioCard = page.getByTestId('homepage-features-studio');
      await expect(studioCard).toBeVisible();
    });

    test('blueprints card is visible', async ({ page }) => {
      const blueprintsCard = page.getByTestId('homepage-features-blueprints');
      await expect(blueprintsCard).toBeVisible();
    });
  });

  test.describe('Tools Carousel Section', () => {
    test('tools carousel section is visible', async ({ page }) => {
      const toolsCarousel = page.getByTestId('homepage-tools');
      await expect(toolsCarousel).toBeVisible();
    });

    test('tools carousel header is visible', async ({ page }) => {
      const header = page.getByTestId('homepage-tools-header');
      await expect(header).toBeVisible();
    });

    test('tools carousel title is correct', async ({ page }) => {
      const title = page.getByTestId('homepage-tools-title');
      await expect(title).toContainText('Powerful Tools');
    });

    test('tools grid exists', async ({ page }) => {
      const grid = page.getByTestId('homepage-tools-grid');
      await expect(grid).toBeAttached();
    });

    test('accelerator registry tool card is visible', async ({ page }) => {
      const card = page.getByTestId('homepage-tools-tool-accelerator-registry');
      await expect(card).toBeVisible();
    });

    test('memory calculator tool card is visible', async ({ page }) => {
      const card = page.getByTestId('homepage-tools-tool-memory-calculator');
      await expect(card).toBeVisible();
    });
  });

  test.describe('Use Cases Section', () => {
    test('use cases section is visible', async ({ page }) => {
      const useCases = page.locator('section').filter({ hasText: 'Built for AI Infrastructure Decisions' });
      await expect(useCases).toBeVisible();
    });

    test('research engineers card is visible', async ({ page }) => {
      const card = page.locator('text=Research Engineers').first();
      await expect(card).toBeVisible();
    });

    test('platform leads card is visible', async ({ page }) => {
      const card = page.locator('text=Platform Leads').first();
      await expect(card).toBeVisible();
    });

    test('CTOs card is visible', async ({ page }) => {
      const card = page.locator('text=CTOs & Technical Leaders').first();
      await expect(card).toBeVisible();
    });
  });

  test.describe('Pricing Section', () => {
    test('pricing section is visible', async ({ page }) => {
      const pricing = page.getByTestId('homepage-pricing');
      await expect(pricing).toBeVisible();
    });

    test('pricing header is visible', async ({ page }) => {
      const header = page.getByTestId('homepage-pricing-header');
      await expect(header).toBeVisible();
    });

    test('pricing title is correct', async ({ page }) => {
      const title = page.getByTestId('homepage-pricing-title');
      await expect(title).toContainText('Simple, One-Time Pricing');
    });

    test('pricing card is visible', async ({ page }) => {
      const card = page.getByTestId('homepage-pricing-card');
      await expect(card).toBeVisible();
    });

    test('price is displayed', async ({ page }) => {
      const price = page.getByTestId('homepage-pricing-price');
      await expect(price).toContainText('$99');
    });

    test('pricing tagline is visible', async ({ page }) => {
      const tagline = page.getByTestId('homepage-pricing-tagline');
      await expect(tagline).toBeVisible();
    });

    test('pricing features list is visible', async ({ page }) => {
      const features = page.getByTestId('homepage-pricing-features');
      await expect(features).toBeVisible();
    });
  });

  test.describe('FAQ Section', () => {
    test('FAQ section is visible', async ({ page }) => {
      const faq = page.locator('section').filter({ hasText: 'Frequently Asked Questions' });
      await expect(faq).toBeVisible();
    });
  });

  test.describe('CTA Banner Section', () => {
    test('CTA banner section is visible', async ({ page }) => {
      const ctaBanner = page.getByTestId('homepage-cta');
      await expect(ctaBanner).toBeVisible();
    });

    test('CTA banner headline is visible', async ({ page }) => {
      const headline = page.getByTestId('homepage-cta-headline');
      await expect(headline).toBeVisible();
    });

    test('CTA banner headline text is correct', async ({ page }) => {
      const headline = page.getByTestId('homepage-cta-headline');
      await expect(headline).toContainText('Start Making Confident Decisions');
    });

    test('CTA banner subheadline is visible', async ({ page }) => {
      const subheadline = page.getByTestId('homepage-cta-subheadline');
      await expect(subheadline).toBeVisible();
    });

    test('CTA banner primary button is visible', async ({ page }) => {
      const primaryCTA = page.getByTestId('homepage-cta-primary-cta');
      await expect(primaryCTA).toBeVisible();
    });

    test('CTA banner primary button text is correct', async ({ page }) => {
      const primaryCTA = page.getByTestId('homepage-cta-primary-cta');
      await expect(primaryCTA).toContainText('Get Started');
    });

    test('CTA banner secondary button is visible', async ({ page }) => {
      const secondaryCTA = page.getByTestId('homepage-cta-secondary-cta');
      await expect(secondaryCTA).toBeVisible();
    });

    test('CTA banner secondary button text is correct', async ({ page }) => {
      const secondaryCTA = page.getByTestId('homepage-cta-secondary-cta');
      await expect(secondaryCTA).toContainText('View Documentation');
    });

    test('CTA banner gradient background exists', async ({ page }) => {
      const gradient = page.getByTestId('homepage-cta-gradient');
      await expect(gradient).toBeAttached();
    });
  });

  test.describe('Section Order and Flow', () => {
    test('hero comes before features', async ({ page }) => {
      const hero = page.getByTestId('homepage-hero');
      const features = page.getByTestId('homepage-features');

      const heroBox = await hero.boundingBox();
      const featuresBox = await features.boundingBox();

      expect(heroBox).toBeTruthy();
      expect(featuresBox).toBeTruthy();
      expect(heroBox!.y).toBeLessThan(featuresBox!.y);
    });

    test('features come before tools', async ({ page }) => {
      const features = page.getByTestId('homepage-features');
      const tools = page.getByTestId('homepage-tools');

      const featuresBox = await features.boundingBox();
      const toolsBox = await tools.boundingBox();

      expect(featuresBox).toBeTruthy();
      expect(toolsBox).toBeTruthy();
      expect(featuresBox!.y).toBeLessThan(toolsBox!.y);
    });

    test('pricing comes before CTA banner', async ({ page }) => {
      const pricing = page.getByTestId('homepage-pricing');
      const cta = page.getByTestId('homepage-cta');

      const pricingBox = await pricing.boundingBox();
      const ctaBox = await cta.boundingBox();

      expect(pricingBox).toBeTruthy();
      expect(ctaBox).toBeTruthy();
      expect(pricingBox!.y).toBeLessThan(ctaBox!.y);
    });
  });

  test.describe('Navigation Links', () => {
    test('features anchor link works', async ({ page }) => {
      // Navigate to /#features
      await page.goto('/#features');
      await page.waitForLoadState('domcontentloaded');

      const features = page.getByTestId('homepage-features');
      await expect(features).toBeVisible();
    });

    test('pricing anchor link works', async ({ page }) => {
      // Navigate to /#pricing
      await page.goto('/#pricing');
      await page.waitForLoadState('domcontentloaded');

      const pricing = page.getByTestId('homepage-pricing');
      await expect(pricing).toBeVisible();
    });
  });

  test.describe('Responsive Behavior', () => {
    test('homepage is visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const hero = page.getByTestId('homepage-hero');
      await expect(hero).toBeVisible();
    });

    test('homepage is visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      const hero = page.getByTestId('homepage-hero');
      await expect(hero).toBeVisible();
    });

    test('homepage is visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const hero = page.getByTestId('homepage-hero');
      await expect(hero).toBeVisible();
    });

    test('all sections visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      const hero = page.getByTestId('homepage-hero');
      const features = page.getByTestId('homepage-features');
      const tools = page.getByTestId('homepage-tools');
      const pricing = page.getByTestId('homepage-pricing');
      const cta = page.getByTestId('homepage-cta');

      await expect(hero).toBeVisible();
      await expect(features).toBeVisible();
      await expect(tools).toBeVisible();
      await expect(pricing).toBeVisible();
      await expect(cta).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('page has main landmark', async ({ page }) => {
      const main = page.locator('main');
      await expect(main).toBeAttached();
    });

    test('page has header landmark', async ({ page }) => {
      const header = page.getByTestId('header');
      await expect(header).toBeAttached();
    });

    test('page has footer landmark', async ({ page }) => {
      const footer = page.locator('footer');
      await expect(footer).toBeAttached();
    });

    test('hero headline is h1', async ({ page }) => {
      const headline = page.getByTestId('homepage-hero-headline');
      const tagName = await headline.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('h1');
    });

    test('feature grid title is h2', async ({ page }) => {
      const title = page.getByTestId('homepage-features-title');
      const tagName = await title.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('h2');
    });

    test('CTA banner headline is h2', async ({ page }) => {
      const headline = page.getByTestId('homepage-cta-headline');
      const tagName = await headline.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('h2');
    });
  });
});
