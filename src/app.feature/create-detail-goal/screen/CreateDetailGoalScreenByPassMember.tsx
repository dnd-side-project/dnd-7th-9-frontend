import React from 'react';
import MemberIcon from '@assets/create-detail-object/member.svg';
import LayoutCreateDetailGoalBySelect from '../component/layout/LayoutCreateDetailGoalBySelect';
import useCreateDetailGoalStore from '../store';

/* id6 = 몇 명이 문제집을 풀어야하는지 */
export default function CreateDetailGoalScreenByPassMember() {
	const { detailGoal, setMinPersonPerQuestionBook } = useCreateDetailGoalStore();
	const MIN_COUNT = 1;
	const MAX_COUNT = 5;
	const minusHandler = () => {
		if (!detailGoal.minPersonPerQuestionBook) {
			setMinPersonPerQuestionBook(MIN_COUNT);
			return;
		}
		if (detailGoal.minPersonPerQuestionBook === MIN_COUNT) return;
		setMinPersonPerQuestionBook(detailGoal.minPersonPerQuestionBook - 1);
	};
	const plusHandler = () => {
		if (!detailGoal.minPersonPerQuestionBook) {
			setMinPersonPerQuestionBook(MIN_COUNT);
			return;
		}
		if (detailGoal.minPersonPerQuestionBook === MAX_COUNT) return;
		setMinPersonPerQuestionBook(detailGoal.minPersonPerQuestionBook + 1);
	};
	return (
		<div>
			<LayoutCreateDetailGoalBySelect
				title="전체 스터디원 중"
				description="몇 명이 문제집 풀기에 성공해야하나요?"
				svgIcon={<MemberIcon />}
				minCount={MIN_COUNT}
				maxCount={MAX_COUNT}
				count={detailGoal.minPersonPerQuestionBook ?? MIN_COUNT}
				plusHandler={plusHandler}
				minusHandler={minusHandler}
			/>
		</div>
	);
}
