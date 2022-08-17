import { useRouter } from 'next/router';

import ProgressHeader from '@app.component/header/Progress';
import PageController from '@app.component/pageController/PageController';

import BackAlertModal from '@app.component/modal/BackAlertModal';

import { useState } from 'react';

import Box from '@app.component/box';
import RequireMark from '../component/RequireMark';

interface Props {
	submitHandler: () => void;
}

export default function StudyDateScreen({ submitHandler }: Props) {
	const router = useRouter();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const CUR_PAGE = 2;
	const STEPS_COUNT = 3;
	const toPrevHandler = () => {
		if (CUR_PAGE <= 1) return;
		router.push(`/create-study/${CUR_PAGE - 1}`);
	};

	const toNextHandler = () => {
		if (CUR_PAGE >= STEPS_COUNT) return;
		router.push(`/create-study/${CUR_PAGE + 1}`);
	};

	return (
		<div>
			<ProgressHeader curPage={CUR_PAGE} pagesLength={STEPS_COUNT} backAlertModalOpen={() => setIsModalOpen(true)} />
			<div className="mt-[64px] mb-[120.07px]">
				<span className="font-bold text-title2 text-black-400">스터디 날짜를 적어 주세요</span>

				<span className="block mt-[42.39px]  text-slate text-small2 font-bold">시작 날짜</span>

				<div className="flex justify-between relative">
					<RequireMark className="absolute top-0 right-0" />
					<div className="space-x-[10px] flex items-center">
						<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
							<input placeholder="" className="w-full  outline-none text-body1 font-medium text-center" />
						</Box>
						<span className="text-slate font-medium text-headline">월</span>
					</div>
					<div className="space-x-[10px] flex items-center">
						<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
							<input placeholder="" className="w-full  outline-none text-body1 font-medium text-center" />
						</Box>
						<span className="text-slate font-medium text-headline">일</span>
					</div>
				</div>
				<span className="block mt-[42.39px]  text-slate text-small2 font-bold">목표 마무리 날짜</span>
				<div className="flex justify-between">
					<div className="space-x-[10px] flex items-center">
						<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
							<input placeholder="" className="w-full  outline-none text-body1 font-medium text-center" />
						</Box>
						<span className="text-slate font-medium text-headline">월</span>
					</div>
					<div className="space-x-[10px] flex items-center">
						<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px] w-[126px]">
							<input placeholder="" className="w-full  outline-none text-body1 font-medium text-center" />
						</Box>
						<span className="text-slate font-medium text-headline">일</span>
					</div>
				</div>
				<BackAlertModal isModalOpen={isModalOpen} onCloseModal={() => setIsModalOpen(false)} />
			</div>
			<PageController
				curPage={CUR_PAGE}
				pagesLength={STEPS_COUNT}
				toPrevHandler={toPrevHandler}
				toNextHandler={toNextHandler}
				finishHandler={submitHandler}
				finishWord="끝내기"
			/>
		</div>
	);
}
