import { EntitySchema } from 'typeorm';
import Permission from '@/models/Permission';
import User from '@/models/User';

export default interface Role {
    id: number;
    name: string;
    description: string;
    users: User[];
    permissions: Permission[];
}

export default class Role {}

export const RoleSchema = new EntitySchema<Role>({
    name: 'Role',
    target: Role,
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        name: {
            type: 'varchar',
            length: 64,
            unique: true,
        },
        description: {
            type: 'varchar',
            length: 256,
        },
    },
    relations: {
        users: {
            type: 'many-to-many',
            target: 'User',
            joinTable: true,
            cascade: true,
            inverseSide: 'roles',
        },
        permissions: {
            type: 'many-to-many',
            target: 'Permission',
            joinTable: true,
            cascade: true,
            inverseSide: 'roles',
        },
    },
});
