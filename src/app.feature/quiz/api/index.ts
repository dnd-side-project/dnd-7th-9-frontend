import client from '@app.modules/api/client';
import { ICreateQuestion } from '../types';

// 문제집 저장
export const fetchPostQuestionBookCreateEnd = (createQuestionPayload: ICreateQuestion) => {
	return client.post('/question-book/list', createQuestionPayload);
};

// 문제집 자세히 보기
export const fetchGetQuestionBookDetail = (questionBookId: number) => {
	return client.get(`/question-book/${questionBookId}/solved/details`);
};
