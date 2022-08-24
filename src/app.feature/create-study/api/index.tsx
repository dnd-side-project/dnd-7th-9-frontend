import client from '@app.modules/api/client';
import { AxiosError } from 'axios';
import { PostStudyBody } from '../types';

// 스터디 그룹 생성
// eslint-disable-next-line import/prefer-default-export
export const postStudyGroup = async (body: PostStudyBody) => {
	try {
		console.log(body);
		const result = await client.post('/group/info', { ...body });
		return result;
	} catch (error) {
		return error;
	}
};
