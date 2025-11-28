import type { NavItem, SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Lattice',
  description:
    'Agentic AI Lab Assistant for Research Engineers. Stop researching AI infrastructure manually. Lattice synthesizes benchmarks, pricing, and model cards into grounded recommendations with citations.',
  url: 'https://www.latticelab.io',
  ogImage: 'https://www.latticelab.io/og-image.png',
  links: {
    github: 'https://github.com/navam-io/lattice',
  },
};

export const mainNav: NavItem[] = [
  { label: 'Features', href: '/features' },
  { label: 'Journeys', href: '/journeys' },
  { label: 'Blueprints', href: '/blueprints' },
  { label: 'Docs', href: '/docs' },
  { label: 'Pricing', href: '/pricing' },
];

export const footerNav: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Documentation', href: '/docs' },
  { label: 'GitHub', href: siteConfig.links.github, external: true },
];
