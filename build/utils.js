const path = require("path");
const config = require("./config.js");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")

exports.assetsPath = function (_path) {
	let assetsSubDirectory;
	if (process.env.NODE_ENV === "development") {
		assetsSubDirectory = config.dev.assetsPublicPath;
	} else if (process.env.NODE_ENV === "production") {
		assetsSubDirectory = config.prod.assetsPublicPath;
	}
	return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
	options = options || {}
	const cssLoader = {
		loader: 'css-loader',
		options: {
			sourceMap: options.sourceMap
		}
	}
	const postcssLoader = {
		loader: 'postcss-loader',
		options: {
			sourceMap: options.sourceMap
		}
	}

	// generate loader string to be used with extract text plugin
	function generateLoaders(loader, loaderOptions) {
		const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

		if (loader) {
			loaders.push({
				loader: loader + '-loader',
				options: Object.assign({}, loaderOptions, {
					sourceMap: options.sourceMap
				})
			})
		}

		// Extract CSS when that option is specified
		// (which is the case during production build)
		if (options.extract) {
			return [MiniCSSExtractPlugin.loader].concat(loaders)
		} else {
			return ['vue-style-loader'].concat(loaders)
		}
	}

	// https://vue-loader.vuejs.org/en/configurations/extract-css.html
	return {
		css: generateLoaders(),
		postcss: generateLoaders(),
		less: generateLoaders('less'),
		sass: generateLoaders('sass', {
			indentedSyntax: true
		}),
		scss: generateLoaders('sass'),
		stylus: generateLoaders('stylus'),
		styl: generateLoaders('stylus')
	}
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
	const output = [];
	const loaders = exports.cssLoaders(options);
	for (const extension in loaders) {
		const loader = loaders[extension];
		output.push({
			test: new RegExp('\\.' + extension + "$"),
			use: loader
		})
	}
}

exports.resolve = function (dir) {
	return path.join(__dirname, "..", dir);
}