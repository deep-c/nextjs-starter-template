import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import User, { UserSchema } from '@/models/User';
import Account, { AccountSchema } from '@/models/Account';
import VerificationRequest, { VerificationRequestSchema } from '@/models/VerificationRequest';
import Session, { SessionSchema } from '@/models/Session';
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
        customModels: {
            User: {
                model: User,
                schema: UserSchema,
            },
            Account: {
                model: Account,
                schema: AccountSchema,
            },
            Session: {
                model: Session,
                schema: SessionSchema,
            },
            VerificationRequest: {
                model: VerificationRequest,
                schema: VerificationRequestSchema,
            },
        },
    }),
    secret: process.env.SECRET,
    debug: process.env.DEBUG,
    database: baseDbConfig,
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
