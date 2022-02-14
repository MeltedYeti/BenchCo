module.exports = () => ({
  autoDetect: true,

  filesWithNoCoverageCalculated: [
    'src/testing/**/*.ts',
    'src/*.+(ts|js)'
  ],

  env: {
    runner: 'chrome'
  }
});
