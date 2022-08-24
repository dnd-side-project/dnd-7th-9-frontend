import client from '@app.modules/api/client';
import { IQuestionBook, IQuestionBookQuizEnd } from '../types';

export const fetchGetQuestionBook = (questionBookId: string | string[] | undefined): Promise<IQuestionBook> => {
	return client.get(`/question/${questionBookId}`).then((response) => response.data.result);
};

export const fetchPostQuestionBookEnd = (solvedQuizzes: IQuestionBookQuizEnd) => {
	return client.post('/question-book/end', solvedQuizzes);
};
