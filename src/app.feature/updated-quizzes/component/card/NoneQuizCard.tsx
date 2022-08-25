import React from 'react';
import QuestionIcon from '@assets/quiz/question-mark.svg';
import ArrowRightIcon from '@assets/quiz/arrow-right.svg';

export default function NoneQuizCard() {
	return (
		// margin-top 값 고정 픽셀로 두었는데 화면 중앙에 위치시킬라면 어떻게 해야할까.
		<div className="mt-[121px] px-[18px] bg-background-white rounded drop-shadow-white">
			<div className="flex justify-between py-[25px] ">
				<div className="flex">
					<div className="rounded grid place-items-center h-[48px] w-[48px] mr-[14px] bg-background-gray">
						<QuestionIcon />
					</div>
					<div>
						<p className="text-[#079985] text-small font-regular">당신의 스터디</p>
						<p className="text-[#079985] text-body1 font-medium">당신의 문제집</p>
					</div>
				</div>
				<div className="my-auto">
					<ArrowRightIcon />
				</div>
			</div>
		</div>
	);
}
