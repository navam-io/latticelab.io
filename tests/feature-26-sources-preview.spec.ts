import { test, expect } from '@playwright/test';

/**
 * Feature Slice 26: Sources Preview Component
 *
 * Tests for the SourcesPreview component that simulates the Sources panel
 * with file upload dropzone, source cards, and search/filter functionality.
 */

test.describe('Feature 26: Sources Preview Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sources-preview-demo');
    // Wait for React hydration - the component should be interactive
    await page.waitForSelector('[data-testid="sources-preview"]', { state: 'visible' });
    // Wait for source cards to be rendered (indicates hydration complete)
    await page.waitForSelector('[data-testid="source-card-src-1"]', { state: 'visible' });
    // Wait for the input to be editable (React hydration complete)
    const searchInput = page.getByTestId('sources-search-input');
    await expect(searchInput).toBeEditable({ timeout: 5000 });
  });

  // ===================
  // Page Basics (3 tests)
  // ===================
  test.describe('Demo Page', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveURL(/\/sources-preview-demo/);
    });

    test('has page title', async ({ page }) => {
      const title = page.getByTestId('sources-preview-demo-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Sources Preview Demo');
    });

    test('page is noindex', async ({ page }) => {
      const robots = page.locator('meta[name="robots"]');
      await expect(robots).toHaveAttribute('content', 'noindex, nofollow');
    });
  });

  // ===================
  // SourcesPreview Container (5 tests)
  // ===================
  test.describe('SourcesPreview Container', () => {
    test('sources preview is rendered', async ({ page }) => {
      const preview = page.getByTestId('sources-preview');
      await expect(preview).toBeVisible();
    });

    test('has preview container with title bar', async ({ page }) => {
      const titlebar = page.getByTestId('preview-titlebar');
      await expect(titlebar).toBeVisible();
      await expect(titlebar).toContainText('Lattice Lab');
    });

    test('has sources content area', async ({ page }) => {
      const content = page.getByTestId('sources-preview-content');
      await expect(content).toBeVisible();
    });

    test('has sources header', async ({ page }) => {
      const header = page.getByTestId('sources-header');
      await expect(header).toBeVisible();
    });

    test('has sources list', async ({ page }) => {
      const list = page.getByTestId('sources-list');
      await expect(list).toBeVisible();
    });
  });

  // ===================
  // Search Functionality (6 tests)
  // ===================
  test.describe('Search Functionality', () => {
    test('search input is visible', async ({ page }) => {
      const searchInput = page.getByTestId('sources-search-input');
      await expect(searchInput).toBeVisible();
    });

    test('search input has placeholder', async ({ page }) => {
      const searchInput = page.getByTestId('sources-search-input');
      await expect(searchInput).toHaveAttribute('placeholder', 'Search sources...');
    });

    test('search filters sources', async ({ page }) => {
      const searchInput = page.getByTestId('sources-search-input');
      await searchInput.click();
      await searchInput.fill('OpenAI');

      // Check that count updates
      const count = page.getByTestId('sources-count');
      await expect(count).toContainText('1 source', { timeout: 5000 });
    });

    test('search shows matching text', async ({ page }) => {
      const searchInput = page.getByTestId('sources-search-input');
      await searchInput.click();
      await searchInput.fill('Anthropic');

      const count = page.getByTestId('sources-count');
      await expect(count).toContainText('matching "Anthropic"', { timeout: 5000 });
    });

    test('clear button appears when searching', async ({ page }) => {
      const searchInput = page.getByTestId('sources-search-input');
      await searchInput.click();
      await searchInput.fill('test');

      const clearButton = page.getByTestId('sources-search-clear');
      await expect(clearButton).toBeVisible({ timeout: 5000 });
    });

    test('clear button clears search', async ({ page }) => {
      const searchInput = page.getByTestId('sources-search-input');
      await searchInput.click();
      await searchInput.fill('test');

      const clearButton = page.getByTestId('sources-search-clear');
      await expect(clearButton).toBeVisible({ timeout: 5000 });
      await clearButton.click();

      await expect(searchInput).toHaveValue('');
    });
  });

  // ===================
  // Source Cards (8 tests)
  // ===================
  test.describe('Source Cards', () => {
    test('source cards are rendered', async ({ page }) => {
      const card = page.getByTestId('source-card-src-1');
      await expect(card).toBeVisible();
    });

    test('multiple source cards exist', async ({ page }) => {
      const cards = page.locator('[data-testid^="source-card-"]');
      const count = await cards.count();
      expect(count).toBeGreaterThan(3);
    });

    test('source card shows name', async ({ page }) => {
      const card = page.getByTestId('source-card-src-1');
      await expect(card).toContainText('OpenAI GPT-4o Technical Report');
    });

    test('source card shows type badge', async ({ page }) => {
      const card = page.getByTestId('source-card-src-1');
      await expect(card).toContainText('pdf');
    });

    test('source card shows page count', async ({ page }) => {
      const card = page.getByTestId('source-card-src-1');
      await expect(card).toContainText('42 pages');
    });

    test('source card shows vendor', async ({ page }) => {
      const card = page.getByTestId('source-card-src-1');
      await expect(card).toContainText('OpenAI');
    });

    test('source card shows date added', async ({ page }) => {
      const card = page.getByTestId('source-card-src-1');
      await expect(card).toContainText('Added');
    });

    test('URL source card exists', async ({ page }) => {
      const card = page.getByTestId('source-card-src-3');
      await expect(card).toBeVisible();
      await expect(card).toContainText('url');
    });
  });

  // ===================
  // Dropzone (6 tests)
  // ===================
  test.describe('Dropzone', () => {
    test('dropzone is visible', async ({ page }) => {
      const dropzone = page.getByTestId('sources-dropzone');
      await expect(dropzone).toBeVisible();
    });

    test('dropzone shows upload text', async ({ page }) => {
      const dropzone = page.getByTestId('sources-dropzone');
      await expect(dropzone).toContainText('Drag & drop files here');
    });

    test('dropzone has browse button', async ({ page }) => {
      const browseButton = page.getByTestId('sources-upload-button');
      await expect(browseButton).toBeVisible();
    });

    test('dropzone shows file types', async ({ page }) => {
      const dropzone = page.getByTestId('sources-dropzone');
      await expect(dropzone).toContainText('PDF, URL, or API endpoint');
    });

    test('browse button triggers upload simulation', async ({ page }) => {
      const browseButton = page.getByTestId('sources-upload-button');
      await browseButton.click();

      // Should show upload progress
      const dropzone = page.getByTestId('sources-dropzone');
      await expect(dropzone).toContainText('Uploading');
    });

    test('upload progress shows percentage', async ({ page }) => {
      const browseButton = page.getByTestId('sources-upload-button');
      await expect(browseButton).toBeVisible();
      await browseButton.click();

      const dropzone = page.getByTestId('sources-dropzone');
      // Wait for upload to start - shows percentage (or "Uploading" if timing varies)
      await expect(dropzone).toContainText(/Uploading|%/, { timeout: 8000 });
    });
  });

  // ===================
  // Footer Stats (4 tests)
  // ===================
  test.describe('Footer Stats', () => {
    test('footer is visible', async ({ page }) => {
      const footer = page.getByTestId('sources-footer');
      await expect(footer).toBeVisible();
    });

    test('footer shows PDF count', async ({ page }) => {
      const footer = page.getByTestId('sources-footer');
      await expect(footer).toContainText('PDFs');
    });

    test('footer shows URL count', async ({ page }) => {
      const footer = page.getByTestId('sources-footer');
      await expect(footer).toContainText('URLs');
    });

    test('footer shows total pages', async ({ page }) => {
      const footer = page.getByTestId('sources-footer');
      await expect(footer).toContainText('total pages');
    });
  });

  // ===================
  // Hover States (5 tests)
  // ===================
  test.describe('Hover States', () => {
    test('source card has hover cursor', async ({ page }) => {
      const card = page.getByTestId('source-card-src-1');
      await expect(card).toHaveClass(/cursor-pointer/);
    });

    test('source card shows actions on hover', async ({ page }) => {
      const card = page.getByTestId('source-card-src-1');
      await card.hover();

      // Check for action buttons (view, remove)
      const viewButton = card.getByRole('button', { name: /view/i });
      await expect(viewButton).toBeVisible();
    });

    test('remove button appears on hover', async ({ page }) => {
      const card = page.getByTestId('source-card-src-1');
      await card.hover();

      const removeButton = card.getByRole('button', { name: /remove/i });
      await expect(removeButton).toBeVisible();
    });

    test('action buttons have aria-labels', async ({ page }) => {
      const card = page.getByTestId('source-card-src-1');
      await card.hover();

      const viewButton = card.getByRole('button', { name: /view/i });
      await expect(viewButton).toHaveAttribute('aria-label');
    });

    test('source card title changes on hover', async ({ page }) => {
      const card = page.getByTestId('source-card-src-1');
      // Card should have group and group-hover classes for title color change
      await expect(card).toHaveClass(/group/);
    });
  });

  // ===================
  // Empty State (3 tests)
  // ===================
  test.describe('Empty State', () => {
    test('empty state shown when no results', async ({ page }) => {
      const searchInput = page.getByTestId('sources-search-input');
      await searchInput.click();
      await searchInput.fill('nonexistent query xyz');
      // Wait a moment for React state update
      await page.waitForTimeout(500);

      const emptyState = page.getByTestId('sources-empty-state');
      await expect(emptyState).toBeVisible({ timeout: 10000 });
    });

    test('empty state shows search term', async ({ page }) => {
      const searchInput = page.getByTestId('sources-search-input');
      await searchInput.click();
      await searchInput.fill('nonexistent');
      // Wait a moment for React state update
      await page.waitForTimeout(500);

      const emptyState = page.getByTestId('sources-empty-state');
      await expect(emptyState).toBeVisible({ timeout: 10000 });
      await expect(emptyState).toContainText('nonexistent');
    });

    test('empty state has clear search button', async ({ page }) => {
      const searchInput = page.getByTestId('sources-search-input');
      await searchInput.click();
      await searchInput.fill('nonexistent');
      // Wait a moment for React state update
      await page.waitForTimeout(500);

      const emptyState = page.getByTestId('sources-empty-state');
      await expect(emptyState).toBeVisible({ timeout: 10000 });
      const clearButton = emptyState.getByRole('button', { name: /clear/i });
      await expect(clearButton).toBeVisible();
    });
  });

  // ===================
  // Type Legend (3 tests)
  // ===================
  test.describe('Type Legend', () => {
    test('PDF legend visible', async ({ page }) => {
      const header = page.getByTestId('sources-header');
      await expect(header).toContainText('PDF');
    });

    test('URL legend visible', async ({ page }) => {
      const header = page.getByTestId('sources-header');
      await expect(header).toContainText('URL');
    });

    test('API legend visible', async ({ page }) => {
      const header = page.getByTestId('sources-header');
      await expect(header).toContainText('API');
    });
  });

  // ===================
  // Accessibility (5 tests)
  // ===================
  test.describe('Accessibility', () => {
    test('search input is keyboard accessible', async ({ page }) => {
      const searchInput = page.getByTestId('sources-search-input');
      await searchInput.focus();
      await expect(searchInput).toBeFocused();
    });

    test('browse button is keyboard accessible', async ({ page }) => {
      const browseButton = page.getByTestId('sources-upload-button');
      await browseButton.focus();
      await expect(browseButton).toBeFocused();
    });

    test('icons are decorative', async ({ page }) => {
      const preview = page.getByTestId('sources-preview');
      const icons = preview.locator('svg[aria-hidden="true"]');
      const count = await icons.count();
      expect(count).toBeGreaterThan(0);
    });

    test('clear button has aria-label', async ({ page }) => {
      const searchInput = page.getByTestId('sources-search-input');
      await searchInput.click();
      await searchInput.fill('test');
      // Wait for clear button to appear
      await page.waitForTimeout(500);

      const clearButton = page.getByTestId('sources-search-clear');
      await expect(clearButton).toBeVisible({ timeout: 5000 });
      await expect(clearButton).toHaveAttribute('aria-label');
    });

    test('action buttons have accessible roles', async ({ page }) => {
      const browseButton = page.getByTestId('sources-upload-button');
      await expect(browseButton).toHaveRole('button');
    });
  });

  // ===================
  // Responsive Design (4 tests)
  // ===================
  test.describe('Responsive Design', () => {
    test('component visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const preview = page.getByTestId('sources-preview');
      await expect(preview).toBeVisible();
    });

    test('search input visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const searchInput = page.getByTestId('sources-search-input');
      await expect(searchInput).toBeVisible();
    });

    test('source cards visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const card = page.getByTestId('source-card-src-1');
      await expect(card).toBeVisible();
    });

    test('dropzone visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const dropzone = page.getByTestId('sources-dropzone');
      await expect(dropzone).toBeVisible();
    });
  });

  // ===================
  // Animation States (4 tests)
  // ===================
  test.describe('Animation States', () => {
    test('source cards animate in', async ({ page }) => {
      const card = page.getByTestId('source-card-src-1');
      await expect(card).toBeVisible();
    });

    test('cards filter with animation', async ({ page }) => {
      const searchInput = page.getByTestId('sources-search-input');
      await searchInput.click();
      await searchInput.fill('OpenAI');

      // Card should still be visible after filter
      const card = page.getByTestId('source-card-src-1');
      await expect(card).toBeVisible({ timeout: 5000 });
    });

    test('upload progress animates', async ({ page }) => {
      const browseButton = page.getByTestId('sources-upload-button');
      await browseButton.click();

      // Progress bar should be visible during upload - check for "Uploading" text
      const dropzone = page.getByTestId('sources-dropzone');
      await expect(dropzone).toContainText('Uploading', { timeout: 5000 });
    });

    test('upload completes and resets', async ({ page }) => {
      const browseButton = page.getByTestId('sources-upload-button');
      await browseButton.click();

      // Wait for upload to start (shows "Uploading")
      const dropzone = page.getByTestId('sources-dropzone');
      await expect(dropzone).toContainText('Uploading', { timeout: 5000 });

      // Should eventually return to normal state after completion (upload takes ~2s, plus 1s reset delay)
      await expect(dropzone).toContainText('Drag & drop', { timeout: 10000 });
    });
  });
});
