import ProgressBar from '@app.component/progressBar';
import React, { useState } from 'react';
import CancelIcon from '@assets/iconoir_cancel.svg';
import DefaultButton from '@app.component/button/DefaultButton';
import PageTransitionButton from '@app.component/button/PageTransitionButton';

// 임시로 5문제 만들기로 설정
export default function CreateQuiz() {
	const [choiceLen, setChoiceLen] = useState<number>(1);
	return (
		<div>
			<div className="fixed top-0 left-0 right-0  ">
				<ProgressBar progress={20} />
			</div>
			<div className="flex items-center justify-between mt-[13px] ">
				<span className="text-slate text-small2 font-bold">1주차 목표</span>
				<span className="text-[#089A76] text-small1 font-regular">1/5</span>
			</div>
			<span className="mt-[4px] text-slate text-small1 font-regular">기본 동사 20개 암기하기</span>
			<form>
				<input
					placeholder="문제를 적어주세요"
					className="w-full mt-[43px] h-[88px]  px-[22.09px] outline-none rounded text-headline  font-medium drop-shadow-white"
				/>
				<span className="block mt-[22.02px] mb-[8.98px] text-slate text-small2 font-bold">
					답안을 작성하고 정답을 체크해주세요
				</span>
				{Array.from({ length: choiceLen }, () => 0).map(() => (
					<div key={Date.now()} className="flex mb-[12px] h-[64px] justify-between bg-white rounded drop-shadow-white ">
						<input
							placeholder="답안을 작성해주세요."
							className="w-full   ml-[22.09px] outline-none text-body1 font-medium"
						/>
						<div className="flex   justify-center  ">
							<div className="bg-background-gray rounded-full w-[28px] h-[28px] ml-[2.77px] mt-[17px] " />
							<button type="button" className="ml-[16.69px] mr-[4px] mt-[6.26px] mb-[33.74px]">
								<CancelIcon />
							</button>
						</div>
					</div>
				))}

				<DefaultButton text="선택 답안 추가" onClick={() => setChoiceLen((prev) => prev + 1)} />
				<div className="mt-[40.07px]" />
				<div className="flex justify-between items-center absolute left-[20px] right-[20px] bottom-[22.2px]">
					<PageTransitionButton pageTo="before" isActive={false} />
					<PageTransitionButton pageTo="next" isActive />
				</div>
			</form>
		</div>
	);
}
