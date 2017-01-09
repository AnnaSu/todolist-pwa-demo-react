var path = require('path');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: {
    main: path.resolve(__dirname, './src/main.js'),
  },

  output: {
    path: path.resolve(__dirname, './assets'),
    filename: 'bundle.js',
  },

  plugins: [
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'app-images',
        filepath: './sw-generated-webpack.js',
        maximumFileSizeToCacheInBytes: 4194304,
        runtimeCaching: [{
          handler: 'cacheFirst',
          urlPattern: /[.]png$/,
        }],
      }
    ),
  ]
}
