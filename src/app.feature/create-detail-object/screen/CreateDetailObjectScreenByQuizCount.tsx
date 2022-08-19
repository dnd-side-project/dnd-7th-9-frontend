import React from 'react';
import QuizIcon from '@assets/create-detail-object/quiz.svg';
import LayoutCreateDetailObjectBySelect from '../component/layout/LayoutCreateDetailObjectBySelect';

/* id3 = 몇 개의 문제를 내야하는지 */
export default function CreateDetailObjectScreenByQuizCount() {
	return (
		<div>
			<LayoutCreateDetailObjectBySelect
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
