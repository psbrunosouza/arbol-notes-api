import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DefaultEntity } from '@shared/infra/typeorm/entities/DefaultEntity';
import { IBranchDTO } from '@modules/branch/dtos/IBranchDTO';
import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';
import { Category } from '@modules/category/infra/typeorm/entities/Category';
import { Status } from '@modules/status/infra/typeorm/entities/Status';
import { User } from '@modules/users/infra/typeorm/entities/User';

@Entity('branches')
export class Branch extends DefaultEntity implements IBranchDTO {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;

  @ManyToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: ICategoryDTO;

  @ManyToOne(() => Branch, { eager: true })
  @JoinColumn({ name: 'parent_branch_id' })
  parent: IBranchDTO;

  @ManyToOne(() => Status, { eager: true })
  @JoinColumn({ name: 'status_id' })
  status: IStatusDTO;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: IUserDTO;
}
