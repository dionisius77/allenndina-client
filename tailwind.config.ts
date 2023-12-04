import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#ebfef4',
          100: '#cefde1',
          200: '#a1f9ca',
          300: '#64f1ae',
          400: '#27e08f',
          500: '#02c777',
          600: '#00a262',
          700: '#008251',
          800: '#006641',
          900: '#005b3c',
          950: '#003020',
        },
        secondary: {
          50: '#f7f7fb',
          100: '#f1eff8',
          200: '#e5e2f2',
          300: '#d2cbe7',
          400: '#b4a7d6',
          500: '#9f8ac8',
          600: '#8c70b7',
          700: '#7b5da4',
          800: '#664e89',
          900: '#554171',
          950: '#372a4b',
        },
        font: {
          50: '#f2f9f8',
          100: '#ddf0ef',
          200: '#bfe2e1',
          300: '#92cece',
          400: '#5eb0b2',
          500: '#429598',
          600: '#3a7a80',
          700: '#34646a',
          800: '#315359',
          900: '#2d474c',
          950: '#1e363b',
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
