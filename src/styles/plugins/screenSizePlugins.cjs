/* eslint-disable func-names */
const plugin = require('tailwindcss/plugin');

const screenSizePlugins = plugin(function ({ addUtilities }) {
  addUtilities({
    '.screen-full': {
      width: '100%',
      height: '100vh',
    },
  });
});

module.exports = screenSizePlugins;
