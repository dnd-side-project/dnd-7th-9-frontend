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
	userTotalRate: 100,
	addedRate: 30,
};
