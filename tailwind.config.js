const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark'], //specific classes
    },
  },
  darkMode: 'class',
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'light': '#F1F0EF ',
      'danger': '#FF5000',
    }),
    extend: {
      boxShadow: {
        inner: 'inset 1px 3px 8px 1px rgba(255, 255, 255, 0.5)',
        innerDark: 'inset 1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
        blue: '0px 1px 20px 2px rgba(19, 107, 231, 0.6)',
      },
      colors: {
        'light': '#F1F0EF ',
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.trueGray,
        warm: colors.warmGray,
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber,
        violet: colors.violet,
        cyan: colors.cyan,
        orange: colors.orange,
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
