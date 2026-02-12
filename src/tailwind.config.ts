import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'deep-navy': '#0A1628',
        'charcoal': '#1A202C',
        'slate': '#2D3748',
        // Accent Colors
        'warm-gold': '#D4A853',
        'gold-hover': '#E5BC6A',
        'gold-subtle': 'rgba(212, 168, 83, 0.15)',
        // Neutral Colors
        'off-white': '#F7F8FA',
        'muted-gray': '#A0AEC0',
        'light-gray': '#E2E8F0',
        // Semantic Colors
        'success': '#48BB78',
        'error': '#F56565',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'h1-desktop': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2-desktop': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2-mobile': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0' }],
        'h3-mobile': ['1.25rem', { lineHeight: '1.3', letterSpacing: '0' }],
        'body-large': ['1.25rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'body-large-mobile': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'body': ['1rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'small': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        '7': '64px',
        '8': '96px',
        '9': '128px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 40px rgba(212, 168, 83, 0.15)',
      },
      maxWidth: {
        'wide': '1280px',
        'content': '960px',
        'narrow': '680px',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '200ms',
        'slow': '300ms',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
