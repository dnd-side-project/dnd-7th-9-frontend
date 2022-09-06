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
	className: '',
	quizData: {
		questionBookId: 1,
		goalContent: '목표내용',
		userNickName: '회원1',
		userProfileImageUrl: null,
		studyGroupName: '스터디 그룹 이름1',
		questionCreatedAt: '22-09-05',
		solved: false,
	},
};
