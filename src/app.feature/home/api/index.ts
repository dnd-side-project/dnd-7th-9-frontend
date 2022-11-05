import client from '@app.modules/api/client';

// 사용자 스터디 그룹/세부 목표 활동 조회
const fetchGetUserStudyList = () => {
	return client.get('/user/list/v2').then((response) => response.data);
};

export default fetchGetUserStudyList;
