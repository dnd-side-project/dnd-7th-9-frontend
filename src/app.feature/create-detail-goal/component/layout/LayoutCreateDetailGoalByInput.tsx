import React, { ReactNode } from 'react';

interface Props {
	title: string;
	content: ReactNode;
}

export default function LayoutCreateDetailGoalByInput({ title, content }: Props) {
	return (
		<div>
			<h1 className="text-black-400 text-title2 font-bold mt-[60px] mb-[32px]">{title}</h1>
			{content}
		</div>
	);
}
