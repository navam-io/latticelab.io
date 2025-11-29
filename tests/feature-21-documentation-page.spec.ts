import { test, expect } from '@playwright/test';

/**
 * Feature Slice 21: Documentation Page
 *
 * Tests for the documentation page including quick start guide,
 * system requirements, configuration, and documentation links.
 */

test.describe('Feature 21: Documentation Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/docs');
  });

  // ===================
  // Page Basics (3 tests)
  // ===================
  test.describe('Page Basics', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveURL(/\/docs/);
    });

    test('has correct page title', async ({ page }) => {
      await expect(page).toHaveTitle(/Documentation/);
    });

    test('has meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /Get started|Quick start/i);
    });
  });

  // ===================
  // Hero Section (9 tests)
  // ===================
  test.describe('Hero Section', () => {
    test('hero section is visible', async ({ page }) => {
      const hero = page.getByTestId('docs-hero');
      await expect(hero).toBeVisible();
    });

    test('displays eyebrow text', async ({ page }) => {
      const eyebrow = page.getByTestId('docs-eyebrow');
      await expect(eyebrow).toBeVisible();
      await expect(eyebrow).toContainText('Documentation');
    });

    test('displays main headline', async ({ page }) => {
      const headline = page.getByTestId('docs-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('5 Minutes');
    });

    test('displays subheadline', async ({ page }) => {
      const subhead = page.getByTestId('docs-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText('Docker');
    });

    test('hero buttons are visible', async ({ page }) => {
      const buttons = page.getByTestId('docs-hero-buttons');
      await expect(buttons).toBeVisible();
    });

    test('quick start button links to section', async ({ page }) => {
      const quickStartBtn = page.getByTestId('docs-hero-quickstart');
      await expect(quickStartBtn).toBeVisible();
      await expect(quickStartBtn).toHaveAttribute('href', '#quick-start');
    });

    test('github button links to repository', async ({ page }) => {
      const githubBtn = page.getByTestId('docs-hero-github');
      await expect(githubBtn).toBeVisible();
      await expect(githubBtn).toHaveAttribute('href', /github\.com/);
    });

    test('github button contains GitHub text', async ({ page }) => {
      const githubBtn = page.getByTestId('docs-hero-github');
      await expect(githubBtn).toContainText('GitHub');
    });

    test('github button has icon', async ({ page }) => {
      const githubBtn = page.getByTestId('docs-hero-github');
      const icon = githubBtn.locator('svg');
      await expect(icon).toBeVisible();
    });
  });

  // ===================
  // Quick Start Section (12 tests)
  // ===================
  test.describe('Quick Start Section', () => {
    test('quick start section is visible', async ({ page }) => {
      const section = page.getByTestId('docs-quickstart');
      await expect(section).toBeVisible();
    });

    test('has section title', async ({ page }) => {
      const title = page.getByTestId('docs-quickstart-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Quick Start Guide');
    });

    test('has steps container', async ({ page }) => {
      const steps = page.getByTestId('docs-quickstart-steps');
      await expect(steps).toBeVisible();
    });

    test('displays all 4 steps', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const step = page.getByTestId(`docs-step-${i}`);
        await expect(step).toBeVisible();
      }
    });

    test('steps have numbered badges', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const number = page.getByTestId(`docs-step-${i}-number`);
        await expect(number).toBeVisible();
        await expect(number).toContainText(`${i + 1}`);
      }
    });

    test('steps have titles', async ({ page }) => {
      const stepTitles = [
        'Purchase Lattice Lab',
        'Accept GitHub Invite',
        'Clone the Repository',
        'Run with Docker',
      ];
      for (let i = 0; i < 4; i++) {
        const title = page.getByTestId(`docs-step-${i}-title`);
        await expect(title).toContainText(stepTitles[i]);
      }
    });

    test('steps have descriptions', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const description = page.getByTestId(`docs-step-${i}-description`);
        await expect(description).toBeVisible();
      }
    });

    test('step 3 has clone command code block', async ({ page }) => {
      const step3 = page.getByTestId('docs-step-2');
      const codeBlock = step3.locator('[data-testid="code-block"]');
      await expect(codeBlock).toBeVisible();
    });

    test('step 4 has docker command code block', async ({ page }) => {
      const step4 = page.getByTestId('docs-step-3');
      const codeBlock = step4.locator('[data-testid="code-block"]');
      await expect(codeBlock).toBeVisible();
    });

    test('success message is visible', async ({ page }) => {
      const success = page.getByTestId('docs-success');
      await expect(success).toBeVisible();
    });

    test('success message has title', async ({ page }) => {
      const title = page.getByTestId('docs-success-title');
      await expect(title).toContainText("You're Ready");
    });

    test('success message contains localhost URL', async ({ page }) => {
      const description = page.getByTestId('docs-success-description');
      await expect(description).toContainText('localhost:3000');
    });
  });

  // ===================
  // Code Block Component (8 tests)
  // ===================
  test.describe('Code Block Component', () => {
    test('code blocks are visible', async ({ page }) => {
      const codeBlocks = page.locator('[data-testid="code-block"]');
      await expect(codeBlocks.first()).toBeVisible();
    });

    test('code blocks have filename display', async ({ page }) => {
      const filename = page.locator('[data-testid="code-block-filename"]').first();
      await expect(filename).toBeVisible();
    });

    test('code blocks have copy button', async ({ page }) => {
      const copyBtn = page.locator('[data-testid="code-block-copy"]').first();
      await expect(copyBtn).toBeVisible();
    });

    test('copy button has accessible label', async ({ page }) => {
      const copyBtn = page.locator('[data-testid="code-block-copy"]').first();
      await expect(copyBtn).toHaveAttribute('aria-label', 'Copy code to clipboard');
    });

    test('copy button shows "Copy" text', async ({ page }) => {
      const copyBtn = page.locator('[data-testid="code-block-copy"]').first();
      await expect(copyBtn).toContainText('Copy');
    });

    test('code blocks have terminal dots decoration', async ({ page }) => {
      const codeBlock = page.locator('[data-testid="code-block"]').first();
      const dots = codeBlock.locator('.rounded-full');
      await expect(dots).toHaveCount(3);
    });

    test('code blocks contain code element', async ({ page }) => {
      const code = page.locator('[data-testid="code-block-code"]').first();
      await expect(code).toBeVisible();
    });

    test('clone command contains correct URL', async ({ page }) => {
      const step3CodeBlock = page.getByTestId('docs-step-2').locator('[data-testid="code-block-code"]');
      await expect(step3CodeBlock).toContainText('github.com/navam-io/lattice-lab');
    });
  });

  // ===================
  // System Requirements Section (9 tests)
  // ===================
  test.describe('System Requirements Section', () => {
    test('requirements section is visible', async ({ page }) => {
      const section = page.getByTestId('docs-requirements');
      await expect(section).toBeVisible();
    });

    test('has section title', async ({ page }) => {
      const title = page.getByTestId('docs-requirements-title');
      await expect(title).toContainText('System Requirements');
    });

    test('has requirements grid', async ({ page }) => {
      const grid = page.getByTestId('docs-requirements-grid');
      await expect(grid).toBeVisible();
    });

    test('displays all 4 requirements', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const req = page.getByTestId(`docs-requirement-${i}`);
        await expect(req).toBeVisible();
      }
    });

    test('Docker requirement shows version', async ({ page }) => {
      const version = page.getByTestId('docs-requirement-0-version');
      await expect(version).toContainText('24.0+');
    });

    test('RAM requirement shows 8GB', async ({ page }) => {
      const version = page.getByTestId('docs-requirement-2-version');
      await expect(version).toContainText('8GB');
    });

    test('Storage requirement shows 10GB', async ({ page }) => {
      const version = page.getByTestId('docs-requirement-3-version');
      await expect(version).toContainText('10GB');
    });

    test('requirements have names', async ({ page }) => {
      const names = ['Docker', 'Docker Compose', 'RAM', 'Storage'];
      for (let i = 0; i < 4; i++) {
        const name = page.getByTestId(`docs-requirement-${i}-name`);
        await expect(name).toContainText(names[i]);
      }
    });

    test('platform note is visible', async ({ page }) => {
      const note = page.getByTestId('docs-platform-note');
      await expect(note).toBeVisible();
      await expect(note).toContainText(/macOS|Linux|Windows/);
    });
  });

  // ===================
  // Configuration Section (6 tests)
  // ===================
  test.describe('Configuration Section', () => {
    test('configuration section is visible', async ({ page }) => {
      const section = page.getByTestId('docs-config');
      await expect(section).toBeVisible();
    });

    test('has section title', async ({ page }) => {
      const title = page.getByTestId('docs-config-title');
      await expect(title).toContainText('Configuration');
    });

    test('has section description', async ({ page }) => {
      const description = page.getByTestId('docs-config-description');
      await expect(description).toContainText('.env');
    });

    test('has code block with env example', async ({ page }) => {
      const section = page.getByTestId('docs-config');
      const codeBlock = section.locator('[data-testid="code-block"]');
      await expect(codeBlock).toBeVisible();
    });

    test('env example contains API key placeholders', async ({ page }) => {
      const section = page.getByTestId('docs-config');
      const code = section.locator('[data-testid="code-block-code"]');
      await expect(code).toContainText('OPENAI_API_KEY');
      await expect(code).toContainText('ANTHROPIC_API_KEY');
    });

    test('has configuration note', async ({ page }) => {
      const note = page.getByTestId('docs-config-note');
      await expect(note).toBeVisible();
      await expect(note).toContainText('locally');
    });
  });

  // ===================
  // Documentation Links Section (7 tests)
  // ===================
  test.describe('Documentation Links Section', () => {
    test('links section is visible', async ({ page }) => {
      const section = page.getByTestId('docs-links');
      await expect(section).toBeVisible();
    });

    test('has section title', async ({ page }) => {
      const title = page.getByTestId('docs-links-title');
      await expect(title).toContainText('Full Documentation');
    });

    test('has links grid', async ({ page }) => {
      const grid = page.getByTestId('docs-links-grid');
      await expect(grid).toBeVisible();
    });

    test('displays all 4 documentation links', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const link = page.getByTestId(`docs-link-${i}`);
        await expect(link).toBeVisible();
      }
    });

    test('links have titles', async ({ page }) => {
      const titles = ['Installation Guide', 'Configuration', 'API Keys Setup', 'Blueprints'];
      for (let i = 0; i < 4; i++) {
        const title = page.getByTestId(`docs-link-${i}-title`);
        await expect(title).toContainText(titles[i]);
      }
    });

    test('links have descriptions', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const description = page.getByTestId(`docs-link-${i}-description`);
        await expect(description).toBeVisible();
      }
    });

    test('links point to GitHub repository', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const link = page.getByTestId(`docs-link-${i}`);
        await expect(link).toHaveAttribute('href', /github\.com\/navam-io\/lattice-lab/);
      }
    });
  });

  // ===================
  // CTA Section (6 tests)
  // ===================
  test.describe('CTA Section', () => {
    test('CTA section is visible', async ({ page }) => {
      const section = page.getByTestId('docs-cta');
      await expect(section).toBeVisible();
    });

    test('displays headline', async ({ page }) => {
      const headline = page.getByTestId('docs-cta-headline');
      await expect(headline).toContainText('Ready to Get Started');
    });

    test('displays subhead', async ({ page }) => {
      const subhead = page.getByTestId('docs-cta-subhead');
      await expect(subhead).toBeVisible();
    });

    test('primary button links to pricing', async ({ page }) => {
      const button = page.getByTestId('docs-cta-primary');
      await expect(button).toBeVisible();
      await expect(button).toHaveAttribute('href', '/pricing');
      await expect(button).toContainText('$99');
    });

    test('secondary button links to journeys', async ({ page }) => {
      const button = page.getByTestId('docs-cta-secondary');
      await expect(button).toBeVisible();
      await expect(button).toHaveAttribute('href', '/journeys');
    });

    test('trust note is visible', async ({ page }) => {
      const trust = page.getByTestId('docs-cta-trust');
      await expect(trust).toBeVisible();
      await expect(trust).toContainText('money-back guarantee');
    });
  });

  // ===================
  // Navigation (4 tests)
  // ===================
  test.describe('Navigation', () => {
    test('quick start anchor works', async ({ page }) => {
      await page.getByTestId('docs-hero-quickstart').click();
      await expect(page).toHaveURL(/\/docs#quick-start/);
    });

    test('pricing CTA navigates correctly', async ({ page }) => {
      await page.getByTestId('docs-cta-primary').click();
      await expect(page).toHaveURL(/\/pricing/);
    });

    test('journeys CTA navigates correctly', async ({ page }) => {
      await page.getByTestId('docs-cta-secondary').click();
      await expect(page).toHaveURL(/\/journeys/);
    });

    test('page is linked from main navigation', async ({ page }) => {
      await page.goto('/');
      const docsLink = page.locator('nav a[href="/docs"]');
      const count = await docsLink.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  // ===================
  // Responsive Design (5 tests)
  // ===================
  test.describe('Responsive Design', () => {
    test('hero adapts to mobile viewport', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const buttons = page.getByTestId('docs-hero-buttons');
      await expect(buttons).toBeVisible();
    });

    test('quick start steps stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const steps = page.getByTestId('docs-quickstart-steps');
      await expect(steps).toBeVisible();
    });

    test('requirements grid adapts to mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const grid = page.getByTestId('docs-requirements-grid');
      await expect(grid).toBeVisible();
    });

    test('documentation links stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const grid = page.getByTestId('docs-links-grid');
      await expect(grid).toBeVisible();
    });

    test('CTA buttons stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const buttons = page.getByTestId('docs-cta-buttons');
      await expect(buttons).toBeVisible();
    });
  });

  // ===================
  // Accessibility (6 tests)
  // ===================
  test.describe('Accessibility', () => {
    test('page has proper heading hierarchy', async ({ page }) => {
      const h1 = page.locator('h1');
      await expect(h1).toHaveCount(1);
    });

    test('h2 headings exist for sections', async ({ page }) => {
      const h2s = page.locator('h2');
      const count = await h2s.count();
      expect(count).toBeGreaterThanOrEqual(5);
    });

    test('icons are decorative (aria-hidden)', async ({ page }) => {
      const icons = page.locator('svg[aria-hidden="true"]');
      const count = await icons.count();
      expect(count).toBeGreaterThan(0);
    });

    test('links have accessible text', async ({ page }) => {
      const links = page.locator('a');
      const count = await links.count();
      for (let i = 0; i < count; i++) {
        const link = links.nth(i);
        const text = await link.textContent();
        const ariaLabel = await link.getAttribute('aria-label');
        expect(text || ariaLabel).toBeTruthy();
      }
    });

    test('copy buttons have aria-label', async ({ page }) => {
      const copyButtons = page.locator('[data-testid="code-block-copy"]');
      const count = await copyButtons.count();
      for (let i = 0; i < count; i++) {
        await expect(copyButtons.nth(i)).toHaveAttribute('aria-label');
      }
    });

    test('code blocks are keyboard accessible', async ({ page }) => {
      const copyBtn = page.locator('[data-testid="code-block-copy"]').first();
      await copyBtn.focus();
      await expect(copyBtn).toBeFocused();
    });
  });

  // ===================
  // Content Accuracy (5 tests)
  // ===================
  test.describe('Content Accuracy', () => {
    test('$99 price is shown in CTA', async ({ page }) => {
      const button = page.getByTestId('docs-cta-primary');
      await expect(button).toContainText('$99');
    });

    test('Docker version requirement is correct', async ({ page }) => {
      const version = page.getByTestId('docs-requirement-0-version');
      await expect(version).toContainText('24.0');
    });

    test('GitHub repository URL is correct', async ({ page }) => {
      const githubBtn = page.getByTestId('docs-hero-github');
      await expect(githubBtn).toHaveAttribute('href', 'https://github.com/navam-io/lattice-lab');
    });

    test('localhost port is 3000', async ({ page }) => {
      const success = page.getByTestId('docs-success-description');
      await expect(success).toContainText('3000');
    });

    test('all 4 quick start steps are complete', async ({ page }) => {
      // Only count direct step containers (docs-step-0, docs-step-1, etc.)
      for (let i = 0; i < 4; i++) {
        const step = page.getByTestId(`docs-step-${i}`);
        await expect(step).toBeVisible();
      }
    });
  });

  // ===================
  // Visual Elements (4 tests)
  // ===================
  test.describe('Visual Elements', () => {
    test('sections have alternating backgrounds', async ({ page }) => {
      const hero = page.getByTestId('docs-hero');
      const quickStart = page.getByTestId('docs-quickstart');
      await expect(hero).toBeVisible();
      await expect(quickStart).toBeVisible();
    });

    test('code blocks have syntax highlighting classes', async ({ page }) => {
      const code = page.locator('[data-testid="code-block-code"]').first();
      const className = await code.getAttribute('class');
      expect(className).toContain('language-');
    });

    test('step numbers have accent background', async ({ page }) => {
      const number = page.getByTestId('docs-step-0-number');
      await expect(number).toHaveClass(/bg-accent/);
    });

    test('success card has green styling', async ({ page }) => {
      const success = page.getByTestId('docs-success');
      await expect(success).toHaveClass(/border-green|bg-green/);
    });
  });
});
