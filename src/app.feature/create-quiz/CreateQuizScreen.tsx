import { useRouter } from 'next/router';
import useCreateQuizStore from '@app.modules/store/createQuiz';
import DeleteIcon from '@assets/iconoir_cancel.svg';
import DefaultButton from '@app.component/button/DefaultButton';
import PageTransitionButton from '@app.component/button/PageTransitionButton';
import ProgressBar from '@app.component/progressBar';

interface Props {
	quizIdx: number;
	submitQuizHandler: () => void;
}

export default function CreateQuizScreen({ quizIdx, submitQuizHandler }: Props) {
	const router = useRouter();
	const { quizzes, addChoice, editQuestion, editChoice, checkAnswer, deleteChoice } = useCreateQuizStore();
	const addChoiceHandler = () => {
		if (quizzes[quizIdx].choices.length >= quizzes.length) {
			alert('답안의 최대 개수는 5개입니다.');
			return;
		}
		addChoice(quizIdx);
	};
	const toPrevHandler = () => {
		if (quizIdx + 1 <= 1) return;
		router.push(`/create-quiz/${quizIdx}`);
	};
	const toNextHandler = () => {
		if (quizIdx + 1 >= quizzes.length) return;
		if (!quizzes[quizIdx].question.trim()) {
			alert('문제를 작성해 주세요.');
			return;
		}
		const validChoices = quizzes[quizIdx].choices.filter((choice) => choice.content.trim());
		if (validChoices.length < 2) {
			alert('최소 2개의 답안을 작성해 주세요.');
			return;
		}

		router.push(`/create-quiz/${quizIdx + 2}`);
	};
	return (
		<div>
			<div className="fixed top-0 left-0 right-0  ">
				<ProgressBar progress={(quizIdx + 1 / quizzes.length) * 100} />
			</div>
			<div className="flex items-center justify-between mt-[13px] ">
				<span className="text-slate text-small2 font-bold">1주차 목표</span>
				<span className="text-[#089A76] text-small1 font-regular">
					{quizIdx + 1}/{quizzes.length}
				</span>
			</div>
			<span className="mt-[4px] text-slate text-small1 font-regular">기본 동사 20개 암기하기</span>
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
					<div key={choice.id} className="flex mb-[12px] h-[64px] justify-between bg-white rounded drop-shadow-white ">
						<input
							placeholder="답안을 작성해주세요."
							className="w-full   ml-[22.09px] outline-none text-body1 font-medium"
							value={choice.content}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
								editChoice(event.target.value, quizIdx, choice.id)
							}
						/>

						<div className="flex   justify-center  ">
							<button type="button" onClick={() => checkAnswer(quizIdx, choice.id)}>
								<div
									className={`bg-background-gray rounded-full  ml-[2.77px] ${
										choice.isAnswer ? 'w-[16px] h-[16px] ring-[6px]  ring-main -translate-x-[6px]' : 'w-[28px] h-[28px]'
									}  `}
								/>
							</button>
							<button
								onClick={() => deleteChoice(quizIdx, choice.id)}
								type="button"
								className="ml-[16.69px] mr-[4px] mt-[6.26px] mb-[33.74px]"
							>
								<DeleteIcon />
							</button>
						</div>
					</div>
				))}

				<DefaultButton text="선택 답안 추가" onClick={addChoiceHandler} />
				<div className="mt-[120.07px]" />
			</div>
			<div className="flex justify-between items-center">
				<div className=" fixed left-[20px]  bottom-[22.2px]">
					<PageTransitionButton pageTo="before" onClick={toPrevHandler} isActive={quizIdx + 1 > 1} />
				</div>
				<div className=" fixed  right-[20px] bottom-[22.2px]">
					{quizIdx + 1 >= quizzes.length ? (
						<button type="button" onClick={submitQuizHandler} className="p-[10px]">
							<span className="text-body1 text-[#999999] font-medium">제출하기</span>
						</button>
					) : (
						<PageTransitionButton pageTo="next" onClick={toNextHandler} isActive={quizIdx + 1 < quizzes.length} />
					)}
				</div>
			</div>
		</div>
	);
}
