import React, { useState } from 'react';
import { NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import PageController from '@app.component/pageController/PageController';
import CreateDetailGoalScreenByDate from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByDate';
import CreateDetailGoalScreenByContent from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByContent';
import CreateDetailGoalScreenByQuizCount from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByQuizCount';
import CreateDetailGoalScreenBySolveQuiz from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenBySolveQuiz';
import CreateDetailGoalScreenByCorrectCount from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByCorrectCount';
import CreateDetailGoalScreenByPassMember from '@app.feature/create-detail-goal/screen/CreateDetailGoalScreenByPassMember';
import { useCreateDetailGoalStore } from '@app.modules/store/create-detail-goal/createDetailGoal';

const CreateDetailGoal: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;

	// TO DO : 각 스크린에서 request 값 저장
	const { request, resetRequest } = useCreateDetailGoalStore();

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
				curPage={Number(id)}
				pagesLength={6}
				toPrevHandler={() => {
					Router.push(`/create-detail-goal/${Number(id) - 1}`);
				}}
				toNextHandler={() => {
					Router.push(`/create-detail-goal/${Number(id) + 1}`);
				}}
				finishHandler={() => {
					// TO DO : API 연동
					resetRequest();
				}}
				finishWord="끝내기"
			/>
		</div>
	);
};
export default CreateDetailGoal;
