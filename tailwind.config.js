/** @type {import('tailwindcss').Config} */
const colors = require('./src/styles/colors.cjs');
const fontStyle = require('./src/styles/fontStyle.cjs');

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors,
			fontStyle,
		},
	},
};
