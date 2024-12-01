import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Roboto } from 'next/font/google';
import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import THEME from '@/theme/theme';
import AppMetadata from '@/data/const/app-metadata';
import { Metadata } from 'next';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
});

export const metadata: Metadata = AppMetadata.DefaultMetadata;

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
	return (
		<html lang="en">
			<body className={roboto.variable}>
				<AppRouterCacheProvider>
					<ThemeProvider theme={THEME}>
						<CssBaseline />

						{children}
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}

export default RootLayout;
