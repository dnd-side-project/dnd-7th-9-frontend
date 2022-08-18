import ProgressBar from '@app.component/progressBar';
import BackIcon from '@assets/quiz/ic_round-navigate-next.svg';

interface Props {
	curPage: number;
	pagesLength: number;
	Description?: React.ReactNode; // 세부 목표 설명 영역
	backAlertModalOpen?: () => void;
}
export default function ProgressHeader({ curPage, pagesLength, backAlertModalOpen, Description }: Props) {
	return (
		<>
			<div className="fixed top-0 left-0 right-0  ">
				<ProgressBar progress={(curPage / pagesLength) * 100} />
			</div>
			<div>
				<div className="flex items-start justify-between mt-[13px] ">
					<div className="flex items-start -translate-x-[15px]">
						<button type="button" onClick={backAlertModalOpen}>
							<BackIcon />
						</button>
						{Description}
					</div>
					<span className="text-[#089A76] text-small1 font-regular">
						{curPage}/{pagesLength}
					</span>
				</div>
			</div>
		</>
	);
}
