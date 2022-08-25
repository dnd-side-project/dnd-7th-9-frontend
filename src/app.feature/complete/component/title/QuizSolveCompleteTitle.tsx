import React from 'react';
import { lineBreak } from '@app.modules/util';

interface Props {
	userTotalRate: number;
	addedRate: number; // 증가한 목표달성율 퍼센티지 (문제 풀기 ver)
}

export default function QuizSolveCompleteTitle({ userTotalRate, addedRate }: Props) {
	const getCompleteTitle = () => {
		if (userTotalRate === 0) return '이제 달려볼까요?';
		if (addedRate <= 0) return '다시 달려볼까요?';
		return '축하합니다!';
	};

	const getCompleteIntroduction = () => {
		if (userTotalRate === 0) return '힘차게 스터디 목표를\n달성해보아요!';
		if (userTotalRate === 100) return '이번주 목표를\n성공적으로 마치셨어요!';
		if (addedRate <= 0) return '아쉽지만 문제집 풀이가\n목표 기준에 도달하지 못했어요!';
		return '이번 문제집 풀이를\n목표 기준에 맞춰 완료했어요!';
	};

	const completeTitle = getCompleteTitle();
	const completeIntroduction = getCompleteIntroduction();

	return (
		<div className="text-center">
			<h1 className="text-black-400 text-title1 font-bold mb-[10px]">{completeTitle}</h1>
			<p className="text-slate text-headline font-medium mb-[10px]">
				{lineBreak(completeIntroduction).map((line: string) => (
					<span>
						{line}
						<br />
					</span>
				))}
			</p>
			{addedRate > 0 ? (
				<p className="text-main text-small font-bold">
					문제 달성률
					<br /> + {addedRate} %
				</p>
			) : (
				<p className="text-error-red text-small font-bold">
					문제 달성률
					<br /> 0 %
				</p>
			)}
		</div>
	);
}
