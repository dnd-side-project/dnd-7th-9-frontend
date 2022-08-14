import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageTitleSubContent from './PageTitleSubContent';

export default {
	title: 'Component/Title/PageTitleSubContent',
	component: PageTitleSubContent,
} as ComponentMeta<typeof PageTitleSubContent>;

const Template: ComponentStory<typeof PageTitleSubContent> = (args) => <PageTitleSubContent {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: '제목',
	sub: '하위 콘텐츠 내용',
};
