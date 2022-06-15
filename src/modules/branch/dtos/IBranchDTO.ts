import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';
import { Branch } from '@prisma/client';

export interface IBranchDTO extends Branch {
  name: string;
  description: string | null;
  categoryId: string;
  userId: string;
  statusId: string;
}
