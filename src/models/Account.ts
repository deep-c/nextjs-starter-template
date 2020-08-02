import { EntitySchema } from 'typeorm';
import { TypeORM } from 'next-auth/adapters';

export default class Account extends TypeORM.Models.Account.model {
    // You can extend the options in a model but you should not remove the base
    // properties or change the order of the built-in options on the constructor
    constructor(
        userId: string,
        providerId: string,
        providerType: string,
        providerAccountId: string,
        refreshToken: string,
        accessToken: string,
        accessTokenExpires: string,
    ) {
        super(userId, providerId, providerType, providerAccountId, refreshToken, accessToken, accessTokenExpires);
    }
}

export const AccountSchema = new EntitySchema<Account>({
    name: 'Account',
    target: Account,
    columns: {
        ...TypeORM.Models.Account.schema.columns,
    },
});
