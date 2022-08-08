// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	webpack(config) {
		// eslint-disable-next-line no-param-reassign
		config.resolve = {
			alias: {
				'@assets': path.resolve(__dirname, 'src/assets'),
				'@app.component': path.resolve(__dirname, 'src/app.component'),
				'@app.feature': path.resolve(__dirname, 'src/app.feature'),
				'@app.modules': path.resolve(__dirname, 'src/app.modules'),
				'@stories': path.resolve(__dirname, 'src/app.stories'),
				'@styles': path.resolve(__dirname, 'styles'),
			},
			...config.resolve,
		};
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},

	env: {
		API_URL: 'http://ec2-3-38-222-97.ap-northeast-2.compute.amazonaws.com:8080',
	},
};

module.exports = nextConfig;
