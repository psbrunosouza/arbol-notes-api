import { IDefaultDTO } from '@shared/dtos/IDefaultDTO';

export interface IBranchDTO extends IDefaultDTO {
  name: string;
  description: string | null;
  categoryId: string | null;
  userId: string | null;
  statusId: string | null;
  branchId: string | null;
}
