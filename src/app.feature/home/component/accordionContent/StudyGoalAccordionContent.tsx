import React from 'react';
import DefaultButton from '@app.component/button/DefaultButton';
import { useRouter } from 'next/router';

interface Props {
	groupId: number;
	questionCount: number;
	toSolveQuestionBookNum: number;
	goal: string;
	endGoal: string;
}

export default function StudyGoalAccordionContent({
	groupId,
	questionCount,
	toSolveQuestionBookNum,
	goal,
	endGoal,
}: Props) {
	const router = useRouter();

	console.log(toSolveQuestionBookNum, groupId);
	return (
		<div>
			<div className="flex justify-between">
				<p className="text-small font-regular text-[#777777]">이번 목표</p>
				<p className="text-small font-regular text-[#222222]">{goal}</p>
			</div>
			<div className="flex justify-between">
				<p className="text-small font-regular text-[#777777]">최종 목표</p>
				<p className="text-small font-regular text-[#222222]">{endGoal}</p>
			</div>
			<div className="grid grid-cols-2 gap-2">
				<DefaultButton
					className="mt-3"
					// TO DO : 추후 수정 (기획이 바껴야할 것 같음)
					// onClick={() => router.push(`/solve-quiz/${toSolveQuestionBookNum}`)}
					text="문제풀기"
				/>
				<DefaultButton className="mt-3" onClick={() => router.push(`/create-quiz/${groupId}`)} text="문제 작성하기" />
			</div>
		</div>
	);
}
