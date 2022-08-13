import React, { MouseEventHandler } from 'react';

interface Props {
	className?: string;
	type?: 'close' | 'default'; // TO DO : '끝내기' 가 버튼 컴포넌트인지 확인해야할 것 같음
	width?: string;
	text: string;
	onClick?: MouseEventHandler<HTMLInputElement>;
}

export default function DefaultButton({ className, type, text, width, onClick, ...props }: Props) {
	return (
		<input
			className={`${
				type === 'close' ? 'bg-[#9999990] text-[#999999]' : 'bg-main border-solid border border-[#1CB576] text-white'
			}
			${width ?? 'w-full'} px-[14px] py-[14px] cursor-pointer text-body1 font-medium rounded ${className}`}
			type="button"
			value={text}
			onClick={onClick}
			{...props}
		/>
	);
}
