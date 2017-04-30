const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const envVars = require("./env.js");
const package = require('../package.json');

const extractSass = new ExtractTextPlugin({
  filename: "../build/css/bundle.css"
});

const ENV = process.env.ENV || 'local';

module.exports = {
  context: __dirname,
  entry: ["babel-polyfill", "./src/entry.jsx"],
  output: {
    path: path.resolve('./build/js'),
    filename: "bundle.js",
    publicPath: '/friends-of-maple/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    alias:{
      '~': path.resolve('./src')
    },
    extensions: [".js", ".jsx"]
  },
  plugins: (ENV === 'prod') ? [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      },
      ENV: JSON.stringify(envVars[ENV]),
      PACKAGE_VERSION: JSON.stringify(package.version),
    }),
    new ExtractTextPlugin("../css/bundle.css"),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      },
      sourceMap: true,
    })
  ] : [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(envVars[ENV]),
      PACKAGE_VERSION: JSON.stringify(package.version),
    }),
    new ExtractTextPlugin("../css/bundle.css"),
  ]
};
