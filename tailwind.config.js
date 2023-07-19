/** @type {import("tailwindcss").Config} */

const config = {
	content: ['./index.html', './src/**/*.{vue,js,ts}'],
	mode: 'jit',
	theme: {
		fontFamily: {
			sans: ['Spartan'],
			serif: ['Abril Fatface']
		},
		extend: {
			fontFamily: {
				retro: ['Special Elite']
			}
		}
	}
}

module.exports = config
