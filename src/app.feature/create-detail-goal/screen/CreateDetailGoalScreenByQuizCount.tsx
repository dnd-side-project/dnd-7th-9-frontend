import React from 'react';
import QuizIcon from '@assets/create-detail-object/quiz.svg';
import LayoutCreateDetailGoalBySelect from '../component/layout/LayoutCreateDetailGoalBySelect';

/* id3 = 몇 개의 문제를 내야하는지 */
export default function CreateDetailGoalScreenByQuizCount() {
	return (
		<div>
			<LayoutCreateDetailGoalBySelect
				title="문제집 하나당"
				description="몇 개의 문제를 내야 하나요?"
				svgIcon={<QuizIcon />}
				minCount={1}
				maxCount={5}
				count={1}
			/>
		</div>
	);
}
