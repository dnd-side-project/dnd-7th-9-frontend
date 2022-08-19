import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import PageController from '@app.component/pageController/PageController';
import CreateDetailObjectScreenByDate from '@app.feature/create-detail-object/screen/CreateDetailObjectScreenByDate';
import CreateDetailObjectScreenByObject from '@app.feature/create-detail-object/screen/CreateDetailObjectScreenByObject';
import CreateDetailObjectScreenByQuizCount from '@app.feature/create-detail-object/screen/CreateDetailObjectScreenByQuizCount';
import CreateDetailObjectScreenBySolveQuiz from '@app.feature/create-detail-object/screen/CreateDetailObjectScreenBySolveQuiz';
import CreateDetailObjectScreenByCorrectCount from '@app.feature/create-detail-object/screen/CreateDetailObjectScreenByCorrectCount';
import CreateDetailObjectScreenByPassMember from '@app.feature/create-detail-object/screen/CreateDetailObjectScreenByPassMember';

const CreateDetailObject: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div>
			{/* 스터디 기간 */}
			{id === '1' && <CreateDetailObjectScreenByDate />}
			{/* 세부 목표 */}
			{id === '2' && <CreateDetailObjectScreenByObject />}
			{/* 몇 개의 문제를 내야하는지 */}
			{id === '3' && <CreateDetailObjectScreenByQuizCount />}
			{/* 몇 개의 문제집을 풀어야하는지 */}
			{id === '4' && <CreateDetailObjectScreenBySolveQuiz />}
			{/* 몇 개의 문제를 맞춰야하는지 */}
			{id === '5' && <CreateDetailObjectScreenByCorrectCount />}
			{/* 몇 명이 문제집을 풀어야하는지 */}
			{id === '6' && <CreateDetailObjectScreenByPassMember />}

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
export default CreateDetailObject;
