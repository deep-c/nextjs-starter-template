import { TypeORMAccountModel } from 'next-auth/adapters';
import Adapters from 'next-auth/dist/adapters/index';

export default class Account extends (Adapters.TypeORM.Models.Account.model as typeof TypeORMAccountModel) {
    constructor(
        userId: number,
        providerId: string,
        providerType: string,
        providerAccountId: string,
        refreshToken: string,
        accessToken: string,
        accessTokenExpires: Date,
    ) {
        super(userId, providerId, providerType, providerAccountId, refreshToken, accessToken, accessTokenExpires);
    }
}

export const AccountSchema = {
    name: 'Account',
    target: Account,
    columns: {
        ...Adapters.TypeORM.Models.Account.schema.columns,
    },
};
