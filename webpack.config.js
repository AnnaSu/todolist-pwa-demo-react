var path = require('path');

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
  }
}
