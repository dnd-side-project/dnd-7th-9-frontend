import { useRouter } from 'next/router';
import ProgressBar from '@app.component/progressBar';
import ChoiceContainer from '@app.feature/quiz/component/container/ChoiceContainer';
import QuizHeader from '@app.feature/quiz/component/header/QuizHeader';
import PageController from '@app.component/pageController/PageController';
import XIcon from '@assets/quiz/akar-icons_circle-x.svg';
import OIcon from '@assets/quiz/bi_check-circle-fill.svg';

import BackAlertModal from '@app.component/modal/BackAlertModal';

interface Props {
	quizIdx: number;
	endQuizHandler: () => void;
}

interface TempProps {
	content: string;
	isChecked: boolean;
	isAnswer: boolean;
}
function Temp({ content, isChecked, isAnswer }: TempProps) {
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
			<div className="fixed top-0 left-0 right-0  ">
				<ProgressBar progress={(QUIZ_PAGE / quizzes.length) * 100} />
			</div>
			<QuizHeader quizPage={QUIZ_PAGE} quizzesLength={quizzes.length} />
			<div className="mt-[64px] mb-[120.07px]" />
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
