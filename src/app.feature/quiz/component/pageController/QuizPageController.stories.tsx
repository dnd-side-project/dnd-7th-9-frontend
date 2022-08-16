import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import QuizPageController from './QuizPageController';

export default {
	component: QuizPageController,
	title: '@app.feature/quiz/component/QuizPageController',
} as ComponentMeta<typeof QuizPageController>;

const Template: ComponentStory<typeof QuizPageController> = (args) => <QuizPageController {...args} />;

export const Default = Template.bind({});
Default.args = {
	quizPage: 1,
	quizzesLength: 5,
	finishWord: '끝내기',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toPrevHandler: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toNextHandler: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	finishHandler: () => {},
};

export const LastPage = Template.bind({});
LastPage.args = {
	quizPage: 5,
	quizzesLength: 5,
	finishWord: '끝내기',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toPrevHandler: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toNextHandler: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	finishHandler: () => {},
};
