import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';

@Entity('statuses')
export class Status extends DefaultEntity implements IStatusDTO {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;
}
