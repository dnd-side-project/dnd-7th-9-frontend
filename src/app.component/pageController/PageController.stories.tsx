import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageController from './PageController';

export default {
	component: PageController,
	title: '@app.component/PageController',
} as ComponentMeta<typeof PageController>;

const Template: ComponentStory<typeof PageController> = (args) => <PageController {...args} />;

export const Default = Template.bind({});
Default.args = {
	curPage: 1,
	pagesLength: 5,
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
	curPage: 5,
	pagesLength: 5,
	finishWord: '끝내기',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toPrevHandler: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	toNextHandler: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	finishHandler: () => {},
};
