import React from 'react';
import Router from 'next/router';
import DefaultButton from '@app.component/button/DefaultButton';
import QuizCompleteGraph from '../component/graph/QuizCompleteGraph';
import QuizCreateCompleteTitle from '../component/title/QuizCreateCompleteTitle';
import CompleteAnimation from '../component/animation/CompleteAnimation';

export default function QuizCreateCompleteScreen() {
	const DUMMY_DATA1 = {
		score: 80,
		solveScore: 30, // 기존 문제 해결 점수
		createScore: 0, // 기존 문제 작성 점수
		addPercentageCreate: 50, // 증가한 목표달성율 퍼센티지 (문제 출제 ver) => 0 혹은 50
		addPercentageSolve: 0, // 증가한 목표달성율 퍼센티지 (문제 풀기 ver)
		correctCount: 0, // 사용자가 맞춘 갯수
		totalCount: 5, // 문제집 문제 전체 갯수
	};

	return (
		<div className="mt-[66px]">
			<QuizCreateCompleteTitle {...DUMMY_DATA1} />
			<QuizCompleteGraph {...DUMMY_DATA1} />
			<div className="mt-[90px]">
				{/* TO DO : 라우터 변경 */}
				{(DUMMY_DATA1.addPercentageCreate === 50 || DUMMY_DATA1.score === 100) && <CompleteAnimation />}
				<DefaultButton text="점수 자세히 보기" onClick={() => Router.push('/')} />
				<DefaultButton className="mt-[20px]" text="끝내기" type="close" onClick={() => Router.push('/')} />
			</div>
		</div>
	);
}
