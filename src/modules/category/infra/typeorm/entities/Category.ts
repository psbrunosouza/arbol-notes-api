import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';

@Entity('categories')
export class Category extends DefaultEntity implements ICategoryDTO {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;
}
