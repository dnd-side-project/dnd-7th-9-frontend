import React from 'react';
import DefaultButton from '@app.component/button/DefaultButton';

interface Props {
	questionCount: number;
	goal: string;
	endGoal: string;
}

export default function StudyGoalAccordionContent({ questionCount, goal, endGoal }: Props) {
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
			<DefaultButton className="mt-3" text={`${questionCount} 문제 더 풀러가기`} />
		</div>
	);
}
