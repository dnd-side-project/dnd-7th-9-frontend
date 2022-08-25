import { useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@app.component/box';
import DeleteIcon from '@assets/iconoir_cancel.svg';
import ProgressHeader from '@app.component/header/Progress';
import DefaultButton from '@app.component/button/DefaultButton';
import BackAlertModal from '@app.component/modal/BackAlertModal';
import GoalDetailTitle from '@app.component/title/GoalDetailTitle';
import useCreateQuizStore from '@app.modules/store/quiz/createQuiz';
import PageController from '@app.component/pageController/PageController';
import AnswerCheckButton from '../component/button/AnswerCheckButton';

interface Props {
	quizIdx: number;
	submitQuizHandler: () => void;
}

export default function CreateQuizScreen({ quizIdx, submitQuizHandler }: Props) {
	const router = useRouter();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const { quizzes, addChoice, editQuestion, editChoice, checkAnswer, deleteChoice } = useCreateQuizStore();
	const QUIZ_PAGE = quizIdx + 1;

	const addChoiceHandler = () => {
		if (quizzes[quizIdx].choices.length >= quizzes.length) {
			alert('답안의 최대 개수는 5개입니다.');
			return;
		}
		addChoice(quizIdx);
	};

	const checkAnswerHandler = (choiceContent: string, choiceId: number) => {
		if (!choiceContent.trim()) {
			alert('빈칸인 보기는 답이 될 수 없습니다.'); // 보기가 빈칸인 경우에는 체크할수 없음
			return;
		}
		checkAnswer(quizIdx, choiceId);
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

		const answerCount = quizzes[quizIdx].choices.filter((choice) => choice.isChecked).length;
		if (answerCount !== 1) {
			alert('1개의 정답을 선택해야 합니다');
			return;
		}

		router.push(`/create-quiz/${QUIZ_PAGE + 1}`);
	};

	return (
		<div>
			<ProgressHeader
				curPage={QUIZ_PAGE}
				pagesLength={quizzes.length}
				Description={<GoalDetailTitle goal="GOAL" goalDescription="GOAL DESCRIPTION" />}
				backAlertModalOpen={() => setIsModalOpen(true)}
			/>

			<div className=" mt-[43px] mb-[120.07px]">
				<input
					placeholder="문제를 적어주세요"
					value={quizzes[quizIdx].question}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => editQuestion(event.target.value, quizIdx)}
					className="w-full  h-[88px]  px-[22.09px] outline-none rounded text-headline  font-medium drop-shadow-white"
				/>
				<span className="block mt-[22.02px] mb-[8.98px] text-slate text-small2 font-bold">
					답안을 작성하고 정답을 체크해주세요
				</span>

				{quizzes[quizIdx].choices.map((choice) => (
					<Box key={choice.id} height="h-[64px]" className="pl-[22.09px] mb-[12px]">
						<input
							placeholder="답안을 작성해주세요."
							className="w-full    outline-none text-body1 font-medium"
							value={choice.content}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
								editChoice(event.target.value, quizIdx, choice.id)
							}
						/>
						<div className="flex   justify-center  ">
							<div className="ml-[2.77px]" />
							<AnswerCheckButton
								isChecked={choice.isChecked}
								checkHandler={() => checkAnswerHandler(choice.content, choice.id)}
							/>
							<button
								onClick={() => deleteChoice(quizIdx, choice.id)}
								type="button"
								className="ml-[16.69px] mr-[4px] mt-[6.26px] mb-[33.74px] "
							>
								<DeleteIcon stroke="#CCCCCC" />
							</button>
						</div>
					</Box>
				))}

				<DefaultButton text="선택 답안 추가" onClick={addChoiceHandler} />
				<BackAlertModal isModalOpen={isModalOpen} onCloseModal={() => setIsModalOpen(false)} />
			</div>
			<PageController
				curPage={QUIZ_PAGE}
				pagesLength={quizzes.length}
				finishWord="제출하기"
				toPrevHandler={toPrevHandler}
				toNextHandler={toNextHandler}
				finishHandler={submitQuizHandler}
			/>
		</div>
	);
}
