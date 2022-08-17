import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './index';

export default {
	title: 'Component/Input/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	className: '',
	placeholder: 'PLACEHOLDER',
	value: '',
};
