import { EntitySchema } from 'typeorm';
import { TypeORM } from 'next-auth/adapters';

export default class VerificationRequest extends TypeORM.Models.VerificationRequest.model {
    // You can extend the options in a model but you should not remove the base
    // properties or change the order of the built-in options on the constructor
    constructor(identifier: string, token: string, expires: string) {
        super(identifier, token, expires);
    }
}

export const VerificationRequestSchema = new EntitySchema<VerificationRequest>({
    name: 'VerificationRequest',
    target: VerificationRequest,
    columns: {
        ...TypeORM.Models.VerificationRequest.schema.columns,
    },
});
