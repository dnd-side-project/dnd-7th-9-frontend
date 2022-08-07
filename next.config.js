/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack: (config) => {
		// 아래를 추가합니다.
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	env: {
		API_URL: 'http://ec2-3-38-222-97.ap-northeast-2.compute.amazonaws.com:8080',
	},
};

module.exports = nextConfig;
