import { RouterContext } from 'next/dist/shared/lib/router-context';

import '../styles/globals.css';
import '../styles/Home.module.css';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	nextRouter: {
		Provider: RouterContext.Provider,
	},
};
