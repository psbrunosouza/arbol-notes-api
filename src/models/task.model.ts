import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { CategoryModel } from "./category.model";
import { DefaultModel } from "./default.model";

@Entity("tasks")
export class TaskModel extends DefaultModel {
  @Column()
  plainText: string
  @Column()
  categoryId: string
  @ManyToOne(() => CategoryModel)
  @JoinColumn({name: "categoryId"})
  category: CategoryModel
}
