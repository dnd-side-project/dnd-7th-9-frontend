import React from 'react';
import Header from '@app.feature/detail-study/component/Header';
import GoBackHeader from '@app.component/header/GoBack';

interface Props {
	studyId: string;
}
export default function StudyMemberScreen({ studyId }: Props) {
	return (
		<>
			<GoBackHeader />
			<div className="fixed top-[60px] left-0 right-0 bg-background-gray  h-[60px]">
				<span className="block bg-background-gray px-[20px] text-title2 font-bold text-black-500">스터디구성원 8</span>
			</div>
			<div className="bg-background-white h-screen -mx-[20px] mt-[120px]">
				<div className="  divide-y-[1px] divide-gray ">
					{[1, 1, 1, 1, 1, 1].map((_, index) => (
						<div className="px-[20px] py-[14px] flex items-center justify-between">
							<div className="flex items-center space-x-[18px]">
								<div className="bg-[#E2EFFF] rounded-full w-[30px] h-[30px]" />
								<span className="text-black-500 font-medium text-body2">박수정</span>
							</div>
							{index === 0 && (
								<button
									type="button"
									className=" bg-sub
						text-white rounded px-[6px] py-[4px] text-caption font-regular"
								>
									스터디 팀장
								</button>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
}
