import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AnswerSelect from './AnswerSelect';

export default {
	title: 'Component/Select/AnswerSelect',
	component: AnswerSelect,
} as ComponentMeta<typeof AnswerSelect>;

const Template: ComponentStory<typeof AnswerSelect> = (args) => <AnswerSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
	isChecked: false,
	text: 'TEXT',
	width: '300px',
	onClick: () => {
		console.log();
	},
};
