import { useCallback } from 'react';

interface Props {
	show: boolean;
	onCloseModal: () => void;

	children: React.ReactNode;
}
export default function Modal({ show, onCloseModal, children }: Props) {
	const stopPropagation = useCallback((e) => {
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
				{children}
			</button>
		</button>
	);
}
