import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DefaultModel } from '../../../../shared/typeorm/entities/default.model';
import { WorkspaceModel } from '../../../workspace/typeorm/entities/workspace.model';

@Entity('categories')
export class CategoryModel extends DefaultModel {
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  image: string;
  @Column()
  workspaceId: string;
  @ManyToOne(() => WorkspaceModel)
  @JoinColumn({ name: 'workspaceId' })
  user: WorkspaceModel;
}
