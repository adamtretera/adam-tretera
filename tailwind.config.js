module.exports = {
	theme: {
		colors: {
			transparent: "transparent",
			primary: {
				0: "var(--color-primary)",
				100: "var(--color-priamry-2)",
			},
			dark: {
				0: "var(--color-dark)",
				100: "var(--color-footer-bg)",
			},
		},
	},

	purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
};
