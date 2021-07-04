import { Column, Entity, OneToMany } from 'typeorm';
import { DefaultModel } from './default.model';
import { WorkspaceModel } from './workspace.model';

@Entity('users')
export class UserModel extends DefaultModel{
  @Column('varchar')
  name: string;
  @Column('varchar')
  email: string;
  @Column('varchar')
  password: string | undefined;
  @OneToMany(() => UserModel, user => user.workspaces)
  workspaces: WorkspaceModel[]
}