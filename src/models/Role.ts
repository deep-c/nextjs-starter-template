import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Permission } from '@/models/Permission';

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 50 })
    @IsNotEmpty()
    name: string;

    @Column({ length: 256 })
    description: string;

    /* eslint-disable @typescript-eslint/no-unused-vars */
    @ManyToMany((type) => Permission, (permission) => permission.roles)
    @JoinTable()
    permissions: Permission[];
}
