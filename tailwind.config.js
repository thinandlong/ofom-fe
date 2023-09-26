/** @type {import('tailwindcss').Config} */
const colors = require('./src/styles/colors.cjs');
const fontSize = require('./src/styles/fontSize.cjs');
const spacing = require('./src/styles/spacing.cjs');
// min-width는 spacing과 동일하게 px단위로 가져가므로 동일 파일을 참조합니다.
const minWidth = require('./src/styles/spacing.cjs');
const borderRadius = require('./src/styles/borderRadius.cjs');

const flexPlugins = require('./src/styles/plugins/flexPlugins.cjs');
const screenSizePlugins = require('./src/styles/plugins/screenSizePlugins.cjs');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontSize,
      spacing,
      borderRadius,
      minWidth,
    },
  },
  plugins: [flexPlugins, screenSizePlugins],
};
