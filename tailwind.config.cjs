/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-color': '#01df44d1',
				'primary-color-400': '#3afe75'
			  },
		},
	},
	plugins: [],
}
