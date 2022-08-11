import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StudyGoalAccordionContent from './StudyGoalAccordionContent';

export default {
	title: 'Component/feature/home/StudyGoalAccordionContent',
	component: StudyGoalAccordionContent,
} as ComponentMeta<typeof StudyGoalAccordionContent>;

const Template: ComponentStory<typeof StudyGoalAccordionContent> = (args) => <StudyGoalAccordionContent {...args} />;

export const Default = Template.bind({});
Default.args = {
	questionCount: 0,
	goal: '이번주 목표',
	endGoal: '최종 목표',
};
