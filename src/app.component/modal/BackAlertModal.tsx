import AlertIcon from '@assets/modal/akar-icons_circle-alert-fill.svg';
import CancelIcon from '@assets/iconoir_cancel.svg';
import DefaultButton from '@app.component/button/DefaultButton';
import { useRouter } from 'next/router';
import Modal from './layout';

interface Props {
	isModalOpen: boolean;
	onCloseModal: () => void;
}
export default function BackAlertModal({ isModalOpen, onCloseModal }: Props) {
	const router = useRouter();
	return (
		<Modal show={isModalOpen} onCloseModal={onCloseModal}>
			<div className="bg-white p-[34.22px] rounded flex flex-col items-center relative z-50">
				<button type="button" onClick={onCloseModal} className="absolute right-[12.73px] top-[12.73px]">
					<CancelIcon stroke="#000000" />
				</button>
				<AlertIcon />
				<span className="mt-[11.09px] text-black-500 text-headline font-medium">정말 중간에 나가시겠어요?</span>
				<span className="mt-[10.32px] mb-[31px] text-brown text-body2 font-medium">
					작성해주신 부분들은
					<br />
					별도로 저장되지 않아요.
				</span>
				<DefaultButton text="페이지 나가기" onClick={() => router.back()} />
			</div>
		</Modal>
	);
}
