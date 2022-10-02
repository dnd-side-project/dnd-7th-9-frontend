import React from 'react';

interface Props {
	member: string;
}

export default function ItemInvitedMember({ member }: Props) {
	return (
		<div className="flex justify-between items-center bg-background-gray shadow-white rounded mx-[20px] mb-[18px] px-[18px]">
			<div className="py-[19px]">{member}</div>
			<span className="bg-sub text-white whitespace-nowrap text-caption rounded-[10px] w-[54px] h-[20px]">
				초대완료
			</span>
		</div>
	);
}
