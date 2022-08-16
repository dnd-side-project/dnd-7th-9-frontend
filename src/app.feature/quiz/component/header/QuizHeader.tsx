import React from 'react';
import BackIcon from '@assets/quiz/ic_round-navigate-next.svg';

interface Props {
	quizPage: number;
	quizzesLength: number;
	goalDetail?: React.ReactNode;
}
export default function QuizHeader({ quizPage, quizzesLength, goalDetail }: Props) {
	return (
		<div>
			<div className="flex items-start justify-between mt-[13px] ">
				<div className="flex items-start -translate-x-[15px]">
					<BackIcon />
					{goalDetail}
				</div>
				<span className="text-[#089A76] text-small1 font-regular">
					{quizPage}/{quizzesLength}
				</span>
			</div>
		</div>
	);
}
