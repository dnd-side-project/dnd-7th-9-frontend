import React, { ReactNode } from 'react';
import ControlCountCreateDetailObject from '../control/ControlCountCreateDetailObject';

interface Props {
	title: string;
	svgIcon: ReactNode;
	description: string;
	minCount: number;
	maxCount: number;
	count: number;
}

export default function LayoutCreateDetailObjectBySelect({
	title,
	svgIcon,
	description,
	minCount,
	maxCount,
	count,
}: Props) {
	return (
		<div className="grid place-items-center">
			<h1 className="text-black-400 text-title2 font-bold mt-[83px] mb-[103px]">{title}</h1>
			<div>{svgIcon}</div>
			<p className="text-black-400 text-headline font-medium mt-[102px] mb-[35px]">{description}</p>
			<ControlCountCreateDetailObject minCount={minCount} maxCount={maxCount} count={count} />
		</div>
	);
}
