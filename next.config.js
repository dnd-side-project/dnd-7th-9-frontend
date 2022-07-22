/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	env: {
		LOCALHOST_URL: 'http://localhost:3000', // 개발 환경
		KAKAO_CLIENT_ID: 'd7023277c33425eb5d2540210b77250c', // REST API 키
		API_URL: '',
	},
};

module.exports = nextConfig;
