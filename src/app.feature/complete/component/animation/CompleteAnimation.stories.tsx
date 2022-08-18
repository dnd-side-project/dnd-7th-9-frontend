import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CompleteAnimation from './CompleteAnimation';

export default {
	title: 'Component/feature/complete/CompleteAnimation',
	component: CompleteAnimation,
} as ComponentMeta<typeof CompleteAnimation>;

const Template: ComponentStory<typeof CompleteAnimation> = () => <CompleteAnimation />;

export const Default = Template.bind({});
