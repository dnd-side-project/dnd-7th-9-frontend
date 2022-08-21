import { useRouter } from 'next/router';
import ProgressHeader from '@app.component/header/Progress';
import PageController from '@app.component/pageController/PageController';
import XIcon from '@assets/quiz/akar-icons_circle-x.svg';
import OIcon from '@assets/quiz/bi_check-circle-fill.svg';
import Box from '@app.component/box';
import { useState } from 'react';
import ReportIssueModal from '@app.component/modal/ReportIssueModal';

interface Props {
	quizIdx: number;
	endQuizHandler: () => void;
}
const quizzes = [
	{
		question: 'eat 뜻으로 옳은 것은?',
		isAnswered: true,
		choices: [
			{ id: 1, content: '먹다', isChecked: true, isAnswer: true },
			{ id: 2, content: '보다', isChecked: false, isAnswer: false },
			{ id: 3, content: '가다', isChecked: false, isAnswer: false },
			{ id: 4, content: '놀다', isChecked: false, isAnswer: false },
			{ id: 5, content: '입다', isChecked: false, isAnswer: false },
		],
	},
	{
		question: 'buy 뜻으로 옳은 것은?',
		isAnswered: false,
		choices: [
			{ id: 1, content: '사다', isChecked: false, isAnswer: true },
			{ id: 2, content: '보다', isChecked: false, isAnswer: false },
			{ id: 3, content: '가다', isChecked: false, isAnswer: false },
			{ id: 4, content: '놀다', isChecked: true, isAnswer: false },
			{ id: 5, content: '입다', isChecked: false, isAnswer: false },
		],
	},
];
interface TempProps {
	content: string;
	isChecked: boolean;
	isAnswer: boolean;
}
function Choice({ content, isChecked, isAnswer }: TempProps) {
	return (
		<div
			className={`w-full flex items-center  rounded justify-between px-[22.09px]  ${
				isAnswer && 'bg-green-200 border-[1px] border-[#1CB576]'
			}
				${isChecked && !isAnswer && 'bg-error-red '}
			}
			${!isChecked && isAnswer && 'opacity-50 '}
			}
			`}
		>
			<span className=" text-body1 font-medium ">{content}</span>
			{isAnswer && 'bg-error-red ' && <OIcon />}
			{isChecked && !isAnswer && 'bg-error-red ' && <XIcon />}
		</div>
	);
}

// 임시로 5문제를 가진 문제집의 1페이지로 설정
export default function CreateQuizScreen({ quizIdx, endQuizHandler }: Props) {
	const router = useRouter();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	// const { quizzes, checkAnswer } = useSolveQuizStore();
	const QUIZ_PAGE = quizIdx + 1;
	const toPrevHandler = () => {
		if (QUIZ_PAGE <= 1) return;
		router.push(`/detail-quiz/${quizIdx}`);
	};
	const toNextHandler = () => {
		if (QUIZ_PAGE >= quizzes.length) return;
		router.push(`/detail-quiz/${QUIZ_PAGE + 1}`);
	};

	return (
		<div>
			<ProgressHeader curPage={QUIZ_PAGE} pagesLength={quizzes.length} />
			<div className="mt-[64px] mb-[120.07px]">
				<span
					className={`block mb-[10px] text-small2 ${
						quizzes[quizIdx].isAnswered ? 'text-[#079985]' : 'text-error-red'
					} font-bold`}
				>
					{quizzes[quizIdx].isAnswered ? '이번 목표를 잘 수행해 주셨어요!' : '아쉬운 답은 기록하면 목표에 한 발자국!'}
				</span>
				<span className="block mb-[40px] text-headline text-black-400 font-medium">{quizzes[quizIdx].question}</span>
				<div className="flex flex-col items-center w-full space-y-[12px]">
					{quizzes[quizIdx].choices.map((choice) => (
						<Box key={choice.id} height="h-[64px]">
							<Choice content={choice.content} isChecked={choice.isChecked} isAnswer={choice.isAnswer} />
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
				pagesLength={quizzes.length}
				toPrevHandler={toPrevHandler}
				toNextHandler={toNextHandler}
				finishHandler={endQuizHandler}
				finishWord="끝내기"
			/>
		</div>
	);
}
