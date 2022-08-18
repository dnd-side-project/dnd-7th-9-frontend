import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressHeader from './Progress';

export default {
	component: ProgressHeader,
	title: '@app.component/header/ProgressHeader',
} as ComponentMeta<typeof ProgressHeader>;

const Template: ComponentStory<typeof ProgressHeader> = (args) => <ProgressHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
	curPage: 1,
	pagesLength: 5,
};

export const HasDescription = Template.bind({});
HasDescription.args = {
	curPage: 5,
	pagesLength: 5,
	Description: (
		<div className="flex flex-col">
			<span className="text-slate text-small2 font-bold">1주차 목표</span>
			<span className="mt-[4px] text-slate text-small1 font-regular">기본 동사 20개 암기하기</span>
		</div>
	),
};
