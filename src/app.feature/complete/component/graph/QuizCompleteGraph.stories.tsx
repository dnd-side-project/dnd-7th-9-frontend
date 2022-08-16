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
	score: 90, // 유저의 이번주 목표 점수 (최종 점수)
	createScore: 50,
	solveScore: 10,
	addPercentageCreate: 0, // 증가한 목표달성율 퍼센티지 (문제 출제 ver) => 0 혹은 50
	addPercentageSolve: 30, // 증가한 목표달성율 퍼센티지 (문제 풀기 ver)
	correctCount: 5, // 사용자가 맞춘 갯수
	totalCount: 5, // 문제집 문제 전체 갯수
};
