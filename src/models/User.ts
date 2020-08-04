import { EntitySchema } from 'typeorm';
import { TypeORM } from 'next-auth/adapters';
import Role from '@/models/Role';

export default interface User {
    id: number;
    name: string;
    email: string;
    image: string;
    emailVerified: string;
    roles: Role[];
}

export default class User extends TypeORM.Models.User.model {
    // You can extend the options in a model but you should not remove the base
    // properties or change the order of the built-in options on the constructor
    constructor(name: string, email: string, image?: string, emailVerified?: string) {
        super(name, email, image, emailVerified);
    }
}

export const UserSchema = new EntitySchema<User>({
    name: 'User',
    target: User,
    columns: {
        ...TypeORM.Models.User.schema.columns,
        dob: {
            type: Date,
            nullable: true,
        },
    },
    relations: {
        ...TypeORM.Models.User.schema.relations,
        roles: {
            type: 'many-to-many',
            target: 'Role',
            inverseSide: 'users',
        },
    },
});
