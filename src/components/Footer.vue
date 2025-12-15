<template>
  <footer class="border-t bg-gray-50" data-testid="footer">
    <div class="container mx-auto px-4 py-12">
      <!-- Primary Footer Navigation - 6 Column Layout -->
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12"
        data-testid="footer-columns"
      >
        <!-- Column 1: Features -->
        <FooterColumn
          title="Features"
          :links="featuresLinks"
          linkSpacing="tight"
          titleSize="sm"
          testId="footer-features"
        />

        <!-- Column 2: Tools -->
        <FooterColumn
          title="Tools"
          :links="toolsLinks"
          linkSpacing="tight"
          titleSize="sm"
          testId="footer-tools"
        />

        <!-- Column 3: Resources -->
        <FooterColumn
          title="Resources"
          :links="resourcesLinks"
          linkSpacing="tight"
          titleSize="sm"
          testId="footer-resources"
        />

        <!-- Column 4: Solutions -->
        <FooterColumn
          title="Solutions"
          :links="solutionsLinks"
          linkSpacing="tight"
          titleSize="sm"
          testId="footer-solutions"
        />

        <!-- Column 5: Company -->
        <FooterColumn
          title="Company"
          :links="companyLinks"
          linkSpacing="tight"
          titleSize="sm"
          testId="footer-company"
        />

        <!-- Column 6: Support -->
        <FooterColumn
          title="Support"
          :links="supportLinks"
          linkSpacing="tight"
          titleSize="sm"
          testId="footer-support"
        />
      </div>

      <!-- Secondary Footer Bar -->
      <div
        class="border-t pt-8"
        data-testid="footer-secondary"
      >
        <div class="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <!-- Copyright -->
          <div
            class="text-sm text-gray-500 text-center lg:text-left"
            data-testid="footer-copyright"
          >
            <span>Copyright &copy; 2025 Lattice Lab. All rights reserved.</span>
          </div>

          <!-- Legal Links -->
          <nav
            class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            aria-label="Legal"
            data-testid="footer-legal"
          >
            <a
              href="/privacy"
              class="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              data-testid="footer-legal-privacy"
            >
              Privacy
            </a>
            <a
              href="/terms"
              class="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              data-testid="footer-legal-terms"
            >
              Terms
            </a>
            <a
              href="/sitemap.xml"
              class="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              data-testid="footer-legal-sitemap"
            >
              Sitemap
            </a>
            <span
              class="text-sm text-gray-400"
              data-testid="footer-region"
            >
              United States
            </span>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterColumn from './footer/FooterColumn.vue'
import type { FooterLink } from './footer/FooterLinks.vue'

// Features column links
const featuresLinks: FooterLink[] = [
  { label: 'All Features', href: '/features' },
  { label: 'Sources', href: '/features/sources' },
  { label: 'Lab', href: '/features/lab' },
  { label: 'Studio', href: '/features/studio' },
  { label: 'Blueprints', href: '/features/blueprints' },
  { label: 'Scenarios', href: '/features/scenarios' },
  { label: 'Stacks', href: '/features/stacks' },
  { label: 'Settings', href: '/features/settings' }
]

// Tools column links
const toolsLinks: FooterLink[] = [
  { label: 'Memory Calculator', href: '/tools/memory-calculator' },
  { label: 'TCO Calculator', href: '/tools/tco-calculator' },
  { label: 'Model Registry', href: '/tools/model-registry' },
  { label: 'Accelerator Registry', href: '/tools/accelerator-registry' },
  { label: 'Parallelism Advisor', href: '/tools/parallelism-advisor' },
  { label: 'Quantization Advisor', href: '/tools/quantization-advisor' },
  { label: 'Spot Advisor', href: '/tools/spot-advisor' },
  { label: 'Live Data Feeds', href: '/tools/live-data-feeds' }
]

// Resources column links
const resourcesLinks: FooterLink[] = [
  { label: 'Documentation', href: 'https://docs.lattice.nexus', external: true },
  { label: 'API Reference', href: 'https://docs.lattice.nexus/api', external: true },
  { label: 'Getting Started', href: '/blog?tag=getting-started' },
  { label: 'Journey Guides', href: '/blog' },
  { label: 'Blog', href: '/blog' },
  { label: 'Changelog', href: 'https://docs.lattice.nexus/changelog', external: true },
  { label: 'Roadmap', href: 'https://docs.lattice.nexus/roadmap', external: true }
]

// Solutions column links
const solutionsLinks: FooterLink[] = [
  { label: 'For Research Engineers', href: '/#features' },
  { label: 'For Platform Leads', href: '/#features' },
  { label: 'For CTOs', href: '/#features' },
  { label: 'Enterprise', href: '/contact' },
  { label: 'Healthcare', href: '/contact' },
  { label: 'Finance', href: '/contact' }
]

// Company column links
const companyLinks: FooterLink[] = [
  { label: 'About Lattice', href: '/about' },
  { label: 'About Navam.io', href: 'https://www.navam.io', external: true },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/contact' },
  { label: 'GitHub', href: 'https://github.com/navam-io', external: true },
  { label: 'Twitter/X', href: 'https://x.com/latticelab_io', external: true },
  { label: 'YouTube', href: 'https://youtube.com/@latticelab', external: true }
]

// Support column links
const supportLinks: FooterLink[] = [
  { label: 'Help Center', href: 'https://docs.lattice.nexus/support', external: true },
  { label: 'FAQs', href: '/#faq' },
  { label: 'System Requirements', href: 'https://docs.lattice.nexus/requirements', external: true },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' }
]
</script>
