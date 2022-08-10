import React, { MouseEventHandler } from 'react';

interface Props {
	isChecked: boolean;
	width?: string;
	text: string;
	onClick?: MouseEventHandler<HTMLInputElement>;
}

export default function AnswerSelect({ isChecked, text, width, onClick, ...props }: Props) {
	return (
		<input
			className={`${
				isChecked ? 'bg-main text-white' : 'bg-white text-[#677A90] drop-shadow-white'
			} text-left font-medium rounded w-[350px] text-lg px-[22px] py-[18px]`}
			type="button"
			value={text}
			onClick={onClick}
			{...props}
		/>
	);
}
