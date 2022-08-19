import React from 'react';
import SolveIcon from '@assets/create-detail-object/solve.svg';
import LayoutCreateDetailGoalBySelect from '../component/layout/LayoutCreateDetailGoalBySelect';

/* id5 = 몇 개의 문제를 맞춰야하는지 */
export default function CreateDetailGoalScreenByCorrectCount() {
	return (
		<div>
			<LayoutCreateDetailGoalBySelect
				title="문제집 하나당"
				svgIcon={<SolveIcon />}
				description="몇 개의 문제를 맞춰야하나요?"
				minCount={1}
				maxCount={5}
				count={1}
			/>
		</div>
	);
}
