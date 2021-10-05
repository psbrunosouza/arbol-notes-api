import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CategoryModel } from '../../../category/typeorm/entities/category.model';
import { DefaultModel } from '../../../../shared/typeorm/entities/default.model';

@Entity('tasks')
export class TaskModel extends DefaultModel {
  @Column()
  plainText: string;
  @Column()
  categoryId: string;
  @ManyToOne(() => CategoryModel)
  @JoinColumn({ name: 'categoryId' })
  category: CategoryModel;
}
