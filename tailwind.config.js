/** @type {import('tailwindcss').Config} */
const colors = require('./src/styles/colors.cjs');
const flexPlugins = require('./src/styles/plugins/flexPlugins.cjs');
const screenSizePlugins = require('./src/styles/plugins/screenSizePlugins.cjs');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [flexPlugins, screenSizePlugins],
};
