
module.exports = {

  theme: {
    colors: {
      button: "var(--color-button-text)",
      transparent: "transparent",
      primary: {
        0:"var(--color-white)",
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)",
        300: "var(--color-primary-300)",
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)",
      },
      blue: {
        DEFAULT: "var(--color-blue)",
        hover: "var(--color-blue-hover)",
        disabled: "var(--color-blue-disabled)",
      },
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class'
}