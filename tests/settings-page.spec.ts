import { test, expect } from '@playwright/test';

test.describe('Settings Feature Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/features/settings');
  });

  test.describe('Page Structure', () => {
    test('should load successfully', async ({ page }) => {
      await expect(page).toHaveTitle(/Settings/);
    });

    test('should have proper meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /API key|model|privacy|security/i);
    });
  });

  test.describe('Sticky Navigation', () => {
    test('should display sticky nav', async ({ page }) => {
      const nav = page.getByTestId('settings-nav');
      await expect(nav).toBeVisible();
    });

    test('should show feature name', async ({ page }) => {
      const nav = page.getByTestId('settings-nav');
      await expect(nav).toContainText('Settings');
    });

    test('should have Overview link', async ({ page }) => {
      const nav = page.getByTestId('settings-nav');
      await expect(nav.getByText('Overview')).toBeVisible();
    });

    test('should have Capabilities link', async ({ page }) => {
      const nav = page.getByTestId('settings-nav');
      await expect(nav.getByText('Capabilities')).toBeVisible();
    });

    test('should have Tech Specs link', async ({ page }) => {
      const nav = page.getByTestId('settings-nav');
      await expect(nav.getByText('Tech Specs')).toBeVisible();
    });

    test('should have Resources link', async ({ page }) => {
      const nav = page.getByTestId('settings-nav');
      await expect(nav.getByText('Resources')).toBeVisible();
    });

    test('should have Get Lattice button', async ({ page }) => {
      const nav = page.getByTestId('settings-nav');
      await expect(nav.getByText('Get Lattice')).toBeVisible();
    });
  });

  test.describe('Hero Section', () => {
    test('should display hero section', async ({ page }) => {
      const hero = page.getByTestId('settings-hero');
      await expect(hero).toBeVisible();
    });

    test('should show headline', async ({ page }) => {
      const hero = page.getByTestId('settings-hero');
      await expect(hero).toContainText('Your Control Center');
    });

    test('should show tagline', async ({ page }) => {
      const hero = page.getByTestId('settings-hero');
      await expect(hero).toContainText('Configure');
    });

    test('should show description', async ({ page }) => {
      const hero = page.getByTestId('settings-hero');
      await expect(hero).toContainText('API keys');
    });

    test('should have product screenshot', async ({ page }) => {
      const hero = page.getByTestId('settings-hero');
      const image = hero.locator('img');
      await expect(image).toBeVisible();
    });

    test('should have Get Lattice CTA', async ({ page }) => {
      const hero = page.getByTestId('settings-hero');
      await expect(hero.getByText('Get Lattice')).toBeVisible();
    });

    test('should have View docs CTA', async ({ page }) => {
      const hero = page.getByTestId('settings-hero');
      await expect(hero.getByText('View docs')).toBeVisible();
    });
  });

  test.describe('API Key Management Capability', () => {
    test('should display API Key Management section', async ({ page }) => {
      const section = page.getByTestId('settings-apikeys');
      await expect(section).toBeVisible();
    });

    test('should show section title', async ({ page }) => {
      const section = page.getByTestId('settings-apikeys');
      await expect(section).toContainText('API Key Management');
    });

    test('should show section description', async ({ page }) => {
      const section = page.getByTestId('settings-apikeys');
      await expect(section).toContainText('Securely store');
    });

    test('should list Anthropic API feature', async ({ page }) => {
      const section = page.getByTestId('settings-apikeys');
      await expect(section).toContainText('Anthropic API');
    });

    test('should list Local Encryption feature', async ({ page }) => {
      const section = page.getByTestId('settings-apikeys');
      await expect(section).toContainText('Local Encryption');
    });

    test('should have journey link', async ({ page }) => {
      const section = page.getByTestId('settings-apikeys');
      await expect(section.getByText('Configure your API keys')).toBeVisible();
    });
  });

  test.describe('Model Defaults Capability', () => {
    test('should display Model Defaults section', async ({ page }) => {
      const section = page.getByTestId('settings-models');
      await expect(section).toBeVisible();
    });

    test('should show section title', async ({ page }) => {
      const section = page.getByTestId('settings-models');
      await expect(section).toContainText('Model Defaults');
    });

    test('should show section description', async ({ page }) => {
      const section = page.getByTestId('settings-models');
      await expect(section).toContainText('preferred default model');
    });

    test('should list Temperature feature', async ({ page }) => {
      const section = page.getByTestId('settings-models');
      await expect(section).toContainText('Temperature');
    });

    test('should list Presets feature', async ({ page }) => {
      const section = page.getByTestId('settings-models');
      await expect(section).toContainText('Presets');
    });

    test('should have journey link', async ({ page }) => {
      const section = page.getByTestId('settings-models');
      await expect(section.getByText('Set model preferences')).toBeVisible();
    });
  });

  test.describe('Search & RAG Capability', () => {
    test('should display Search & RAG section', async ({ page }) => {
      const section = page.getByTestId('settings-search');
      await expect(section).toBeVisible();
    });

    test('should show section title', async ({ page }) => {
      const section = page.getByTestId('settings-search');
      await expect(section).toContainText('Search & RAG');
    });

    test('should show section description', async ({ page }) => {
      const section = page.getByTestId('settings-search');
      await expect(section).toContainText('searches your sources');
    });

    test('should list Hybrid Search feature', async ({ page }) => {
      const section = page.getByTestId('settings-search');
      await expect(section).toContainText('Hybrid Search');
    });

    test('should list Reranking feature', async ({ page }) => {
      const section = page.getByTestId('settings-search');
      await expect(section).toContainText('Reranking');
    });

    test('should have journey link', async ({ page }) => {
      const section = page.getByTestId('settings-search');
      await expect(section.getByText('Optimize search settings')).toBeVisible();
    });
  });

  test.describe('Privacy & Data Capability', () => {
    test('should display Privacy & Data section', async ({ page }) => {
      const section = page.getByTestId('settings-privacy');
      await expect(section).toBeVisible();
    });

    test('should show section title', async ({ page }) => {
      const section = page.getByTestId('settings-privacy');
      await expect(section).toContainText('Privacy & Data');
    });

    test('should show section description', async ({ page }) => {
      const section = page.getByTestId('settings-privacy');
      await expect(section).toContainText('data and privacy');
    });

    test('should list Local-First feature', async ({ page }) => {
      const section = page.getByTestId('settings-privacy');
      await expect(section).toContainText('Local-First');
    });

    test('should list Export Data feature', async ({ page }) => {
      const section = page.getByTestId('settings-privacy');
      await expect(section).toContainText('Export Data');
    });

    test('should have journey link', async ({ page }) => {
      const section = page.getByTestId('settings-privacy');
      await expect(section.getByText('Manage privacy settings')).toBeVisible();
    });
  });

  test.describe('Tech Specs Section', () => {
    test('should display tech specs section', async ({ page }) => {
      const specs = page.getByTestId('settings-specs');
      await expect(specs).toBeVisible();
    });

    test('should show section title', async ({ page }) => {
      const specs = page.getByTestId('settings-specs');
      await expect(specs).toContainText('Technical Specifications');
    });

    test('should show API Providers category', async ({ page }) => {
      const specs = page.getByTestId('settings-specs');
      await expect(specs).toContainText('API Providers');
    });

    test('should show Model Settings category', async ({ page }) => {
      const specs = page.getByTestId('settings-specs');
      await expect(specs).toContainText('Model Settings');
    });

    test('should show Privacy Controls category', async ({ page }) => {
      const specs = page.getByTestId('settings-specs');
      await expect(specs).toContainText('Privacy Controls');
    });

    test('should have docs link', async ({ page }) => {
      const specs = page.getByTestId('settings-specs');
      await expect(specs.getByText('View full documentation')).toBeVisible();
    });
  });

  test.describe('Related Resources Section', () => {
    test('should display resources section', async ({ page }) => {
      const resources = page.getByTestId('settings-resources');
      await expect(resources).toBeVisible();
    });

    test('should show section title', async ({ page }) => {
      const resources = page.getByTestId('settings-resources');
      await expect(resources).toContainText('Learn More About Settings');
    });

    test('should show Configuring Settings journey', async ({ page }) => {
      const resources = page.getByTestId('settings-resources');
      await expect(resources).toContainText('Configuring Settings');
    });

    test('should show Managing API Keys journey', async ({ page }) => {
      const resources = page.getByTestId('settings-resources');
      await expect(resources).toContainText('Managing API Keys');
    });

    test('should show Privacy Controls journey', async ({ page }) => {
      const resources = page.getByTestId('settings-resources');
      await expect(resources).toContainText('Privacy Controls');
    });

    test('should show Settings API Reference doc', async ({ page }) => {
      const resources = page.getByTestId('settings-resources');
      await expect(resources).toContainText('Settings API Reference');
    });

    test('should show API Key Setup Guide doc', async ({ page }) => {
      const resources = page.getByTestId('settings-resources');
      await expect(resources).toContainText('API Key Setup Guide');
    });

    test('should have View Settings documentation CTA', async ({ page }) => {
      const resources = page.getByTestId('settings-resources');
      await expect(resources.getByText('View Settings documentation')).toBeVisible();
    });
  });

  test.describe('CTA Section', () => {
    test('should display CTA section', async ({ page }) => {
      const cta = page.getByTestId('settings-cta-button');
      await expect(cta).toBeVisible();
    });

    test('should have pricing link', async ({ page }) => {
      const cta = page.getByTestId('settings-cta-button');
      await expect(cta).toHaveAttribute('href', '/#pricing');
    });
  });

  test.describe('Responsive Behavior', () => {
    test('should be responsive on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const hero = page.getByTestId('settings-hero');
      await expect(hero).toBeVisible();
    });

    test('should be responsive on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      const hero = page.getByTestId('settings-hero');
      await expect(hero).toBeVisible();
    });

    test('should be responsive on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      const hero = page.getByTestId('settings-hero');
      await expect(hero).toBeVisible();
    });

    test('should show all capability sections on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await expect(page.getByTestId('settings-apikeys')).toBeVisible();
      await expect(page.getByTestId('settings-models')).toBeVisible();
      await expect(page.getByTestId('settings-search')).toBeVisible();
      await expect(page.getByTestId('settings-privacy')).toBeVisible();
    });
  });

  test.describe('Section Anchors', () => {
    test('should have overview section', async ({ page }) => {
      const section = page.locator('#overview');
      await expect(section).toBeVisible();
    });

    test('should have capabilities section', async ({ page }) => {
      const section = page.locator('#capabilities');
      await expect(section).toBeVisible();
    });

    test('should have specs section', async ({ page }) => {
      const section = page.locator('#specs');
      await expect(section).toBeVisible();
    });

    test('should have resources section', async ({ page }) => {
      const section = page.locator('#resources');
      await expect(section).toBeVisible();
    });
  });
});
