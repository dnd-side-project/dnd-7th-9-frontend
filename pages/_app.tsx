import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();
	return (
		<CookiesProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} /> {/* 왼쪽 하단 devtools */}
				<Component {...pageProps} />
			</QueryClientProvider>
		</CookiesProvider>
	);
}

export default MyApp;
