import ProgressBar from '@app.component/progressBar';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@assets/iconoir_cancel.svg';
import DefaultButton from '@app.component/button/DefaultButton';
import PageTransitionButton from '@app.component/button/PageTransitionButton';
import useCreateQuizStore from '@app.modules/store/createQuiz';
import { useRouter } from 'next/router';

// 임시로 5문제 만들기로 설정
export default function CreateQuiz() {
	const router = useRouter();
	const { quizzes, addChoice, deleteChoice, checkAnswer, editQuestion, editChoice, setInitQuizzes } =
		useCreateQuizStore();

	useEffect(() => {
		if (router.query.id && +router.query.id !== 0) return;
		if (quizzes.length === 5) return;
		setInitQuizzes(5);
	}, [router]);
	const toPrevHandler = () => {
		if (!router.query.id) return;
		if (+router.query.id <= 1) return;
		router.push(`/create-quiz/${+router.query.id - 1}`);
	};
	const toNextHandler = () => {
		if (!router.query.id) return;
		if (+router.query.id >= quizzes.length) return;
		if (!quizzes[+router.query.id - 1].question.trim()) {
			alert('문제를 작성해 주세요.');
			return;
		}
		const validChoices = quizzes[+router.query.id - 1].choices.filter((choice) => choice.content.trim());
		if (validChoices.length < 2) {
			alert('최소 2개의 답안을 작성해 주세요.');
			return;
		}

		router.push(`/create-quiz/${+router.query.id + 1}`);
	};
	console.log(quizzes);
	return (
		<div>
			{router?.query?.id && (
				<div>
					<div className="fixed top-0 left-0 right-0  ">
						<ProgressBar progress={(+router.query.id / quizzes.length) * 100} />
					</div>
					<div className="flex items-center justify-between mt-[13px] ">
						<span className="text-slate text-small2 font-bold">1주차 목표</span>
						<span className="text-[#089A76] text-small1 font-regular">
							{router.query.id}/{quizzes.length}
						</span>
					</div>
					<span className="mt-[4px] text-slate text-small1 font-regular">기본 동사 20개 암기하기</span>
					<div>
						<input
							placeholder="문제를 적어주세요"
							value={quizzes[+router.query.id - 1].question}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
								editQuestion(event.target.value, +router.query.id - 1)
							}
							className="w-full mt-[43px] h-[88px]  px-[22.09px] outline-none rounded text-headline  font-medium drop-shadow-white"
						/>
						<span className="block mt-[22.02px] mb-[8.98px] text-slate text-small2 font-bold">
							답안을 작성하고 정답을 체크해주세요
						</span>

						{quizzes[+router.query.id - 1].choices.map((choice) => (
							<div
								key={choice.id}
								className="flex mb-[12px] h-[64px] justify-between bg-white rounded drop-shadow-white "
							>
								<input
									placeholder="답안을 작성해주세요."
									className="w-full   ml-[22.09px] outline-none text-body1 font-medium"
									value={choice.content}
									onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
										editChoice(event.target.value, +router.query.id - 1, choice.id)
									}
								/>

								<div className="flex   justify-center  ">
									<button type="button" onClick={() => checkAnswer(+router.query.id - 1, choice.id)}>
										<div
											className={`bg-background-gray rounded-full  ml-[2.77px] ${
												choice.isAnswer
													? 'w-[16px] h-[16px] ring-[6px]  ring-main -translate-x-[6px]'
													: 'w-[28px] h-[28px]'
											}  `}
										/>
									</button>
									<button
										onClick={() => deleteChoice(+router.query.id - 1, choice.id)}
										type="button"
										className="ml-[16.69px] mr-[4px] mt-[6.26px] mb-[33.74px]"
									>
										<DeleteIcon />
									</button>
								</div>
							</div>
						))}

						<DefaultButton
							text="선택 답안 추가"
							onClick={() => {
								if (quizzes[+router.query.id - 1].choices.length >= quizzes.length) {
									alert('답안의 최대 개수는 5개입니다.');
									return;
								}
								addChoice(+router.query.id - 1);
							}}
						/>
						<div className="mt-[120.07px]" />
					</div>
					<div className="flex justify-between items-center">
						<div className=" fixed left-[20px]  bottom-[22.2px]">
							<PageTransitionButton
								pageTo="before"
								isActive={false}
								onClick={toPrevHandler}
								isActive={+router.query.id > 1}
							/>
						</div>
						<div className=" fixed  right-[20px] bottom-[22.2px]">
							{+router.query.id >= quizzes.length ? (
								<button type="button" className="p-[10px]">
									<span className="text-body1 text-[#999999] font-medium">제출하기</span>
								</button>
							) : (
								<PageTransitionButton
									pageTo="next"
									onClick={toNextHandler}
									isActive={+router.query.id < quizzes.length}
								/>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
