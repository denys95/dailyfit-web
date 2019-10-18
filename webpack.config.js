const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss', '.svg'],
    alias: {
      app: path.resolve(__dirname, 'src/'),
    },
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
    }, {
      test: /\.(css|scss)$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      }, {
        loader: 'postcss-loader',
      }, {
        loader: 'resolve-url-loader',
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      }],
    }],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DailyFit',
      template: './public/index.html',
      favicon: "./public/favicon.ico"
    }),
    new ErrorOverlayPlugin(),
    new Dotenv(),
  ],
};
