import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NoneQuizCard from './NoneQuizCard';

export default {
	title: 'Component/feature/quiz/NoneQuizCard',
	component: NoneQuizCard,
} as ComponentMeta<typeof NoneQuizCard>;

const Template: ComponentStory<typeof NoneQuizCard> = () => <NoneQuizCard />;

export const Default = Template.bind({});
Default.args = {};
