const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/index.html', to: './' },
    ], { copyUnmodified: false }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: false
  }
};
