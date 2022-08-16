import React, { useState } from 'react';
import BackIcon from '@assets/quiz/ic_round-navigate-next.svg';
import BackAlertModal from '@app.component/modal/BackAlertModal';

interface Props {
	quizPage: number;
	quizzesLength: number;
	goalDetail?: React.ReactNode;
	backAlertModalOpen?: () => void;
}
export default function QuizHeader({ quizPage, quizzesLength, goalDetail, backAlertModalOpen }: Props) {
	return (
		<div>
			<div className="flex items-start justify-between mt-[13px] ">
				<div className="flex items-start -translate-x-[15px]">
					<button type="button" onClick={backAlertModalOpen}>
						<BackIcon />
					</button>
					{goalDetail}
				</div>
				<span className="text-[#089A76] text-small1 font-regular">
					{quizPage}/{quizzesLength}
				</span>
			</div>
		</div>
	);
}
