import { useRouter } from 'next/router';
import ProgressBar from '@app.component/progressBar';
import ChoiceContainer from '@app.feature/quiz/component/container/ChoiceContainer';
import AnswerCheckButton from '@app.feature/quiz/component/button/AnswerCheckButton';
import QuizHeader from '@app.feature/quiz/component/header/QuizHeader';
import useSolveQuizStore from '@app.modules/store/quiz/solveQuiz'; // temp
import QuizPageController from '@app.feature/quiz/component/pageController/QuizPageController';

function GoalDetail() {
	return (
		<div className="flex flex-col">
			<span className="text-slate text-small2 font-bold">1주차 목표</span>
			<span className="mt-[4px] text-slate text-small1 font-regular">기본 동사 20개 암기하기</span>
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
			<QuizHeader quizPage={QUIZ_PAGE} quizzesLength={quizzes.length} goalDetail={<GoalDetail />} />
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
				finishWord="제출하기"
				toPrevHandler={toPrevHandler}
				toNextHandler={toNextHandler}
				finishHandler={submitQuizHandler}
			/>
		</div>
	);
}
