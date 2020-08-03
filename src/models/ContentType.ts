import { EntitySchema } from 'typeorm';
import Permission from '@/models/Permission';

export default interface ContentType {
    id: number;
    model: string;
    permissions: Permission[];
}

export default class ContentType {}

export const contentTypeSchema = new EntitySchema<ContentType>({
    name: 'ContentType',
    target: ContentType,
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        model: {
            type: 'varchar',
            length: 64,
            unique: true,
        },
    },
    relations: {
        permissions: {
            target: 'Permission',
            type: 'many-to-many',
            joinTable: true,
            cascade: true,
        },
    },
});
