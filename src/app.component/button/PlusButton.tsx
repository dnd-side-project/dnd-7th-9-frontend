import React, { MouseEventHandler } from 'react';

interface Props {
	onClick?: MouseEventHandler<HTMLInputElement>;
}

export default function PlusButton({ onClick, ...props }: Props) {
	return (
		<input
			className="bg-sub rounded-full w-[75px] h-[75px] p-5 drop-shadow-colored"
			type="image"
			alt=""
			src="/img/plus.png"
			onClick={onClick}
			{...props}
		/>
	);
}
