import React from 'react';
import DefaultButton from '@app.component/button/DefaultButton';
import { useRouter } from 'next/router';

interface Props {
	goalId: number;
	studyId: number;
	questionBookSubmitted: boolean;
}

export default function StudyGoalAccordionContent({ goalId, studyId, questionBookSubmitted }: Props) {
	const router = useRouter();

	return (
		<div>
			<div className="grid grid-cols-2 gap-2">
				<DefaultButton className="mt-3" onClick={() => router.push(`/studies/${studyId}`)} text="문제집 보러가기" />
				{questionBookSubmitted ? (
					<DefaultButton className="mt-3" type="complete" text="작성완료" />
				) : (
					<DefaultButton className="mt-3" onClick={() => router.push(`/create-quiz/${goalId}`)} text="문제 작성하기" />
				)}
			</div>
		</div>
	);
}
