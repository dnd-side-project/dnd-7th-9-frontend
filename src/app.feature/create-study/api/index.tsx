import client from '@app.modules/api/client';
import { PostStudyBody } from '../types';

// 스터디 그룹 생성
// eslint-disable-next-line import/prefer-default-export
export const postStudyGroup = async (body: PostStudyBody) => {
	const result = await client.post('/group/info', { ...body });
	return result;
};
