import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryModel } from "./category.model";
import { DefaultModel } from "./default.model";
import {UserModel} from './user.model';

@Entity('workspaces')
export class WorkspaceModel extends DefaultModel{
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  image: string;
  @Column()
  userId: string;
  @ManyToOne(() => UserModel)
  @JoinColumn({name: 'userId'})
  user: UserModel
  @OneToMany(() => WorkspaceModel, workspace => workspace.categories)
  categories: CategoryModel[]
} 