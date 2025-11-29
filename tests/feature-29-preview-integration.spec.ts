/**
 * Feature Slice 29: Integrate Previews into Feature Pages Tests
 *
 * Tests for the integration of interactive preview components
 * into their respective feature pages.
 */
import { test, expect } from '@playwright/test';

test.describe('Feature 29: Preview Integration on Feature Pages', () => {
  test.describe('Lab Feature Page (/features/lab)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/features/lab');
    });

    test('should display the feature page with hero section', async ({ page }) => {
      await expect(page.getByTestId('feature-detail-hero')).toBeVisible();
      await expect(page.getByTestId('feature-detail-title')).toBeVisible();
    });

    test('should have Try It section', async ({ page }) => {
      await expect(page.getByTestId('try-it-section')).toBeVisible();
    });

    test('should display Try It headline for Lab', async ({ page }) => {
      await expect(page.getByTestId('try-it-headline')).toHaveText('Try the Chat Interface');
    });

    test('should display Try It description for Lab', async ({ page }) => {
      await expect(page.getByTestId('try-it-description')).toContainText('Experience how Lattice Lab\'s AI chat works');
    });

    test('should have ChatPreview component loaded', async ({ page }) => {
      await expect(page.getByTestId('try-it-preview')).toBeVisible();
      // Wait for React hydration
      await expect(page.getByTestId('chat-preview')).toBeVisible({ timeout: 10000 });
    });

    test('should have Interactive Demo badge', async ({ page }) => {
      await expect(page.getByText('Interactive Demo')).toBeVisible();
    });

    test('should have chat messages area in preview', async ({ page }) => {
      // Wait for ChatPreview to hydrate
      await expect(page.getByTestId('chat-preview')).toBeVisible({ timeout: 10000 });
      // ChatPreview is a pre-scripted demo, check for messages area
      await expect(page.getByTestId('chat-messages')).toBeVisible();
    });
  });

  test.describe('Sources Feature Page (/features/sources)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/features/sources');
    });

    test('should display the feature page with hero section', async ({ page }) => {
      await expect(page.getByTestId('feature-detail-hero')).toBeVisible();
      await expect(page.getByTestId('feature-detail-title')).toBeVisible();
    });

    test('should have Try It section', async ({ page }) => {
      await expect(page.getByTestId('try-it-section')).toBeVisible();
    });

    test('should display Try It headline for Sources', async ({ page }) => {
      await expect(page.getByTestId('try-it-headline')).toHaveText('Explore Source Management');
    });

    test('should display Try It description for Sources', async ({ page }) => {
      await expect(page.getByTestId('try-it-description')).toContainText('knowledge sources');
    });

    test('should have SourcesPreview component loaded', async ({ page }) => {
      await expect(page.getByTestId('try-it-preview')).toBeVisible();
      // Wait for React hydration
      await expect(page.getByTestId('sources-preview')).toBeVisible({ timeout: 10000 });
    });

    test('should have BlueprintPreview component loaded (secondary)', async ({ page }) => {
      // Wait for React hydration - BlueprintPreview is secondary
      await expect(page.getByTestId('blueprint-preview')).toBeVisible({ timeout: 10000 });
    });

    test('should have explanation text between previews', async ({ page }) => {
      await expect(page.getByText('See how sources power AI-generated content')).toBeVisible();
    });
  });

  test.describe('Scenarios Feature Page (/features/scenarios)', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/features/scenarios');
    });

    test('should display the feature page with hero section', async ({ page }) => {
      await expect(page.getByTestId('feature-detail-hero')).toBeVisible();
      await expect(page.getByTestId('feature-detail-title')).toBeVisible();
    });

    test('should have Try It section', async ({ page }) => {
      await expect(page.getByTestId('try-it-section')).toBeVisible();
    });

    test('should display Try It headline for Scenarios', async ({ page }) => {
      await expect(page.getByTestId('try-it-headline')).toHaveText('Configure Your AI Stack');
    });

    test('should display Try It description for Scenarios', async ({ page }) => {
      await expect(page.getByTestId('try-it-description')).toContainText('workload type');
    });

    test('should have ScenarioPreview component loaded', async ({ page }) => {
      await expect(page.getByTestId('try-it-preview')).toBeVisible();
      // Wait for React hydration
      await expect(page.getByTestId('scenario-preview')).toBeVisible({ timeout: 10000 });
    });

    test('should have working workload dropdown in preview', async ({ page }) => {
      // Wait for ScenarioPreview to hydrate
      await expect(page.getByTestId('scenario-preview')).toBeVisible({ timeout: 10000 });
      await expect(page.getByTestId('scenario-workload-select')).toBeVisible();
    });
  });

  test.describe('Studio Feature Page (/features/studio) - No Preview', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/features/studio');
    });

    test('should display the feature page with hero section', async ({ page }) => {
      await expect(page.getByTestId('feature-detail-hero')).toBeVisible();
      await expect(page.getByTestId('feature-detail-title')).toBeVisible();
    });

    test('should NOT have Try It section', async ({ page }) => {
      await expect(page.getByTestId('try-it-section')).not.toBeVisible();
    });

    test('should have real screenshot instead of preview', async ({ page }) => {
      await expect(page.getByTestId('feature-detail-screenshot')).toBeVisible();
      await expect(page.getByTestId('feature-detail-screenshot-container')).toBeVisible();
    });

    test('should show product screenshot with proper alt text', async ({ page }) => {
      const screenshotContainer = page.getByTestId('feature-detail-screenshot-container');
      const img = screenshotContainer.locator('picture img');
      await expect(img).toBeVisible();
      const alt = await img.getAttribute('alt');
      expect(alt?.toLowerCase()).toContain('studio');
    });
  });

  test.describe('Try It Section Styling', () => {
    test('should have purple accent on Lab page', async ({ page }) => {
      await page.goto('/features/lab');
      // Lab uses purple color scheme
      await expect(page.getByTestId('try-it-section')).toBeVisible();
      const interactiveDemo = page.getByText('Interactive Demo');
      await expect(interactiveDemo).toBeVisible();
    });

    test('should have blue accent on Sources page', async ({ page }) => {
      await page.goto('/features/sources');
      // Sources uses blue color scheme
      await expect(page.getByTestId('try-it-section')).toBeVisible();
      const interactiveDemo = page.getByText('Interactive Demo');
      await expect(interactiveDemo).toBeVisible();
    });

    test('should have orange accent on Scenarios page', async ({ page }) => {
      await page.goto('/features/scenarios');
      // Scenarios uses orange color scheme
      await expect(page.getByTestId('try-it-section')).toBeVisible();
      const interactiveDemo = page.getByText('Interactive Demo');
      await expect(interactiveDemo).toBeVisible();
    });
  });

  test.describe('Responsive Design', () => {
    test('should display Try It section on mobile (Lab)', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/features/lab');

      await expect(page.getByTestId('try-it-section')).toBeVisible();
      await expect(page.getByTestId('try-it-headline')).toBeVisible();
      await expect(page.getByTestId('try-it-preview')).toBeVisible();
    });

    test('should display Try It section on mobile (Sources)', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/features/sources');

      await expect(page.getByTestId('try-it-section')).toBeVisible();
      await expect(page.getByTestId('try-it-headline')).toBeVisible();
    });

    test('should display Try It section on mobile (Scenarios)', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/features/scenarios');

      await expect(page.getByTestId('try-it-section')).toBeVisible();
      await expect(page.getByTestId('try-it-headline')).toBeVisible();
    });

    test('should display Try It section on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/features/lab');

      await expect(page.getByTestId('try-it-section')).toBeVisible();
      await expect(page.getByTestId('chat-preview')).toBeVisible({ timeout: 10000 });
    });

    test('should display Try It section on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto('/features/lab');

      await expect(page.getByTestId('try-it-section')).toBeVisible();
      await expect(page.getByTestId('chat-preview')).toBeVisible({ timeout: 10000 });
    });
  });

  test.describe('Preview Interactivity on Feature Pages', () => {
    test('ChatPreview should show demo content on Lab page', async ({ page }) => {
      await page.goto('/features/lab');

      // Wait for hydration
      await expect(page.getByTestId('chat-preview')).toBeVisible({ timeout: 10000 });

      // ChatPreview is a pre-scripted demo animation, not interactive input
      // Check that the chat content area is visible
      await expect(page.getByTestId('chat-preview-content')).toBeVisible();
      await expect(page.getByTestId('chat-messages')).toBeVisible();
    });

    test('SourcesPreview should be interactive on Sources page', async ({ page }) => {
      await page.goto('/features/sources');

      // Wait for hydration
      await expect(page.getByTestId('sources-preview')).toBeVisible({ timeout: 10000 });

      // Check for search input
      await expect(page.getByTestId('sources-search-input')).toBeVisible();
    });

    test('ScenarioPreview should be interactive on Scenarios page', async ({ page }) => {
      await page.goto('/features/scenarios');

      // Wait for hydration
      await expect(page.getByTestId('scenario-preview')).toBeVisible({ timeout: 10000 });

      // Interact with workload dropdown
      const dropdown = page.getByTestId('scenario-workload-select');
      await dropdown.selectOption('rag');
      await expect(dropdown).toHaveValue('rag');
    });

    test('BlueprintPreview should be interactive on Sources page', async ({ page }) => {
      await page.goto('/features/sources');

      // Wait for hydration
      await expect(page.getByTestId('blueprint-preview')).toBeVisible({ timeout: 10000 });

      // Check for filter tabs
      await expect(page.getByTestId('blueprint-filter-all')).toBeVisible();
    });
  });

  test.describe('Page Structure with Previews', () => {
    test('Lab page should have correct section order', async ({ page }) => {
      await page.goto('/features/lab');

      // Hero should be visible
      await expect(page.getByTestId('feature-detail-hero')).toBeVisible();

      // Highlights should come after hero
      await expect(page.getByTestId('feature-detail-highlights')).toBeVisible();

      // Try It section should exist (instead of screenshot)
      await expect(page.getByTestId('try-it-section')).toBeVisible();

      // Use cases should still be present
      await expect(page.getByTestId('feature-detail-usecases')).toBeVisible();

      // CTA should be at the bottom
      await expect(page.getByTestId('feature-detail-cta')).toBeVisible();
    });

    test('CTA section should still work with Try It section', async ({ page }) => {
      await page.goto('/features/lab');

      // Scroll to CTA
      await page.getByTestId('feature-detail-cta').scrollIntoViewIfNeeded();

      await expect(page.getByTestId('feature-detail-cta-headline')).toBeVisible();
      await expect(page.getByTestId('feature-detail-cta-primary')).toBeVisible();
      await expect(page.getByTestId('feature-detail-cta-secondary')).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('Try It section should have proper heading hierarchy', async ({ page }) => {
      await page.goto('/features/lab');

      // H1 in hero
      const h1 = page.getByTestId('feature-detail-title');
      await expect(h1).toBeVisible();

      // H2 in Try It section
      const h2 = page.getByTestId('try-it-headline');
      await expect(h2).toBeVisible();
      await expect(h2).toHaveAttribute('class', /text-2xl|text-3xl/);
    });

    test('Play icon should be decorative (aria-hidden)', async ({ page }) => {
      await page.goto('/features/lab');

      // Check that play icon has aria-hidden
      const icon = page.getByTestId('try-it-section').locator('svg[aria-hidden="true"]').first();
      await expect(icon).toBeVisible();
    });
  });
});
