import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import PageController from '@app.component/pageController/PageController';
import CreateDetailGoalScreenByDate from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByDate';
import CreateDetailGoalScreenByContent from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByContent';
import CreateDetailGoalScreenByQuizCount from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByQuizCount';
import CreateDetailGoalScreenBySolveQuiz from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenBySolveQuiz';
import CreateDetailGoalScreenByCorrectCount from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByCorrectCount';
import CreateDetailGoalScreenByPassMember from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByPassMember';

interface ICreateObjectRequest {
	studyGroupId: number;
	goalContent: string;
	goalStartDate: string;
	goalEndDate: string;
	minQuestionPerQuestionBook: number;
	minSolveQuestionBook: number;
	minAnswerPerQuestionBook: number;
	minPersonPerQuestionBook: number;
}

const CreateDetailGoal: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;

	const createObjectRequest: ICreateObjectRequest = {
		studyGroupId: 0,
		goalContent: '',
		goalStartDate: '',
		goalEndDate: '',
		minQuestionPerQuestionBook: 3,
		minSolveQuestionBook: 3,
		minAnswerPerQuestionBook: 3,
		minPersonPerQuestionBook: 5,
	};

	return (
		<div>
			{/* 스터디 기간 */}
			{id === '1' && <CreateDetailGoalScreenByDate />}
			{/* 세부 목표 */}
			{id === '2' && <CreateDetailGoalScreenByContent />}
			{/* 몇 개의 문제를 내야하는지 */}
			{id === '3' && <CreateDetailGoalScreenByQuizCount />}
			{/* 몇 개의 문제집을 풀어야하는지 */}
			{id === '4' && <CreateDetailGoalScreenBySolveQuiz />}
			{/* 몇 개의 문제를 맞춰야하는지 */}
			{id === '5' && <CreateDetailGoalScreenByCorrectCount />}
			{/* 몇 명이 문제집을 풀어야하는지 */}
			{id === '6' && <CreateDetailGoalScreenByPassMember />}

			<PageController
				curPage={1}
				pagesLength={1}
				toPrevHandler={() => {
					console.log('이전');
				}}
				toNextHandler={() => {
					console.log('다음');
				}}
				finishHandler={() => {
					console.log('끝');
				}}
				finishWord="끝내기"
			/>
		</div>
	);
};
export default CreateDetailGoal;
