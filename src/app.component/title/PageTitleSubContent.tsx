import { lineBreak } from '@app.modules/util';
import React from 'react';

interface Props {
	className?: string;
	title: string;
	sub: string;
}

export default function PageTitleSubContent({ className, title, sub }: Props) {
	return (
		<div className={className}>
			<p className="text-title2 font-bold text-black-400 mb-[10px]">{title}</p>
			<p className="text-body2 font-medium text-slate ">
				{lineBreak(sub).map((line) => (
					<span key={line}>
						{line}
						<br />
					</span>
				))}
			</p>
		</div>
	);
}
