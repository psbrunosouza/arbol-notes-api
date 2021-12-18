import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

@Entity('profiles')
export class Profile extends DefaultEntity implements IDefaultDTO {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;
}
