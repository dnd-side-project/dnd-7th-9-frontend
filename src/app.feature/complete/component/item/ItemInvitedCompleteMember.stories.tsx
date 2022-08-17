import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ItemInvitedCompleteMember from './ItemInvitedCompleteMember';

export default {
	title: 'app.feature/complete/ItemInvitedCompleteMember',
	component: ItemInvitedCompleteMember,
} as ComponentMeta<typeof ItemInvitedCompleteMember>;

const Template: ComponentStory<typeof ItemInvitedCompleteMember> = (args) => <ItemInvitedCompleteMember {...args} />;

export const Default = Template.bind({});
Default.args = {
	email: 'TEXT@email.com',
};
