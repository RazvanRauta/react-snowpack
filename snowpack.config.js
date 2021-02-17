/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
	},
	plugins: [
		'@snowpack/plugin-react-refresh',
		'@snowpack/plugin-dotenv',
		'@snowpack/plugin-typescript',
		[
			'@snowpack/plugin-webpack',
			{
				/**
				 * Plugin Options
				 *
				 * https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack#readme
				 *
				 * */
			},
		],
	],
	alias: {
		'@': './src',
	},
}
