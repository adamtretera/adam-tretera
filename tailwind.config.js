module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        0: 'var(--color-primary)',
        100: 'var(--color-primary-2)',
        200: 'var(--color-primary-opacity)'
      },
      dark: {
        0: 'var(--color-dark)',
        100: 'var(--color-footer-bg)',
        200: 'var(--color-dark-opacity)'
      }
    }
  },
  corePlugins: {
    backdropBlur: ['hover', 'focus']
  },

  mode: 'jit',

  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class'
};
