import React, { MouseEventHandler } from 'react';
import LeftArrowAbleIcon from '@assets/button/left-arrow-able.svg';
import LeftArrowDisableIcon from '@assets/button/left-arrow-disable.svg';
import RightArrowAbleIcon from '@assets/button/right-arrow-able.svg';
import RightArrowDisableIcon from '@assets/button/right-arrow-disable.svg';

interface Props {
	isActive: boolean;
	pageTo: 'before' | 'next';
	onClick?: MouseEventHandler<HTMLInputElement>;
}

export default function PageTransitionButton({ isActive, pageTo, onClick, ...props }: Props) {
	const getPageTransformIcon = () => {
		if (isActive) {
			return pageTo === 'before' ? <LeftArrowAbleIcon /> : <RightArrowAbleIcon />;
		}
		return pageTo === 'before' ? <LeftArrowDisableIcon /> : <RightArrowDisableIcon />;
	};

	const PageTransformIcon = getPageTransformIcon();

	return (
		<div
			role="button"
			className="bg-background-white drop-shadow-white rounded w-[56px] h-[56px] py-[0.9rem] text-center"
			onClick={onClick}
			onKeyPress={undefined}
			tabIndex={0}
			{...props}
		>
			{PageTransformIcon}
		</div>
	);
}
