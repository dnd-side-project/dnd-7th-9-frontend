/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	env: {
		API_URL: 'http://ec2-3-38-222-97.ap-northeast-2.compute.amazonaws.com:8080',
	},
};

module.exports = nextConfig;
