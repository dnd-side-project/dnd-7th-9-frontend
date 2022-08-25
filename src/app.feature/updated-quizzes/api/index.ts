import client from '@app.modules/api/client';
import { IUpdatedQuiz } from '../types';

export const temp = '';

export const fetchGetUpdatedQuizzes = (): Promise<IUpdatedQuiz[]> => {
	return client.get('/question-book/list/live').then((response) => response.data.result);
};
