import { Container, ThemeProvider } from '@mui/material';
import { Roboto } from 'next/font/google';
import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import THEME from '@/theme/theme';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
});

// export const metadata: Metadata = {
//   title: {
//     default: SITE_CONFIG.title,
//     template: `%s | ${SITE_CONFIG.title}`,
//   },
//   description: SITE_CONFIG.description,
//   robots: { index: true, follow: true },
//   metadataBase: new URL(SITE_CONFIG.url),
//   icons: {
//     icon: '/favicon/favicon.ico',
//     shortcut: '/favicon/favicon-16x16.png',
//     apple: '/favicon/apple-touch-icon.png',
//   },
//   manifest: `/favicon/site.webmanifest`,
//   openGraph: {
//     url: SITE_CONFIG.url,
//     title: SITE_CONFIG.title,
//     description: SITE_CONFIG.description,
//     siteName: SITE_CONFIG.title,
//     images: [`${SITE_CONFIG.url}/images/og.jpg`],
//     type: 'website',
//     locale: 'en_US',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: SITE_CONFIG.title,
//     description: SITE_CONFIG.description,
//     images: [`${SITE_CONFIG.url}/images/og.jpg`],
//   },
//   authors: [
//     {
//       name: 'Alex',
//       url: 'https://hihb.com',
//     },
//   ],
// };

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
	return (
		<html lang="en">
			<body className={roboto.variable}>
				<AppRouterCacheProvider>
					<ThemeProvider theme={THEME}>
						<Container disableGutters>
							{children}
						</Container>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}

export default RootLayout;
