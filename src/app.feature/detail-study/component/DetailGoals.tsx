import React, { useState } from 'react';
import PlusIcon from '@assets/study/plus_icon.svg';
import DefaultButton from '@app.component/button/DefaultButton';

export default function DetailGoals() {
	const [curGoalId, setCurGoalId] = useState<number>(0); // temp
	return (
		<>
			<div className="flex items-center mt-[160.13px] space-x-[9.25px]">
				<div>
					<span className="text-body2 text-black-400 font-medium ">전체 목표</span>
					<span className=" text-body2 text-slate font-medium ">오픽 AL 달성</span>
				</div>

				<DefaultButton text="수정하기" size="small" width="w-[109.77px]" />
			</div>
			<div className="mt-[19.87px]  pt-[36.72px] bg-background-white -mx-[20px] px-[20px] pb-[29.08px] ">
				<span className="text-black-500 font-medium text-body2">세부 목표</span>
				<div className="mt-[22px] flex items-center space-x-[12.2px] overflow-x-auto ">
					{[1, 1, 1].map((_, index) => (
						<button
							type="button"
							onClick={() => setCurGoalId(index)}
							className={`rounded ${
								curGoalId === index ? 'bg-slate' : 'bg-[#EEEEEE]'
							} p-[12.2px] flex flex-col items-start w-[135.2px] min-w-[135.2px]  min-h-[135.2px] `}
						>
							<span
								className={`${
									curGoalId === index ? 'text-white' : 'text-slate'
								} block h-[48px] text-white text-body2 overflow-y-auto font-medium text-start  `}
							>
								집 문제 예상 답변 준비하기
							</span>
							<span
								className={`${
									curGoalId === index ? 'text-white' : 'text-slate'
								} block my-[9.4px] text-caption font-regular`}
							>
								8/31-9/2
							</span>
							<span className={`${curGoalId === index ? 'text-white' : 'text-slate'} text-caption font-bold`}>
								목표 달성률 90%
							</span>
						</button>
					))}
					<div className="rounded bg-[#EEEEEE]  grid place-items-center w-[135.2px]  min-w-[135.2px] h-[135.2px]  min-h-[135.2px]">
						<PlusIcon />
					</div>
				</div>
			</div>
		</>
	);
}
