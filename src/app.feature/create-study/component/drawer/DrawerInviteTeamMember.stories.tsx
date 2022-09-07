import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DrawerInviteTeamMember from './DrawerInviteTeamMember';

export default {
	title: 'app.feature/create-study/component/DrawerInviteTeamMember',
	component: DrawerInviteTeamMember,
} as ComponentMeta<typeof DrawerInviteTeamMember>;

const Template: ComponentStory<typeof DrawerInviteTeamMember> = (args) => <DrawerInviteTeamMember {...args} />;

export const Default = Template.bind({});
Default.args = {
	submitHandler: () => console.log('submit'),
};
