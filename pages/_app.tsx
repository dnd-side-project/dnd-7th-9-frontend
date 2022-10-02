import React, { useEffect } from 'react';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@app.component/Layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();
	const router = useRouter();

	useEffect(() => {
		const accessToken = typeof window !== 'undefined' ? localStorage.getItem('TEST_TOKEN') : null;
		if (!accessToken) router.push('/login');
	}, []);
	return (
		<CookiesProvider>
			<QueryClientProvider client={queryClient}>
				{/* <ReactQueryDevtools initialIsOpen={false} /> 왼쪽 하단 devtools */}
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</QueryClientProvider>
		</CookiesProvider>
	);
}

export default MyApp;
