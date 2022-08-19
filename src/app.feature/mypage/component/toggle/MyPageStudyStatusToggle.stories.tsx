import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyPageStudyStatusToggle from './MyPageStudyStatusToggle';

export default {
	title: 'app.feature/mypage/component/MyPageStudyStatusToggle',
	component: MyPageStudyStatusToggle,
} as ComponentMeta<typeof MyPageStudyStatusToggle>;

const Template: ComponentStory<typeof MyPageStudyStatusToggle> = (args) => <MyPageStudyStatusToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
	toggle: 'proceeding',
};
