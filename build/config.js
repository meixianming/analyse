// 各环境的部分内容配置
const path = require("path");
module.exports = {
	dev: {
		// paths 
		assetsSubDirectory: "static",
		assetsPublicPath: "/",
		//source Maps
		cssSourceMap: true,
		// If you have problems debugging vue-files in devtools,
		// set this to false - it *may* help
		// https://vue-loader.vuejs.org/en/options.html#cachebusting
		cacheBusting: true,

		// Various Dev Server settings
		host: "localhost",
		port: 8080,
		autoOpenBrowser: false,
		devtool: 'cheap-module-eval-source-map'
	},
	prod: {
		// template for index.html
		index: path.resolve(__dirname, "../dist/index.html"),
		// paths
		assetsRoot: path.resolve(__dirname, "../dist"),
		assetsSubDirectory: "static",
		assetsPublicPath: "/",
		// source Maps
		productionSourceMap: true,
		devtool: '#source-map',
	}
}