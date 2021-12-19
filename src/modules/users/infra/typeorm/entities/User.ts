import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { IImageDTO } from '@modules/image/dtos/IImageDTO';
import { Image } from '@modules/image/infra/typeorm/entities/Image';
import { Profile } from '@modules/profile/infra/typeorm/entities/Profile';

@Entity('users')
export class User extends DefaultEntity implements IUserDTO {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Image, { eager: true })
  @JoinColumn({ name: 'image_id' })
  image: IImageDTO;

  @ManyToOne(() => Profile, { eager: true })
  @JoinColumn({ name: 'profile_id' })
  profile: IProfileDTO;
}
