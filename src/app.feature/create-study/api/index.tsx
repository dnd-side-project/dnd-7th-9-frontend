import client from '@app.modules/api/client';
import { PostStudyBody } from '../types';

// 스터디 그룹 생성
export const postStudyGroup = async (body: PostStudyBody) => {
	const {
		data: {
			result: { groupId, invitedUrl },
		},
	} = await client.post('/group/save', { ...body });
	return { groupId, invitedUrl };
};

// 스터디 멤버 초대
export const postGroupInvite = async (studyGroupId: string | number | null, userEmail: string | null) => {
	console.log(studyGroupId, userEmail);
	const {
		data: {
			result: { studyGroupMember },
		},
	} = await client.post('/group/invite', { studyGroupId, userEmail });
	return studyGroupMember;
};
