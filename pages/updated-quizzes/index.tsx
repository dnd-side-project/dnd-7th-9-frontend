import type { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import UpdatedQuizScreen from '@app.feature/quiz/screen/UpdatedQuizScreen';
import UpdatedQuizNoneScreen from '@app.feature/quiz/screen/UpdatedQuizNoneScreen';
import { IUpdatedQuiz } from '@app.feature/quiz/types';
import { fetchGetUpdatedQuizzes } from '@app.feature/quiz/api';

const UpdatedQuizzes: NextPage = () => {
	// const {
	// 	data: updatedQuizData,
	// 	isError,
	// 	isLoading,
	// } = useQuery(['question-book', 'list', 'live'], fetchGetUpdatedQuizzes);

	const DUMMY_QUIZ_DATA: IUpdatedQuiz[] = [
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
			questionBookId: 6,
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
