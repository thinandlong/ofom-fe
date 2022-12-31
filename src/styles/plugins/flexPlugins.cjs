/* eslint-disable func-names */
const plugin = require('tailwindcss/plugin');

const flexPlugins = plugin(function ({ addUtilities }) {
  addUtilities({
    '.flex-center': {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    },
    '.flex-dir-col-center-y': {
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
    },
  });
});

module.exports = flexPlugins;
