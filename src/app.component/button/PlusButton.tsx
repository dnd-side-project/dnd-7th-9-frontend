import React, { MouseEventHandler } from 'react';
import PlusIcon from '@assets/button/plus.svg';

interface Props {
	onClick?: MouseEventHandler<HTMLInputElement>;
}

export default function PlusButton({ onClick, ...props }: Props) {
	return (
		<div
			role="button"
			className="bg-sub drop-shadow-colored rounded-full w-[75px] h-[75px] py-4 text-center"
			onClick={onClick}
			onKeyPress={undefined}
			tabIndex={0}
			{...props}
		>
			<PlusIcon />
		</div>
	);
}
