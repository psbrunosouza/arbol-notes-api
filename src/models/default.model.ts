import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class DefaultModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('date')
  createdAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}