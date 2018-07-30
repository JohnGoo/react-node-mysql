const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpackConfigBase = require('./webpack.base.config');


const webpackConfigProd = {
	mode: "production",
	optimization: {
    // 提取chunk manifest
    runtimeChunk: {
      name: 'manifest'
    },
    // 压缩
    minimizer: [
			new UglifyJsPlugin({
		    test: /\.js($|\?)/,
			  exclude: /\/node_modules/
		  }),
		  new OptimizeCSSAssetsPlugin({})
    ],
    // 提取分割chunk
    splitChunks:{
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      name: false,
      cacheGroups: {
        // vendor: {
        //   name: 'vendor',
        //   chunks: 'initial',
        //   priority: -10,
        //   reuseExistingChunk: false,
        //   test: /node_modules\/(.*)\.js/
        // },
        // styles: {
        //   name: 'styles',
        //   test: /\.(less|css)$/,
        //   chunks: 'all',
        //   minChunks: 1,
        //   reuseExistingChunk: true,
        //   enforce: true
        // },
      }
    }
  }
};

module.exports = merge(webpackConfigBase, webpackConfigProd);