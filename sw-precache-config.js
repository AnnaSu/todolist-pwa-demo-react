module.exports = {
  staticFileGlobs: [
    'index.html',
    'src/main.css',
    'assets/images/**.*'
  ],
  runtimeCaching: [{
    urlPattern: /this\\.is\\.a\\.regex/,
    handler: 'networkFirst'
  }],
  swFile: 'sw-generated.js'
};
