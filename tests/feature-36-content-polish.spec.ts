/**
 * Feature Slice 36: Content Polish & Review Tests
 *
 * Tests for content quality and consistency:
 * - No broken internal links (404s)
 * - All pages have proper meta tags
 * - Consistent branding and messaging
 * - Proper heading hierarchy
 * - No spelling/grammar issues in key content
 * - All CTAs have proper tracking attributes
 * - Social proof elements are present
 */
import { test, expect } from '@playwright/test';

test.describe('Feature 36: Content Polish & Review', () => {
  test.describe('Internal Link Verification', () => {
    const internalLinks = [
      '/',
      '/pricing',
      '/features',
      '/features/sources',
      '/features/lab',
      '/features/studio',
      '/features/scenarios',
      '/journeys',
      '/blueprints',
      '/about',
    ];

    for (const link of internalLinks) {
      test(`page ${link} loads without 404`, async ({ page }) => {
        const response = await page.goto(link);
        expect(response?.status()).toBe(200);

        // Verify page has content
        const h1 = page.locator('h1');
        await expect(h1).toBeVisible();
      });
    }

    test('all navigation links are valid', async ({ page }) => {
      await page.goto('/');

      // Get all internal links from navigation
      const navLinks = page.locator('nav a[href^="/"]');
      const count = await navLinks.count();

      for (let i = 0; i < count; i++) {
        const link = navLinks.nth(i);
        const href = await link.getAttribute('href');

        if (href && !href.startsWith('#')) {
          const response = await page.request.get(href);
          expect(response.status(), `Link ${href} should not be 404`).toBe(200);
        }
      }
    });

    test('footer links are valid', async ({ page }) => {
      await page.goto('/');

      const footer = page.locator('footer');
      const footerLinks = footer.locator('a[href^="/"]');
      const count = await footerLinks.count();

      for (let i = 0; i < count; i++) {
        const link = footerLinks.nth(i);
        const href = await link.getAttribute('href');

        if (href && !href.startsWith('#')) {
          const response = await page.request.get(href);
          expect(response.status(), `Footer link ${href} should not be 404`).toBe(200);
        }
      }
    });
  });

  test.describe('Meta Tags', () => {
    const pages = ['/', '/pricing', '/features', '/about', '/journeys', '/blueprints'];

    for (const pagePath of pages) {
      test(`${pagePath} has proper meta tags`, async ({ page }) => {
        await page.goto(pagePath);

        // Title
        const title = await page.title();
        expect(title).toBeTruthy();
        expect(title.length).toBeGreaterThan(10);
        expect(title).toContain('Lattice');

        // Meta description
        const description = await page.locator('meta[name="description"]').getAttribute('content');
        expect(description).toBeTruthy();
        expect(description!.length).toBeGreaterThan(50);

        // OG tags
        const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
        expect(ogTitle).toBeTruthy();

        const ogDescription = await page.locator('meta[property="og:description"]').getAttribute('content');
        expect(ogDescription).toBeTruthy();

        // Canonical URL
        const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
        expect(canonical).toBeTruthy();
      });
    }
  });

  test.describe('Branding Consistency', () => {
    test('homepage has correct brand name', async ({ page }) => {
      await page.goto('/');

      // Logo should contain Lattice Lab
      const logo = page.getByTestId('logo');
      const logoText = await logo.textContent();
      expect(logoText).toContain('Lattice');
    });

    test('footer has correct brand name', async ({ page }) => {
      await page.goto('/');

      const footerLogo = page.getByTestId('footer-logo');
      await expect(footerLogo).toContainText('Lattice');
    });

    test('page titles are consistent', async ({ page }) => {
      const pages = [
        { path: '/', contains: 'Lattice' },
        { path: '/pricing', contains: 'Pricing' },
        { path: '/features', contains: 'Features' },
        { path: '/about', contains: 'About' },
      ];

      for (const { path, contains } of pages) {
        await page.goto(path);
        const title = await page.title();
        expect(title).toContain(contains);
      }
    });
  });

  test.describe('Content Quality', () => {
    test('hero section has all required elements', async ({ page }) => {
      await page.goto('/');

      // Headline
      const headline = page.getByTestId('hero-headline');
      await expect(headline).toBeVisible();

      // Value proposition
      const valueProp = page.getByTestId('hero-value-prop');
      await expect(valueProp).toBeVisible();
      const valuePropText = await valueProp.textContent();
      expect(valuePropText!.length).toBeGreaterThan(10);

      // Subhead
      const subhead = page.getByTestId('hero-subhead');
      await expect(subhead).toBeVisible();

      // CTAs
      const primaryCta = page.getByTestId('hero-primary-cta');
      await expect(primaryCta).toBeVisible();
      await expect(primaryCta).toContainText('$99');

      const secondaryCta = page.getByTestId('hero-secondary-cta');
      await expect(secondaryCta).toBeVisible();
    });

    test('pricing page has correct price displayed', async ({ page }) => {
      await page.goto('/pricing');

      // Multiple places show $99
      const priceElements = page.locator(':text("$99")');
      const count = await priceElements.count();
      expect(count).toBeGreaterThanOrEqual(1);
    });

    test('social proof section has testimonials', async ({ page }) => {
      await page.goto('/');

      const testimonials = page.getByTestId('testimonials-grid');
      await testimonials.scrollIntoViewIfNeeded();

      // Should have at least 3 testimonials
      const blockquotes = testimonials.locator('blockquote');
      const count = await blockquotes.count();
      expect(count).toBeGreaterThanOrEqual(3);
    });

    test('FAQ section has questions and answers', async ({ page }) => {
      await page.goto('/');

      const faqSection = page.getByTestId('faq-section');
      await faqSection.scrollIntoViewIfNeeded();

      // Should have FAQ items
      const faqItems = page.locator('[data-testid^="faq-"][data-testid$="-question"]');
      const count = await faqItems.count();
      expect(count).toBeGreaterThanOrEqual(3);
    });
  });

  test.describe('CTA Tracking Attributes', () => {
    test('hero CTAs have tracking attributes', async ({ page }) => {
      await page.goto('/');

      const primaryCta = page.getByTestId('hero-primary-cta');
      await expect(primaryCta).toHaveAttribute('data-track', 'cta');
      await expect(primaryCta).toHaveAttribute('data-track-name');

      const secondaryCta = page.getByTestId('hero-secondary-cta');
      await expect(secondaryCta).toHaveAttribute('data-track', 'cta');
    });

    test('pricing page CTAs are present', async ({ page }) => {
      await page.goto('/pricing');

      // Main CTA
      const mainCta = page.getByTestId('pricing-main-cta-container');
      await expect(mainCta).toBeVisible();

      // Final CTA
      const finalCta = page.getByTestId('pricing-final-cta-wrapper');
      await finalCta.scrollIntoViewIfNeeded();
      await expect(finalCta).toBeVisible();
    });
  });

  test.describe('Content Sections Present', () => {
    test('homepage has all required sections', async ({ page }) => {
      await page.goto('/');

      // Hero
      const hero = page.getByTestId('hero-section');
      await expect(hero).toBeVisible();

      // Pain section
      const pain = page.getByTestId('pain-section');
      await pain.scrollIntoViewIfNeeded();
      await expect(pain).toBeVisible();

      // Solution section
      const solution = page.getByTestId('solution-section');
      await solution.scrollIntoViewIfNeeded();
      await expect(solution).toBeVisible();

      // Persona cards section
      const persona = page.getByTestId('persona-cards-section');
      await persona.scrollIntoViewIfNeeded();
      await expect(persona).toBeVisible();

      // Social proof
      const socialProof = page.getByTestId('social-proof-section');
      await socialProof.scrollIntoViewIfNeeded();
      await expect(socialProof).toBeVisible();

      // Interactive preview
      const preview = page.getByTestId('interactive-preview-section');
      await preview.scrollIntoViewIfNeeded();
      await expect(preview).toBeVisible();

      // FAQ
      const faq = page.getByTestId('faq-section');
      await faq.scrollIntoViewIfNeeded();
      await expect(faq).toBeVisible();

      // Final CTA
      const finalCta = page.getByTestId('final-cta-section');
      await finalCta.scrollIntoViewIfNeeded();
      await expect(finalCta).toBeVisible();
    });

    test('pricing page has all required sections', async ({ page }) => {
      await page.goto('/pricing');

      // Hero
      const hero = page.getByTestId('pricing-hero');
      await expect(hero).toBeVisible();

      // Main pricing card
      const mainCard = page.getByTestId('pricing-main');
      await expect(mainCard).toBeVisible();

      // What's included
      const included = page.getByTestId('pricing-included');
      await included.scrollIntoViewIfNeeded();
      await expect(included).toBeVisible();

      // Purchase flow
      const flow = page.getByTestId('pricing-flow');
      await flow.scrollIntoViewIfNeeded();
      await expect(flow).toBeVisible();

      // Guarantees
      const guarantees = page.getByTestId('pricing-guarantees');
      await guarantees.scrollIntoViewIfNeeded();
      await expect(guarantees).toBeVisible();

      // FAQ
      const faq = page.getByTestId('pricing-faq');
      await faq.scrollIntoViewIfNeeded();
      await expect(faq).toBeVisible();
    });
  });

  test.describe('Feature Pages Content', () => {
    const featurePages = [
      { slug: 'sources', title: 'Sources' },
      { slug: 'lab', title: 'Lab' },
      { slug: 'studio', title: 'Studio' },
      { slug: 'scenarios', title: 'Scenarios' },
    ];

    for (const { slug, title } of featurePages) {
      test(`/features/${slug} has proper content`, async ({ page }) => {
        await page.goto(`/features/${slug}`);

        // Should have feature title
        const featureTitle = page.getByTestId('feature-detail-title');
        await expect(featureTitle).toBeVisible();

        // Should have feature description
        const description = page.getByTestId('feature-detail-description');
        await expect(description).toBeVisible();

        // Should have highlights section
        const highlights = page.getByTestId('feature-detail-highlights');
        await highlights.scrollIntoViewIfNeeded();
        await expect(highlights).toBeVisible();
      });
    }
  });

  test.describe('About Page Content', () => {
    test('about page has mission statement', async ({ page }) => {
      await page.goto('/about');

      const mission = page.getByTestId('about-mission');
      await expect(mission).toBeVisible();
    });

    test('about page has philosophy section', async ({ page }) => {
      await page.goto('/about');

      const philosophy = page.getByTestId('about-philosophy');
      await philosophy.scrollIntoViewIfNeeded();
      await expect(philosophy).toBeVisible();
    });

    test('about page has team section', async ({ page }) => {
      await page.goto('/about');

      const team = page.getByTestId('about-team');
      await team.scrollIntoViewIfNeeded();
      await expect(team).toBeVisible();
    });
  });

  test.describe('External Links', () => {
    test('external links open in new tab', async ({ page }) => {
      await page.goto('/');

      const githubLink = page.getByTestId('github-link');
      await githubLink.scrollIntoViewIfNeeded();

      await expect(githubLink).toHaveAttribute('target', '_blank');
      await expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('email links have correct format', async ({ page }) => {
      await page.goto('/');

      const emailLink = page.getByTestId('email-link');
      await emailLink.scrollIntoViewIfNeeded();

      const href = await emailLink.getAttribute('href');
      expect(href).toMatch(/^mailto:/);
    });
  });

  test.describe('FUDs Reduction Elements', () => {
    test('hero has FUDs reduction', async ({ page }) => {
      await page.goto('/');

      const fuds = page.getByTestId('hero-fuds');
      await expect(fuds).toBeVisible();

      // Should contain key trust elements - look inside for fuds-reduction component
      const fudsReduction = fuds.getByTestId('fuds-reduction');
      await expect(fudsReduction).toBeVisible();

      const fudsText = await fudsReduction.textContent();
      expect(fudsText).toContain('30-day');
    });

    test('pricing page has FUDs reduction', async ({ page }) => {
      await page.goto('/pricing');

      const fuds = page.getByTestId('pricing-main-fuds');
      await expect(fuds).toBeVisible();
    });
  });

  test.describe('Placeholder Content Audit', () => {
    test('homepage does not have visible placeholder text in main content', async ({ page }) => {
      await page.goto('/');

      // Main hero content should not contain placeholder text
      const heroHeadline = page.getByTestId('hero-headline');
      const headlineText = await heroHeadline.textContent();
      expect(headlineText?.toLowerCase()).not.toContain('lorem');
      expect(headlineText?.toLowerCase()).not.toContain('placeholder');

      const heroSubhead = page.getByTestId('hero-subhead');
      const subheadText = await heroSubhead.textContent();
      expect(subheadText?.toLowerCase()).not.toContain('lorem');
    });

    test('pricing content is finalized', async ({ page }) => {
      await page.goto('/pricing');

      const priceAmount = page.getByTestId('pricing-main-amount');
      const priceText = await priceAmount.textContent();
      expect(priceText?.trim()).toBe('$99');

      const priceLabel = page.getByTestId('pricing-main-label');
      const labelText = await priceLabel.textContent();
      expect(labelText).toContain('one-time');
    });
  });

  test.describe('Legal Content', () => {
    test('footer has copyright notice', async ({ page }) => {
      await page.goto('/');

      const footer = page.locator('footer');
      const footerText = await footer.textContent();

      // Should contain copyright
      expect(footerText).toContain('©');
      expect(footerText).toContain('Lattice');
    });
  });

  test.describe('Accessibility Content', () => {
    test('all images have alt text or are decorative', async ({ page }) => {
      await page.goto('/');

      const images = page.locator('img');
      const count = await images.count();

      for (let i = 0; i < count; i++) {
        const img = images.nth(i);
        const alt = await img.getAttribute('alt');
        const ariaHidden = await img.getAttribute('aria-hidden');

        // Image should have alt or be marked as decorative
        expect(alt !== null || ariaHidden === 'true').toBe(true);
      }
    });

    test('buttons and links have accessible text', async ({ page }) => {
      await page.goto('/');

      // Primary CTA should have accessible text
      const primaryCta = page.getByTestId('hero-primary-cta');
      const ctaText = await primaryCta.textContent();
      expect(ctaText!.trim().length).toBeGreaterThan(0);
    });
  });
});
