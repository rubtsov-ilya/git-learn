const config = {
	mode: 'production',
	entry: {
		main: './src/js/main.js',
		animationgsap: './src/js/animationgsap.js',
		jquerycomponents: './src/js/jquerycomponents.js',
		swiper: './src/js/swiper.js',
		darkmode: './src/js/darkmode.js',




	},
	output: {
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
