import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import QuizCreateCompleteTitle from './QuizCreateCompleteTitle';

export default {
	title: 'Component/feature/quiz/QuizCreateCompleteTitle',
	component: QuizCreateCompleteTitle,
} as ComponentMeta<typeof QuizCreateCompleteTitle>;

const Template: ComponentStory<typeof QuizCreateCompleteTitle> = (args) => <QuizCreateCompleteTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
	addPercentageCreate: 50, // 증가한 목표달성율 퍼센티지 (문제 출제 ver) => 0 혹은 50
};
