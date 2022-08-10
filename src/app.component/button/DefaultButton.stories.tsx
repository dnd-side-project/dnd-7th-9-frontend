import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DefaultButton from './DefaultButton';

export default {
	title: 'Component/Buttons/DefaultButton',
	component: DefaultButton,
} as ComponentMeta<typeof DefaultButton>;

const Template: ComponentStory<typeof DefaultButton> = (args) => <DefaultButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	type: 'default',
	width: '300px',
	text: 'BUTTON',
};
