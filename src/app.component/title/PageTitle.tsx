import React from 'react';
import lineBreak from '@app.modules/util';

interface Props {
	title: string;
}

export default function PageTitle({ title }: Props) {
	return (
		<div className="h-[70px] flex">
			<div className="self-center">
				{lineBreak(title).map((line) => (
					<p key={line} className="text-title2 font-bold">
						{line}
						<br />
					</p>
				))}
			</div>
		</div>
	);
}
