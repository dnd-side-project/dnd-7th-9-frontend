import React from 'react';
import MemberSolveIcon from '@assets/create-detail-object/member-solve.svg';
import LayoutCreateDetailGoalBySelect from '../component/layout/LayoutCreateDetailGoalBySelect';
import useCreateDetailGoalStore from '../store';

/* id4 = 몇 개의 문제집을 풀어야하는지 */
export default function CreateDetailGoalScreenBySolveQuiz() {
	const { detailGoal, setMinSolveQuestionBook } = useCreateDetailGoalStore();
	const MIN_COUNT = 1;
	const MAX_COUNT = 5;
	const minusHandler = () => {
		if (!detailGoal.minSolveQuestionBook) {
			setMinSolveQuestionBook(MIN_COUNT);
			return;
		}
		if (detailGoal.minSolveQuestionBook === MIN_COUNT) return;
		setMinSolveQuestionBook(detailGoal.minSolveQuestionBook - 1);
	};
	const plusHandler = () => {
		if (!detailGoal.minSolveQuestionBook) {
			setMinSolveQuestionBook(MIN_COUNT);
			return;
		}
		if (detailGoal.minSolveQuestionBook === MAX_COUNT) return;
		setMinSolveQuestionBook(detailGoal.minSolveQuestionBook + 1);
	};
	return (
		<div>
			<LayoutCreateDetailGoalBySelect
				title="스터디원 한 명당"
				svgIcon={<MemberSolveIcon />}
				description="몇 개의 문제집을 풀어야하나요?"
				minCount={MIN_COUNT}
				maxCount={MAX_COUNT}
				count={detailGoal.minSolveQuestionBook ?? MIN_COUNT}
				plusHandler={plusHandler}
				minusHandler={minusHandler}
			/>
		</div>
	);
}
