import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';
import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';

export interface IBranchDTO extends IDefaultDTO {
  name: string;
  description?: string;
  category: ICategoryDTO;
  user: IUserDTO;
  status: IStatusDTO;
  parent: IBranchDTO;
  children: IBranchDTO[];
}
