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

export default function StudyGoalScreen({ submitHandler }: Props) {
	const router = useRouter();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const CUR_PAGE = 3;
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
				<span className="font-bold text-title2 text-black-400">스터디 그룹의 목표를 주세요</span>

				<span className="block mt-[42.39px]  text-slate text-small2 font-bold">최종 목표</span>

				<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px]">
					<input placeholder="최종 목표를 적어주세요." className="w-full  outline-none text-body1 font-medium" />
					<RequireMark className="absolute right-[16.05px] top-[13.98px]" />
				</Box>

				<BackAlertModal isModalOpen={isModalOpen} onCloseModal={() => setIsModalOpen(false)} />
			</div>
			<PageController
				curPage={CUR_PAGE}
				pagesLength={5}
				toPrevHandler={toPrevHandler}
				toNextHandler={toNextHandler}
				finishHandler={submitHandler}
				finishWord="끝내기"
			/>
		</div>
	);
}
