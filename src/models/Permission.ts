import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Role } from '@/models/Role';
import { ContentType } from '@/models/ContentType';

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 50 })
    @IsNotEmpty()
    code: string;

    @Column({ length: 100 })
    @IsNotEmpty()
    title: string;

    @Column({ length: 256 })
    description: string;

    /* eslint-disable @typescript-eslint/no-unused-vars */
    @ManyToMany((type) => Role, (role) => role.permissions)
    roles: Role[];

    /* eslint-disable @typescript-eslint/no-unused-vars */
    @ManyToMany((type) => ContentType, (object) => object.permissions)
    objects: ContentType[];
}
