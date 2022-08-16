import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChoiceContainer from './ChoiceContainer';

export default {
	component: ChoiceContainer,
	title: '@app.feature/quiz/component/ChoiceContainer',
} as ComponentMeta<typeof ChoiceContainer>;

const Template: ComponentStory<typeof ChoiceContainer> = (args) => <ChoiceContainer {...args} />;

export const Default = Template.bind({});
