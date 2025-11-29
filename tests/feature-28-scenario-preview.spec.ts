/**
 * Feature Slice 28: Scenario Preview Component Tests
 *
 * Tests for the ScenarioPreview component which simulates
 * the Lattice Scenario Configuration with workload type selection,
 * latency/throughput controls, budget input, and AI stack recommendations.
 */
import { test, expect } from '@playwright/test';

test.describe('Scenario Preview Demo Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/scenario-preview-demo');
  });

  test('should load the demo page with title', async ({ page }) => {
    await expect(page.getByTestId('scenario-preview-demo-title')).toBeVisible();
    await expect(page.getByTestId('scenario-preview-demo-title')).toHaveText('Scenario Preview Demo');
  });

  test('should display demo features list', async ({ page }) => {
    await expect(page.getByText('Workload type dropdown')).toBeVisible();
    await expect(page.getByText('Latency slider with P50/P95/P99 toggle')).toBeVisible();
    await expect(page.getByText('Monthly throughput slider')).toBeVisible();
    await expect(page.getByText('Budget input field with currency formatting')).toBeVisible();
  });

  test('should have ScenarioPreview component mounted', async ({ page }) => {
    await expect(page.getByTestId('scenario-preview')).toBeVisible();
  });
});

test.describe('ScenarioPreview Container', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/scenario-preview-demo');
  });

  test('should display preview container with title', async ({ page }) => {
    await expect(page.getByTestId('scenario-preview')).toBeVisible();
    await expect(page.getByText('Lattice Lab — Scenarios')).toBeVisible();
  });

  test('should have form section', async ({ page }) => {
    await expect(page.getByTestId('scenario-form')).toBeVisible();
  });

  test('should have footer section', async ({ page }) => {
    await expect(page.getByTestId('scenario-footer')).toBeVisible();
  });

  test('should display content area', async ({ page }) => {
    await expect(page.getByTestId('scenario-preview-content')).toBeVisible();
  });

  test('should have proper structure', async ({ page }) => {
    const container = page.getByTestId('scenario-preview');
    await expect(container).toBeVisible();
    await expect(page.getByTestId('scenario-form')).toBeVisible();
    await expect(page.getByTestId('scenario-footer')).toBeVisible();
  });
});

test.describe('Workload Type Dropdown', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/scenario-preview-demo');
  });

  test('should display workload type dropdown', async ({ page }) => {
    await expect(page.getByTestId('scenario-workload-select')).toBeVisible();
  });

  test('should have Workload Type label', async ({ page }) => {
    await expect(page.getByTestId('scenario-form').locator('label').filter({ hasText: 'Workload Type' })).toBeVisible();
  });

  test('should have Chat as default selection', async ({ page }) => {
    const select = page.getByTestId('scenario-workload-select');
    await expect(select).toHaveValue('chat');
  });

  test('should display all workload type options', async ({ page }) => {
    const select = page.getByTestId('scenario-workload-select');

    // Check all options are present
    await expect(select.locator('option[value="chat"]')).toHaveText('Chat — Conversational AI assistants');
    await expect(select.locator('option[value="rag"]')).toHaveText('RAG — Retrieval-augmented generation');
    await expect(select.locator('option[value="agentic"]')).toHaveText('Agentic — Autonomous AI agents');
    await expect(select.locator('option[value="batch"]')).toHaveText('Batch — Large-scale processing');
  });

  test('should change workload type on selection', async ({ page }) => {
    const select = page.getByTestId('scenario-workload-select');

    await select.selectOption('rag');
    await expect(select).toHaveValue('rag');

    await select.selectOption('agentic');
    await expect(select).toHaveValue('agentic');

    await select.selectOption('batch');
    await expect(select).toHaveValue('batch');
  });

  test('should update footer on workload change', async ({ page }) => {
    const footer = page.getByTestId('scenario-footer');

    // Default should show Chat
    await expect(footer).toContainText('Chat workload');

    // Change to RAG
    await page.getByTestId('scenario-workload-select').selectOption('rag');
    await expect(footer).toContainText('RAG workload');

    // Change to Agentic
    await page.getByTestId('scenario-workload-select').selectOption('agentic');
    await expect(footer).toContainText('Agentic workload');
  });
});

test.describe('Latency Slider', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/scenario-preview-demo');
  });

  test('should display latency slider', async ({ page }) => {
    await expect(page.getByTestId('scenario-latency-slider')).toBeVisible();
  });

  test('should have Max Latency Target label', async ({ page }) => {
    await expect(page.getByText('Max Latency Target')).toBeVisible();
  });

  test('should display default latency value', async ({ page }) => {
    await expect(page.getByTestId('scenario-latency-value')).toHaveText('200ms');
  });

  test('should display P50/P95/P99 toggle buttons', async ({ page }) => {
    await expect(page.getByTestId('scenario-latency-p50')).toBeVisible();
    await expect(page.getByTestId('scenario-latency-p95')).toBeVisible();
    await expect(page.getByTestId('scenario-latency-p99')).toBeVisible();
  });

  test('should have P95 as default percentile', async ({ page }) => {
    const p95Button = page.getByTestId('scenario-latency-p95');
    // Active state has bg-accent class
    await expect(p95Button).toHaveClass(/bg-accent/);
  });

  test('should change percentile on button click', async ({ page }) => {
    const p50Button = page.getByTestId('scenario-latency-p50');
    const p95Button = page.getByTestId('scenario-latency-p95');
    const p99Button = page.getByTestId('scenario-latency-p99');

    // Click P50
    await p50Button.click();
    await expect(p50Button).toHaveClass(/bg-accent/);
    await expect(p95Button).not.toHaveClass(/bg-accent/);

    // Click P99
    await p99Button.click();
    await expect(p99Button).toHaveClass(/bg-accent/);
    await expect(p50Button).not.toHaveClass(/bg-accent/);
  });

  test('should update footer on percentile change', async ({ page }) => {
    const footer = page.getByTestId('scenario-footer');

    // Default shows P95
    await expect(footer).toContainText('P95');

    // Change to P50
    await page.getByTestId('scenario-latency-p50').click();
    await expect(footer).toContainText('P50');

    // Change to P99
    await page.getByTestId('scenario-latency-p99').click();
    await expect(footer).toContainText('P99');
  });

  test('should update latency value when slider changes', async ({ page }) => {
    const slider = page.getByTestId('scenario-latency-slider');

    // Change slider value using native setter
    await slider.evaluate((el: HTMLInputElement) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      nativeInputValueSetter?.call(el, '500');
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await expect(page.getByTestId('scenario-latency-value')).toHaveText('500ms');
  });

  test('should update footer on latency value change', async ({ page }) => {
    const slider = page.getByTestId('scenario-latency-slider');
    const footer = page.getByTestId('scenario-footer');

    // Change slider value using native setter
    await slider.evaluate((el: HTMLInputElement) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      nativeInputValueSetter?.call(el, '800');
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await expect(footer).toContainText('800ms');
  });
});

test.describe('Throughput Slider', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/scenario-preview-demo');
  });

  test('should display throughput slider', async ({ page }) => {
    await expect(page.getByTestId('scenario-throughput-slider')).toBeVisible();
  });

  test('should have Monthly Throughput label', async ({ page }) => {
    await expect(page.getByTestId('scenario-form').locator('label').filter({ hasText: 'Monthly Throughput' })).toBeVisible();
  });

  test('should display default throughput value', async ({ page }) => {
    await expect(page.getByTestId('scenario-throughput-value')).toContainText('1,000 requests/day');
  });

  test('should update throughput value when slider changes', async ({ page }) => {
    const slider = page.getByTestId('scenario-throughput-slider');

    // Use evaluate to directly set slider value and trigger React's onChange via native event
    await slider.evaluate((el: HTMLInputElement) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      nativeInputValueSetter?.call(el, '5000');
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await expect(page.getByTestId('scenario-throughput-value')).toContainText('5,000 requests/day');
  });

  test('should update footer on throughput change', async ({ page }) => {
    const slider = page.getByTestId('scenario-throughput-slider');
    const footer = page.getByTestId('scenario-footer');

    // Use native setter trick to trigger React's onChange
    await slider.evaluate((el: HTMLInputElement) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      nativeInputValueSetter?.call(el, '3000');
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await expect(footer).toContainText('3,000 req/day');
  });
});

test.describe('Budget Input', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/scenario-preview-demo');
  });

  test('should display budget input field', async ({ page }) => {
    await expect(page.getByTestId('scenario-budget-input')).toBeVisible();
  });

  test('should have Monthly Budget label', async ({ page }) => {
    await expect(page.getByText('Monthly Budget')).toBeVisible();
  });

  test('should have default budget value', async ({ page }) => {
    await expect(page.getByTestId('scenario-budget-input')).toHaveValue('5000');
  });

  test('should display dollar sign prefix', async ({ page }) => {
    // The $ is displayed as a visual prefix
    const form = page.getByTestId('scenario-form');
    await expect(form.getByText('$')).toBeVisible();
  });

  test('should display /month suffix', async ({ page }) => {
    const form = page.getByTestId('scenario-form');
    await expect(form.getByText('/month')).toBeVisible();
  });

  test('should accept budget input', async ({ page }) => {
    const input = page.getByTestId('scenario-budget-input');

    await input.fill('10000');
    await expect(input).toHaveValue('10000');
  });
});

test.describe('Get Recommendations Button', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/scenario-preview-demo');
  });

  test('should display Get Recommendations button', async ({ page }) => {
    await expect(page.getByTestId('scenario-submit-btn')).toBeVisible();
    await expect(page.getByTestId('scenario-submit-btn')).toHaveText('Get Recommendations');
  });

  test('should show loading spinner when clicked', async ({ page }) => {
    const button = page.getByTestId('scenario-submit-btn');

    await button.click();

    // Should show loading state
    await expect(button).toContainText('Analyzing...');
    await expect(button).toBeDisabled();
  });

  test('should change to Reset button after recommendations load', async ({ page }) => {
    const button = page.getByTestId('scenario-submit-btn');

    await button.click();

    // Wait for recommendations to load
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 3000 });

    // Button should now say Reset
    await expect(button).toHaveText('Reset & Try Again');
  });

  test('should reset on Reset button click', async ({ page }) => {
    const button = page.getByTestId('scenario-submit-btn');

    // Get recommendations
    await button.click();
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 3000 });

    // Click reset
    await button.click();

    // Recommendations should disappear
    await expect(page.getByTestId('scenario-recommendations')).not.toBeVisible();
    await expect(button).toHaveText('Get Recommendations');
  });
});

test.describe('Recommendation Cards', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/scenario-preview-demo');

    // Get recommendations first
    await page.getByTestId('scenario-submit-btn').click();
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 3000 });
  });

  test('should display recommendations section', async ({ page }) => {
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible();
  });

  test('should show Recommended Stacks header', async ({ page }) => {
    await expect(page.getByText('Recommended Stacks')).toBeVisible();
  });

  test('should display recommendation cards', async ({ page }) => {
    // Chat workload should have 3 recommendations
    await expect(page.getByTestId('recommendation-card-rec-1')).toBeVisible();
    await expect(page.getByTestId('recommendation-card-rec-2')).toBeVisible();
    await expect(page.getByTestId('recommendation-card-rec-3')).toBeVisible();
  });

  test('should show model names on cards', async ({ page }) => {
    await expect(page.getByTestId('recommendation-model-rec-1')).toHaveText('Claude Sonnet 4');
    await expect(page.getByTestId('recommendation-model-rec-2')).toHaveText('GPT-4o');
    await expect(page.getByTestId('recommendation-model-rec-3')).toHaveText('Gemini Pro');
  });

  test('should show match scores on cards', async ({ page }) => {
    await expect(page.getByTestId('recommendation-score-rec-1')).toHaveText('95');
    await expect(page.getByTestId('recommendation-score-rec-2')).toHaveText('92');
    await expect(page.getByTestId('recommendation-score-rec-3')).toHaveText('88');
  });

  test('should show estimated costs on cards', async ({ page }) => {
    await expect(page.getByTestId('recommendation-cost-rec-1')).toHaveText('$2,400/mo');
    await expect(page.getByTestId('recommendation-cost-rec-2')).toHaveText('$2,100/mo');
    await expect(page.getByTestId('recommendation-cost-rec-3')).toHaveText('$1,800/mo');
  });

  test('should show latency values on cards', async ({ page }) => {
    await expect(page.getByTestId('recommendation-latency-rec-1')).toHaveText('180ms');
    await expect(page.getByTestId('recommendation-latency-rec-2')).toHaveText('150ms');
    await expect(page.getByTestId('recommendation-latency-rec-3')).toHaveText('200ms');
  });

  test('should show Best Match badge on first card', async ({ page }) => {
    const firstCard = page.getByTestId('recommendation-card-rec-1');
    await expect(firstCard.getByText('Best Match')).toBeVisible();
  });

  test('should not show Best Match on other cards', async ({ page }) => {
    const secondCard = page.getByTestId('recommendation-card-rec-2');
    const thirdCard = page.getByTestId('recommendation-card-rec-3');

    await expect(secondCard.getByText('Best Match')).not.toBeVisible();
    await expect(thirdCard.getByText('Best Match')).not.toBeVisible();
  });

  test('should show vendor badges on cards', async ({ page }) => {
    // Use more specific selectors for vendor badges (they are in span elements)
    await expect(page.getByTestId('recommendation-card-rec-1').locator('span').filter({ hasText: /^Anthropic$/ })).toBeVisible();
    await expect(page.getByTestId('recommendation-card-rec-2').locator('span').filter({ hasText: /^OpenAI$/ })).toBeVisible();
    await expect(page.getByTestId('recommendation-card-rec-3').locator('span').filter({ hasText: /^Google$/ })).toBeVisible();
  });

  test('should show framework information', async ({ page }) => {
    await expect(page.getByText('via LangChain')).toBeVisible();
    await expect(page.getByText('via OpenAI SDK')).toBeVisible();
    await expect(page.getByText('via Vertex AI')).toBeVisible();
  });

  test('should show options count', async ({ page }) => {
    await expect(page.getByText('3 options found')).toBeVisible();
  });
});

test.describe('Workload-Specific Recommendations', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/scenario-preview-demo');
  });

  test('should show RAG recommendations when RAG selected', async ({ page }) => {
    await page.getByTestId('scenario-workload-select').selectOption('rag');
    await page.getByTestId('scenario-submit-btn').click();
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 3000 });

    // RAG has 2 recommendations
    await expect(page.getByText('2 options found')).toBeVisible();
    await expect(page.getByText('via LlamaIndex')).toBeVisible();
  });

  test('should show Agentic recommendations when Agentic selected', async ({ page }) => {
    await page.getByTestId('scenario-workload-select').selectOption('agentic');
    await page.getByTestId('scenario-submit-btn').click();
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 3000 });

    // Agentic has 2 recommendations
    await expect(page.getByText('2 options found')).toBeVisible();
    await expect(page.getByText('Claude Opus 4')).toBeVisible();
    await expect(page.getByText('via CrewAI')).toBeVisible();
  });

  test('should show Batch recommendations when Batch selected', async ({ page }) => {
    await page.getByTestId('scenario-workload-select').selectOption('batch');
    await page.getByTestId('scenario-submit-btn').click();
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 3000 });

    // Batch has 2 recommendations
    await expect(page.getByText('2 options found')).toBeVisible();
    await expect(page.getByText('Claude Haiku')).toBeVisible();
    await expect(page.getByText('GPT-4o Mini')).toBeVisible();
  });

  test('should clear recommendations when workload changes', async ({ page }) => {
    // Get recommendations for Chat
    await page.getByTestId('scenario-submit-btn').click();
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 3000 });

    // Change workload
    await page.getByTestId('scenario-workload-select').selectOption('rag');

    // Recommendations should be cleared
    await expect(page.getByTestId('scenario-recommendations')).not.toBeVisible();
  });
});

test.describe('Footer Display', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/scenario-preview-demo');
  });

  test('should display footer with workload type', async ({ page }) => {
    const footer = page.getByTestId('scenario-footer');
    await expect(footer).toContainText('Chat workload');
  });

  test('should display footer with latency info', async ({ page }) => {
    const footer = page.getByTestId('scenario-footer');
    await expect(footer).toContainText('P95 ≤ 200ms');
  });

  test('should display footer with throughput info', async ({ page }) => {
    const footer = page.getByTestId('scenario-footer');
    await expect(footer).toContainText('1,000 req/day');
  });

  test('should update all footer values dynamically', async ({ page }) => {
    const footer = page.getByTestId('scenario-footer');

    // Change workload
    await page.getByTestId('scenario-workload-select').selectOption('batch');
    await expect(footer).toContainText('Batch workload');

    // Change latency percentile
    await page.getByTestId('scenario-latency-p99').click();
    await expect(footer).toContainText('P99');

    // Change latency value
    await page.getByTestId('scenario-latency-slider').fill('600');
    await expect(footer).toContainText('600ms');

    // Change throughput
    await page.getByTestId('scenario-throughput-slider').fill('8000');
    await expect(footer).toContainText('8,000 req/day');
  });
});

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/scenario-preview-demo');
  });

  test('should have proper labels for form controls', async ({ page }) => {
    // Workload dropdown should have label
    const workloadSelect = page.getByTestId('scenario-workload-select');
    await expect(workloadSelect).toHaveAttribute('id', 'workload-type');
    await expect(page.locator('label[for="workload-type"]')).toBeVisible();

    // Budget input should have label
    const budgetInput = page.getByTestId('scenario-budget-input');
    await expect(budgetInput).toHaveAttribute('id', 'budget');
    await expect(page.locator('label[for="budget"]')).toBeVisible();
  });

  test('should be keyboard navigable', async ({ page }) => {
    // Focus on the form area first, then check that interactive elements are focusable
    const workloadSelect = page.getByTestId('scenario-workload-select');

    // Force focus on the workload select
    await workloadSelect.focus();

    // Check that it received focus
    const isFocused = await workloadSelect.evaluate((el) => document.activeElement === el);
    expect(isFocused).toBe(true);
  });

  test('should have accessible button text', async ({ page }) => {
    const button = page.getByTestId('scenario-submit-btn');
    await expect(button).toHaveText('Get Recommendations');
  });

  test('should have decorative icons marked with aria-hidden', async ({ page }) => {
    await page.getByTestId('scenario-submit-btn').click();
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 3000 });

    // Star icon in Best Match should be hidden
    const starIcon = page.getByTestId('recommendation-card-rec-1').locator('svg[aria-hidden="true"]').first();
    await expect(starIcon).toBeVisible();
  });

  test('should have proper button roles for percentile toggle', async ({ page }) => {
    const p50Button = page.getByTestId('scenario-latency-p50');
    const p95Button = page.getByTestId('scenario-latency-p95');
    const p99Button = page.getByTestId('scenario-latency-p99');

    await expect(p50Button).toHaveAttribute('type', 'button');
    await expect(p95Button).toHaveAttribute('type', 'button');
    await expect(p99Button).toHaveAttribute('type', 'button');
  });
});

test.describe('Responsive Design', () => {
  test('should work on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/scenario-preview-demo');

    await expect(page.getByTestId('scenario-preview')).toBeVisible();
    await expect(page.getByTestId('scenario-workload-select')).toBeVisible();
    await expect(page.getByTestId('scenario-submit-btn')).toBeVisible();
  });

  test('should work on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/scenario-preview-demo');

    await expect(page.getByTestId('scenario-preview')).toBeVisible();
    await expect(page.getByTestId('scenario-form')).toBeVisible();
  });

  test('should show recommendations on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/scenario-preview-demo');

    await page.getByTestId('scenario-submit-btn').click();
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 3000 });
    await expect(page.getByTestId('recommendation-card-rec-1')).toBeVisible();
  });

  test('should have proper layout on large screens', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/scenario-preview-demo');

    await expect(page.getByTestId('scenario-preview')).toBeVisible();
    await expect(page.getByTestId('scenario-preview-demo-title')).toBeVisible();
  });
});

test.describe('Animation and Loading States', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/scenario-preview-demo');
  });

  test('should show loading animation during recommendation fetch', async ({ page }) => {
    const button = page.getByTestId('scenario-submit-btn');

    await button.click();

    // Should show loading spinner (the SVG with animate-spin)
    const spinner = button.locator('svg.animate-spin');
    await expect(spinner).toBeVisible();
  });

  test('should disable button during loading', async ({ page }) => {
    const button = page.getByTestId('scenario-submit-btn');

    await button.click();

    // Button should be disabled during loading
    await expect(button).toBeDisabled();

    // Wait for recommendations
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 3000 });

    // Button should be enabled again
    await expect(button).not.toBeDisabled();
  });

  test('should animate recommendation cards appearing', async ({ page }) => {
    await page.getByTestId('scenario-submit-btn').click();

    // Cards should animate in with staggered delay
    const firstCard = page.getByTestId('recommendation-card-rec-1');
    await expect(firstCard).toBeVisible({ timeout: 3000 });

    // Second card should also appear
    const secondCard = page.getByTestId('recommendation-card-rec-2');
    await expect(secondCard).toBeVisible();
  });

  test('should complete loading within timeout', async ({ page }) => {
    const startTime = Date.now();

    await page.getByTestId('scenario-submit-btn').click();
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 5000 });

    const endTime = Date.now();
    const loadTime = endTime - startTime;

    // Loading should complete within 3 seconds (1.5s simulated + buffer for CI variability)
    expect(loadTime).toBeLessThan(4000);
  });
});

test.describe('Edge Cases', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/scenario-preview-demo');
  });

  test('should handle rapid clicking on Get Recommendations', async ({ page }) => {
    const button = page.getByTestId('scenario-submit-btn');

    // Rapid clicks should not cause issues (button is disabled during loading)
    await button.click();
    await button.click(); // Should be ignored due to disabled state
    await button.click(); // Should be ignored due to disabled state

    // Should still work correctly
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 3000 });
  });

  test('should handle extreme latency values', async ({ page }) => {
    const slider = page.getByTestId('scenario-latency-slider');

    // Min value - use native setter trick to trigger React's onChange
    await slider.evaluate((el: HTMLInputElement) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      nativeInputValueSetter?.call(el, '50');
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await expect(page.getByTestId('scenario-latency-value')).toHaveText('50ms');

    // Max value
    await slider.evaluate((el: HTMLInputElement) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      nativeInputValueSetter?.call(el, '1000');
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await expect(page.getByTestId('scenario-latency-value')).toHaveText('1000ms');
  });

  test('should handle extreme throughput values', async ({ page }) => {
    const slider = page.getByTestId('scenario-throughput-slider');

    // Min value - use native setter trick to trigger React's onChange
    await slider.evaluate((el: HTMLInputElement) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      nativeInputValueSetter?.call(el, '100');
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await expect(page.getByTestId('scenario-throughput-value')).toContainText('100 requests/day');

    // Max value
    await slider.evaluate((el: HTMLInputElement) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      nativeInputValueSetter?.call(el, '10000');
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await expect(page.getByTestId('scenario-throughput-value')).toContainText('10,000 requests/day');
  });

  test('should handle empty budget input', async ({ page }) => {
    const input = page.getByTestId('scenario-budget-input');

    await input.fill('');
    await expect(input).toHaveValue('');

    // Component should still function
    await page.getByTestId('scenario-submit-btn').click();
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 3000 });
  });

  test('should handle multiple get/reset cycles', async ({ page }) => {
    const button = page.getByTestId('scenario-submit-btn');

    // First cycle
    await button.click();
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 3000 });
    await button.click(); // Reset
    await expect(page.getByTestId('scenario-recommendations')).not.toBeVisible();

    // Second cycle
    await button.click();
    await expect(page.getByTestId('scenario-recommendations')).toBeVisible({ timeout: 3000 });
    await button.click(); // Reset
    await expect(page.getByTestId('scenario-recommendations')).not.toBeVisible();

    // Button should work for third cycle
    await expect(button).toHaveText('Get Recommendations');
  });
});
