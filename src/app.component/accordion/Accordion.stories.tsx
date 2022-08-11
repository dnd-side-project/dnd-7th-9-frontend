import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Accordion from '.';

export default {
	title: 'Component/Accordion/Accordion',
	component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
	className: '',
	text: 'TEXT',
	status: 'status',
	content: <div>Content</div>,
};
