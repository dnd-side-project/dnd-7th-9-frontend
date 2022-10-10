import client from '@app.modules/api/client';

// 스터디 자세히 보기
// eslint-disable-next-line import/prefer-default-export
export const getStudyDetail = async (groupId: string | string[] | undefined) => {
	const {
		data: { result },
	} = await client.get(`/user/list/detail?groupId=${groupId}`);
	return result;
};
