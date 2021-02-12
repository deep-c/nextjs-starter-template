import { TypeORMVerificationRequestModel } from 'next-auth/adapters';
import Adapters from 'next-auth/dist/adapters/index';

export default class VerificationRequest extends (Adapters.TypeORM.Models.VerificationRequest
    .model as typeof TypeORMVerificationRequestModel) {
    constructor(identifier: string, token: string, expires: Date) {
        super(identifier, token, expires);
    }
}

export const VerificationRequestSchema = {
    name: 'VerificationRequest',
    target: VerificationRequest,
    columns: {
        ...Adapters.TypeORM.Models.VerificationRequest.schema.columns,
    },
};
