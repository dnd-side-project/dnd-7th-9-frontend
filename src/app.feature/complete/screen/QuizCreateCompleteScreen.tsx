import React from 'react';
import Router from 'next/router';
import DefaultButton from '@app.component/button/DefaultButton';
import QuizCompleteGraph from '../component/graph/QuizCompleteGraph';
import QuizCreateCompleteTitle from '../component/title/QuizCreateCompleteTitle';
import CompleteAnimation from '../component/animation/CompleteAnimation';

interface Props {
	addedRate: string | string[];
	userTotalRate: string | string[];
	questionBookPostRate: string | string[];
	questionBookSolveRate: string | string[];
}

export default function QuizCreateCompleteScreen({
	addedRate, // 추가된 달성률
	userTotalRate, // 현재 세부 목표에 대한 총 달성률
	questionBookPostRate, // 문제 출제로 부터 얻은 달성률
	questionBookSolveRate, // 문제 풀이로 부터 얻은 달성률
}: Props) {
	return (
		<div className="mt-[66px]">
			<QuizCreateCompleteTitle addPercentageCreate={Number(questionBookPostRate)} />
			<QuizCompleteGraph
				addedRate={Number(addedRate)}
				userTotalRate={Number(userTotalRate)}
				questionBookPostRate={Number(questionBookPostRate)}
				questionBookSolveRate={Number(questionBookSolveRate)}
			/>
			<div className="mt-[90px]">
				{(Number(questionBookPostRate) === 50 || Number(userTotalRate) === 100) && <CompleteAnimation />}
				{/* TO DO : 라우터 변경 */}
				<DefaultButton text="문제 풀러가기" onClick={() => Router.push('/')} />
				<DefaultButton className="mt-[20px]" text="끝내기" type="close" onClick={() => Router.push('/')} />
			</div>
		</div>
	);
}
