import {NextApiRequest, NextApiResponse} from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from "next-auth/adapters"
import ormconfig from '@project/ormconfig.json'
import Models from 'models'

// Construct our own object so that we dont use the path references for
// entities, migrations etc since those are relative and wont work if passed.
const dbConfig = {
    type: ormconfig.type,
    host: ormconfig.host,
    port: ormconfig.port,
    username: ormconfig.username,
    password: ormconfig.password,
    database: ormconfig.database,
    synchronize: ormconfig.synchronize,
}

const options = {
    providers: [
        Providers.Auth0({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            domain: process.env.AUTH0_DOMAIN,
        }),
    ],
    adapter: Adapters.TypeORM.Adapter(
        dbConfig,
        {
            models: {
                User: Models.User,
            },
        }
    ),
    secret: process.env.SECRET,
    debug: process.env.DEBUG,
    database: dbConfig,
}

export default(req : NextApiRequest, res : NextApiResponse) => NextAuth(req, res, options)