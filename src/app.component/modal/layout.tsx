import React, { useCallback } from 'react';
import CancelIcon from '@assets/iconoir_cancel.svg';

interface Props {
	show: boolean;
	onCloseModal: () => void;

	children: React.ReactNode;
}
export default function Modal({ show, onCloseModal, children }: Props) {
	const stopPropagation = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
	}, []);

	if (!show) {
		return null;
	}
	return (
		<button
			type="button"
			onClick={onCloseModal}
			className=" absolute top-0 bottom-0 left-0 right-0 bg-black-500 bg-opacity-50 cursor-default"
		>
			<button type="button" onClick={stopPropagation} className="cursor-default relative">
				<div className="bg-white p-[34.22px] rounded flex flex-col items-center relative z-50">
					<button type="button" onClick={onCloseModal} className="absolute right-[12.73px] top-[12.73px]">
						<CancelIcon stroke="#000000" />
					</button>
					{children}
				</div>
			</button>
		</button>
	);
}
