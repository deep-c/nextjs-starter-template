import { TypeORMSessionModel } from 'next-auth/adapters';
import Adapters from 'next-auth/dist/adapters/index';

export default class Session extends (Adapters.TypeORM.Models.Session.model as typeof TypeORMSessionModel) {
    constructor(userId: number, expires: Date, sessionToken: string, accessToken: string) {
        super(userId, expires, sessionToken, accessToken);
    }
}

export const SessionSchema = {
    name: 'Session',
    target: Session,
    columns: {
        ...Adapters.TypeORM.Models.Session.schema.columns,
    },
};
