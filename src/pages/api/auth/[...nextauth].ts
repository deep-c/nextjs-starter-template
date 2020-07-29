import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import Models from '@/models';
import { baseDbConfig } from '@/utils/config';

const options = {
    providers: [
        Providers.Auth0({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            domain: process.env.AUTH0_DOMAIN,
        }),
    ],
    adapter: Adapters.TypeORM.Adapter(baseDbConfig, {
        models: {
            User: Models.User,
        },
    }),
    secret: process.env.SECRET,
    debug: process.env.DEBUG,
    database: baseDbConfig,
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
