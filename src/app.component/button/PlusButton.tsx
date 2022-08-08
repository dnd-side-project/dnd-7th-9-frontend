import React, { MouseEventHandler } from 'react';

interface IProps {
	onClick?: MouseEventHandler<HTMLInputElement>;
}

function PlusButton({ onClick, ...props }: IProps) {
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

export default PlusButton;
