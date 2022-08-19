import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyPageStudyCategory from './MyPageStudyCategory';

export default {
	title: 'app.feature/mypage/component/MyPageStudyCategory',
	component: MyPageStudyCategory,
} as ComponentMeta<typeof MyPageStudyCategory>;

const Template: ComponentStory<typeof MyPageStudyCategory> = (args) => <MyPageStudyCategory {...args} />;

export const Default = Template.bind({});
Default.args = {
	category: 'all',
};
