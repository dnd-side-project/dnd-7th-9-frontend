import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DateButton from './DateButton';

export default {
	title: 'Component/Buttons/DateButton',
	component: DateButton,
	argTypes: {
		remainDate: {
			control: { type: 'number' },
		},
	},
} as ComponentMeta<typeof DateButton>;

const Template: ComponentStory<typeof DateButton> = (args) => <DateButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	remainDate: 0,
};
