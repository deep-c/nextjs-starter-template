import React from 'react';
import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as AuthProvider } from 'next-auth/client';
import store from '@/common/store';

const MyApp: React.SFC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <AuthProvider session={pageProps.session}>
            <ReduxProvider store={store}>
                <Component {...pageProps} />
            </ReduxProvider>
        </AuthProvider>
    );
};

export default MyApp;
