/** @type {import('tailwindcss').Config} */
const colors = require('./src/styles/colors.cjs');

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors,
	},
};
