import React, { MouseEventHandler } from 'react';

interface IProps {
	type?: 'close' | 'default'; // TO DO : '끝내기' 가 버튼 컴포넌트인지 확인해야할 것 같음
	width?: string;
	text: string;
	onClick?: MouseEventHandler<HTMLInputElement>;
}

function DefaultButton({ type, text, width, onClick, ...props }: IProps) {
	return (
		<input
			className={`${
				type === 'close'
					? 'bg-white text-[#999999] text-lg'
					: 'bg-main border-solid border border-[#1CB576] text-white text-xl'
			} font-medium rounded ${width ?? 'w-full'} px-[14px] py-[14px]`}
			type="button"
			value={text}
			onClick={onClick}
			{...props}
		/>
	);
}

export default DefaultButton;
