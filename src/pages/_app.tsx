import React from 'react';
import type { AppProps } from 'next/app';
import getConfig from 'next/config';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as AuthProvider } from 'next-auth/client';
import * as Sentry from '@sentry/node';
import { RewriteFrames } from '@sentry/integrations';
import store from '@/common/store';

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    const config = getConfig();
    const distDir = `${config.serverRuntimeConfig.rootDir}/.next`;
    Sentry.init({
        enabled: process.env.NODE_ENV === 'production',
        integrations: [
            new RewriteFrames({
                iteratee: (frame) => {
                    frame.filename = frame.filename.replace(distDir, 'app:///_next');
                    return frame;
                },
            }),
        ],
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    });
}

/* eslint-disable @typescript-eslint/ban-ts-comment*/
// @ts-ignore
const App: React.SFC<AppProps> = ({ Component, pageProps, err }: AppProps) => {
    return (
        <AuthProvider session={pageProps.session}>
            <ReduxProvider store={store}>
                <Component {...pageProps} err={err} />
            </ReduxProvider>
        </AuthProvider>
    );
};

export default App;
