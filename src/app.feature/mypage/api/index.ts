import client from '@app.modules/api/client';

const fetchGetMyPageStudyList = (toggle: 'active' | 'complete' | string | string[]) => {
	return client.get(`/group/my?status=${toggle}`);
};

export default fetchGetMyPageStudyList;
