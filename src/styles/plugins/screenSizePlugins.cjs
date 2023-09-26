/* eslint-disable func-names */
const plugin = require('tailwindcss/plugin');

const screenSizePlugins = plugin(function ({ addUtilities }) {
  addUtilities({
    '.screen-full': {
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
    },
    '.element-full': {
      width: '100%',
      height: '100%',
    },
  });
});

module.exports = screenSizePlugins;
