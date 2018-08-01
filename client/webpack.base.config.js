const webpack = require('webpack');
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); // webpack4不在使用
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
module.exports = {
	entry: {
		app: resolve('src/index.js')
	},
	output: {
		path: resolve('./dist'),
    filename: 'js/[name].[hash:4].js',
    chunkFilename: 'js/[name].[hash:4].js',
	},
	resolve: {
    extensions: ['.js', '.json'],
    alias: {},
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   include: [resolve('src'), resolve('test')],
      //   loader: 'eslint-loader',
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '/'
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'img/[name].[hash:4].[ext]'
        }
      },
      {
        test: /\.(woff|eot|ttf|svg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'font/[name].[hash:4].[ext]'
        }
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      title: 'hello world!'
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css"
    })
  ]
}