var path = require('path');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: '#eval-source-map',

  entry: {
    main: path.resolve(__dirname, './src/main.js'),
  },

  output: {
    path: path.resolve(__dirname, './assets'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      },
      include: [
        path.resolve(__dirname, './src/main.js')
      ]
    }]
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
