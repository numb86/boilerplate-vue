const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: '11',
        safari: '7',
      },
      useBuiltIns: 'usage',
      corejs: '3',
    },
  ],
];

if (process.env.NODE_ENV === 'test') {
  presets.push(['power-assert']);
}

module.exports = {
  presets,
};
