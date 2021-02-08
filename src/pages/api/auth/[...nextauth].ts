import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import Models from '@/models';
import { baseDbConfig } from '@/common/database';
import { initSentry } from 'common/sentry';

initSentry();

export default NextAuth(req, res, {
    providers: [
        Providers.Auth0({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            domain: process.env.AUTH0_DOMAIN,
        }),
    ],
    adapter: Adapters.TypeORM.Adapter(baseDbConfig, {
        customModels: {
            User: Models.User,
            Account: Models.Account,
            Session: Models.Session,
            VerificationRequest: Models.VerificationRequest,
        },
    }),
    secret: process.env.SECRET,
    debug: process.env.DEBUG,
    database: baseDbConfig,
});
