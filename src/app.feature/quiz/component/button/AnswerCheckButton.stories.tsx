import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AnswerCheckButton from './AnswerCheckButton';

export default {
	component: AnswerCheckButton,
	title: '@app.feature/quiz/component/AnswerCheckButton',
} as ComponentMeta<typeof AnswerCheckButton>;

const Template: ComponentStory<typeof AnswerCheckButton> = (args) => <AnswerCheckButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	isChecked: false,
};

export const Checked = Template.bind({});
Checked.args = {
	isChecked: true,
	ringColor: 'ring-main',
};
