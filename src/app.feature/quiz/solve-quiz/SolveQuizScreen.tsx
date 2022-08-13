import { useRouter } from 'next/router';
import PageTransitionButton from '@app.component/button/PageTransitionButton';
import ProgressBar from '@app.component/progressBar';

import ChoiceContainer from '@app.feature/quiz/component/ChoiceContainer';
import AnswerCheckButton from '@app.feature/quiz/component/AnswerCheckButton';
import QuizHeader from '@app.feature/quiz/component/QuizHeader';
import useSolveQuizStore from '@app.modules/store/solveQuiz'; // temp

interface TempProps {
	quizPage: number;
	quizzesLength: number;
	toPrevHandler: () => void;
	toNextHandler: () => void;
	submitQuizHandler: () => void;
}
function QuizPageController({ quizPage, quizzesLength, toNextHandler, toPrevHandler, submitQuizHandler }: TempProps) {
	return (
		<div className="flex justify-between items-center">
			<div className=" fixed left-[20px]  bottom-[22.2px]">
				<PageTransitionButton pageTo="before" onClick={toPrevHandler} isActive={quizPage > 1} />
			</div>
			<div className=" fixed  right-[20px] bottom-[22.2px]">
				{quizPage >= quizzesLength ? (
					<button type="button" onClick={submitQuizHandler} className="p-[10px]">
						<span className="text-body1 text-[#999999] font-medium">제출하기</span>
					</button>
				) : (
					<PageTransitionButton pageTo="next" onClick={toNextHandler} isActive={quizPage < quizzesLength} />
				)}
			</div>
		</div>
	);
}
interface Props {
	quizIdx: number;
	submitQuizHandler: () => void;
}
// 임시로 5문제를 가진 문제집의 1페이지로 설정
export default function CreateQuizScreen({ quizIdx, submitQuizHandler }: Props) {
	const router = useRouter();

	const { quizzes, checkAnswer } = useSolveQuizStore();
	const QUIZ_PAGE = quizIdx + 1;
	const toPrevHandler = () => {
		if (QUIZ_PAGE <= 1) return;
		router.push(`/solve-quiz/${quizIdx}`);
	};
	const toNextHandler = () => {
		if (QUIZ_PAGE >= quizzes.length) return;
		router.push(`/solve-quiz/${QUIZ_PAGE + 1}`);
	};

	return (
		<div>
			<div className="fixed top-0 left-0 right-0  ">
				<ProgressBar progress={(QUIZ_PAGE / quizzes.length) * 100} />
			</div>
			<QuizHeader />
			<div className="mt-[80px] mb-[120.07px]">
				<span className="block mb-[40px] text-headline text-black-400 font-medium">{quizzes[quizIdx].question}</span>
				{quizzes[quizIdx].choices.map((choice) => (
					<ChoiceContainer key={choice.id}>
						<div
							className={`w-full flex items-center rounded justify-between px-[22.09px]  ${
								choice.isChecked && 'bg-green-200 border-[1px] border-[#1CB576]'
							}`}
						>
							<span className=" text-body1 font-medium ">{choice.content}</span>

							<AnswerCheckButton
								ringColor="ring-[#1AB576]"
								isChecked={choice.isChecked}
								checkHandler={() => checkAnswer(quizIdx, choice.id)}
							/>
						</div>
					</ChoiceContainer>
				))}
			</div>
			<QuizPageController
				quizPage={QUIZ_PAGE}
				quizzesLength={quizzes.length}
				toPrevHandler={toPrevHandler}
				toNextHandler={toNextHandler}
				submitQuizHandler={submitQuizHandler}
			/>
		</div>
	);
}
