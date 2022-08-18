import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RequireMark from './RequireMark';

export default {
	component: RequireMark,
	title: '@app.feature/create-study/component/RequireMark',
} as ComponentMeta<typeof RequireMark>;

const Template: ComponentStory<typeof RequireMark> = (args) => <RequireMark {...args} />;

export const Default = Template.bind({});
