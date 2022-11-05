import React, { MouseEventHandler } from 'react';

type Size = 'small' | 'middle' | 'large';
interface Props {
	className?: string;
	type?: 'close' | 'complete' | 'default'; // TO DO : '끝내기' 가 버튼 컴포넌트인지 확인해야할 것 같음
	size?: Size;
	width?: string;
	text: string;
	onClick?: MouseEventHandler<HTMLInputElement>;
}

export default function DefaultButton({ className, size, type, text, width, onClick, ...props }: Props) {
	const getPY = () => {
		if (size === 'small') return 'py-[7.47px]';
		if (size === 'middle') return 'py-[11px]';
		return 'py-[14px]';
	};
	const getTextSize = () => {
		if (size === 'small') return 'text-body2';

		return 'text-body1';
	};

	const getColor = () => {
		if (type === 'close') return 'bg-[#9999990] text-[#999999]';
		if (type === 'complete') return 'bg-[#CCCCCC] text-white';
		return 'bg-main border-solid border border-[#1CB576] text-white';
	};
	return (
		<input
			className={`${getColor()}
			${width ?? 'w-full'} ${getPY()} cursor-pointer ${getTextSize()} font-medium rounded ${className}`}
			type="button"
			value={text}
			onClick={onClick}
			{...props}
		/>
	);
}
