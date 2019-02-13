const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const env = process.env.NODE_ENV;
const config = require("./config");
const utils = require('./utils.js');
const vueLoaderConfig = require("./vue-loader.conf");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: "./src/main.js",
	output: {
		path: config.prod.assetsRoot,
		filename: env === "development" ? "js/[name].[hash:8].js" : "js/[name].[chunkhash:8].js",
		chunkFilename: "js/[name].[chunkhash].js",
		//用于处理静态资源的引用地址问题，url 相对于 HTML 页面
		publicPath: process.env.NODE_ENV === 'production' ?
			config.prod.assetsPublicPath : config.dev.assetsPublicPath
	},
	resolve: {
		extensions: [".js", ".vue", ".json"],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			"@": utils.resolve("src"),
			"~c": utils.resolve('src/components'),
			"~u": utils.resolve('src/util')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "analyse",
			template: "index.html",
			filename: "index.html",
			minify: {
				collapseWhitespace: true, // 压缩空格
				removeAttributeQuotes: true, // 移除引号
				removeComents: true
			}
		}),
		new webpack.HashedModuleIdsPlugin(),
		new VueLoaderPlugin()
	],
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueLoaderConfig
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
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
	},
	optimization: {
		splitChunks: {
			chunks: "async", // async all initial
			minSize: 30000,
			maxSize: 0,
			minChunks: 1, // 最小公用模块次数，默认为1
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: "~",
			name: true, // 分割的js名称
			cacheGroups: { //缓存组，一个对象。它的作用在于，可以对不同的文件做不同的处理
				commonjs: {
					name: "vender", //输出的名字（提出来的第三方库）
					test: /[\\/]node_modules[\\/]/,
					chunks: "all"
				}
			}
		},
		runtimeChunk: {
			"name": "manifest"
		}
	},
	performance: {
		hints: false
	}
}