import { useRouter } from 'next/router';

import ProgressHeader from '@app.component/header/Progress';
import PageController from '@app.component/pageController/PageController';

import BackAlertModal from '@app.component/modal/BackAlertModal';
import CompanyIcon from '@assets/study/company_icon.svg';
import LanguageIcon from '@assets/study/language_icon.svg';
import CertificationIcon from '@assets/study/certification_icon.svg';
import ExamIcon from '@assets/study/Exam_icon.svg';

import { useState } from 'react';

import Box from '@app.component/box';
import RequireMark from '../component/RequireMark';

interface Props {
	pageIdx: number;
	submitHandler: () => void;
}
export const STUDY_CATEGORIES = [
	{
		category: '취업',
		icon: <CompanyIcon />,
	},
	{
		category: '언어',
		icon: <LanguageIcon />,
	},
	{
		category: '자격증',
		icon: <CertificationIcon />,
	},
	{
		category: '기타',
		icon: <ExamIcon />,
	},
];

export default function CreateStudyGroupScreen({ pageIdx, submitHandler }: Props) {
	const router = useRouter();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const CUR_PAGE = pageIdx + 1;
	const STEPS_COUNT = 3;
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
			<div className="mt-[64px] mb-[120.07px]">
				<div className="flex justify-between items-center">
					<span className="font-bold text-title2 text-black-400">당신의 스터디를 소개해 주세요</span>
					<RequireMark />
				</div>
				<ul className="flex justify-between items-center mt-[30px]">
					{STUDY_CATEGORIES.map((study) => (
						<li key={study.category} className="flex flex-col items-center space-y-[8.61px]">
							<button type="button" className="bg-background-white rounded w-[72px] h-[72px] grid place-items-center">
								{study.icon}
							</button>
							<span className="text-slate text-body1 font-medium">{study.category}</span>
						</li>
					))}
				</ul>
				<span className="block mt-[42.39px]  text-slate text-small2 font-bold">스터디 그룹명</span>
				<Box height="h-[88px]" className="relative px-[22.09px]  mt-[7.63px]">
					<input placeholder="스터디 그룹명을 적어주세요." className="w-full  outline-none text-body1 font-medium" />
					<RequireMark className="absolute right-[16.05px] top-[13.98px]" />
				</Box>
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
