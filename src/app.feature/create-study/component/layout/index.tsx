import { useRouter } from 'next/router';

import ProgressHeader from '@app.component/header/Progress';
import PageController from '@app.component/pageController/PageController';

import BackAlertModal from '@app.component/modal/BackAlertModal';

import { useState } from 'react';
import useCreateStudyStore, { useSetStudyDateStore } from '../../store';
// import Url from '@app.modules/constant/url';

interface Props {
	children: React.ReactNode;
	curPage: number;

	todo: string;
}

export default function Layout({ curPage, children, todo }: Props) {
	const STEPS_COUNT = 4;
	const router = useRouter();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const { groupStartMonth, groupStartDay, groupEndMonth, groupEndDay } = useSetStudyDateStore();
	const { study, setGroupStartDate, setGroupEndDate } = useCreateStudyStore();
	const CheckNameValidation = (): boolean => {
		if (!study?.groupCategory) {
			alert('스터디 카텍리를 선택해 주세요.');
			return false;
		}
		if (!study?.groupName?.trim()) {
			alert('스터디 이름을 적어 주세요.');
			return false;
		}
		return true;
	};
	const CheckGoalValidation = (): boolean => {
		if (!study?.groupGoal?.trim()) {
			alert('스터디 목표를 적어 주세요.');
			return false;
		}
		return true;
	};
	const DateFormatter = (month: string, day: string) => {
		const date = new Date();
		const curYear = date.getFullYear();
		return `${curYear}-${month.length === 1 ? `0${month}` : month}-${day.length === 1 ? `0${day}` : day}`;
	};
	// TO DO : Util 함수로 분리하기
	const CheckDateValidation = (): boolean => {
		const startDate = DateFormatter(groupStartMonth, groupStartDay);
		const endDate = DateFormatter(groupEndMonth, groupEndDay);

		const today = new Date();
		const todayParse = Date.parse(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
		if (
			// eslint-disable-next-line no-restricted-globals
			isNaN(Date.parse(startDate))
		) {
			alert('유효한 시작 날짜를 입력해 주세요.');
			return false; // 실패 조건 : 유효한 날짜 형식이 아님
		}
		if (
			((groupEndMonth?.trim() || groupEndDay?.trim()) &&
				// eslint-disable-next-line no-restricted-globals
				(isNaN(Date.parse(endDate)) || todayParse > Date.parse(endDate))) ||
			Date.parse(endDate) < Date.parse(startDate)
		) {
			alert('유효한 마무리 날짜를 입력해 주세요.');
			return false; // 실패 조건: 유효한 날짜 형식이 아님,오늘 날짜보다 마무리 날짜가 이전임,시작 날짜보다 마무리 날짜가 이전임
		}
		setGroupStartDate(startDate);
		setGroupEndDate(endDate);
		return true;
	};

	const finishHandler = () => null; // temp
	const toPrevHandler = () => {
		if (curPage <= 1) return;
		router.push(`/create-study/${curPage - 1}`);
	};

	const toNextHandler = () => {
		if (curPage >= STEPS_COUNT) return;
		if (curPage === 1 && !CheckNameValidation()) return;
		if (curPage === 2 && !CheckDateValidation()) return;
		if (curPage === 3 && !CheckGoalValidation()) return;
		router.push(`/create-study/${curPage + 1}`);
	};

	return (
		<div>
			<ProgressHeader curPage={curPage} pagesLength={STEPS_COUNT - 1} backAlertModalOpen={() => setIsModalOpen(true)} />
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
				finishWord=""
			/>
		</div>
	);
}
