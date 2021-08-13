import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);
