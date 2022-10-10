import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CategoryIcon from './CategoryIcon';

export default {
	title: 'Component/Icon/CategoryIcon',
	component: CategoryIcon,
} as ComponentMeta<typeof CategoryIcon>;

const Template: ComponentStory<typeof CategoryIcon> = (args) => <CategoryIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
	className: '',
	type: 'CERTIFICATE',
};
