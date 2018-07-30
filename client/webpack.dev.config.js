const merge = require('webpack-merge');
const webpackConfigBase = require('./webpack.base.config');

const webpackConfigDev = {
	mode: 'development'
};

module.exports = merge(webpackConfigBase, webpackConfigDev);