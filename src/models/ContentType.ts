import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Permission } from '@/models/Permission';

@Entity()
export class ContentType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 256 })
    @IsNotEmpty()
    model: string;

    /* eslint-disable @typescript-eslint/no-unused-vars */
    @ManyToMany((type) => Permission, (permission) => permission.objects)
    permissions: Permission[];
}
