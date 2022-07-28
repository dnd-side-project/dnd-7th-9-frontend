import axios from 'axios';

const client = axios.create({
	baseURL: process.env.API_URL,
	withCredentials: true,
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
			const originalRequest = config;
			// token refresh 요청
			const { data } = await client.post(
				'' // token refresh api
			);
			// 토큰 갱신
			const { accessToken: newAccessToken } = data;
			localStorage.setItem('TEST_TOKEN', newAccessToken);
			client.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
			originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
			// 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
			return client(originalRequest);
		}
		return Promise.reject(error);
	}
);

export default client;
