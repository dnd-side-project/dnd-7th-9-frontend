import React from 'react';
import PersonIcon from '@assets/quiz/person.svg';
import ArrowRightIcon from '@assets/quiz/arrow-right.svg';
import { transformSecond } from '@app.modules/util';

interface Props {
	className?: string;
	updateTime: number;
	userNickName: string;
	studyGroupName: string;
	goalContent: string;
}

export default function UpdatedQuizCard({ className, updateTime, userNickName, studyGroupName, goalContent }: Props) {
	return (
		<div className={`px-[18px] bg-background-white rounded drop-shadow-white ${className}`}>
			<div className="flex justify-end pt-[10px]">
				<div className="my-auto rounded-full mr-[5px] w-[8px] h-[8px] bg-sub" />
				<p className="text-overline text-slate font-regular">{transformSecond(updateTime)} 전</p>
			</div>
			<div className="flex justify-between pb-[25px] ">
				<div className="flex">
					<div className="rounded grid place-items-center h-[48px] w-[48px] mr-[14px] bg-[#E2EFFF]">
						<PersonIcon />
					</div>
					<div>
						<div className="flex">
							<span className="text-small text-brown font-regular">{userNickName}</span>
							<hr className="border border-brown h-[9px] my-auto ml-[6px] mr-[9px]" />
							<span className="text-small text-brown font-bold">{studyGroupName}</span>
						</div>
						<p className="text-body1 font-medium">{goalContent}</p>
					</div>
				</div>
				<div className="my-auto">
					<ArrowRightIcon />
				</div>
			</div>
		</div>
	);
}
