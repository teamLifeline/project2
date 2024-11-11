import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: "#8B0000",
			},

			fontFamily: {
				poppins: ["Poppins, sans-serif"],
				'bebas-neue': ["Bebas Neue, sans-serif"],

			},
		},
	},

	plugins: []
} satisfies Config;
