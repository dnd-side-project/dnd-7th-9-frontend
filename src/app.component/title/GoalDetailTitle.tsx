import React from 'react';

interface Props {
	goal: string;
	goalDescription: string;
}

export default function GoalDetailTitle({ goal, goalDescription }: Props) {
	return (
		<div className="flex flex-col">
			<span className="text-slate text-small2 font-bold">{goal}</span>
			<span className="mt-[4px] text-slate text-small1 font-regular">{goalDescription}</span>
		</div>
	);
}
