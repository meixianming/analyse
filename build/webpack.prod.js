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
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//  https://github.com/Youzhigang/vue-webpack4-demo
//  1.build css 
//  2. 优化


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
			filename: 'css/app.[name].css',
			chunkFilename: 'css/app.[contenthash:12].css' // use contenthash *
		})
		// new ExtractTextPlugin({
		// 	filename: utils.assetsPath('css/[name].[contenthash].css'),
		// 	// Setting the following option to `false` will not extract CSS from codesplit chunks.
		// 	// Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
		// 	// It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`, 
		// 	// increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
		// 	allChunks: true,
		// })
		// new MiniCssExtractPlugin({
		// 	filename: "[name].[contenthash:8].css",
		// 	chunkFilename: "[name].[contenthash:8].css"
		// })
		// new BundleAnalyzerPlugin()
	],
	devtool: config.prod.productionSourceMap ? config.prod.devtool : false,
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: config.prod.productionSourceMap,
				uglifyOptions: {
					warnings: false
				}
			}),
			new OptimizeCSSAssetsPlugin({
				cssProcessorOptions: config.prod.productionSourceMap ? {
					safe: true,
					map: {
						inline: false
					}
				} : {
					safe: true
				}
			}),
		],
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.(scss|css)$/,
					chunks: 'all',
					minChunks: 1,
					reuseExistingChunk: true,
					enforce: true
				}
			}
		}
	},
	mode: "production"
})