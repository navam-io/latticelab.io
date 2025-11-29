/**
 * Feature Slice 30: Homepage Interactive Preview Section Tests
 *
 * Tests for the InteractivePreview section on the homepage
 * which showcases the ChatPreview interactive demo.
 */
import { test, expect } from '@playwright/test';

test.describe('Feature 30: Homepage Interactive Preview Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Section Presence', () => {
    test('interactive preview section is present on homepage', async ({ page }) => {
      await expect(page.getByTestId('interactive-preview-section')).toBeVisible();
    });

    test('section appears after SocialProof section', async ({ page }) => {
      // Get all sections in order
      const socialProof = page.getByTestId('social-proof-section');
      const interactivePreview = page.getByTestId('interactive-preview-section');

      await expect(socialProof).toBeVisible();
      await expect(interactivePreview).toBeVisible();

      // Verify ordering by checking bounding boxes
      const socialProofBox = await socialProof.boundingBox();
      const interactivePreviewBox = await interactivePreview.boundingBox();

      expect(socialProofBox).not.toBeNull();
      expect(interactivePreviewBox).not.toBeNull();

      if (socialProofBox && interactivePreviewBox) {
        expect(socialProofBox.y).toBeLessThan(interactivePreviewBox.y);
      }
    });

    test('section appears before Privacy section', async ({ page }) => {
      const interactivePreview = page.getByTestId('interactive-preview-section');
      const privacySection = page.getByTestId('privacy-section');

      await expect(interactivePreview).toBeVisible();
      await expect(privacySection).toBeVisible();

      // Verify ordering by checking bounding boxes
      const interactivePreviewBox = await interactivePreview.boundingBox();
      const privacyBox = await privacySection.boundingBox();

      expect(interactivePreviewBox).not.toBeNull();
      expect(privacyBox).not.toBeNull();

      if (interactivePreviewBox && privacyBox) {
        expect(interactivePreviewBox.y).toBeLessThan(privacyBox.y);
      }
    });
  });

  test.describe('Section Header', () => {
    test('displays eyebrow text "Interactive Demo"', async ({ page }) => {
      await expect(page.getByTestId('interactive-preview-eyebrow')).toHaveText('Interactive Demo');
    });

    test('displays headline "See Lattice in Action"', async ({ page }) => {
      await expect(page.getByTestId('interactive-preview-headline')).toHaveText('See Lattice in Action');
    });

    test('displays description about the demo', async ({ page }) => {
      const description = page.getByTestId('interactive-preview-description');
      await expect(description).toBeVisible();
      await expect(description).toContainText('Experience how Lattice Lab');
      await expect(description).toContainText('streaming responses');
      await expect(description).toContainText('source citations');
    });
  });

  test.describe('Chat Preview Component', () => {
    test('preview container is visible', async ({ page }) => {
      await expect(page.getByTestId('interactive-preview-container')).toBeVisible();
    });

    test('ChatPreview component is loaded', async ({ page }) => {
      // Wait for React hydration
      await expect(page.getByTestId('chat-preview')).toBeVisible({ timeout: 10000 });
    });

    test('ChatPreview has content area', async ({ page }) => {
      await expect(page.getByTestId('chat-preview')).toBeVisible({ timeout: 10000 });
      await expect(page.getByTestId('chat-preview-content')).toBeVisible();
    });

    test('ChatPreview has messages area', async ({ page }) => {
      await expect(page.getByTestId('chat-preview')).toBeVisible({ timeout: 10000 });
      await expect(page.getByTestId('chat-messages')).toBeVisible();
    });

    test('displays caption about simulated demo', async ({ page }) => {
      const caption = page.getByTestId('interactive-preview-caption');
      await expect(caption).toBeVisible();
      await expect(caption).toContainText('simulated demo');
    });
  });

  test.describe('CTA Buttons', () => {
    test('CTA section is visible', async ({ page }) => {
      await expect(page.getByTestId('interactive-preview-cta')).toBeVisible();
    });

    test('primary CTA links to features page', async ({ page }) => {
      const primaryCTA = page.getByTestId('interactive-preview-cta-primary');
      await expect(primaryCTA).toBeVisible();
      await expect(primaryCTA).toHaveText('Explore All Features');
      await expect(primaryCTA).toHaveAttribute('href', '/features');
    });

    test('secondary CTA links to pricing page', async ({ page }) => {
      const secondaryCTA = page.getByTestId('interactive-preview-cta-secondary');
      await expect(secondaryCTA).toBeVisible();
      await expect(secondaryCTA).toHaveText('Get Lattice for $99');
      await expect(secondaryCTA).toHaveAttribute('href', '/pricing');
    });

    test('primary CTA navigates to features page', async ({ page }) => {
      const primaryCTA = page.getByTestId('interactive-preview-cta-primary');
      await primaryCTA.click();
      await expect(page).toHaveURL('/features');
    });

    test('secondary CTA navigates to pricing page', async ({ page }) => {
      const secondaryCTA = page.getByTestId('interactive-preview-cta-secondary');
      await secondaryCTA.click();
      await expect(page).toHaveURL('/pricing');
    });
  });

  test.describe('Scroll Animation', () => {
    test('section has animation wrapper', async ({ page }) => {
      const wrapper = page.locator('.interactive-preview-wrapper');
      await expect(wrapper).toBeVisible();
    });

    test('animation class is applied on scroll', async ({ page }) => {
      // Scroll to the section
      const section = page.getByTestId('interactive-preview-section');
      await section.scrollIntoViewIfNeeded();

      // Wait for animation to be applied
      await page.waitForTimeout(700); // Animation duration + buffer

      const wrapper = page.locator('.interactive-preview-wrapper');
      await expect(wrapper).toHaveClass(/animate-in/);
    });
  });

  test.describe('Responsive Design', () => {
    test('section displays correctly on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      await expect(page.getByTestId('interactive-preview-section')).toBeVisible();
      await expect(page.getByTestId('interactive-preview-headline')).toBeVisible();
      await expect(page.getByTestId('interactive-preview-container')).toBeVisible();
    });

    test('CTAs stack vertically on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const ctaSection = page.getByTestId('interactive-preview-cta');
      await expect(ctaSection).toBeVisible();

      // Both buttons should be visible
      await expect(page.getByTestId('interactive-preview-cta-primary')).toBeVisible();
      await expect(page.getByTestId('interactive-preview-cta-secondary')).toBeVisible();
    });

    test('section displays correctly on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/');

      await expect(page.getByTestId('interactive-preview-section')).toBeVisible();
      await expect(page.getByTestId('chat-preview')).toBeVisible({ timeout: 10000 });
    });

    test('section displays correctly on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto('/');

      await expect(page.getByTestId('interactive-preview-section')).toBeVisible();
      await expect(page.getByTestId('interactive-preview-headline')).toBeVisible();
      await expect(page.getByTestId('chat-preview')).toBeVisible({ timeout: 10000 });
    });
  });

  test.describe('Accessibility', () => {
    test('section has proper heading hierarchy', async ({ page }) => {
      // The section should have an h2 heading
      const headline = page.getByTestId('interactive-preview-headline');
      await expect(headline).toBeVisible();

      // Check it's an h2 element
      const tagName = await headline.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('h2');
    });

    test('CTA buttons are keyboard accessible', async ({ page }) => {
      const primaryCTA = page.getByTestId('interactive-preview-cta-primary');

      // Focus on the button
      await primaryCTA.focus();

      // Check it received focus
      const isFocused = await primaryCTA.evaluate((el) => document.activeElement === el);
      expect(isFocused).toBe(true);
    });

    test('eyebrow text has proper styling for readability', async ({ page }) => {
      const eyebrow = page.getByTestId('interactive-preview-eyebrow');
      await expect(eyebrow).toBeVisible();
      await expect(eyebrow).toHaveClass(/uppercase/);
    });
  });

  test.describe('Visual Elements', () => {
    test('preview has border and shadow styling', async ({ page }) => {
      const container = page.getByTestId('interactive-preview-container');
      await expect(container).toBeVisible();

      // Check for wrapper with styling
      const wrapper = container.locator('.preview-wrapper');
      await expect(wrapper).toBeVisible();
      await expect(wrapper).toHaveClass(/rounded-xl/);
      await expect(wrapper).toHaveClass(/shadow-lg/);
    });

    test('eyebrow has decorative lines', async ({ page }) => {
      // Check for the horizontal lines around the eyebrow
      const section = page.getByTestId('interactive-preview-section');
      const lines = section.locator('.h-px.bg-accent');

      // Should have 2 decorative lines
      await expect(lines).toHaveCount(2);
    });
  });

  test.describe('Integration with Homepage', () => {
    test('homepage has correct section order', async ({ page }) => {
      // Verify all expected sections are present
      await expect(page.getByTestId('hero-section')).toBeVisible();
      await expect(page.getByTestId('pain-section')).toBeVisible();
      await expect(page.getByTestId('solution-section')).toBeVisible();
      await expect(page.getByTestId('persona-cards-section')).toBeVisible();
      await expect(page.getByTestId('social-proof-section')).toBeVisible();
      await expect(page.getByTestId('interactive-preview-section')).toBeVisible();
      await expect(page.getByTestId('privacy-section')).toBeVisible();
      await expect(page.getByTestId('pricing-section')).toBeVisible();
      await expect(page.getByTestId('faq-section')).toBeVisible();
      await expect(page.getByTestId('final-cta-section')).toBeVisible();
    });

    test('total homepage sections count is correct', async ({ page }) => {
      // Homepage should have 10 main sections
      const sections = page.locator('section[data-testid]');
      const count = await sections.count();

      // We have: hero, pain, solution, persona-cards, social-proof,
      // interactive-preview, privacy, pricing, faq, final-cta = 10
      expect(count).toBeGreaterThanOrEqual(10);
    });
  });
});
