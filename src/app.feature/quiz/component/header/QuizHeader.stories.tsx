import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import QuizHeader from './QuizHeader';

export default {
	component: QuizHeader,
	title: '@app.feature/quiz/component/QuizHeader',
} as ComponentMeta<typeof QuizHeader>;

const Template: ComponentStory<typeof QuizHeader> = (args) => <QuizHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
	quizPage: 1,
	quizzesLength: 5,
};

export const HasGoalDetail = Template.bind({});
HasGoalDetail.args = {
	quizPage: 1,
	quizzesLength: 5,
	goalDetail: (
		<div className="flex flex-col">
			<span className="text-slate text-small2 font-bold">1주차 목표</span>
			<span className="mt-[4px] text-slate text-small1 font-regular">기본 동사 20개 암기하기</span>
		</div>
	),
};
