/* eslint-disable func-names */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FooterNav from './FooterNav';

export default {
	component: FooterNav,
	title: 'component/navigation/FooterNav',
} as ComponentMeta<typeof FooterNav>;

const Template: ComponentStory<typeof FooterNav> = function () {
	/* eslint-disable-next-line react/jsx-props-no-spreading */
	return <FooterNav />;
};

Template.story = {
	parameters: {
		nextRouter: {
			path: '/mypage',
		},
	},
};

export const base = Template.bind({});
base.args = {};
