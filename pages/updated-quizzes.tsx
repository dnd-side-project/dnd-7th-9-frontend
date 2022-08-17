import type { NextPage } from 'next';
import UpdatedQuizScreen from '@app.feature/quiz/screen/UpdatedQuizScreen';
import UpdatedQuizNoneScreen from '@app.feature/quiz/screen/UpdatedQuizNoneScreen';
import { useQuery } from '@tanstack/react-query';
import client from '@app.modules/api/client';
import { AxiosError } from 'axios';

interface IQuiz {
	questionBookId: number;
	goalContent: string;
	userNickName: string;
	userProfileImageUrl?: string | null;
	studyGroupName: string;
	questionCreatedAt: string;
	solved: boolean;
}

const UpdatedQuizzes: NextPage = () => {
	// const DUMMY_QUIZ_DATA: IQuiz[] = [];

	const { data: updatedQuizData } = useQuery<IQuiz[], AxiosError>(
		['question-book', 'list', 'live'],
		() => client.get('/question-book/list/live'),
		{
			onSuccess: (res) => console.log(res),
		}
	);

	console.log(updatedQuizData);

	const DUMMY_QUIZ_DATA: IQuiz[] = [
		{
			questionBookId: 4,
			goalContent: '이번주는 회고록 작성하기! + DND 문제 풀기',
			userNickName: '메롱',
			userProfileImageUrl: null,
			studyGroupName: 'DND 짱들',
			questionCreatedAt: '2022-08-14T00:00:00',
			solved: false,
		},
		{
			questionBookId: 4,
			goalContent: '이번주는 회고록 작성하기! + DND 문제 풀기',
			userNickName: '메롱',
			userProfileImageUrl: null,
			studyGroupName: 'DND 짱들',
			questionCreatedAt: '2022-08-14T00:00:00',
			solved: false,
		},
	];
	return DUMMY_QUIZ_DATA.length ? <UpdatedQuizScreen updatedQuizData={DUMMY_QUIZ_DATA} /> : <UpdatedQuizNoneScreen />;
};

export default UpdatedQuizzes;
