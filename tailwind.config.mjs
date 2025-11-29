/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Lattice brand colors
        lattice: {
          purple: '#8B5CF6',
          blue: '#3B82F6',
          teal: '#14B8A6',
          cyan: '#06B6D4',
        },
        // Vendor colors for logo ticker
        vendor: {
          anthropic: '#D97706',
          openai: '#412991',
          aws: '#FF9900',
          gcp: '#4285F4',
          azure: '#0078D4',
          nvidia: '#76B900',
          meta: '#0668E1',
          mistral: '#F24E1E',
        },
        // Text colors
        text: {
          primary: '#2D2D2D',
          secondary: '#6B6B6B',
          light: '#9B9B9B',
        },
      },
      fontFamily: {
        display: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'system-ui',
          'sans-serif',
        ],
        body: [
          'SF Pro Text',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'SF Mono',
          'Monaco',
          'Cascadia Code',
          'Courier New',
          'monospace',
        ],
      },
      spacing: {
        xs: '0.5rem',   // 8px
        sm: '1rem',     // 16px
        md: '2rem',     // 32px
        lg: '4rem',     // 64px
        xl: '6rem',     // 96px
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0, 0, 0, 0.08)',
        md: '0 4px 16px rgba(0, 0, 0, 0.1)',
        lg: '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)',
        'gradient-accent': 'linear-gradient(135deg, #3B82F6 0%, #14B8A6 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
        'gradient-footer': 'linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 100%)',
        'gradient-body': 'linear-gradient(180deg, #FAFBFC 0%, #F5F7FA 100%)',
        'gradient-text': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
      },
      borderRadius: {
        DEFAULT: '12px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
      animation: {
        float: 'float 20s ease-in-out infinite',
        'float-reverse': 'float 25s ease-in-out infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
      },
      backdropBlur: {
        DEFAULT: '10px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
