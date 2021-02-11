import { EntitySchema } from 'typeorm';
import { TypeORMVerificationRequestModel } from 'next-auth/adapters';
import Adapters from 'next-auth/dist/adapters/index';

export default class VerificationRequest extends (Adapters.TypeORM.Models.VerificationRequest
    .model as typeof TypeORMVerificationRequestModel) {
    constructor(identifier: string, token: string, expires: Date) {
        super(identifier, token, expires);
    }
}

export const VerificationRequestSchema = new EntitySchema<VerificationRequest>({
    ...Adapters.TypeORM.Models.VerificationRequest.schema,
    name: 'VerificationRequest',
    target: VerificationRequest,
    columns: {
        ...Adapters.TypeORM.Models.VerificationRequest.schema.columns,
    },
});
