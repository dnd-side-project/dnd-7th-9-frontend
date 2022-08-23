import axios from 'axios';
import { getCookie, setCookie } from '@app.modules/cookie/cookie';

const client = axios.create({
	baseURL: process.env.API_URL,
	// TO DO : 임시로 CORS 에러 방지해놓음. 백엔드와 맞춰봐야 함.
	withCredentials: false,
	headers: {
		'Access-Control-Allow-Origin': 'http://localhost:3000/',
	},
});

client.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('TEST_TOKEN');

		if (token) client.defaults.headers.common['Access-Token'] = token;

		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

client.interceptors.response.use(
	(res) => {
		return res;
	},
	async (error) => {
		const {
			config,
			response: { status },
		} = error;

		if (status === 400) {
			try {
				const originalRequest = config;

				// token refresh 요청
				const refreshToken = getCookie('REFRESH_TOKEN');
				const { data } = await client.get(
					'/auth/token/reissue', // token refresh api
					{ headers: { 'Refresh-Token': refreshToken } }
				);

				// 토큰 갱신
				const { accessToken: newAccessToken, refreshToken: newRefreshToken } = data;

				localStorage.setItem('TEST_TOKEN', newAccessToken);
				setCookie('REFRESH_TOKEN', newRefreshToken, { path: '/', secure: true, sameSite: 'none' });

				client.defaults.headers.common['Access-Token'] = newAccessToken;
				originalRequest.headers['Access-Token'] = newAccessToken;

				// 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
				return client(originalRequest);
			} catch (refreshError) {
				return null; // refresh token 문제로 access 토큰 갱신 실패, 로그인화면으로 이동
			}
		}
		return Promise.reject(error);
	}
);

export default client;
