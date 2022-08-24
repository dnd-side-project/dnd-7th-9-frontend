import axios, { AxiosError } from 'axios';

const client = axios.create({
	baseURL: process.env.API_URL,
});
client.interceptors.response.use(
	(res) => {
		return res;
	},
	async (error) => {
		const {
			config,
			response: { status },
		} = error;
		if (status === 401) {
			try {
				const originalRequest = config;
				// token refresh 요청
				const { data } = await client.post(
					'/auth/token/reissue' // token refresh api
				);
				// 토큰 갱신
				const { accessToken: newAccessToken } = data;
				localStorage.setItem('TEST_TOKEN', newAccessToken);
				client.defaults.headers.common['Access-Token'] = newAccessToken;
				originalRequest.headers.common['Access-Token'] = newAccessToken;
				// 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
				return client(originalRequest);
			} catch (refreshError) {
				return Promise.reject(refreshError); // refresh token 문제로 access 토큰 갱신 실패, 로그인화면으로 이동
			}
		}
		return Promise.reject(error);
	}
);

export default client;
