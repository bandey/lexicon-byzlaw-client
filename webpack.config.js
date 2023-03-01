const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.js',
    chunkFilename: '[name].chunk.js',
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
    extensions: ['.mjs', '.js'],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/index.html', to: './' },
      { from: './src/robots.txt', to: './' },
      { from: './src/icons/', to: './icons/' },
      { from: './node_modules/bootstrap/dist/css/bootstrap.min.css', to: './styles/' },
      { from: './src/fonts/', to: './fonts/' },
      { from: './src/i18n/locales/', to: './locales/' },
      { from: './src/public-scripts/', to: './scripts/' },
    ], { copyUnmodified: false }),
  ],
  devServer: {
    port: 8008,
    contentBase: path.join(__dirname, 'dist'),
    proxy: {
      '/auth/*': 'http://localhost:8080',
      '/graphql/*': 'http://localhost:8080',
    },
    hot: false
  }
};
