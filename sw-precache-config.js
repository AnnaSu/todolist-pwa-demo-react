module.exports = {
  staticFileGlobs: [
    'index.html',
    'assets/bundle.js',
    'src/main.css',
    'assets/images/**.*'
  ],
  maximumFileSizeToCacheInBytes: 4194304,
  runtimeCaching: [{
    urlPattern: /^http:\/\/localhost:8080/,
    handler: 'networkFirst'
  }],
  swFile: 'sw-generated.js'
};
