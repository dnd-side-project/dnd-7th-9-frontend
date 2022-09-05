import GoBackHeader from '@app.component/header/GoBack';
import UserIcon from '@assets/study/akar-icons_person.svg';

export default function DetailStudyHeader() {
	return (
		<div>
			<GoBackHeader />
			<div className="fixed top-[63.35px] left-0 right-0 w-full bg-background-gray">
				<div className="flex justify-between items-center px-[16px] pb-[35.78px] border-b border-gray">
					<span className="text-black-500 text-title1 font-bold">영어 회화 스터디</span>
					<div className="flex space-x-2">
						<div className="grid place-items-center border border-slate rounded-full w-[41.82px] h-[41.82px] bg-[#E2EFFF]">
							<UserIcon />
						</div>
						<div className="grid place-items-center border border-slate rounded-full w-[41.82px] h-[41.82px] bg-[#E2EFFF]">
							<span className="font-bold text-slate text-small">+7</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
