import React from 'react';
import SolveIcon from '@assets/create-detail-object/solve.svg';
import LayoutCreateDetailGoalBySelect from '../component/layout/LayoutCreateDetailGoalBySelect';
import useCreateDetailGoalStore from '../store';

/* id5 = 몇 개의 문제를 맞춰야하는지 */
export default function CreateDetailGoalScreenByCorrectCount() {
	const { detailGoal, setMinAnswerPerQuestionBook } = useCreateDetailGoalStore();
	const MIN_COUNT = 1;
	const MAX_COUNT = 5;
	const minusHandler = () => {
		if (!detailGoal.minAnswerPerQuestionBook) {
			setMinAnswerPerQuestionBook(MIN_COUNT);
			return;
		}
		if (detailGoal.minAnswerPerQuestionBook === MIN_COUNT) return;
		setMinAnswerPerQuestionBook(detailGoal.minAnswerPerQuestionBook - 1);
	};
	const plusHandler = () => {
		if (!detailGoal.minAnswerPerQuestionBook) {
			setMinAnswerPerQuestionBook(MIN_COUNT);
			return;
		}
		if (detailGoal.minAnswerPerQuestionBook === MAX_COUNT) return;
		setMinAnswerPerQuestionBook(detailGoal.minAnswerPerQuestionBook + 1);
	};
	return (
		<div>
			<LayoutCreateDetailGoalBySelect
				title="문제집 하나당"
				svgIcon={<SolveIcon />}
				description="몇 개의 문제를 맞춰야하나요?"
				minCount={MIN_COUNT}
				maxCount={MAX_COUNT}
				count={detailGoal.minAnswerPerQuestionBook ?? MIN_COUNT}
				plusHandler={plusHandler}
				minusHandler={minusHandler}
			/>
		</div>
	);
}
