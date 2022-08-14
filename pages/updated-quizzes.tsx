import type { NextPage } from 'next';
import UpdatedQuizScreen from '@app.feature/quiz/screen/UpdatedQuizScreen';
import UpdatedQuizNoneScreen from '@app.feature/quiz/screen/UpdatedQuizNoneScreen';

interface IQuiz {
	updateTime: number;
	userName: string;
	studyTitle: string;
	week: number;
}

const UpdatedQuizzes: NextPage = () => {
	// const DUMMY_QUIZ_DATA: IQuiz[] = [];
	const DUMMY_QUIZ_DATA: IQuiz[] = [
		{
			updateTime: 2,
			userName: '차주희',
			studyTitle: '프론트 스터디',
			week: 1,
		},
		{
			updateTime: 3,
			userName: '정예원',
			studyTitle: '프론트 스터디',
			week: 3,
		},
		{
			updateTime: 10,
			userName: '원태연',
			studyTitle: '백엔드 스터디',
			week: 1,
		},
		{
			updateTime: 60,
			userName: '심미경',
			studyTitle: '백엔드 스터디',
			week: 1,
		},
		{
			updateTime: 40000,
			userName: '최나은',
			studyTitle: '디자인 스터디',
			week: 2,
		},
		{
			updateTime: 503000,
			userName: '송지민',
			studyTitle: '디자인 스터디',
			week: 2,
		},
	];
	return DUMMY_QUIZ_DATA.length ? <UpdatedQuizScreen quizData={DUMMY_QUIZ_DATA} /> : <UpdatedQuizNoneScreen />;
};

export default UpdatedQuizzes;
