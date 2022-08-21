import { useRouter } from 'next/router';

import ProgressHeader from '@app.component/header/Progress';
import PageController from '@app.component/pageController/PageController';

import BackAlertModal from '@app.component/modal/BackAlertModal';

import { useState } from 'react';
import Url from '@app.modules/constant/url';

interface Props {
	children: React.ReactNode;
	curPage: number;

	todo: string;
}

export default function Layout({ curPage, children, todo }: Props) {
	const router = useRouter();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const STEPS_COUNT = 3;
	const finishHandler = () => null; // temp
	const toPrevHandler = () => {
		if (curPage <= 1) return;
		router.push(`/create-study/${curPage - 1}`);
	};

	const toNextHandler = () => {
		if (curPage >= STEPS_COUNT) return;
		router.push(`/create-study/${curPage + 1}`);
	};

	return (
		<div>
			<ProgressHeader curPage={curPage} pagesLength={STEPS_COUNT} backAlertModalOpen={() => setIsModalOpen(true)} />
			<div className="mt-[64px] mb-[120.07px]">
				<span className="block font-bold text-title2 text-black-400 mb-[30px]">{todo}</span>

				{children}
			</div>
			<BackAlertModal isModalOpen={isModalOpen} onCloseModal={() => setIsModalOpen(false)} />
			<PageController
				curPage={curPage}
				pagesLength={STEPS_COUNT}
				toPrevHandler={toPrevHandler}
				toNextHandler={toNextHandler}
				finishHandler={finishHandler}
				finishWord="끝내기"
			/>
		</div>
	);
}
