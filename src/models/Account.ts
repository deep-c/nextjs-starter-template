import { EntitySchema } from 'typeorm';
import { TypeORMAccountModel } from 'next-auth/adapters';
import { AccountSchema as OrigSchema } from 'next-auth/dist/adapters/typeorm/models/account';

export default class Account extends TypeORMAccountModel {
    constructor(
        userId: number,
        providerId: string,
        providerType: string,
        providerAccountId: string,
        refreshToken?: string,
        accessToken?: string,
        accessTokenExpires?: Date,
    ) {
        super(userId, providerId, providerType, providerAccountId, refreshToken, accessToken, accessTokenExpires);
    }
}

export const AccountSchema = new EntitySchema<Account>({
    name: 'Account',
    target: Account,
    columns: {
        ...OrigSchema.columns,
    },
});
