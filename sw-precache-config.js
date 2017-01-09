module.exports = {
  staticFileGlobs: [
    'index.html',
    'src/main.css',
    'assets/images/**.*'
  ],
  runtimeCaching: [{
    urlPattern: /^http:\/\/localhost:8080/,
    handler: 'networkFirst'
  }],
  swFile: 'sw-generated.js'
};
