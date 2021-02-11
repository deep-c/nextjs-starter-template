import { EntitySchema } from 'typeorm';
import { TypeORMSessionModel } from 'next-auth/adapters';
import Adapters from 'next-auth/dist/adapters/index';

export default class Session extends (Adapters.TypeORM.Models.Session.model as typeof TypeORMSessionModel) {
    constructor(userId: number, expires: Date, sessionToken: string, accessToken: string) {
        super(userId, expires, sessionToken, accessToken);
    }
}

export const SessionSchema = new EntitySchema<Session>({
    ...Adapters.TypeORM.Models.Session.schema,
    name: 'Session',
    target: Session,
    columns: {
        ...Adapters.TypeORM.Models.Session.schema.columns,
    },
});
