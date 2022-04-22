/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      primary: {
        50: '#CDE3F8',
        100: '#98C2F1',
        200: '#74AEEC',
        300: '#509AE7',
        400: '#2C87E3',
        500: '#1B74CA',
        600: '#165EA2',
        700: '#104779',
        800: '#0B3051',
        900: '#051828',
      },
      accent: colors.amber,
      red: colors.rose,
      green: colors.emerald,
      blue: colors.sky,
      yellow: colors.yellow,
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        slider: '0 0 0 5px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        // Dropdown menu
        'scale-in': {
          '0%': { opacity: 0, transform: 'scale(0)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        // Tooltip
        'slide-up-fade': {
          '0%': { opacity: 0, transform: 'translateY(2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-right-fade': {
          '0%': { opacity: 0, transform: 'translateX(-2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'slide-down-fade': {
          '0%': { opacity: 0, transform: 'translateY(-2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-left-fade': {
          '0%': { opacity: 0, transform: 'translateX(2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        // Navigation menu
        'enter-from-right': {
          '0%': { transform: 'translateX(200px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'enter-from-left': {
          '0%': { transform: 'translateX(-200px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'exit-to-right': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(200px)', opacity: 0 },
        },
        'exit-to-left': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-200px)', opacity: 0 },
        },
        'scale-in-content': {
          '0%': { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
          '100%': { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
        },
        'scale-out-content': {
          '0%': { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
          '100%': { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        // Toast
        'toast-hide': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'toast-slide-in-right': {
          '0%': { transform: `translateX(calc(100% + 1rem))` },
          '100%': { transform: 'translateX(0)' },
        },
        'toast-slide-in-bottom': {
          '0%': { transform: `translateY(calc(100% + 1rem))` },
          '100%': { transform: 'translateY(0)' },
        },
        'toast-swipe-out': {
          '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          '100%': {
            transform: `translateX(calc(100% + 1rem))`,
          },
        },
      },
      animation: {
        // Dropdown menu
        'scale-in': 'scale-in 0.2s ease-in-out',
        'slide-down': 'slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-fade':
          'slide-right-fade 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-fade': 'slide-left-fade 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        // Navigation menu
        'enter-from-right': 'enter-from-right 0.25s ease',
        'enter-from-left': 'enter-from-left 0.25s ease',
        'exit-to-right': 'exit-to-right 0.25s ease',
        'exit-to-left': 'exit-to-left 0.25s ease',
        'scale-in-content': 'scale-in-content 0.2s ease',
        'scale-out-content': 'scale-out-content 0.2s ease',
        'fade-in': 'fade-in 0.2s ease',
        'fade-out': 'fade-out 0.2s ease',
        // Toast
        'toast-hide': 'toast-hide 100ms ease-in forwards',
        'toast-slide-in-right':
          'toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-slide-in-bottom':
          'toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-swipe-out': 'toast-swipe-out 100ms ease-out forwards',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
    // eslint-disable-next-line global-require
    require('@tailwindcss/line-clamp'),
    // eslint-disable-next-line global-require
    require('tailwindcss-radix')(),
    // blur navbar alternative for firefox
    plugin(({ addVariant, e, postcss }) => {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          // eslint-disable-next-line no-param-reassign
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
