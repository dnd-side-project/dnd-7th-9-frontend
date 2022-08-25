import React from 'react';
import PlusIcon from '@assets/create-detail-object/plus.svg';
import MinusIcon from '@assets/create-detail-object/minus.svg';
import DisabledPlusIcon from '@assets/create-detail-object/disabled-plus.svg';
import DisabledMinusIcon from '@assets/create-detail-object/disabled-minus.svg';

interface Props {
	minCount: number;
	maxCount: number;
	minusHandler: () => void;
	plusHandler: () => void;
	count: number;
}

export default function ControlCountDetailObject({
	minCount = 1,
	maxCount = 5,
	count,
	minusHandler,
	plusHandler,
}: Props) {
	return (
		<div className="flex">
			<button onClick={minusHandler} type="button">
				{minCount >= count ? <DisabledMinusIcon /> : <MinusIcon />}
			</button>
			<div className="flex items-center justify-center bg-background-white drop-shadow-white rounded font-medium text-[21px] w-[84px] h-[67px] mx-[23px]">
				{count}
			</div>
			<button onClick={plusHandler} type="button">
				{maxCount <= count ? <DisabledPlusIcon /> : <PlusIcon />}
			</button>
		</div>
	);
}
