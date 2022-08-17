import React, { MouseEventHandler } from 'react';
import DeleteIcon from '@assets/create-study/cancel.svg';

interface Props {
	member: string;
	onDelete?: MouseEventHandler<HTMLButtonElement>;
}

export default function ItemInvitedMember({ member, onDelete }: Props) {
	return (
		<div className="flex justify-between bg-background-gray shadow-white rounded mx-[20px] mb-[18px] pl-[18px]">
			<div className="py-[19px]">{member}</div>
			<div className="pt-[6px] pr-[4px]" role="button">
				<button type="button" onClick={onDelete}>
					<DeleteIcon />
				</button>
			</div>
		</div>
	);
}
