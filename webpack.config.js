var path = require('path');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: '#eval-source-map',

  entry: {
    main: path.resolve(__dirname, './src/boot.js'),
  },

  output: {
    path: path.resolve(__dirname, './assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  module: {
    loaders: [{
      test: /\.js(x)?$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      },
      exclude: /node_modules/
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
