import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { DefaultModel } from "./default.model";
import { WorkspaceModel } from "./workspace.model";

@Entity("categories")
export class CategoryModel extends DefaultModel{
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  image: string;
  @Column()
  workspaceId: string;
  @ManyToOne(() => WorkspaceModel)
  @JoinColumn({name: 'workspaceId'})
  user: WorkspaceModel
} 