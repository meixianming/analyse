const path = require("path");
const utils = require("./utils");
const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.base");
const config = require("./config");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(base, {
	module: {
		rules: utils.styleLoaders({
			sourceMap: config.prod.productionSourceMap,
			extract: true,
			usePostCSS: true
		})
	},
	plugins: [
		new CleanWebpackPlugin(["dist"], {
			root: path.resolve(__dirname, '../'), // 设置root 插件会认为webpack.config.js所在的目录为项目的根目录。
			verbose: true
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash:8].css",
			chunkFilename: "[name].[contenthash:8].css"
		})
	],
	devtool: config.prod.productionSourceMap ? config.prod.devtool : false,
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true // set to true if you want JS source maps
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	mode: "production"
})