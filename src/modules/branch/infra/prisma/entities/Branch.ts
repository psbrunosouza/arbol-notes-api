import { Default } from '@shared/infra/prisma/entities/Default';
import { IBranchDTO } from '@modules/branch/dtos/IBranchDTO';
import { v4 as uuidv4 } from 'uuid';

export class Branch extends Default implements IBranchDTO {
  description: string | null;
  name: string;
  categoryId: string;
  statusId: string;
  userId: string;
  branchId: string;

  constructor() {
    super();
    this.userId = uuidv4();
  }
}
