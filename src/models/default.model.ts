import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DefaultModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('date')
  createdAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
  @Column('date')
  updatedAt: Date;
}