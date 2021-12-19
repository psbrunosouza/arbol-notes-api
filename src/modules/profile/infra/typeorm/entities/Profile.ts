import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';

@Entity('profiles')
export class Profile extends DefaultEntity implements IProfileDTO {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;
}
