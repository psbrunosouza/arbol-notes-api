import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DefaultModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('date')
  createdAt: Date;
  @Column('date')
  deletedAt: Date;
  @Column('date')
  updatedAt: Date;
}