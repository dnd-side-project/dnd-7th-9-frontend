import React from 'react';
import QuizIcon from '@assets/create-detail-object/quiz.svg';
import useCreateDetailGoalStore from '@app.feature/create-detail-goal/store';
import LayoutCreateDetailGoalBySelect from '../component/layout/LayoutCreateDetailGoalBySelect';
/* id3 = 몇 개의 문제를 내야하는지 */
export default function CreateDetailGoalScreenByQuizCount() {
	const { detailGoal, setMinQuestionPerQuestionBook } = useCreateDetailGoalStore();
	const MIN_COUNT = 1;
	const MAX_COUNT = 5;
	const minusHandler = () => {
		if (!detailGoal.minQuestionPerQuestionBook) {
			setMinQuestionPerQuestionBook(MIN_COUNT);
			return;
		}
		if (detailGoal.minQuestionPerQuestionBook === MIN_COUNT) return;
		setMinQuestionPerQuestionBook(detailGoal.minQuestionPerQuestionBook - 1);
	};
	const plusHandler = () => {
		if (!detailGoal.minQuestionPerQuestionBook) {
			setMinQuestionPerQuestionBook(MIN_COUNT);
			return;
		}
		if (detailGoal.minQuestionPerQuestionBook === MAX_COUNT) return;
		setMinQuestionPerQuestionBook(detailGoal.minQuestionPerQuestionBook + 1);
	};
	return (
		<div>
			<LayoutCreateDetailGoalBySelect
				title="문제집 하나당"
				description="몇 개의 문제를 내야 하나요?"
				svgIcon={<QuizIcon />}
				minCount={MIN_COUNT}
				maxCount={MAX_COUNT}
				count={detailGoal.minQuestionPerQuestionBook ?? MIN_COUNT}
				plusHandler={plusHandler}
				minusHandler={minusHandler}
			/>
		</div>
	);
}
