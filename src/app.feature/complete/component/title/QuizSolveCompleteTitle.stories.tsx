import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import QuizSolveCompleteTitle from './QuizSolveCompleteTitle';

export default {
	title: 'Component/feature/quiz/QuizSolveCompleteTitle',
	component: QuizSolveCompleteTitle,
} as ComponentMeta<typeof QuizSolveCompleteTitle>;

const Template: ComponentStory<typeof QuizSolveCompleteTitle> = (args) => <QuizSolveCompleteTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
	score: 50,
	addPercentageSolve: 50, // 증가한 목표달성율 퍼센티지 (문제 출제 ver) => 0 혹은 50
};
