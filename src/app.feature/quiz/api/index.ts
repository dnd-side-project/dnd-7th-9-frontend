import client from '@app.modules/api/client';
import { ICreateQuestion } from '../types';

// 문제집 저장
const fetchPostQuestionBookCreateEnd = (createQuestionPayload: ICreateQuestion) => {
	return client.post('/question-book/list', createQuestionPayload);
};

export default fetchPostQuestionBookCreateEnd;
