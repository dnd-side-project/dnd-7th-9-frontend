import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ItemInvitedMember from './ItemInvitedMember';

export default {
	title: 'app.feature/create-study/component/ItemInvitedCompleteMember',
	component: ItemInvitedMember,
} as ComponentMeta<typeof ItemInvitedMember>;

const Template: ComponentStory<typeof ItemInvitedMember> = (args) => <ItemInvitedMember {...args} />;

export const Default = Template.bind({});
Default.args = {
	member: 'TEST@naver.com',
};
