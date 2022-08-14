import { useQuery } from 'react-query';
import client from '@app.modules/api/client';
import { getCookie } from '@app.modules/cookie/cookie';

interface IRequest {
	url: string;
	data: object;
	accessToken: string;
}

const requestFn = async ({ url, data, accessToken }: IRequest) => {
	const response = await client.get(url, {
		data: { ...data, accessToken },
	});

	if (response.data.error) throw response.data.error;
	return response.data.result;
};

const getQueryKeyFn = (queryKeys: [string, object | any] | string) => {
	const url = Array.isArray(queryKeys) ? queryKeys[0] : queryKeys;
	const data = Array.isArray(queryKeys) ? queryKeys[1] : null;
	return {
		url,
		data,
	};
};

// 활용 예제
// const { data, isLoading, refetch ...} = useQueryHook("API_URL", ...); // API URL만 있는 경우
// const { data, isLoading, refetch ...} = useQueryHook(["API_URL", { data }], ...); // 파라미터 있는 경우
const useQueryHook = (queryKeys: [string, object | any] | string, options = {}) => {
	const accessToken = getCookie('TEST_TOKEN');
	const { url, data } = getQueryKeyFn(queryKeys);

	return useQuery(
		queryKeys,
		async () =>
			requestFn({
				url,
				data,
				accessToken,
			}),
		{
			enabled: !!queryKeys,
			onError: (error) => {
				// TO DO : 공통 에러 토스트 혹은 메시지
			},
			...options,
		}
	);
};

export default useQueryHook;
