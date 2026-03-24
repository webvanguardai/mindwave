import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAF8F5',
        primary: {
          DEFAULT: '#2D4A3E',
          50: '#f0f5f3',
          100: '#d6e5df',
          200: '#aecbbe',
          300: '#8FAF9F',
          400: '#6a9485',
          500: '#4d7a6a',
          600: '#3d6357',
          700: '#2D4A3E',
          800: '#243d33',
          900: '#1a2e26',
        },
        sage: {
          DEFAULT: '#8FAF9F',
          light: '#b8d0c5',
          dark: '#6a9485',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, rgba(45,74,62,0.85) 0%, rgba(45,74,62,0.4) 50%, rgba(143,175,159,0.2) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
