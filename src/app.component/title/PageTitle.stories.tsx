import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageTitle from './PageTitle';

export default {
	title: 'Component/Title/PageTitle',
	component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: '제목',
};
