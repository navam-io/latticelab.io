import { test, expect } from '@playwright/test'

test.describe('Cross-Linking Feature', () => {
  test.describe('Homepage Get Started Link', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/')
      await page.waitForLoadState('domcontentloaded')
    })

    test('hero has Get Started button', async ({ page }) => {
      const learnMore = page.getByTestId('homepage-hero-learn-more')
      await expect(learnMore).toBeVisible()
      await expect(learnMore).toContainText('Get Started')
    })

    test('Get Started button links to docs quickstart', async ({ page }) => {
      const learnMore = page.getByTestId('homepage-hero-learn-more')
      const href = await learnMore.getAttribute('href')
      expect(href).toBe('/docs/getting-started/quickstart')
    })
  })

  test.describe('Feature Pages DocsLink Callouts', () => {
    const featurePages = [
      { path: '/features/sources', testId: 'sources-docs-link', title: 'Sources Documentation' },
      { path: '/features/lab', testId: 'lab-docs-link', title: 'Lab Documentation' },
      { path: '/features/studio', testId: 'studio-docs-link', title: 'Studio Documentation' },
      { path: '/features/blueprints', testId: 'blueprints-docs-link', title: 'Blueprints Documentation' },
      { path: '/features/scenarios', testId: 'scenarios-docs-link', title: 'Scenarios Documentation' },
      { path: '/features/stacks', testId: 'stacks-docs-link', title: 'Stacks Documentation' }
    ]

    for (const feature of featurePages) {
      test(`${feature.path} has DocsLink callout`, async ({ page }) => {
        await page.goto(feature.path)
        await page.waitForLoadState('domcontentloaded')

        const docsLink = page.getByTestId(feature.testId)
        await expect(docsLink).toBeVisible()
      })

      test(`${feature.path} DocsLink has correct title`, async ({ page }) => {
        await page.goto(feature.path)
        await page.waitForLoadState('domcontentloaded')

        const docsLinkTitle = page.getByTestId(`${feature.testId}`).getByTestId('docs-link-title')
        await expect(docsLinkTitle).toContainText(feature.title)
      })

      test(`${feature.path} DocsLink has correct href`, async ({ page }) => {
        await page.goto(feature.path)
        await page.waitForLoadState('domcontentloaded')

        const docsLink = page.getByTestId(feature.testId)
        const href = await docsLink.getAttribute('href')
        expect(href).toContain('/docs/')
      })
    }
  })

  test.describe('Tool Pages DocsLink Callouts', () => {
    const tools = [
      { slug: 'memory-calculator', docsLink: '/docs/guides/build-stacks' },
      { slug: 'tco-calculator', docsLink: '/docs/guides/compare-providers' },
      { slug: 'model-registry', docsLink: '/docs/guides/compare-providers' },
      { slug: 'accelerator-registry', docsLink: '/docs/guides/compare-providers' },
      { slug: 'parallelism-advisor', docsLink: '/docs/guides/build-stacks' },
      { slug: 'quantization-advisor', docsLink: '/docs/guides/build-stacks' },
      { slug: 'spot-advisor', docsLink: '/docs/guides/compare-providers' },
      { slug: 'live-data-feeds', docsLink: '/docs/guides/settings' }
    ]

    for (const tool of tools) {
      test(`/tools/${tool.slug} has DocsLink callout section`, async ({ page }) => {
        await page.goto(`/tools/${tool.slug}`)
        await page.waitForLoadState('domcontentloaded')

        const calloutSection = page.getByTestId(`${tool.slug}-docs-callout`)
        await expect(calloutSection).toBeVisible()
      })

      test(`/tools/${tool.slug} DocsLink has correct href`, async ({ page }) => {
        await page.goto(`/tools/${tool.slug}`)
        await page.waitForLoadState('domcontentloaded')

        const docsLink = page.getByTestId(`${tool.slug}-docs-link`)
        const href = await docsLink.getAttribute('href')
        expect(href).toBe(tool.docsLink)
      })
    }
  })

  test.describe('Feature Page DocsLink Styling', () => {
    test('DocsLink uses bordered variant', async ({ page }) => {
      await page.goto('/features/sources')
      await page.waitForLoadState('domcontentloaded')

      const docsLink = page.getByTestId('sources-docs-link')
      // Check for bordered styling (border class)
      await expect(docsLink).toHaveClass(/border/)
    })

    test('DocsLink has book icon', async ({ page }) => {
      await page.goto('/features/sources')
      await page.waitForLoadState('domcontentloaded')

      const icon = page.getByTestId('sources-docs-link').getByTestId('icon-book')
      await expect(icon).toBeVisible()
    })

    test('DocsLink has description', async ({ page }) => {
      await page.goto('/features/sources')
      await page.waitForLoadState('domcontentloaded')

      const description = page.getByTestId('sources-docs-link').getByTestId('docs-link-description')
      await expect(description).toBeVisible()
    })
  })

  test.describe('Tool Page DocsLink Styling', () => {
    test('Tool DocsLink uses guide icon', async ({ page }) => {
      await page.goto('/tools/memory-calculator')
      await page.waitForLoadState('domcontentloaded')

      const icon = page.getByTestId('memory-calculator-docs-link').getByTestId('icon-guide')
      await expect(icon).toBeVisible()
    })

    test('Tool DocsLink has guide title format', async ({ page }) => {
      await page.goto('/tools/memory-calculator')
      await page.waitForLoadState('domcontentloaded')

      const title = page.getByTestId('memory-calculator-docs-link').getByTestId('docs-link-title')
      await expect(title).toContainText('Guide')
    })
  })

  test.describe('Cross-Linking Navigation', () => {
    test('feature page docs link is clickable', async ({ page }) => {
      await page.goto('/features/sources')
      await page.waitForLoadState('domcontentloaded')

      const docsLink = page.getByTestId('sources-docs-link')
      await expect(docsLink).toBeEnabled()
    })

    test('tool page docs link is clickable', async ({ page }) => {
      await page.goto('/tools/memory-calculator')
      await page.waitForLoadState('domcontentloaded')

      const docsLink = page.getByTestId('memory-calculator-docs-link')
      await expect(docsLink).toBeEnabled()
    })
  })
})
