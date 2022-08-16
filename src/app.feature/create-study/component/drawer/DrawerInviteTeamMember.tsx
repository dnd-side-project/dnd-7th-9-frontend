import React, { useState } from 'react';
import Input from '@app.component/input';
import DefaultButton from '@app.component/button/DefaultButton';
import ItemInvitedMember from '../item/ItemInvitedMember';

export default function DrawerInviteTeamMember() {
	const [isInviteDrawerOpen, setIsInviteDrawerOpen] = useState(false);
	const [inputMember, setInputMember] = useState('');
	const [invitedTeamMember, setInvitedTeamMember] = useState<string[]>([]);

	const onChangeInputMember = (value: string) => {
		setInputMember(value);
	};

	const handleInviteMember = () => {
		setInvitedTeamMember((prev) => [...prev, inputMember]);
		setInputMember('');
	};

	return (
		<div className="absolute bottom-0 left-0 right-0 bg-background-white px-[10px] pt-[39px] pb-[33px] rounded-t-[20px]">
			<p className="text-black-500 text-body2 font-medium mb-[20px]">이메일을 작성해 팀원들을 초대해주세요.</p>
			<div className="flex mb-[35px] px-[20px]">
				<Input
					className="rounded-l w-[calc(100%-72px)]"
					placeholder="팀원의 이메일 작성"
					value={inputMember}
					onClick={() => setIsInviteDrawerOpen(true)}
					onChange={(event) => onChangeInputMember(event.target.value)}
				/>
				<button
					type="button"
					className="bg-slate text-background-white text-body2 font-bold rounded-r w-[72px] px-[21px] py-[19px]"
					onClick={handleInviteMember}
				>
					추가
				</button>
			</div>
			{isInviteDrawerOpen && (
				<div className="overflow-auto h-[350px] mb-[10px] px-[-10px]">
					{invitedTeamMember.map((member) => (
						<ItemInvitedMember member={member} />
					))}
				</div>
			)}

			<DefaultButton text="초대하기" />
		</div>
	);
}
