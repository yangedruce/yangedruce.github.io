const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				satoshi: ["Satoshi", ...defaultTheme.fontFamily.sans],
				porlane: ["Porlane"],
				clashDisplay: ["Clash Display"],
			},
			animation: {
				marquee: "marquee 35s linear infinite",
				marquee2: "marquee2 35s linear infinite",
				marquee3: "marquee3 50s linear infinite",
				marquee4: "marquee4 50s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
				marquee3: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				marquee4: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
		},
		screens: {
			sm: "320px",
			mobile375: "375px",
			mobile390: "390px",
			mobile411: "411px",
			md: "768px",
			lg: "1024px",
			responsiveScreen1360: "1360px",
			xl: "1366px",
			responsiveScreen1440: "1440px",
			responsiveScreen1495: "1495px",
			responsiveScreen1550: "1550px",
			responsiveScreen1610: "1610px",
			responsiveScreen1680: "1680px",
			"2xl": "1920px",
			"3xl": "3440px",
		},
		colors: {
			brandPrimaryBlack: {
				DEFAULT: "#000000",
			},
			brandPrimaryWhite: {
				DEFAULT: "#FFFFFF",
			},
			brandSecondaryGreen: {
				DEFAULT: "#75FB4C",
			},
			brandNeutral: {
				50: "#F2E9E2",
				100: "#F5F5F5",
				150: "#EFEFEF",
				200: "#DFDDDD",
				300: "#DAD5D5",
				400: "#C5BFBE",
				500: "#4E4C4C",
				600: "#222121",
				700: "#1E1E1E",
				800: "#0E0E0E",
			},
			transparent: {
				DEFAULT: "transparent",
			},
		},
		fontSize: {
			xs: "0.6rem",
			sm: "0.8rem",
			base: "1rem",
			xl: "1.5rem",
			"2xl": "2.25rem",
			"3xl": "2.68rem",
			"4xl": "3.75rem",
			"5xl": "6.8rem",
			"6xl": "8rem",
			"7xl": "13rem",
			"8xl": "16.5rem",
			"9xl": "22rem",
			"10xl": "32rem",
			"11xl": "37.5rem",
			"12xl": "50rem",
		},
		plugins: ["@tailwindcss/forms"],
	},
};
