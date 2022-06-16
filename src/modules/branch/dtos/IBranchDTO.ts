import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IBranchDTO extends IDefaultDTO {
  name: string;
  description: string | null;
  categoryId: string;
  userId: string;
  statusId: string;
  branchId: string;
}
