import client from '@app.modules/api/client';

import { PostDetailGoalBody } from '../types';

// 세부 목표 생성
// eslint-disable-next-line import/prefer-default-export
export const postStudyGroup = async (body: PostDetailGoalBody) => {
	try {
		console.log(body);
		const result = await client.post('/goal/save', { ...body });
		return result;
	} catch (error) {
		return error;
	}
};
