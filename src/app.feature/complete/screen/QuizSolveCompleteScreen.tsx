import React from 'react';
import Router from 'next/router';
import DefaultButton from '@app.component/button/DefaultButton';
import QuizCompleteGraph from '../component/graph/QuizCompleteGraph';
import QuizSolveCompleteTitle from '../component/title/QuizSolveCompleteTitle';
import CompleteAnimation from '../component/animation/CompleteAnimation';

interface Props {
	addedRate: number;
	userTotalRate: number;
	questionBookPostRate: number;
	questionBookSolveRate: number;
	questionBookId: string | string[];
}

export default function QuizSolveCompleteScreen({
	addedRate,
	userTotalRate,
	questionBookPostRate,
	questionBookSolveRate,
	questionBookId,
}: Props) {
	// const DUMMY_DATA1 = {
	// 	score: 90,
	// 	solveScore: 0, // 기존 문제 해결 점수
	// 	createScore: 50, // 기존 문제 작성 점수
	// 	addPercentageCreate: 0, // 증가한 목표달성율 퍼센티지 (문제 출제 ver) => 0 혹은 50
	// 	addPercentageSolve: 40, // 증가한 목표달성율 퍼센티지 (문제 풀기 ver)
	// 	correctCount: 4, // 사용자가 맞춘 갯수
	// 	totalCount: 5, // 문제집 문제 전체 갯수
	// };

	// const DUMMY_DATA2 = {
	// 	score: 80,
	// 	solveScore: 30, // 기존 문제 해결 점수
	// 	createScore: 0, // 기존 문제 작성 점수
	// 	addPercentageCreate: 50, // 증가한 목표달성율 퍼센티지 (문제 출제 ver) => 0 혹은 50
	// 	addPercentageSolve: 0, // 증가한 목표달성율 퍼센티지 (문제 풀기 ver)
	// 	correctCount: 0, // 사용자가 맞춘 갯수
	// 	totalCount: 5, // 문제집 문제 전체 갯수
	// };

	// const DUMMY_DATA3 = {
	// 	score: 100,
	// 	solveScore: 30, // 기존 문제 해결 점수
	// 	createScore: 50, // 기존 문제 작성 점수
	// 	addPercentageCreate: 0, // 증가한 목표달성율 퍼센티지 (문제 출제 ver) => 0 혹은 50
	// 	addPercentageSolve: 20, // 증가한 목표달성율 퍼센티지 (문제 풀기 ver)
	// 	correctCount: 0, // 사용자가 맞춘 갯수
	// 	totalCount: 5, // 문제집 문제 전체 갯수
	// };

	return (
		<div className="mt-[66px]">
			<QuizSolveCompleteTitle userTotalRate={userTotalRate} addedRate={addedRate} />
			<QuizCompleteGraph
				addedRate={addedRate}
				userTotalRate={userTotalRate}
				questionBookPostRate={questionBookPostRate}
				questionBookSolveRate={questionBookSolveRate}
			/>
			<div className="mt-[90px]">
				{(addedRate > 0 || userTotalRate === 100) && <CompleteAnimation />}
				{/* TO DO : 라우터 변경 */}
				<DefaultButton
					text="점수 자세히 보기"
					onClick={() => Router.push({ pathname: '/detail-quiz/1', query: { questionBookId } })}
				/>
				<DefaultButton className="mt-[20px]" text="끝내기" type="close" onClick={() => Router.push('/')} />
			</div>
		</div>
	);
}
