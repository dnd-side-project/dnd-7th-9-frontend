import React from 'react';
import { lineBreak } from '@app.modules/util';

interface Props {
	addPercentageCreate: 50 | 0 | number; // 증가한 목표달성율 퍼센티지 (문제 출제 ver) => 0 혹은 50
}

export default function QuizCreateCompleteTitle({ addPercentageCreate }: Props) {
	const getCompleteTitle = () => {
		if (addPercentageCreate === 50) return '축하합니다!';
		return '';
	};

	const getCompleteIntroduction = () => {
		if (addPercentageCreate === 50) return '이제 다른 팀원들의 문제를 풀면\n나머지 50%를 채울 수 있어요!';
		return '';
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
			{addPercentageCreate ? (
				<p className="text-main text-small font-bold">
					문제 달성률
					<br /> + 50 %
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
