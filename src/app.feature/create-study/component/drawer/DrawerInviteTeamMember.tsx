import React, { useState } from 'react';
import Input from '@app.component/input';
import DefaultButton from '@app.component/button/DefaultButton';
import useCreateStudyStore, { useInviteMemberEmailStore } from '@app.feature/create-study/store';
import ItemInvitedMember from '../item/ItemInvitedMember';

interface Props {
	inviteMemberHandler: () => void;
}
export default function DrawerInviteTeamMember({ inviteMemberHandler }: Props) {
	const [isInviteDrawerOpen, setIsInviteDrawerOpen] = useState(false);

	const { setInviteMemberEmail, inviteMemberEmail } = useInviteMemberEmailStore();
	const { memberList, inviteLink } = useCreateStudyStore();
	const handleCopyClipBoard = async () => {
		if (!inviteLink) return;
		try {
			await navigator.clipboard.writeText(inviteLink);

			alert('복사 성공!');
		} catch (error) {
			alert('복사 실패!');
		}
	};

	return (
		<div className="absolute bottom-0 left-0 right-0 bg-background-white px-[10px] pt-[39px] pb-[33px] rounded-t-[20px]">
			<p className="text-black-500 text-body2 font-medium mb-[20px]">이메일을 작성해 팀원들을 초대해주세요.</p>
			<div className="flex justify-center mb-[35px]">
				<Input
					className="rounded-l w-full"
					placeholder="팀원의 이메일 작성"
					value={inviteMemberEmail ?? ''}
					onClick={() => setIsInviteDrawerOpen(true)}
					onChange={(event) => setInviteMemberEmail(event.target.value)}
				/>
				<button
					type="button"
					className="bg-slate text-background-white text-body2 font-bold rounded-r whitespace-nowrap w-[30%] px-[21px] py-[19px]"
					onClick={inviteMemberHandler}
				>
					초대
				</button>
			</div>
			{isInviteDrawerOpen && (
				<div className="overflow-auto h-[350px] mb-[10px] px-[-10px]">
					{memberList?.map((member) => (
						<ItemInvitedMember key={member} member={member} />
					))}
				</div>
			)}

			{/* 초대 링크 생성 */}
			<DefaultButton text="링크 복사하기" onClick={handleCopyClipBoard} />
		</div>
	);
}
