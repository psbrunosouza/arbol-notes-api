import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DefaultEntity } from "@shared/infra/typeorm/entities/DefaultEntity";
import { IImageDTO } from '@modules/image/dtos/IImageDTO';

@Entity('images')
export class Image extends DefaultEntity implements IImageDTO {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  link: string;

  @Column()
  description?: string;
}
