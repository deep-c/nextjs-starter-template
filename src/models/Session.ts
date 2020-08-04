import { EntitySchema } from 'typeorm';
import { TypeORM } from 'next-auth/adapters';

export default class Session extends TypeORM.Models.Session.model {
    // You can extend the options in a model but you should not remove the base
    // properties or change the order of the built-in options on the constructor
    constructor(userId: string, expires: string, sessionToken: string, accessToken: string) {
        super(userId, expires, sessionToken, accessToken);
    }
}

export const SessionSchema = new EntitySchema<Session>({
    name: 'Session',
    target: Session,
    columns: {
        ...TypeORM.Models.Session.schema.columns,
    },
});
