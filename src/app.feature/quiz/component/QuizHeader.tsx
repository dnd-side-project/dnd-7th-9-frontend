import React from 'react';

interface Props {
	quizPage: number;
	quizzesLength: number;
}
export default function QuizHeader({ quizPage, quizzesLength }: Props) {
	return (
		<div>
			<div className="flex items-center justify-between mt-[13px] ">
				<span className="text-slate text-small2 font-bold">1주차 목표</span>
				<span className="text-[#089A76] text-small1 font-regular">
					{quizPage}/{quizzesLength}
				</span>
			</div>
			<span className="mt-[4px] text-slate text-small1 font-regular">기본 동사 20개 암기하기</span>
		</div>
	);
}
