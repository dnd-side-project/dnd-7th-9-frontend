import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UpdatedQuizCard from './UpdatedQuizCard';

export default {
	title: 'Component/feature/quiz/UpdatedQuizCard',
	component: UpdatedQuizCard,
} as ComponentMeta<typeof UpdatedQuizCard>;

const Template: ComponentStory<typeof UpdatedQuizCard> = (args) => <UpdatedQuizCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	updateTime: 3000,
	userName: '성명',
	studyTitle: '스터디 이름',
	week: 1,
};
