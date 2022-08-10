/* eslint-disable func-names */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Url from '@app.modules/constant/url';
import ProgressBar from '.';

export default {
	component: ProgressBar,
	title: 'component/navigation/ProgressBar',
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
	progress: 50,
};
