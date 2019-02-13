const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.base");
const config = require("./config");
const utils = require("./utils");
const path = require("path");

module.exports = merge(base, {
	module: {
		rules: utils.styleLoaders({
			sourceMap: config.dev.cssSourceMap,
			usePostCSS: true
		})
	},
	devtool: config.dev.devtool,
	devServer: {
		clientLogLevel: "warning",
		historyApiFallback: {
			rewrites: [{
				from: /.*/,
				to: path.posix.join(config.dev.assetsPublicPath, 'index.html')
			}, ],
		},
		hot: true,
		compress: true,
		host: config.dev.host,
		port: config.dev.port,
		open: config.dev.autoOpenBrowser,
		publicPath: config.dev.assetsPublicPath,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
		new webpack.NoEmitOnErrorsPlugin(),
	],
	mode: "development"

})