import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import QuizCompleteGraph from './QuizCompleteGraph';

export default {
	title: 'Component/feature/quiz/QuizCompleteGraph',
	component: QuizCompleteGraph,
} as ComponentMeta<typeof QuizCompleteGraph>;

const Template: ComponentStory<typeof QuizCompleteGraph> = (args) => <QuizCompleteGraph {...args} />;

export const Default = Template.bind({});
Default.args = {
	addedRate: 30, // 추가된 달성률
	userTotalRate: 90, // 현재 세부 목표에 대한 총 달성률
	questionBookPostRate: 50, // 문제 출제로 부터 얻은 달성률
	questionBookSolveRate: 10, // 문제 풀이로 부터 얻은 달성률
};
