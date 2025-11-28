// Navigation types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// Site configuration
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
  };
}

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Card variants
export type CardVariant = 'default' | 'elevated';
