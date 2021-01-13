import React from 'react';
import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as AuthProvider } from 'next-auth/client';
import store from '@/common/store';
import { initSentry } from 'common/sentry';

initSentry();

/* eslint-disable @typescript-eslint/ban-ts-comment*/
// @ts-ignore
const App: React.FC<AppProps> = ({ Component, pageProps, err }: AppProps) => {
    return (
        <AuthProvider session={pageProps.session}>
            <ReduxProvider store={store}>
                <Component {...pageProps} err={err} />
            </ReduxProvider>
        </AuthProvider>
    );
};

export default App;
