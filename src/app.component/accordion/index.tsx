import React, { useState } from 'react';
import ArrowBottomIcon from '@assets/main/arrow-bottom.svg';
import ArrowTopIcon from '@assets/main/arrow-top.svg';
import CautionIcon from '@assets/main/caution.svg';

interface Props {
	className?: string;
	icon: JSX.Element;
	text: string;
	textType?: 'disable' | string;
	studyName?: string;
	status: 'READY' | 'ACTIVE' | 'COMPLETE';
	content: JSX.Element;
}

export default function Accordion({ className, icon, text, textType = 'default', studyName, status, content }: Props) {
	const [isOpenedAccordion, setIsOpenedAccordion] = useState(false);
	const handleAccordion = () => setIsOpenedAccordion(!isOpenedAccordion);

	const statusObj = {
		READY: '활동전',
		ACTIVE: '활동중',
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
						<div>{icon}</div>
						<div className="ml-3 my-auto">
							{textType === 'disable' ? (
								<p className="flex text-slate text-body1 font-medium self-center">
									{text}
									<CautionIcon className="mt-1.5 ml-1" />
								</p>
							) : (
								<p className="text-body1 font-medium self-center">{text}</p>
							)}
							<p className="text-small font-normal mt-1">{studyName}</p>
						</div>
					</div>
					<div className="flex">
						<p className="text-small font-bold text-brown self-center">{statusObj[status]}</p>
						{isOpenedAccordion ? (
							<ArrowTopIcon className="self-center ml-3" />
						) : (
							<ArrowBottomIcon className="self-center ml-3" />
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
				<div className="pt-[16px]">{content}</div>
			</div>
		</div>
	);
}
