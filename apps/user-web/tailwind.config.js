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
      // primary: {
      //   ...colors.blue,
      //   850: '#165EA2',
      //   950: '#104779',
      // },
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
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms'),
    // eslint-disable-next-line global-require
    require('@tailwindcss/line-clamp'),
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
