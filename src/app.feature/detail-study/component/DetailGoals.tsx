import React, { useState } from 'react';
import PlusIcon from '@assets/study/plus_icon.svg';
import DefaultButton from '@app.component/button/DefaultButton';
import Link from 'next/link';
import { useRouter } from 'next/router';

type DetailGoal = {
	achieveRate: number;
	goalContent: string;
	goalStartDate: string;
	goalEndDate: string;
	goalId: number;
};
interface Props {
	groupGoal: string;
	detailGoals: DetailGoal[];
	groupId: number;
}
export default function DetailGoals({ groupGoal, detailGoals, groupId }: Props) {
	const [curGoalId, setCurGoalId] = useState<number>(0); // temp
	const router = useRouter();
	return (
		<>
			<div className="flex justify-between items-center mt-[160.13px] ">
				<div className="flex  items-center space-x-[9.25px]">
					<span className="text-body2 text-black-400 font-medium whitespace-nowrap ">전체 목표</span>
					<span className=" text-body2 text-slate font-medium ">{groupGoal}</span>
				</div>

				{false && <DefaultButton text="달성완료" size="small" width="w-[109.77px]" />}
			</div>
			<div className="mt-[19.87px]  pt-[36.72px] bg-background-white -mx-[20px] px-[20px] pb-[29.08px] ">
				<span className="text-black-500 font-medium text-body2">세부 목표</span>
				<div className="mt-[22px] flex items-center space-x-[12.2px] overflow-x-auto ">
					{detailGoals.map((detailGoal, index) => (
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
								{detailGoal.goalContent}
							</span>
							<span
								className={`${
									curGoalId === index ? 'text-white' : 'text-slate'
								} block my-[9.4px] text-caption font-regular`}
							>
								{`${detailGoal.goalStartDate.split('-')[1]}/${detailGoal.goalStartDate.split('-')[2]}`}-
								{`${detailGoal.goalEndDate.split('-')[1]}/${detailGoal.goalEndDate.split('-')[2]}`}
							</span>
							<span className={`${curGoalId === index ? 'text-white' : 'text-slate'} text-caption font-bold`}>
								목표 달성률 {detailGoal.achieveRate}%
							</span>
						</button>
					))}
					<Link
						href={`/create-detail-goal/1?groupId=${groupId}`}
						className="rounded bg-[#EEEEEE]  grid place-items-center w-[135.2px]  min-w-[135.2px] h-[135.2px]  min-h-[135.2px]"
					>
						<PlusIcon />
					</Link>
				</div>
			</div>
		</>
	);
}
