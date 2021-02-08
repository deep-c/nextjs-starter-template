import { EntitySchema } from 'typeorm';
import { TypeORMSessionModel } from 'next-auth/adapters';
import { SessionSchema as OrigSchema } from 'next-auth/dist/adapters/typeorm/models/session';

export default class Session extends TypeORMSessionModel {
    // You can extend the options in a model but you should not remove the base
    // properties or change the order of the built-in options on the constructor
    constructor(userId: number, expires: Date, sessionToken?: string, accessToken?: string) {
        super(userId, expires, sessionToken, accessToken);
    }
}

export const SessionSchema = new EntitySchema<Session>({
    name: 'Session',
    target: Session,
    columns: {
        ...OrigSchema.columns,
    },
});
