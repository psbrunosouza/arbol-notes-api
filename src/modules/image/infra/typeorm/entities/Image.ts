import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

@Entity('images')
export class Image extends DefaultEntity implements IDefaultDTO {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  link: string;

  @Column()
  description: string;
}
