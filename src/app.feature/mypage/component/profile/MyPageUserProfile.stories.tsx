import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyPageUserProfile from './MyPageUserProfile';

export default {
	title: 'app.feature/mypage/component/MyPageUserProfile',
	component: MyPageUserProfile,
} as ComponentMeta<typeof MyPageUserProfile>;

const Template: ComponentStory<typeof MyPageUserProfile> = (args) => <MyPageUserProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
	username: 'DND',
};
