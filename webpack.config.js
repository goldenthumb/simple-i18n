const {resolve} = require('path');

module.exports = {
  devtool: false,
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      }
    ]
  }
};