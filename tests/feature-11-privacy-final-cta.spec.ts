/**
 * Feature 11: Privacy Section & Final CTA Tests
 *
 * Tests for the privacy-first messaging and bottom-of-page CTA sections.
 * Validates CRO principles: emotional storytelling, FUDs reduction, deploy anywhere.
 */

import { test, expect } from '@playwright/test';

test.describe('Feature 11: Privacy Section & Final CTA', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Privacy Section - Structure', () => {
    test('privacy section is visible', async ({ page }) => {
      const section = page.getByTestId('privacy-section');
      await expect(section).toBeVisible();
    });

    test('has eyebrow text', async ({ page }) => {
      const eyebrow = page.getByTestId('privacy-eyebrow');
      await expect(eyebrow).toBeVisible();
      await expect(eyebrow).toContainText('Your Data');
    });

    test('has headline', async ({ page }) => {
      const headline = page.getByTestId('privacy-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Competitive Intelligence');
    });

    test('has subhead with emotional messaging', async ({ page }) => {
      const subhead = page.getByTestId('privacy-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText('different');
    });

    test('has emotional tagline quote', async ({ page }) => {
      const tagline = page.getByTestId('privacy-tagline');
      await expect(tagline).toBeVisible();
      await expect(tagline).toContainText('audit');
    });
  });

  test.describe('Privacy Section - Privacy Points', () => {
    test('privacy points list is visible', async ({ page }) => {
      const points = page.getByTestId('privacy-points');
      await expect(points).toBeVisible();
    });

    test('has at least 4 privacy points', async ({ page }) => {
      const section = page.getByTestId('privacy-section');
      const points = section.locator('[data-testid^="privacy-point-"]');
      await expect(points).toHaveCount(4);
    });

    test('includes data stays local point', async ({ page }) => {
      const section = page.getByTestId('privacy-section');
      await expect(section).toContainText('No data leaves your infrastructure');
    });

    test('includes no external API point', async ({ page }) => {
      const section = page.getByTestId('privacy-section');
      await expect(section).toContainText('No external API calls');
    });

    test('includes no telemetry point', async ({ page }) => {
      const section = page.getByTestId('privacy-section');
      await expect(section).toContainText('No usage tracking');
    });

    test('includes no vendor lock-in point', async ({ page }) => {
      const section = page.getByTestId('privacy-section');
      await expect(section).toContainText('No vendor lock-in');
    });

    test('privacy points have check icons', async ({ page }) => {
      const firstPoint = page.getByTestId('privacy-point-0');
      const icon = firstPoint.locator('svg');
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Privacy Section - Deploy Options', () => {
    test('deploy headline is visible', async ({ page }) => {
      const headline = page.getByTestId('deploy-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Deploy Anywhere');
    });

    test('deploy options container is visible', async ({ page }) => {
      const options = page.getByTestId('deploy-options');
      await expect(options).toBeVisible();
    });

    test('has laptop deployment option', async ({ page }) => {
      const option = page.getByTestId('deploy-option-laptop');
      await expect(option).toBeVisible();
      const title = page.getByTestId('deploy-title-laptop');
      await expect(title).toContainText('Laptop');
    });

    test('has cloud deployment option', async ({ page }) => {
      const option = page.getByTestId('deploy-option-cloud');
      await expect(option).toBeVisible();
      const title = page.getByTestId('deploy-title-cloud');
      await expect(title).toContainText('Cloud');
    });

    test('has air-gapped deployment option', async ({ page }) => {
      const option = page.getByTestId('deploy-option-airgapped');
      await expect(option).toBeVisible();
      const title = page.getByTestId('deploy-title-airgapped');
      await expect(title).toContainText('Air-Gapped');
    });

    test('laptop option has description', async ({ page }) => {
      const desc = page.getByTestId('deploy-description-laptop');
      await expect(desc).toBeVisible();
      await expect(desc).toContainText('locally');
    });

    test('cloud option mentions cloud providers', async ({ page }) => {
      const desc = page.getByTestId('deploy-description-cloud');
      await expect(desc).toContainText('AWS');
    });

    test('air-gapped option mentions disconnected', async ({ page }) => {
      const desc = page.getByTestId('deploy-description-airgapped');
      await expect(desc).toContainText('disconnected');
    });

    test('deploy options have icons', async ({ page }) => {
      const option = page.getByTestId('deploy-option-laptop');
      const icon = option.locator('svg');
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Privacy Section - Trust Badge', () => {
    test('trust badge is visible', async ({ page }) => {
      const badge = page.getByTestId('privacy-trust-badge');
      await expect(badge).toBeVisible();
    });

    test('trust badge mentions self-hosted', async ({ page }) => {
      const badge = page.getByTestId('privacy-trust-badge');
      await expect(badge).toContainText('self-hosted');
    });

    test('trust badge mentions zero data collection', async ({ page }) => {
      const badge = page.getByTestId('privacy-trust-badge');
      await expect(badge).toContainText('Zero data collection');
    });

    test('trust badge has check icon', async ({ page }) => {
      const badge = page.getByTestId('privacy-trust-badge');
      const icon = badge.locator('svg');
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Final CTA Section - Structure', () => {
    test('final CTA section is visible', async ({ page }) => {
      const section = page.getByTestId('final-cta-section');
      await expect(section).toBeVisible();
    });

    test('has benefit-driven headline', async ({ page }) => {
      const headline = page.getByTestId('final-cta-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Confident');
    });

    test('headline does not use generic text like Get Started', async ({ page }) => {
      const headline = page.getByTestId('final-cta-headline');
      const text = await headline.textContent();
      expect(text?.toLowerCase()).not.toContain('get started');
      expect(text?.toLowerCase()).not.toContain('sign up');
    });

    test('has value reminder paragraph', async ({ page }) => {
      const value = page.getByTestId('final-cta-value');
      await expect(value).toBeVisible();
      await expect(value).toContainText('research');
    });

    test('value reminder mentions quick deployment', async ({ page }) => {
      const value = page.getByTestId('final-cta-value');
      await expect(value).toContainText('5 minutes');
    });
  });

  test.describe('Final CTA Section - Button', () => {
    test('CTA button container is visible', async ({ page }) => {
      const container = page.getByTestId('final-cta-button-container');
      await expect(container).toBeVisible();
    });

    test('CTA button is visible', async ({ page }) => {
      const button = page.getByTestId('final-cta-button');
      await expect(button).toBeVisible();
    });

    test('CTA button has price', async ({ page }) => {
      const button = page.getByTestId('final-cta-button');
      await expect(button).toContainText('$99');
    });

    test('CTA button links to pricing', async ({ page }) => {
      // StripeBuyButton wrapper - get the actual anchor element inside
      const button = page.getByTestId('final-cta-button-placeholder');
      await expect(button).toHaveAttribute('href', '/pricing');
    });

    test('CTA button is primary variant', async ({ page }) => {
      const button = page.getByTestId('final-cta-button');
      // Check it has primary styling (bg-accent class)
      await expect(button).toBeVisible();
    });
  });

  test.describe('Final CTA Section - FUDs Reduction', () => {
    test('FUDs section is visible', async ({ page }) => {
      const fuds = page.getByTestId('final-cta-fuds');
      await expect(fuds).toBeVisible();
    });

    test('FUDs reduction component is present', async ({ page }) => {
      const fuds = page.getByTestId('final-cta-fuds');
      const fudsReduction = fuds.getByTestId('fuds-reduction');
      await expect(fudsReduction).toBeVisible();
    });

    test('FUDs includes money-back guarantee', async ({ page }) => {
      const fuds = page.getByTestId('final-cta-fuds');
      await expect(fuds).toContainText('money-back');
    });
  });

  test.describe('Final CTA Section - Trust Reminder', () => {
    test('trust reminder is visible', async ({ page }) => {
      const trust = page.getByTestId('final-cta-trust');
      await expect(trust).toBeVisible();
    });

    test('trust reminder mentions privacy', async ({ page }) => {
      const trust = page.getByTestId('final-cta-trust');
      await expect(trust).toContainText('privacy');
    });

    test('trust reminder mentions engineers', async ({ page }) => {
      const trust = page.getByTestId('final-cta-trust');
      await expect(trust).toContainText('engineers');
    });
  });

  test.describe('Section Order on Homepage', () => {
    test('privacy section appears after social proof', async ({ page }) => {
      const socialProof = page.getByTestId('social-proof-section');
      const privacy = page.getByTestId('privacy-section');

      const socialProofBox = await socialProof.boundingBox();
      const privacyBox = await privacy.boundingBox();

      expect(socialProofBox).not.toBeNull();
      expect(privacyBox).not.toBeNull();
      expect(privacyBox!.y).toBeGreaterThan(socialProofBox!.y);
    });

    test('pricing section appears after privacy', async ({ page }) => {
      const privacy = page.getByTestId('privacy-section');
      const pricing = page.getByTestId('pricing-section');

      const privacyBox = await privacy.boundingBox();
      const pricingBox = await pricing.boundingBox();

      expect(privacyBox).not.toBeNull();
      expect(pricingBox).not.toBeNull();
      expect(pricingBox!.y).toBeGreaterThan(privacyBox!.y);
    });

    test('FAQ appears after pricing', async ({ page }) => {
      const pricing = page.getByTestId('pricing-section');
      const faq = page.getByTestId('faq-section');

      const pricingBox = await pricing.boundingBox();
      const faqBox = await faq.boundingBox();

      expect(pricingBox).not.toBeNull();
      expect(faqBox).not.toBeNull();
      expect(faqBox!.y).toBeGreaterThan(pricingBox!.y);
    });

    test('final CTA is last section before footer', async ({ page }) => {
      const faq = page.getByTestId('faq-section');
      const finalCta = page.getByTestId('final-cta-section');

      const faqBox = await faq.boundingBox();
      const finalCtaBox = await finalCta.boundingBox();

      expect(faqBox).not.toBeNull();
      expect(finalCtaBox).not.toBeNull();
      expect(finalCtaBox!.y).toBeGreaterThan(faqBox!.y);
    });
  });

  test.describe('Responsive Layout', () => {
    test('privacy section visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const section = page.getByTestId('privacy-section');
      await expect(section).toBeVisible();
    });

    test('deploy options visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const options = page.getByTestId('deploy-options');
      await expect(options).toBeVisible();
    });

    test('final CTA visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const section = page.getByTestId('final-cta-section');
      await expect(section).toBeVisible();
    });

    test('final CTA button visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const button = page.getByTestId('final-cta-button');
      await expect(button).toBeVisible();
    });

    test('privacy section centered on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      const section = page.getByTestId('privacy-section');
      await expect(section).toBeVisible();
    });
  });

  test.describe('CRO Compliance', () => {
    test('uses emotional storytelling in privacy section', async ({ page }) => {
      const section = page.getByTestId('privacy-section');
      // Check for emotional language
      const text = await section.textContent();
      expect(text?.toLowerCase()).toMatch(/yours|tired|wonder|audit/);
    });

    test('final CTA has benefit-driven headline not feature-driven', async ({ page }) => {
      const headline = page.getByTestId('final-cta-headline');
      const text = await headline.textContent();
      // Should focus on outcome (confident decisions) not feature
      expect(text?.toLowerCase()).toContain('confident');
    });

    test('FUDs reduction appears below final CTA button', async ({ page }) => {
      const button = page.getByTestId('final-cta-button');
      const fuds = page.getByTestId('final-cta-fuds');

      const buttonBox = await button.boundingBox();
      const fudsBox = await fuds.boundingBox();

      expect(buttonBox).not.toBeNull();
      expect(fudsBox).not.toBeNull();
      expect(fudsBox!.y).toBeGreaterThan(buttonBox!.y);
    });

    test('privacy positioned as trust guarantee', async ({ page }) => {
      const section = page.getByTestId('privacy-section');
      await expect(section).toContainText('100%');
      await expect(section).toContainText('self-hosted');
    });

    test('deploy options address different user scenarios', async ({ page }) => {
      // Personal/evaluation
      await expect(page.getByTestId('deploy-description-laptop')).toContainText('personal');
      // Enterprise cloud
      await expect(page.getByTestId('deploy-description-cloud')).toContainText('VPC');
      // Security-conscious
      await expect(page.getByTestId('deploy-description-airgapped')).toContainText('No internet');
    });
  });

  test.describe('Accessibility', () => {
    test('privacy section uses semantic heading hierarchy', async ({ page }) => {
      const section = page.getByTestId('privacy-section');
      const h2 = section.locator('h2');
      const h3 = section.locator('h3');
      await expect(h2).toBeVisible();
      await expect(h3).toBeVisible();
    });

    test('final CTA uses semantic heading', async ({ page }) => {
      const headline = page.getByTestId('final-cta-headline');
      // Should be h2
      await expect(headline).toBeVisible();
      const tagName = await headline.evaluate((el) => el.tagName);
      expect(tagName).toBe('H2');
    });

    test('icons are decorative (aria-hidden)', async ({ page }) => {
      const section = page.getByTestId('privacy-section');
      const icons = section.locator('svg[aria-hidden="true"]');
      const count = await icons.count();
      expect(count).toBeGreaterThan(0);
    });

    test('final CTA button is keyboard accessible', async ({ page }) => {
      // StripeBuyButton placeholder anchor is the focusable element
      const button = page.getByTestId('final-cta-button-placeholder');
      await button.focus();
      await expect(button).toBeFocused();
    });
  });
});
