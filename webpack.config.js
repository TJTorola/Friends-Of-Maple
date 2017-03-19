const path = require("path");
const webpack = require('webpack');

const PROD = JSON.parse(process.env.PROD_ENV || 'false');

module.exports = {
  context: __dirname,
  entry: ["./src/entry.jsx"],
  output: {
    path: path.resolve('./build/js'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: 'node_modules',
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    alias:{
      '~': path.resolve(ROOT, 'src', 'js')
    },
    extensions: [".js", ".jsx"]
  },
  plugins: PROD ? [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      }
    })] : []
};
