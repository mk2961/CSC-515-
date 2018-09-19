
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = env => {
	env = env || {};
	return {
		entry: './src/mathfun.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'homework1.mathfun.bundle.js'
		},
		plugins: [
			new HtmlWebpackPlugin()
		]
	};
};