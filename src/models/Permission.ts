import { EntitySchema } from 'typeorm';
import Role from '@/models/Role';
import ContentType from '@/models/ContentType';

export default interface Permission {
    id: number;
    code: string;
    title: string;
    description: string;
    roles: Role[];
    objects: ContentType[];
}

export default class Permission {}

export const PermissionSchema = new EntitySchema<Permission>({
    name: 'Permission',
    target: Permission,
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        code: {
            type: 'varchar',
            length: 64,
            unique: true,
        },
        title: {
            type: 'varchar',
            length: 128,
        },
        description: {
            type: 'varchar',
            length: 256,
        },
    },
    relations: {
        roles: {
            type: 'many-to-many',
            target: 'Role',
        },
        objects: {
            type: 'many-to-many',
            target: 'ContentType',
            inverseSide: 'permissions',
        },
    },
});
