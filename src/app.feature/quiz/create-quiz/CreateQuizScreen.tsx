import { useRouter } from 'next/router';
import useCreateQuizStore from '@app.modules/store/createQuiz';
import DeleteIcon from '@assets/iconoir_cancel.svg';
import DefaultButton from '@app.component/button/DefaultButton';
import PageTransitionButton from '@app.component/button/PageTransitionButton';
import ProgressBar from '@app.component/progressBar';
import ChoiceContainer from '../component/ChoiceContainer';
import AnswerCheckButton from '../component/AnswerCheckButton';
import QuizHeader from '../component/QuizHeader';

interface Props {
	quizIdx: number;
	submitQuizHandler: () => void;
}

export default function CreateQuizScreen({ quizIdx, submitQuizHandler }: Props) {
	const router = useRouter();
	const { quizzes, addChoice, editQuestion, editChoice, checkAnswer, deleteChoice } = useCreateQuizStore();
	const QUIZ_PAGE = quizIdx + 1;
	const addChoiceHandler = () => {
		if (quizzes[quizIdx].choices.length >= quizzes.length) {
			alert('답안의 최대 개수는 5개입니다.');
			return;
		}
		addChoice(quizIdx);
	};
	const toPrevHandler = () => {
		if (QUIZ_PAGE <= 1) return;
		router.push(`/create-quiz/${quizIdx}`);
	};
	const toNextHandler = () => {
		if (QUIZ_PAGE >= quizzes.length) return;
		if (!quizzes[quizIdx].question.trim()) {
			alert('문제를 작성해 주세요.');
			return;
		}
		const validChoices = quizzes[quizIdx].choices.filter((choice) => choice.content.trim());
		if (validChoices.length < 2) {
			alert('최소 2개의 답안을 작성해 주세요.');
			return;
		}

		router.push(`/create-quiz/${QUIZ_PAGE + 1}`);
	};
	return (
		<div>
			<div className="fixed top-0 left-0 right-0  ">
				<ProgressBar progress={(QUIZ_PAGE / quizzes.length) * 100} />
			</div>
			<QuizHeader quizPage={QUIZ_PAGE} quizzesLength={quizzes.length} />
			<div>
				<input
					placeholder="문제를 적어주세요"
					value={quizzes[quizIdx].question}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => editQuestion(event.target.value, quizIdx)}
					className="w-full mt-[43px] h-[88px]  px-[22.09px] outline-none rounded text-headline  font-medium drop-shadow-white"
				/>
				<span className="block mt-[22.02px] mb-[8.98px] text-slate text-small2 font-bold">
					답안을 작성하고 정답을 체크해주세요
				</span>

				{quizzes[quizIdx].choices.map((choice) => (
					<ChoiceContainer key={choice.id}>
						<input
							placeholder="답안을 작성해주세요."
							className="w-full   ml-[22.09px] outline-none text-body1 font-medium"
							value={choice.content}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
								editChoice(event.target.value, quizIdx, choice.id)
							}
						/>
						<div className="flex   justify-center  ">
							<div className="ml-[2.77px]" />
							<AnswerCheckButton isChecked={choice.isAnswer} checkHandler={() => checkAnswer(quizIdx, choice.id)} />
							<button
								onClick={() => deleteChoice(quizIdx, choice.id)}
								type="button"
								className="ml-[16.69px] mr-[4px] mt-[6.26px] mb-[33.74px] "
							>
								<DeleteIcon />
							</button>
						</div>
					</ChoiceContainer>
				))}

				<DefaultButton text="선택 답안 추가" onClick={addChoiceHandler} />
				<div className="mt-[120.07px]" />
			</div>
			<div className="flex justify-between items-center">
				<div className=" fixed left-[20px]  bottom-[22.2px]">
					<PageTransitionButton pageTo="before" onClick={toPrevHandler} isActive={QUIZ_PAGE > 1} />
				</div>
				<div className=" fixed  right-[20px] bottom-[22.2px]">
					{QUIZ_PAGE >= quizzes.length ? (
						<button type="button" onClick={submitQuizHandler} className="p-[10px]">
							<span className="text-body1 text-[#999999] font-medium">제출하기</span>
						</button>
					) : (
						<PageTransitionButton pageTo="next" onClick={toNextHandler} isActive={QUIZ_PAGE < quizzes.length} />
					)}
				</div>
			</div>
		</div>
	);
}
