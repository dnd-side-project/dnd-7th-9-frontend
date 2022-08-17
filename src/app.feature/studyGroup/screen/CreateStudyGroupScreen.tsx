import { useRouter } from 'next/router';
import ProgressBar from '@app.component/progressBar';
import ChoiceContainer from '@app.feature/quiz/component/container/ChoiceContainer';
import ProgressHeader from '@app.component/header/Progress';
import PageController from '@app.component/pageController/PageController';
import XIcon from '@assets/quiz/akar-icons_circle-x.svg';
import OIcon from '@assets/quiz/bi_check-circle-fill.svg';

import BackAlertModal from '@app.component/modal/BackAlertModal';
import { useState } from 'react';

interface Props {
	pageIdx: number;
	submitHandler: () => void;
}

export default function CreateStudyGroupScreen({ pageIdx, submitHandler }: Props) {
	const router = useRouter();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	// const { quizzes, checkAnswer } = useSolveQuizStore();
	const CUR_PAGE = pageIdx + 1;
	const STEPS_COUNT = 5; // 스터디 생성 단계가 5단계까지 있나?
	const toPrevHandler = () => {
		if (CUR_PAGE <= 1) return;
		router.push(`/create-study/${pageIdx}`);
	};

	const toNextHandler = () => {
		if (CUR_PAGE >= STEPS_COUNT) return;
		router.push(`/create-study/${CUR_PAGE + 1}`);
	};

	return (
		<div>
			<ProgressHeader curPage={CUR_PAGE} pagesLength={STEPS_COUNT} backAlertModalOpen={() => setIsModalOpen(true)} />
			<div className="mt-[64px] mb-[120.07px]" />
			<BackAlertModal isModalOpen={isModalOpen} onCloseModal={() => setIsModalOpen(false)} />
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
