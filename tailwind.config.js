/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			signature: ["Great Vibes"],
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: ["winter", "night"],
	},
};
