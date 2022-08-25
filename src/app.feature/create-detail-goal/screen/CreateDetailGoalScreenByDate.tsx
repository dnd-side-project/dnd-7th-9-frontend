import React from 'react';
import Box from '@app.component/box';
import RequireMark from '@app.component/requireMark/RequireMark';
import { useSetDetailGoalDateStore } from '@app.feature/create-detail-goal/store';
import LayoutCreateDetailGoalByInput from '../component/layout/LayoutCreateDetailGoalByInput';
import useCreateDetailGoalStore from '../store';
/* id1 = 스터디 기간 */
export default function CreateDetailObjectScreenByDate() {
	const { detailGoal } = useCreateDetailGoalStore();
	const {
		goalStartDay,
		goalEndDay,
		goalStartMonth,
		goalEndMonth,
		setGoalEndDay,
		setGoalStartDay,
		setGoalEndMonth,
		setGoalStartMonth,
	} = useSetDetailGoalDateStore();
	return (
		<div>
			<LayoutCreateDetailGoalByInput
				title="세부 목표 날짜를 작성해주세요."
				content={
					<div>
						<span className="block mt-[12px] text-slate text-small2 font-bold">시작 날짜</span>
						<div className="flex justify-between relative">
							<RequireMark className="absolute top-0 right-0" />
							<div className="space-x-[10px] flex items-center">
								<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
									<input
										value={goalStartMonth ?? ''}
										onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
											setGoalStartMonth(event.currentTarget.value)
										}
										placeholder=""
										className="w-full  outline-none text-body1 font-medium text-center"
									/>
								</Box>
								<span className="text-slate font-medium text-headline">월</span>
							</div>
							<div className="space-x-[10px] flex items-center">
								<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
									<input
										value={goalStartDay ?? ''}
										onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
											setGoalStartDay(event.currentTarget.value)
										}
										placeholder=""
										className="w-full  outline-none text-body1 font-medium text-center"
									/>
								</Box>
								<span className="text-slate font-medium text-headline">일</span>
							</div>
						</div>

						<span className="block mt-[38px] text-slate text-small2 font-bold">종료 날짜</span>
						<div className="flex justify-between relative">
							<RequireMark className="absolute top-0 right-0" />
							<div className="space-x-[10px] flex items-center">
								<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
									<input
										value={goalEndMonth ?? ''}
										onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
											setGoalEndMonth(event.currentTarget.value)
										}
										placeholder=""
										className="w-full  outline-none text-body1 font-medium text-center"
									/>
								</Box>
								<span className="text-slate font-medium text-headline">월</span>
							</div>
							<div className="space-x-[10px] flex items-center">
								<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
									<input
										value={goalEndDay ?? ''}
										onChange={(event: React.ChangeEvent<HTMLInputElement>) => setGoalEndDay(event.currentTarget.value)}
										placeholder=""
										className="w-full  outline-none text-body1 font-medium text-center"
									/>
								</Box>
								<span className="text-slate font-medium text-headline">일</span>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
}
