const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = process.env.NODE_ENV;
const config = require("./config");

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: "./src/main.js",
	output: {
		path: config.prod.assetsRoot,
		filename: env === "development" ? "[name].[hash:8].js" : "[name].[chunkhash:8].js",
		//用于处理静态资源的引用地址问题，url 相对于 HTML 页面
		publicPath: process.env.NODE_ENV === 'production' ?
			config.prod.assetsPublicPath : config.dev.assetsPublicPath
	},
	resolve: {
		extensions: [".js", ".vue", ".json"]
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
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueLoaderConfig
			},
			{
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
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:8].[ext]')
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('media/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	}
}