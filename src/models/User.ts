import { EntitySchema } from 'typeorm';
import { TypeORM } from 'next-auth/adapters';

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
        // Adds a phoneNumber to the User schema
        phoneNumber: {
            type: 'varchar',
            nullable: true,
        },
        dob: {
            type: 'date',
            nullable: true,
        },
    },
});
