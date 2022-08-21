import CancelIcon from '@assets/iconoir_cancel.svg';
import DefaultButton from '@app.component/button/DefaultButton';

import Modal from './layout';

interface Props {
	isModalOpen: boolean;
	onCloseModal: () => void;
}
export default function ReportIssueModal({ isModalOpen, onCloseModal }: Props) {
	return (
		<Modal show={isModalOpen} onCloseModal={onCloseModal}>
			<span className="text-headline text-black-500 font-medium">정답이 이상해요</span>
			<span className="text-body2 text-brown font-medium">수정이 필요한 부분을 작성해주세요</span>
			<textarea className="w-[330px] border-[1px] p-2 rounded outline-none border-gray h-[330px] my-[12px]" />
			<DefaultButton text="건의 내용 보내기" size="middle" onClick={() => 1123} />
		</Modal>
	);
}
/*


*/
