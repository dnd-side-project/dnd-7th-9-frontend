import client from '@app.modules/api/client';

import { PostDetailGoalBody } from '../types';

// 세부 목표 생성
// eslint-disable-next-line import/prefer-default-export
export const postDetailGoal = async (body: PostDetailGoalBody) => {
	console.log(body);
	const result = await client.post('/goal/save', { ...body });
	return result;
};
