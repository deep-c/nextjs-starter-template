import { EntitySchema } from 'typeorm';
import { TypeORMUserModel } from 'next-auth/adapters';
import Adapters from 'next-auth/dist/adapters/index';

export default class User extends (Adapters.TypeORM.Models.User.model as typeof TypeORMUserModel) {
    constructor(name?: string, email?: string, image?: string, emailVerified?: Date) {
        super(name, email, image, emailVerified);
    }
}

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
    columns: {
        ...Adapters.TypeORM.Models.User.schema.columns,
        dob: {
            type: Date,
            nullable: true,
        },
    },
});
