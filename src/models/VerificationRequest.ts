import { EntitySchema } from 'typeorm';
import { TypeORMVerificationRequestModel } from 'next-auth/adapters';
import { UserSchema as OrigSchema } from 'next-auth/dist/adapters/typeorm/models/user';

export default class VerificationRequest extends TypeORMVerificationRequestModel {
    // You can extend the options in a model but you should not remove the base
    // properties or change the order of the built-in options on the constructor
    constructor(identifier: string, token: string, expires: Date) {
        super(identifier, token, expires);
    }
}

export const VerificationRequestSchema = new EntitySchema<VerificationRequest>({
    name: 'VerificationRequest',
    target: VerificationRequest,
    columns: {
        ...OrigSchema.columns,
    },
});
