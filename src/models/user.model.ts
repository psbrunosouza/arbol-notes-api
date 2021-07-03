import { Column, Entity } from 'typeorm';
import { DefaultModel } from './default.model';

@Entity('user')
export class UserModel extends DefaultModel{
  @Column('varchar')
  name: string;
  @Column('varchar')
  email: string;
  @Column('varchar')
  password: string;
}