import AlertIcon from '@assets/modal/akar-icons_circle-alert-fill.svg';

import DefaultButton from '@app.component/button/DefaultButton';
import { Router, useRouter } from 'next/router';

import Url from '@app.modules/constant/url';
import Modal from './layout';

interface Props {
	isModalOpen: boolean;
	onCloseModal: () => void;
}
export default function BackAlertModal({ isModalOpen, onCloseModal }: Props) {
	const router = useRouter();

	return (
		<Modal show={isModalOpen} onCloseModal={onCloseModal}>
			<AlertIcon />
			<span className="mt-[11.09px] text-black-500 text-headline font-medium">정말 중간에 나가시겠어요?</span>
			<span className="mt-[10.32px] mb-[31px] text-brown text-body2 font-medium">
				작성해주신 부분들은
				<br />
				별도로 저장되지 않아요.
			</span>
			<DefaultButton text="페이지 나가기" size="middle" onClick={() => router.push(Url.home)} />
		</Modal>
	);
}
