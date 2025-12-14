import { test, expect } from '@playwright/test'

test.describe('Footer Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/footer')
  })

  test.describe('Structure', () => {
    test('renders footer element', async ({ page }) => {
      const footer = page.getByTestId('footer')
      await expect(footer).toBeVisible()
    })

    test('has 6-column layout container', async ({ page }) => {
      const columns = page.getByTestId('footer-columns')
      await expect(columns).toBeVisible()
      // Check for grid layout class
      await expect(columns).toHaveClass(/grid/)
      await expect(columns).toHaveClass(/lg:grid-cols-6/)
    })

    test('renders all 6 columns', async ({ page }) => {
      await expect(page.getByTestId('footer-features')).toBeVisible()
      await expect(page.getByTestId('footer-tools')).toBeVisible()
      await expect(page.getByTestId('footer-resources')).toBeVisible()
      await expect(page.getByTestId('footer-solutions')).toBeVisible()
      await expect(page.getByTestId('footer-company')).toBeVisible()
      await expect(page.getByTestId('footer-support')).toBeVisible()
    })

    test('renders secondary footer bar', async ({ page }) => {
      const secondary = page.getByTestId('footer-secondary')
      await expect(secondary).toBeVisible()
    })
  })

  test.describe('Features Column', () => {
    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('footer-features-title')
      await expect(title).toHaveText('Features')
    })

    test('contains All Features link', async ({ page }) => {
      const link = page.getByTestId('footer-features-links-link-0')
      await expect(link).toHaveText('All Features')
      await expect(link).toHaveAttribute('href', '/features')
    })

    test('contains Sources link', async ({ page }) => {
      const link = page.getByTestId('footer-features-links-link-1')
      await expect(link).toHaveText('Sources')
      await expect(link).toHaveAttribute('href', '/features/sources')
    })

    test('contains Lab link', async ({ page }) => {
      const link = page.getByTestId('footer-features-links-link-2')
      await expect(link).toHaveText('Lab')
      await expect(link).toHaveAttribute('href', '/features/lab')
    })

    test('contains Studio link', async ({ page }) => {
      const link = page.getByTestId('footer-features-links-link-3')
      await expect(link).toHaveText('Studio')
      await expect(link).toHaveAttribute('href', '/features/studio')
    })

    test('contains Blueprints link', async ({ page }) => {
      const link = page.getByTestId('footer-features-links-link-4')
      await expect(link).toHaveText('Blueprints')
      await expect(link).toHaveAttribute('href', '/features/blueprints')
    })

    test('contains Scenarios link', async ({ page }) => {
      const link = page.getByTestId('footer-features-links-link-5')
      await expect(link).toHaveText('Scenarios')
      await expect(link).toHaveAttribute('href', '/features/scenarios')
    })

    test('contains Stacks link', async ({ page }) => {
      const link = page.getByTestId('footer-features-links-link-6')
      await expect(link).toHaveText('Stacks')
      await expect(link).toHaveAttribute('href', '/features/stacks')
    })

    test('contains Settings link', async ({ page }) => {
      const link = page.getByTestId('footer-features-links-link-7')
      await expect(link).toHaveText('Settings')
      await expect(link).toHaveAttribute('href', '/features/settings')
    })
  })

  test.describe('Tools Column', () => {
    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('footer-tools-title')
      await expect(title).toHaveText('Tools')
    })

    test('contains Accelerator Registry link', async ({ page }) => {
      const link = page.getByTestId('footer-tools-links-link-0')
      await expect(link).toHaveText('Accelerator Registry')
      await expect(link).toHaveAttribute('href', '/tools/accelerator-registry')
    })

    test('contains Memory Calculator link', async ({ page }) => {
      const link = page.getByTestId('footer-tools-links-link-1')
      await expect(link).toHaveText('Memory Calculator')
      await expect(link).toHaveAttribute('href', '/tools/memory-calculator')
    })

    test('contains TCO Calculator link', async ({ page }) => {
      const link = page.getByTestId('footer-tools-links-link-2')
      await expect(link).toHaveText('TCO Calculator')
      await expect(link).toHaveAttribute('href', '/tools/tco-calculator')
    })

    test('contains Parallelism Advisor link', async ({ page }) => {
      const link = page.getByTestId('footer-tools-links-link-3')
      await expect(link).toHaveText('Parallelism Advisor')
      await expect(link).toHaveAttribute('href', '/tools/parallelism-advisor')
    })

    test('contains Quantization Advisor link', async ({ page }) => {
      const link = page.getByTestId('footer-tools-links-link-4')
      await expect(link).toHaveText('Quantization Advisor')
      await expect(link).toHaveAttribute('href', '/tools/quantization-advisor')
    })

    test('contains Spot Instance Advisor link', async ({ page }) => {
      const link = page.getByTestId('footer-tools-links-link-5')
      await expect(link).toHaveText('Spot Instance Advisor')
      await expect(link).toHaveAttribute('href', '/tools/spot-advisor')
    })

    test('contains Evaluation Framework link', async ({ page }) => {
      const link = page.getByTestId('footer-tools-links-link-6')
      await expect(link).toHaveText('Evaluation Framework')
      await expect(link).toHaveAttribute('href', '/tools/evaluation')
    })
  })

  test.describe('Resources Column', () => {
    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('footer-resources-title')
      await expect(title).toHaveText('Resources')
    })

    test('contains Documentation link (external)', async ({ page }) => {
      const link = page.getByTestId('footer-resources-links-link-0')
      await expect(link).toHaveText(/Documentation/)
      await expect(link).toHaveAttribute('href', 'https://docs.lattice.nexus')
      await expect(link).toHaveAttribute('target', '_blank')
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    test('Documentation has external icon', async ({ page }) => {
      const icon = page.getByTestId('footer-resources-links-external-icon-0')
      await expect(icon).toBeVisible()
    })

    test('contains API Reference link (external)', async ({ page }) => {
      const link = page.getByTestId('footer-resources-links-link-1')
      await expect(link).toHaveText(/API Reference/)
      await expect(link).toHaveAttribute('href', 'https://docs.lattice.nexus/api')
      await expect(link).toHaveAttribute('target', '_blank')
    })

    test('contains Getting Started link', async ({ page }) => {
      const link = page.getByTestId('footer-resources-links-link-2')
      await expect(link).toHaveText('Getting Started')
      await expect(link).toHaveAttribute('href', '/blog?tag=getting-started')
    })

    test('contains Journey Guides link', async ({ page }) => {
      const link = page.getByTestId('footer-resources-links-link-3')
      await expect(link).toHaveText('Journey Guides')
      await expect(link).toHaveAttribute('href', '/blog')
    })

    test('contains Blog link', async ({ page }) => {
      const link = page.getByTestId('footer-resources-links-link-4')
      await expect(link).toHaveText('Blog')
      await expect(link).toHaveAttribute('href', '/blog')
    })

    test('contains Changelog link (external)', async ({ page }) => {
      const link = page.getByTestId('footer-resources-links-link-5')
      await expect(link).toHaveText(/Changelog/)
      await expect(link).toHaveAttribute('href', 'https://docs.lattice.nexus/changelog')
      await expect(link).toHaveAttribute('target', '_blank')
    })

    test('contains Roadmap link (external)', async ({ page }) => {
      const link = page.getByTestId('footer-resources-links-link-6')
      await expect(link).toHaveText(/Roadmap/)
      await expect(link).toHaveAttribute('href', 'https://docs.lattice.nexus/roadmap')
      await expect(link).toHaveAttribute('target', '_blank')
    })
  })

  test.describe('Solutions Column', () => {
    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('footer-solutions-title')
      await expect(title).toHaveText('Solutions')
    })

    test('contains For Research Engineers link', async ({ page }) => {
      const link = page.getByTestId('footer-solutions-links-link-0')
      await expect(link).toHaveText('For Research Engineers')
      await expect(link).toHaveAttribute('href', '/#features')
    })

    test('contains For Platform Leads link', async ({ page }) => {
      const link = page.getByTestId('footer-solutions-links-link-1')
      await expect(link).toHaveText('For Platform Leads')
      await expect(link).toHaveAttribute('href', '/#features')
    })

    test('contains For CTOs link', async ({ page }) => {
      const link = page.getByTestId('footer-solutions-links-link-2')
      await expect(link).toHaveText('For CTOs')
      await expect(link).toHaveAttribute('href', '/#features')
    })

    test('contains Enterprise link', async ({ page }) => {
      const link = page.getByTestId('footer-solutions-links-link-3')
      await expect(link).toHaveText('Enterprise')
      await expect(link).toHaveAttribute('href', '/contact')
    })

    test('contains Healthcare link', async ({ page }) => {
      const link = page.getByTestId('footer-solutions-links-link-4')
      await expect(link).toHaveText('Healthcare')
      await expect(link).toHaveAttribute('href', '/contact')
    })

    test('contains Finance link', async ({ page }) => {
      const link = page.getByTestId('footer-solutions-links-link-5')
      await expect(link).toHaveText('Finance')
      await expect(link).toHaveAttribute('href', '/contact')
    })
  })

  test.describe('Company Column', () => {
    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('footer-company-title')
      await expect(title).toHaveText('Company')
    })

    test('contains About Lattice link', async ({ page }) => {
      const link = page.getByTestId('footer-company-links-link-0')
      await expect(link).toHaveText('About Lattice')
      await expect(link).toHaveAttribute('href', '/about')
    })

    test('contains About Navam.io link (external)', async ({ page }) => {
      const link = page.getByTestId('footer-company-links-link-1')
      await expect(link).toHaveText(/About Navam.io/)
      await expect(link).toHaveAttribute('href', 'https://www.navam.io')
      await expect(link).toHaveAttribute('target', '_blank')
    })

    test('contains Pricing link', async ({ page }) => {
      const link = page.getByTestId('footer-company-links-link-2')
      await expect(link).toHaveText('Pricing')
      await expect(link).toHaveAttribute('href', '/#pricing')
    })

    test('contains Contact link', async ({ page }) => {
      const link = page.getByTestId('footer-company-links-link-3')
      await expect(link).toHaveText('Contact')
      await expect(link).toHaveAttribute('href', '/contact')
    })

    test('contains GitHub link (external)', async ({ page }) => {
      const link = page.getByTestId('footer-company-links-link-4')
      await expect(link).toHaveText(/GitHub/)
      await expect(link).toHaveAttribute('href', 'https://github.com/navam-io')
      await expect(link).toHaveAttribute('target', '_blank')
    })

    test('contains Twitter/X link (external)', async ({ page }) => {
      const link = page.getByTestId('footer-company-links-link-5')
      await expect(link).toHaveText(/Twitter\/X/)
      await expect(link).toHaveAttribute('href', 'https://x.com/latticelab_io')
      await expect(link).toHaveAttribute('target', '_blank')
    })

    test('contains YouTube link (external)', async ({ page }) => {
      const link = page.getByTestId('footer-company-links-link-6')
      await expect(link).toHaveText(/YouTube/)
      await expect(link).toHaveAttribute('href', 'https://youtube.com/@latticelab')
      await expect(link).toHaveAttribute('target', '_blank')
    })
  })

  test.describe('Support Column', () => {
    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('footer-support-title')
      await expect(title).toHaveText('Support')
    })

    test('contains Help Center link (external)', async ({ page }) => {
      const link = page.getByTestId('footer-support-links-link-0')
      await expect(link).toHaveText(/Help Center/)
      await expect(link).toHaveAttribute('href', 'https://docs.lattice.nexus/support')
      await expect(link).toHaveAttribute('target', '_blank')
    })

    test('contains FAQs link', async ({ page }) => {
      const link = page.getByTestId('footer-support-links-link-1')
      await expect(link).toHaveText('FAQs')
      await expect(link).toHaveAttribute('href', '/#faq')
    })

    test('contains System Requirements link (external)', async ({ page }) => {
      const link = page.getByTestId('footer-support-links-link-2')
      await expect(link).toHaveText(/System Requirements/)
      await expect(link).toHaveAttribute('href', 'https://docs.lattice.nexus/requirements')
      await expect(link).toHaveAttribute('target', '_blank')
    })

    test('contains Privacy Policy link', async ({ page }) => {
      const link = page.getByTestId('footer-support-links-link-3')
      await expect(link).toHaveText('Privacy Policy')
      await expect(link).toHaveAttribute('href', '/privacy')
    })

    test('contains Terms of Service link', async ({ page }) => {
      const link = page.getByTestId('footer-support-links-link-4')
      await expect(link).toHaveText('Terms of Service')
      await expect(link).toHaveAttribute('href', '/terms')
    })
  })

  test.describe('Secondary Footer Bar', () => {
    test('displays copyright notice', async ({ page }) => {
      const copyright = page.getByTestId('footer-copyright')
      await expect(copyright).toBeVisible()
      await expect(copyright).toContainText('Copyright')
      await expect(copyright).toContainText('2025 Lattice Lab')
      await expect(copyright).toContainText('All rights reserved')
    })

    test('displays legal links', async ({ page }) => {
      const legal = page.getByTestId('footer-legal')
      await expect(legal).toBeVisible()
    })

    test('contains Privacy link', async ({ page }) => {
      const link = page.getByTestId('footer-legal-privacy')
      await expect(link).toHaveText('Privacy')
      await expect(link).toHaveAttribute('href', '/privacy')
    })

    test('contains Terms link', async ({ page }) => {
      const link = page.getByTestId('footer-legal-terms')
      await expect(link).toHaveText('Terms')
      await expect(link).toHaveAttribute('href', '/terms')
    })

    test('contains Sitemap link', async ({ page }) => {
      const link = page.getByTestId('footer-legal-sitemap')
      await expect(link).toHaveText('Sitemap')
      await expect(link).toHaveAttribute('href', '/sitemap.xml')
    })

    test('displays region indicator', async ({ page }) => {
      const region = page.getByTestId('footer-region')
      await expect(region).toHaveText('United States')
    })
  })

  test.describe('Responsive Behavior', () => {
    test('shows 2 columns on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const columns = page.getByTestId('footer-columns')
      await expect(columns).toHaveClass(/grid-cols-2/)
    })

    test('shows 3 columns on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      const columns = page.getByTestId('footer-columns')
      await expect(columns).toHaveClass(/md:grid-cols-3/)
    })

    test('shows 6 columns on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 })
      const columns = page.getByTestId('footer-columns')
      await expect(columns).toHaveClass(/lg:grid-cols-6/)
    })
  })

  test.describe('Accessibility', () => {
    test('legal navigation has aria-label', async ({ page }) => {
      const legal = page.getByTestId('footer-legal')
      await expect(legal).toHaveAttribute('aria-label', 'Legal')
    })

    test('external links have proper security attributes', async ({ page }) => {
      // Check a sample of external links
      const externalLinks = [
        'footer-resources-links-link-0', // Documentation
        'footer-company-links-link-4',   // GitHub
        'footer-support-links-link-0'    // Help Center
      ]

      for (const testId of externalLinks) {
        const link = page.getByTestId(testId)
        await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      }
    })
  })

  test.describe('Link Counts', () => {
    test('Features column has 8 links', async ({ page }) => {
      const links = page.getByTestId('footer-features-links').locator('a')
      await expect(links).toHaveCount(8)
    })

    test('Tools column has 7 links', async ({ page }) => {
      const links = page.getByTestId('footer-tools-links').locator('a')
      await expect(links).toHaveCount(7)
    })

    test('Resources column has 7 links', async ({ page }) => {
      const links = page.getByTestId('footer-resources-links').locator('a')
      await expect(links).toHaveCount(7)
    })

    test('Solutions column has 6 links', async ({ page }) => {
      const links = page.getByTestId('footer-solutions-links').locator('a')
      await expect(links).toHaveCount(6)
    })

    test('Company column has 7 links', async ({ page }) => {
      const links = page.getByTestId('footer-company-links').locator('a')
      await expect(links).toHaveCount(7)
    })

    test('Support column has 5 links', async ({ page }) => {
      const links = page.getByTestId('footer-support-links').locator('a')
      await expect(links).toHaveCount(5)
    })
  })
})
