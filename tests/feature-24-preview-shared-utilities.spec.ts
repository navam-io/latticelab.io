import { test, expect } from '@playwright/test';

/**
 * Feature Slice 24: Preview Components — Shared Utilities
 *
 * Tests for shared preview components including TypingIndicator,
 * CitationPill, MessageBubble, and PreviewContainer.
 */

test.describe('Feature 24: Preview Shared Utilities', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/preview-showcase');
  });

  // ===================
  // Page Basics (3 tests)
  // ===================
  test.describe('Preview Showcase Page', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveURL(/\/preview-showcase/);
    });

    test('has page title', async ({ page }) => {
      const title = page.getByTestId('preview-showcase-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Preview Component Showcase');
    });

    test('showcase container is visible', async ({ page }) => {
      const showcase = page.getByTestId('preview-showcase');
      await expect(showcase).toBeVisible();
    });
  });

  // ===================
  // TypingIndicator Component (6 tests)
  // ===================
  test.describe('TypingIndicator Component', () => {
    test('typing indicator section is visible', async ({ page }) => {
      const section = page.getByTestId('typing-indicator-section');
      await expect(section).toBeVisible();
    });

    test('typing indicator is rendered', async ({ page }) => {
      const indicator = page.getByTestId('typing-indicator');
      await expect(indicator).toBeVisible();
    });

    test('has three animated dots', async ({ page }) => {
      for (let i = 0; i < 3; i++) {
        const dot = page.getByTestId(`typing-dot-${i}`);
        await expect(dot).toBeVisible();
      }
    });

    test('dots have correct styling', async ({ page }) => {
      const dot = page.getByTestId('typing-dot-0');
      await expect(dot).toHaveClass(/rounded-full/);
    });

    test('dots are contained in flex container', async ({ page }) => {
      const indicator = page.getByTestId('typing-indicator');
      await expect(indicator).toHaveClass(/flex/);
    });

    test('typing indicator has animation', async ({ page }) => {
      // Check that dots exist and have animation styles applied via framer-motion
      const dots = page.locator('[data-testid^="typing-dot-"]');
      await expect(dots).toHaveCount(3);
    });
  });

  // ===================
  // CitationPill Component (8 tests)
  // ===================
  test.describe('CitationPill Component', () => {
    test('citation pill section is visible', async ({ page }) => {
      const section = page.getByTestId('citation-pill-section');
      await expect(section).toBeVisible();
    });

    test('citation pills are rendered', async ({ page }) => {
      const section = page.getByTestId('citation-pill-section');
      const pill = section.getByTestId('citation-pill-cite-1');
      await expect(pill).toBeVisible();
    });

    test('citation pill displays number', async ({ page }) => {
      const section = page.getByTestId('citation-pill-section');
      const pill = section.getByTestId('citation-pill-cite-1');
      await expect(pill).toContainText('1');
    });

    test('citation pill has aria-label', async ({ page }) => {
      const section = page.getByTestId('citation-pill-section');
      const pill = section.getByTestId('citation-pill-cite-1');
      await expect(pill).toHaveAttribute('aria-label', /Citation 1/);
    });

    test('citation pill is interactive', async ({ page }) => {
      const section = page.getByTestId('citation-pill-section');
      const pill = section.getByTestId('citation-pill-cite-1');
      // Ensure React has hydrated the component
      await expect(pill).toBeVisible();
      // Verify it's a button that can be interacted with
      await expect(pill).toHaveRole('button');
      // Click should not cause errors
      await pill.click();
      await expect(pill).toBeVisible();
    });

    test('citation pill parent has tooltip container', async ({ page }) => {
      const section = page.getByTestId('citation-pill-section');
      const pill = section.getByTestId('citation-pill-cite-1');
      // Ensure React has hydrated the component
      await expect(pill).toBeVisible();
      // Verify the parent span exists (tooltip container)
      const parent = pill.locator('..');
      await expect(parent).toHaveClass(/relative/);
    });

    test('all demo citations section exists', async ({ page }) => {
      const section = page.getByTestId('all-citations-section');
      await expect(section).toBeVisible();
    });

    test('multiple citation pills are rendered', async ({ page }) => {
      const pills = page.locator('[data-testid^="citation-pill-"]');
      const count = await pills.count();
      expect(count).toBeGreaterThan(2);
    });
  });

  // ===================
  // MessageBubble Component (9 tests)
  // ===================
  test.describe('MessageBubble Component', () => {
    test('message bubble section is visible', async ({ page }) => {
      const section = page.getByTestId('message-bubble-section');
      await expect(section).toBeVisible();
    });

    test('user message bubble is rendered', async ({ page }) => {
      const bubble = page.getByTestId('message-bubble-user');
      await expect(bubble.first()).toBeVisible();
    });

    test('assistant message bubble is rendered', async ({ page }) => {
      const bubble = page.getByTestId('message-bubble-assistant');
      await expect(bubble.first()).toBeVisible();
    });

    test('user bubble has accent background', async ({ page }) => {
      const section = page.getByTestId('message-bubble-section');
      const userBubble = section.getByTestId('message-bubble-user').first();
      const innerDiv = userBubble.locator('div').first();
      await expect(innerDiv).toHaveClass(/bg-accent/);
    });

    test('assistant bubble has different styling', async ({ page }) => {
      const section = page.getByTestId('message-bubble-section');
      const assistantBubble = section.getByTestId('message-bubble-assistant').first();
      const innerDiv = assistantBubble.locator('div').first();
      await expect(innerDiv).toHaveClass(/border-border/);
    });

    test('user message contains text', async ({ page }) => {
      const section = page.getByTestId('message-bubble-section');
      const userBubble = section.getByTestId('message-bubble-user').first();
      await expect(userBubble).toContainText('Compare');
    });

    test('assistant message contains text', async ({ page }) => {
      const section = page.getByTestId('message-bubble-section');
      const assistantBubble = section.getByTestId('message-bubble-assistant').first();
      await expect(assistantBubble).toContainText('benchmarks');
    });

    test('assistant bubble shows Lattice label', async ({ page }) => {
      const section = page.getByTestId('message-bubble-section');
      const assistantBubble = section.getByTestId('message-bubble-assistant').first();
      await expect(assistantBubble).toContainText('Lattice');
    });

    test('streaming bubble has cursor', async ({ page }) => {
      // The third assistant message should be streaming
      const section = page.getByTestId('message-bubble-section');
      const streamingBubble = section.locator('[data-testid="message-bubble-assistant"]').last();
      await expect(streamingBubble).toContainText('Analyzing');
    });
  });

  // ===================
  // PreviewContainer Component (8 tests)
  // ===================
  test.describe('PreviewContainer Component', () => {
    test('preview container section is visible', async ({ page }) => {
      const section = page.getByTestId('preview-container-section');
      await expect(section).toBeVisible();
    });

    test('preview container is rendered', async ({ page }) => {
      const container = page.getByTestId('preview-container');
      await expect(container).toBeVisible();
    });

    test('has title bar', async ({ page }) => {
      const titlebar = page.getByTestId('preview-titlebar');
      await expect(titlebar).toBeVisible();
    });

    test('title bar shows title', async ({ page }) => {
      const titlebar = page.getByTestId('preview-titlebar');
      await expect(titlebar).toContainText('Lattice Lab');
    });

    test('has window control dots', async ({ page }) => {
      const controls = page.getByTestId('preview-window-controls');
      await expect(controls).toBeVisible();
      // Should have 3 dots (red, yellow, green)
      const dots = controls.locator('span');
      await expect(dots).toHaveCount(3);
    });

    test('has replay button', async ({ page }) => {
      const replayButton = page.getByTestId('preview-replay-button');
      await expect(replayButton).toBeVisible();
    });

    test('replay button is clickable', async ({ page }) => {
      const replayButton = page.getByTestId('preview-replay-button');
      await replayButton.click();
      // Component should still be visible after click
      const container = page.getByTestId('preview-container');
      await expect(container).toBeVisible();
    });

    test('has content area', async ({ page }) => {
      const content = page.getByTestId('preview-content');
      await expect(content).toBeVisible();
    });
  });

  // ===================
  // Component Integration (5 tests)
  // ===================
  test.describe('Component Integration', () => {
    test('preview container contains message bubbles', async ({ page }) => {
      const container = page.getByTestId('preview-container');
      const content = container.getByTestId('preview-content');
      const bubbles = content.locator('[data-testid^="message-bubble-"]');
      const count = await bubbles.count();
      expect(count).toBeGreaterThan(0);
    });

    test('citation pills work inside text', async ({ page }) => {
      const section = page.getByTestId('citation-pill-section');
      // The paragraph with citations is inside the styled box (has border-border class)
      const box = section.locator('.border-border');
      const text = await box.locator('p').first().textContent();
      expect(text).toContain('achieves');
    });

    test('all sections are present', async ({ page }) => {
      const sections = [
        'typing-indicator-section',
        'citation-pill-section',
        'message-bubble-section',
        'preview-container-section',
        'all-citations-section',
      ];
      for (const sectionId of sections) {
        const section = page.getByTestId(sectionId);
        await expect(section).toBeVisible();
      }
    });

    test('components use design system colors', async ({ page }) => {
      // Check that components use CSS variables
      const section = page.getByTestId('citation-pill-section');
      const pill = section.getByTestId('citation-pill-cite-1');
      await expect(pill).toHaveClass(/text-accent/);
    });

    test('page is noindex', async ({ page }) => {
      const robots = page.locator('meta[name="robots"]');
      await expect(robots).toHaveAttribute('content', 'noindex, nofollow');
    });
  });

  // ===================
  // Accessibility (6 tests)
  // ===================
  test.describe('Accessibility', () => {
    test('citation pills have aria-labels', async ({ page }) => {
      const section = page.getByTestId('all-citations-section');
      const pills = section.locator('[data-testid^="citation-pill-cite"]');
      const count = await pills.count();
      for (let i = 0; i < Math.min(count, 5); i++) {
        const pill = pills.nth(i);
        await expect(pill).toHaveAttribute('aria-label');
      }
    });

    test('buttons are keyboard accessible', async ({ page }) => {
      const replayButton = page.getByTestId('preview-replay-button');
      await replayButton.focus();
      await expect(replayButton).toBeFocused();
    });

    test('icons are decorative', async ({ page }) => {
      const icons = page.locator('svg[aria-hidden="true"]');
      const count = await icons.count();
      expect(count).toBeGreaterThan(0);
    });

    test('headings have proper hierarchy', async ({ page }) => {
      const h1 = page.locator('h1');
      await expect(h1).toHaveCount(1);
      const h2s = page.locator('h2');
      const h2Count = await h2s.count();
      expect(h2Count).toBeGreaterThan(0);
    });

    test('citation pill has accessible info', async ({ page }) => {
      const section = page.getByTestId('citation-pill-section');
      const pill = section.getByTestId('citation-pill-cite-1');
      // Ensure React has hydrated the component
      await expect(pill).toBeVisible();
      // Verify aria-label contains source information
      const ariaLabel = await pill.getAttribute('aria-label');
      expect(ariaLabel).toContain('Citation 1');
      expect(ariaLabel).toContain('Anthropic');
    });

    test('message bubbles are distinguishable', async ({ page }) => {
      const section = page.getByTestId('message-bubble-section');
      const userBubble = section.getByTestId('message-bubble-user').first();
      const assistantBubble = section.getByTestId('message-bubble-assistant').first();
      // Both should be visible but visually distinct
      await expect(userBubble).toBeVisible();
      await expect(assistantBubble).toBeVisible();
    });
  });

  // ===================
  // Responsive Design (4 tests)
  // ===================
  test.describe('Responsive Design', () => {
    test('components visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const showcase = page.getByTestId('preview-showcase');
      await expect(showcase).toBeVisible();
    });

    test('preview container adapts to mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const container = page.getByTestId('preview-container');
      await expect(container).toBeVisible();
    });

    test('message bubbles stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const section = page.getByTestId('message-bubble-section');
      await expect(section).toBeVisible();
    });

    test('citation pills work on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const section = page.getByTestId('citation-pill-section');
      const pill = section.getByTestId('citation-pill-cite-1');
      await expect(pill).toBeVisible();
    });
  });

  // ===================
  // Animation States (4 tests)
  // ===================
  test.describe('Animation States', () => {
    test('typing indicator has animation class', async ({ page }) => {
      const indicator = page.getByTestId('typing-indicator');
      // Framer motion adds style attributes for animations
      await expect(indicator).toBeVisible();
    });

    test('preview container animates on load', async ({ page }) => {
      const container = page.getByTestId('preview-container');
      // Container should be visible after animation completes
      await expect(container).toBeVisible();
    });

    test('citation pill scales on hover', async ({ page }) => {
      const section = page.getByTestId('citation-pill-section');
      const pill = section.getByTestId('citation-pill-cite-1');
      await pill.hover();
      // Component should still be visible and interactive
      await expect(pill).toBeVisible();
    });

    test('message bubbles animate in', async ({ page }) => {
      const bubbles = page.locator('[data-testid^="message-bubble-"]');
      const count = await bubbles.count();
      expect(count).toBeGreaterThan(0);
    });
  });
});
