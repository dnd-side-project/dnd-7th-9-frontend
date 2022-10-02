import React from 'react';
import DrawerInviteTeamMember from '../component/drawer/DrawerInviteTeamMember';
import useCreateStudyStore, { useSetStudyDateStore } from '../store';

interface Props {
	completeHandler: () => void;
	inviteMemberHandler: () => void;
}
export default function CreateStudyLastScreen({ completeHandler, inviteMemberHandler }: Props) {
	const { study } = useCreateStudyStore();
	const { groupStartMonth, groupStartDay } = useSetStudyDateStore();
	return (
		<div className="text-center ">
			<button
				onClick={completeHandler}
				type="button"
				className="w-full text-[#089A76] text-body1 text-end mt-[26px] mr-[20px]"
			>
				완료
			</button>
			<h1 className="text-black-400 text-title1 font-bold mt-[108px]">{study.groupName}</h1>
			<p className="text-slate text-headline font-medium mt-[15px]">
				<span>
					{groupStartMonth}/{groupStartDay}
				</span>
				시작
			</p>
			<div className="bg-background-white rounded py-[15px] mt-[43px]">
				<p className="text-[#777777] text-small font-regular">최종목표</p>
				<p className="text-black-400 text-headline font-medium mt-[8px]">{study.groupGoal}</p>
			</div>

			<DrawerInviteTeamMember submitHandler={() => null} inviteMemberHandler={inviteMemberHandler} />
		</div>
	);
}
