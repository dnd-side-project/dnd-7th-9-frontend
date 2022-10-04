import React, { useState } from 'react';
import ArrowBottomIcon from '@assets/main/arrow-bottom.svg';
import ArrowTopIcon from '@assets/main/arrow-top.svg';

interface Props {
	className?: string;
	icon: JSX.Element;
	text: string;
	status: 'ACTIVE' | 'READY' | 'COMPLETE';
	content: JSX.Element;
}

export default function Accordion({ className, icon, text, status, content }: Props) {
	const [isOpenedAccordion, setIsOpenedAccordion] = useState(false);

	const handleAccordion = () => setIsOpenedAccordion(!isOpenedAccordion);

	const statusObj = {
		ACTIVE: '활동중',
		READY: '활동전',
		COMPLETE: '활동완료',
	};

	return (
		<div className={`${className} ${isOpenedAccordion && 'drop-shadow-white'}`}>
			<div>
				<div
					role="button"
					className={`flex justify-between px-[10px] py-3 bg-background-white
					${isOpenedAccordion ? 'rounded-t ' : 'rounded drop-shadow-white'}`}
					onClick={handleAccordion}
					onKeyPress={handleAccordion}
					tabIndex={0}
				>
					<div className="flex">
						{icon}
						<p className="text-body1 font-medium ml-3 self-center">{text}</p>
					</div>
					<div className="flex inline-block">
						<p className="text-small font-bold text-brown self-center">{statusObj[status]}</p>
						{isOpenedAccordion ? (
							<ArrowTopIcon className="self-center ml-2" />
						) : (
							<ArrowBottomIcon className="self-center ml-2" />
						)}
					</div>
				</div>
			</div>
			<div
				className={`
				${isOpenedAccordion ? 'visible px-3 pb-3' : 'invisible h-0'}
				w-full bg-background-white rounded-b 
				`}
			>
				<hr className="text-[#D9D9D9] mb-[19px]" />
				{content}
			</div>
		</div>
	);
}
