import React from 'react';
import PencilIcon from '@assets/complete/pencil.svg';

interface Props {
	userTotalRate: number; // 유저의 이번주 목표 점수 (최종 점수)
	correctCount?: number; // 사용자가 맞춘 갯수
	totalCount?: number; // 문제집 문제 전체 갯수
}

export default function QuizCompleteGraphScore({ userTotalRate, correctCount = 0, totalCount = 0 }: Props) {
	return (
		<div className="text-center">
			<p className="text-small font-bold mb-[3px]">SCORE</p>
			<p className="text-title1 font-bold mb-[11px]">{userTotalRate ?? '00'}</p>
			<div className="flex">
				<div className="mr-[7px]">
					<PencilIcon />
				</div>
				<p className="text-small font-bold text-slate">
					{correctCount}/{totalCount}
				</p>
			</div>
		</div>
	);
}
