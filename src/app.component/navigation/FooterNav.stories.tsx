/* eslint-disable func-names */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Url from '@app.modules/constant/url';
import FooterNav from './FooterNav';

export default {
	component: FooterNav,
	title: 'component/navigation/FooterNav',
} as ComponentMeta<typeof FooterNav>;

const Template: ComponentStory<typeof FooterNav> = (args) => <FooterNav {...args} />;

export const Default = Template.bind({});
Default.args = {
	curUrl: Url.home,
};

export const UpdatedQuizzes = Template.bind({});
UpdatedQuizzes.args = {
	curUrl: Url.updatedQuizzes,
};

export const Mypage = Template.bind({});
Mypage.args = {
	curUrl: Url.mypage,
};
