/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#7c7364",
				secundary: "#c8c4bb",
				negro: "#303030",
				m: "#d1c7bd",
				b: "#F1D2BB",
				fondo: "#d1c7bd",
				gris: "#D9D9D9",
				// --- AlphaBelle design system (quiet luxury) ---
				cream: "#f6f2ea",
				sand: "#ece5d8",
				stone: "#c8c4bb",
				taupe: "#7c7364",
				espresso: "#2a2521",
				ink: "#171411",
				gold: "#b08d57",
				champagne: "#cdb288",
			},
			fontFamily: {
				serif: ["var(--font-cormorant)", "Georgia", "serif"],
				sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
			},
			letterSpacing: {
				eyebrow: "0.32em",
			},
			screens: {
				xs: "280px",
				sm: "640px",
				// => @media (min-width: 640px) { ... }

				md: "768px",
				// => @media (min-width: 768px) { ... }

				lg: "1024px",
				// => @media (min-width: 1024px) { ... }

				xl: "1280px",
				// => @media (min-width: 1280px) { ... }

				"2xl": "1536px",
				// => @media (min-width: 1536px) { ... }
			},
			maxWidth: {
				max: "1920px",
			},
			minWidth: {
				min: "280px",
			},
			height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
			backgroundImage: (theme) => ({
				banner: "url('/image/banner.png')",
				contact: "url('/image/aboutus.png')",
			}),
		},
	},
	plugins: [],
};
