import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import QuizCompleteAnimation from './QuizCompleteAnimation';

export default {
	title: 'Component/feature/quiz/QuizCompleteAnimation',
	component: QuizCompleteAnimation,
} as ComponentMeta<typeof QuizCompleteAnimation>;

const Template: ComponentStory<typeof QuizCompleteAnimation> = () => <QuizCompleteAnimation />;

export const Default = Template.bind({});
