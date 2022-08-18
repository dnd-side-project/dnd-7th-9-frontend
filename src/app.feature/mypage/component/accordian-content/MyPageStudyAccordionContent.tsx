import DefaultButton from '@app.component/button/DefaultButton';
import React from 'react';

interface Props {
	goal: string;
	groupId: number;
	achieveRate: number;
}

export default function MyPageStudyAccordionContent({ goal, groupId, achieveRate }: Props) {
	return (
		<div>
			<div className="flex justify-between mb-[13px]">
				<p className="text-small font-regular text-[#777777]">최종 목표</p>
				<p className="text-small font-regular text-[#222222]">{goal}</p>
			</div>
			<div className="flex justify-between mb-[15px]">
				<p className="text-small font-regular text-[#777777]">달성률</p>
				<div className="flex">
					<div className="m-auto rounded bg-[#D9D9D9] w-[114px] h-[10px] mr-[9px]">
						<div
							className={`rounded bg-gradient-to-r from-effect-gradation-start to-effect-gradation-end w-[${achieveRate}%] h-[10px] mr-[9px]`}
						/>
					</div>
					<p className="text-small font-regular text-[#222222]">{achieveRate}%</p>
				</div>
			</div>
			<DefaultButton text="자세히 보기" />
		</div>
	);
}
