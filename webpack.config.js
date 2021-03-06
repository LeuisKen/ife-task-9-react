var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  cache: true,
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', {
      disable: false,
      allChunks: true
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'ROOT': __dirname
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        exclude: path.join(__dirname, 'components')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        include: path.join(__dirname, 'components')
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        loader: "url-loader?mimetype=image/png",
        include: path.join(__dirname, 'assets')
      }
    ]
  }
}
