import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PlusButton from './PlusButton';

export default {
	title: 'Component/Buttons/PlusButton',
	component: PlusButton,
} as ComponentMeta<typeof PlusButton>;

const Template: ComponentStory<typeof PlusButton> = (args) => <PlusButton {...args} />;

export const Default = Template.bind({});
