import {
  AfterLoad,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { IBranchDTO } from '@modules/branch/dtos/IBranchDTO';
import { Category } from '@modules/category/infra/typeorm/entities/Category';
import { Status } from '@modules/status/infra/typeorm/entities/Status';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';

@Entity('branches')
export class Branch extends DefaultEntity implements IBranchDTO {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;

  @ManyToOne(() => Branch, branch => branch.children)
  @JoinColumn({ name: 'parent_branch_id' })
  parent: IBranchDTO;

  @OneToMany(() => Branch, branch => branch.parent)
  @JoinColumn({ name: 'parent_branch_id' })
  children: IBranchDTO[];

  @ManyToOne(() => Status, { eager: true })
  @JoinColumn({ name: 'status_id' })
  status: IStatusDTO;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: IUserDTO;

  @ManyToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: ICategoryDTO;

  childrenQtd?: number;

  @AfterLoad()
  public afterLoad(): void {
    this.childrenQtd = this.children ? this.children.length : undefined;
  }
}
