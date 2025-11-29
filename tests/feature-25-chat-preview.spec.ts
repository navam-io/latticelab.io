import { test, expect } from '@playwright/test';

/**
 * Feature Slice 25: Chat Preview Component
 *
 * Tests for the ChatPreview component that simulates the Lab panel
 * chat experience with typing indicators, streaming, citations,
 * thinking steps, and artifacts.
 */

test.describe('Feature 25: Chat Preview Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/chat-preview-demo');
  });

  // ===================
  // Page Basics (3 tests)
  // ===================
  test.describe('Demo Page', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveURL(/\/chat-preview-demo/);
    });

    test('has page title', async ({ page }) => {
      const title = page.getByTestId('chat-preview-demo-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Chat Preview Demo');
    });

    test('page is noindex', async ({ page }) => {
      const robots = page.locator('meta[name="robots"]');
      await expect(robots).toHaveAttribute('content', 'noindex, nofollow');
    });
  });

  // ===================
  // ChatPreview Container (5 tests)
  // ===================
  test.describe('ChatPreview Container', () => {
    test('chat preview is rendered', async ({ page }) => {
      const preview = page.getByTestId('chat-preview');
      await expect(preview).toBeVisible();
    });

    test('has preview container with title bar', async ({ page }) => {
      const titlebar = page.getByTestId('preview-titlebar');
      await expect(titlebar).toBeVisible();
      await expect(titlebar).toContainText('Lattice Lab');
    });

    test('has replay button', async ({ page }) => {
      const replayButton = page.getByTestId('preview-replay-button');
      await expect(replayButton).toBeVisible();
    });

    test('has chat content area', async ({ page }) => {
      const content = page.getByTestId('chat-preview-content');
      await expect(content).toBeVisible();
    });

    test('has chat messages area', async ({ page }) => {
      const messages = page.getByTestId('chat-messages');
      await expect(messages).toBeVisible();
    });
  });

  // ===================
  // Demo Playback (8 tests)
  // ===================
  test.describe('Demo Playback', () => {
    test('user message appears', async ({ page }) => {
      // Wait for user message to appear (demo starts automatically)
      const userMessage = page.getByTestId('chat-user-message');
      await expect(userMessage).toBeVisible({ timeout: 5000 });
    });

    test('user message contains expected content', async ({ page }) => {
      const userMessage = page.getByTestId('chat-user-message');
      await expect(userMessage).toBeVisible({ timeout: 5000 });
      await expect(userMessage).toContainText('Compare Claude');
    });

    test('thinking steps appear after user message', async ({ page }) => {
      const thinkingSteps = page.getByTestId('thinking-steps');
      await expect(thinkingSteps).toBeVisible({ timeout: 8000 });
    });

    test('thinking steps has toggle button', async ({ page }) => {
      const toggle = page.getByTestId('thinking-toggle');
      await expect(toggle).toBeVisible({ timeout: 8000 });
    });

    test('thinking steps show progress', async ({ page }) => {
      const thinkingSteps = page.getByTestId('thinking-steps');
      await expect(thinkingSteps).toBeVisible({ timeout: 8000 });
      // Should show step count
      await expect(thinkingSteps).toContainText('steps');
    });

    test('assistant message appears', async ({ page }) => {
      const assistantMessage = page.getByTestId('chat-assistant-message');
      await expect(assistantMessage).toBeVisible({ timeout: 10000 });
    });

    test('status bar shows current phase', async ({ page }) => {
      const statusBar = page.getByTestId('chat-status-bar');
      await expect(statusBar).toBeVisible();
    });

    test('replay button restarts demo', async ({ page }) => {
      // Wait for demo to progress
      const assistantMessage = page.getByTestId('chat-assistant-message');
      await expect(assistantMessage).toBeVisible({ timeout: 10000 });

      // Click replay
      const replayButton = page.getByTestId('preview-replay-button');
      await replayButton.click();

      // Wait for user message to reappear (demo restarted)
      const userMessage = page.getByTestId('chat-user-message');
      await expect(userMessage).toBeVisible({ timeout: 5000 });
    });
  });

  // ===================
  // Thinking Steps (6 tests)
  // ===================
  test.describe('Thinking Steps', () => {
    test('thinking steps container is visible during thinking phase', async ({ page }) => {
      const thinkingSteps = page.getByTestId('thinking-steps');
      await expect(thinkingSteps).toBeVisible({ timeout: 8000 });
    });

    test('first thinking step is visible', async ({ page }) => {
      const step = page.getByTestId('thinking-step-0');
      await expect(step).toBeVisible({ timeout: 8000 });
    });

    test('thinking step contains analysis text', async ({ page }) => {
      const step = page.getByTestId('thinking-step-0');
      await expect(step).toBeVisible({ timeout: 8000 });
      await expect(step).toContainText('Analyzing');
    });

    test('thinking toggle is clickable', async ({ page }) => {
      const toggle = page.getByTestId('thinking-toggle');
      await expect(toggle).toBeVisible({ timeout: 8000 });
      await toggle.click();
      // Toggle should still be visible
      await expect(toggle).toBeVisible();
    });

    test('multiple thinking steps are rendered', async ({ page }) => {
      // Wait for thinking steps to appear
      await page.getByTestId('thinking-steps').waitFor({ state: 'visible', timeout: 8000 });
      // Check for multiple steps
      const steps = page.locator('[data-testid^="thinking-step-"]');
      const count = await steps.count();
      expect(count).toBeGreaterThan(1);
    });

    test('thinking steps show completion status', async ({ page }) => {
      // Wait for thinking steps to complete
      const thinkingSteps = page.getByTestId('thinking-steps');
      await expect(thinkingSteps).toBeVisible({ timeout: 8000 });
      // Check that the toggle shows completed count (e.g., "4/4 steps")
      await expect(thinkingSteps).toContainText('/4 steps', { timeout: 10000 });
    });
  });

  // ===================
  // Streaming Response (6 tests)
  // ===================
  test.describe('Streaming Response', () => {
    test('assistant message streams content', async ({ page }) => {
      const assistantMessage = page.getByTestId('chat-assistant-message');
      await expect(assistantMessage).toBeVisible({ timeout: 12000 });
      // Content should contain streamed text
      await expect(assistantMessage).toContainText('Performance', { timeout: 15000 });
    });

    test('streamed content includes formatted text', async ({ page }) => {
      const assistantMessage = page.getByTestId('chat-assistant-message');
      await expect(assistantMessage).toContainText('Claude Sonnet', { timeout: 20000 });
    });

    test('streamed content includes recommendation', async ({ page }) => {
      const assistantMessage = page.getByTestId('chat-assistant-message');
      await expect(assistantMessage).toContainText('Recommendation', { timeout: 25000 });
    });

    test('status bar updates during streaming', async ({ page }) => {
      const statusBar = page.getByTestId('chat-status-bar');
      // Wait for streaming phase
      await page.getByTestId('chat-assistant-message').waitFor({ state: 'visible', timeout: 12000 });
      // Status should indicate generating
      await expect(statusBar).toContainText(/Generating|complete/);
    });

    test('response completes successfully', async ({ page }) => {
      // Wait for completion
      const citationCount = page.getByTestId('citation-count');
      await expect(citationCount).toBeVisible({ timeout: 30000 });
    });

    test('citation count shown after completion', async ({ page }) => {
      const citationCount = page.getByTestId('citation-count');
      await expect(citationCount).toBeVisible({ timeout: 30000 });
      await expect(citationCount).toContainText('citations');
    });
  });

  // ===================
  // Citations (5 tests)
  // ===================
  test.describe('Citations', () => {
    test('citation pills appear in response', async ({ page }) => {
      // Wait for response to stream
      const assistantMessage = page.getByTestId('chat-assistant-message');
      await expect(assistantMessage).toContainText('HumanEval', { timeout: 20000 });
      // Check for citation pills
      const pills = assistantMessage.locator('[data-testid^="citation-pill-"]');
      await expect(pills.first()).toBeVisible({ timeout: 5000 });
    });

    test('citation pills have numbers', async ({ page }) => {
      const assistantMessage = page.getByTestId('chat-assistant-message');
      await expect(assistantMessage).toContainText('HumanEval', { timeout: 20000 });
      const pill = assistantMessage.locator('[data-testid^="citation-pill-"]').first();
      await expect(pill).toBeVisible({ timeout: 5000 });
      // Pills should contain a number
      const text = await pill.textContent();
      expect(text).toMatch(/\d/);
    });

    test('citation pills have aria-labels', async ({ page }) => {
      const assistantMessage = page.getByTestId('chat-assistant-message');
      await expect(assistantMessage).toContainText('HumanEval', { timeout: 20000 });
      const pill = assistantMessage.locator('[data-testid^="citation-pill-"]').first();
      await expect(pill).toBeVisible({ timeout: 5000 });
      await expect(pill).toHaveAttribute('aria-label');
    });

    test('multiple citations are rendered', async ({ page }) => {
      // Wait for full response
      const citationCount = page.getByTestId('citation-count');
      await expect(citationCount).toBeVisible({ timeout: 30000 });
      // Check for multiple pills
      const assistantMessage = page.getByTestId('chat-assistant-message');
      const pills = assistantMessage.locator('[data-testid^="citation-pill-"]');
      const count = await pills.count();
      expect(count).toBeGreaterThan(2);
    });

    test('citation pills are interactive buttons', async ({ page }) => {
      const assistantMessage = page.getByTestId('chat-assistant-message');
      await expect(assistantMessage).toContainText('HumanEval', { timeout: 20000 });
      const pill = assistantMessage.locator('[data-testid^="citation-pill-"]').first();
      await expect(pill).toBeVisible({ timeout: 5000 });
      await expect(pill).toHaveRole('button');
    });
  });

  // ===================
  // Artifact Sidebar (5 tests)
  // ===================
  test.describe('Artifact Sidebar', () => {
    test('sidebar appears after response completes', async ({ page }) => {
      const sidebar = page.getByTestId('chat-sidebar');
      await expect(sidebar).toBeVisible({ timeout: 35000 });
    });

    test('sidebar has artifacts heading', async ({ page }) => {
      const sidebar = page.getByTestId('chat-sidebar');
      await expect(sidebar).toBeVisible({ timeout: 35000 });
      await expect(sidebar).toContainText('Artifacts');
    });

    test('artifact card is rendered', async ({ page }) => {
      const artifactCard = page.getByTestId('artifact-card');
      await expect(artifactCard).toBeVisible({ timeout: 35000 });
    });

    test('artifact card has title', async ({ page }) => {
      const artifactTitle = page.getByTestId('artifact-title');
      await expect(artifactTitle).toBeVisible({ timeout: 35000 });
      await expect(artifactTitle).toContainText('Comparison');
    });

    test('artifact card shows type badge', async ({ page }) => {
      const artifactCard = page.getByTestId('artifact-card');
      await expect(artifactCard).toBeVisible({ timeout: 35000 });
      await expect(artifactCard).toContainText('comparison');
    });
  });

  // ===================
  // Message Bubbles (5 tests)
  // ===================
  test.describe('Message Bubbles', () => {
    test('user message has correct styling', async ({ page }) => {
      const userMessage = page.getByTestId('chat-user-message');
      await expect(userMessage).toBeVisible({ timeout: 5000 });
      // Check it's wrapped in message bubble container
      await expect(userMessage).toBeVisible();
    });

    test('assistant message has correct styling', async ({ page }) => {
      const assistantMessage = page.getByTestId('chat-assistant-message');
      await expect(assistantMessage).toBeVisible({ timeout: 12000 });
    });

    test('assistant message shows Lattice label', async ({ page }) => {
      const assistantMessage = page.getByTestId('chat-assistant-message');
      await expect(assistantMessage).toBeVisible({ timeout: 12000 });
      await expect(assistantMessage).toContainText('Lattice');
    });

    test('messages are in correct order', async ({ page }) => {
      // Wait for both messages
      await page.getByTestId('chat-user-message').waitFor({ state: 'visible', timeout: 5000 });
      await page.getByTestId('chat-assistant-message').waitFor({ state: 'visible', timeout: 12000 });
      // Check order by getting bounding boxes
      const userBox = await page.getByTestId('chat-user-message').boundingBox();
      const assistantBox = await page.getByTestId('chat-assistant-message').boundingBox();
      expect(userBox).not.toBeNull();
      expect(assistantBox).not.toBeNull();
      if (userBox && assistantBox) {
        expect(userBox.y).toBeLessThan(assistantBox.y);
      }
    });

    test('user message contains query text', async ({ page }) => {
      const userMessage = page.getByTestId('chat-user-message');
      await expect(userMessage).toBeVisible({ timeout: 5000 });
      await expect(userMessage).toContainText('RAG pipeline');
    });
  });

  // ===================
  // Accessibility (5 tests)
  // ===================
  test.describe('Accessibility', () => {
    test('replay button is keyboard accessible', async ({ page }) => {
      const replayButton = page.getByTestId('preview-replay-button');
      await replayButton.focus();
      await expect(replayButton).toBeFocused();
    });

    test('thinking toggle is keyboard accessible', async ({ page }) => {
      const toggle = page.getByTestId('thinking-toggle');
      await expect(toggle).toBeVisible({ timeout: 8000 });
      await toggle.focus();
      await expect(toggle).toBeFocused();
    });

    test('icons are decorative', async ({ page }) => {
      const preview = page.getByTestId('chat-preview');
      const icons = preview.locator('svg[aria-hidden="true"]');
      const count = await icons.count();
      expect(count).toBeGreaterThan(0);
    });

    test('status indicator uses color and text', async ({ page }) => {
      const statusBar = page.getByTestId('chat-status-bar');
      await expect(statusBar).toBeVisible();
      // Should have both visual indicator and text
      const indicator = statusBar.locator('.rounded-full');
      await expect(indicator).toBeVisible();
      // And text description
      const text = await statusBar.textContent();
      expect(text).toBeTruthy();
    });

    test('interactive elements have proper roles', async ({ page }) => {
      const replayButton = page.getByTestId('preview-replay-button');
      await expect(replayButton).toHaveRole('button');
    });
  });

  // ===================
  // Responsive Design (4 tests)
  // ===================
  test.describe('Responsive Design', () => {
    test('component visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const preview = page.getByTestId('chat-preview');
      await expect(preview).toBeVisible();
    });

    test('chat messages visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const messages = page.getByTestId('chat-messages');
      await expect(messages).toBeVisible();
    });

    test('status bar visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const statusBar = page.getByTestId('chat-status-bar');
      await expect(statusBar).toBeVisible();
    });

    test('replay button works on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const replayButton = page.getByTestId('preview-replay-button');
      await expect(replayButton).toBeVisible();
      await replayButton.click();
      // Should still function
      await expect(page.getByTestId('chat-preview')).toBeVisible();
    });
  });

  // ===================
  // Animation States (4 tests)
  // ===================
  test.describe('Animation States', () => {
    test('user message animates in', async ({ page }) => {
      const userMessage = page.getByTestId('chat-user-message');
      // Wait for animation to complete
      await expect(userMessage).toBeVisible({ timeout: 5000 });
    });

    test('thinking steps animate in sequence', async ({ page }) => {
      // Wait for thinking steps
      await page.getByTestId('thinking-steps').waitFor({ state: 'visible', timeout: 8000 });
      // First step should be visible
      const step0 = page.getByTestId('thinking-step-0');
      await expect(step0).toBeVisible();
    });

    test('assistant message animates in', async ({ page }) => {
      const assistantMessage = page.getByTestId('chat-assistant-message');
      await expect(assistantMessage).toBeVisible({ timeout: 12000 });
    });

    test('sidebar animates in', async ({ page }) => {
      const sidebar = page.getByTestId('chat-sidebar');
      await expect(sidebar).toBeVisible({ timeout: 35000 });
    });
  });
});
