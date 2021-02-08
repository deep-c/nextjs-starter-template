import { EntitySchema } from 'typeorm';
import { TypeORMUserModel } from 'next-auth/adapters';
import { UserSchema as OrigSchema } from 'next-auth/dist/adapters/typeorm/models/user';
import Role from '@/models/Role';

export default interface User extends TypeORMUserModel {
    roles: Role[];
}

export default class User extends TypeORMUserModel {
    // You can extend the options in a model but you should not remove the base
    // properties or change the order of the built-in options on the constructor
    constructor(name?: string, email?: string, image?: string, emailVerified?: Date) {
        super(name, email, image, emailVerified);
    }
}

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
    columns: {
        ...OrigSchema.columns,
        dob: {
            type: Date,
            nullable: true,
        },
    },
    relations: {
        ...OrigSchema.relations,
        roles: {
            type: 'many-to-many',
            target: 'Role',
            inverseSide: 'users',
        },
    },
});
