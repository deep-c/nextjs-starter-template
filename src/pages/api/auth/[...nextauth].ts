import NextAuth from 'next-auth/dist/server';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/dist/adapters/index';
import Models from '@/models';
import { baseDbConfig } from '@/common/database';
import { initSentry } from 'common/sentry';
import { ConnectionOptions } from 'typeorm';

initSentry();

export default NextAuth({
    providers: [
        Providers.Auth0({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            domain: process.env.AUTH0_DOMAIN,
        }),
    ],
    adapter: Adapters.TypeORM.Adapter(baseDbConfig as ConnectionOptions, {
        models: {
            User: Models.User,
            Session: Models.Session,
            Account: Models.Account,
            VerificationRequest: Models.VerificationRequest,
        },
    }),
    secret: process.env.SECRET,
    debug: process.env.DEBUG,
    database: baseDbConfig,
});
