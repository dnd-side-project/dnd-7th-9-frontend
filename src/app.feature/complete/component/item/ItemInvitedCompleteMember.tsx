import React from 'react';

interface Props {
	email: string;
}

export default function ItemInvitedCompleteMember({ email }: Props) {
	return (
		<div className="bg-background-white drop-shadow-white rounded h-[61px] p-[18px] mb-[18px]">
			<p className="text-left text-body2 font-[350] text-black-400">{email}</p>
		</div>
	);
}
