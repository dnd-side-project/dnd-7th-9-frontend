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
	goalId: 1,
	studyId: 1,
	questionBookSubmitted: true,
};
