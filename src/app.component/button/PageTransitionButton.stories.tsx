import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageTransitionButton from './PageTransitionButton';

export default {
	title: 'Component/Buttons/PageTransitionButton',
	component: PageTransitionButton,
} as ComponentMeta<typeof PageTransitionButton>;

const Template: ComponentStory<typeof PageTransitionButton> = (args) => <PageTransitionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	isActive: true,
	pageTo: 'before',
};
