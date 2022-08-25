import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@app.component/box';
import ProgressHeader from '@app.component/header/Progress';
import ReportIssueModal from '@app.component/modal/ReportIssueModal';
import PageController from '@app.component/pageController/PageController';
import AnswerChoice from '../component/choice/AnswerChoice';
import { IQuestionBookDetail } from '../types';

interface Props {
	quizIdx: number;
	endQuizHandler: () => void;
	questionBookId: number;
	solvedQuestionBookDetail: IQuestionBookDetail[];
}

// 임시로 5문제를 가진 문제집의 1페이지로 설정
export default function CreateQuizScreen({ quizIdx, endQuizHandler, questionBookId, solvedQuestionBookDetail }: Props) {
	const router = useRouter();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const QUIZ_PAGE = quizIdx + 1;

	const toPrevHandler = () => {
		if (QUIZ_PAGE <= 1) return;
		router.push({ pathname: `/detail-quiz/${quizIdx}`, query: { questionBookId } });
	};

	const toNextHandler = () => {
		if (QUIZ_PAGE >= solvedQuestionBookDetail.length) return;
		router.push({ pathname: `/detail-quiz/${QUIZ_PAGE + 1}`, query: { questionBookId } });
	};

	return (
		<div>
			<ProgressHeader curPage={QUIZ_PAGE} pagesLength={solvedQuestionBookDetail.length} />
			<div className="mt-[64px] mb-[120.07px]">
				<span
					className={`block mb-[10px] text-small2 ${
						solvedQuestionBookDetail[quizIdx].rightCheck ? 'text-[#079985]' : 'text-error-red'
					} font-bold`}
				>
					{solvedQuestionBookDetail[quizIdx].rightCheck
						? '이번 목표를 잘 수행해 주셨어요!'
						: '아쉬운 답은 기록하면 목표에 한 발자국!'}
				</span>
				<span className="block mb-[40px] text-headline text-black-400 font-medium">
					{solvedQuestionBookDetail[quizIdx].questionContent}
				</span>
				<div className="flex flex-col items-center w-full space-y-[12px]">
					{solvedQuestionBookDetail[quizIdx].optionList.map((choice, index) => (
						<Box key={choice.optionId} height="h-[64px]">
							<AnswerChoice
								content={choice.optionContent}
								isChecked={solvedQuestionBookDetail[quizIdx].pickOption === index + 1}
								isAnswer={solvedQuestionBookDetail[quizIdx].answerOption === index + 1}
							/>
						</Box>
					))}
					<button
						type="button"
						onClick={() => setIsModalOpen(true)}
						className="px-[26px] py-[6px]  bg-background-white rounded"
					>
						<span className=" text-slate font-regular text-small">정답이 이상해요</span>
					</button>
				</div>
			</div>
			<ReportIssueModal isModalOpen={isModalOpen} onCloseModal={() => setIsModalOpen(false)} />
			<PageController
				curPage={QUIZ_PAGE}
				pagesLength={solvedQuestionBookDetail.length}
				toPrevHandler={toPrevHandler}
				toNextHandler={toNextHandler}
				finishHandler={endQuizHandler}
				finishWord="끝내기"
			/>
		</div>
	);
}
