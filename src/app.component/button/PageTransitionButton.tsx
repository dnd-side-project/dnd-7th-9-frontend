import React, { MouseEventHandler } from 'react';

interface IProps {
	isActive: boolean;
	pageTo: 'before' | 'next';
	onClick?: MouseEventHandler<HTMLInputElement>;
}

function PageTransitionButton({ isActive, pageTo, onClick, ...props }: IProps) {
	const imgPath = `/img/${pageTo}_${isActive ? 'active' : 'inactive'}.png`;

	return (
		<input
			className="bg-background-white rounded w-[56px] h-[56px] px-5 py-4 drop-shadow-white"
			type="image"
			alt=""
			src={imgPath}
			onClick={onClick}
			{...props}
		/>
	);
}

export default PageTransitionButton;
