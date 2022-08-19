import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyPageStudyAccordionContent from './MyPageStudyAccordionContent';

export default {
	title: 'app.feature/mypage/component/MyPageStudyAccordionContent',
	component: MyPageStudyAccordionContent,
} as ComponentMeta<typeof MyPageStudyAccordionContent>;

const Template: ComponentStory<typeof MyPageStudyAccordionContent> = (args) => (
	<MyPageStudyAccordionContent {...args} />
);

export const Default = Template.bind({});
Default.args = {
	goal: '목표',
	groupId: 0,
	achieveRate: 80,
};
