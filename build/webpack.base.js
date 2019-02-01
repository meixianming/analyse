const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = process.env.NODE_ENV;

module.exports = {
	entry: "../src/main.js",
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: env === "development" ? "[name].[hash:8].js" : "[name].[chunkhash:8].js"
	},
	plugins: [
		new CleanWebpackPlugin({
			root: path.resolve(__dirname, '../')
		}),
		new HtmlWebpackPlugin({
			title: "analyse",
			template: "../index.html",
			filename: "index.html",
			minify: {
				collapseWhitespace: true, // 压缩空格
				removeAttributeQuotes: true, // 移除引号
				removeComents: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash:8].css",
			chunkFilename: "[name].[contenthash:8].css"
		}),
		new webpack.HashedModuleIdsPlugin()
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				env === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
				"css-loader",
				'postcss-loader'
			]
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	}
}