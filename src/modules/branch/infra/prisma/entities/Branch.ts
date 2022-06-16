import { Default } from '@shared/infra/prisma/entities/Default';
import { IBranchDTO } from '@modules/branch/dtos/IBranchDTO';
import { v4 as uuidv4 } from 'uuid';

export class Branch extends Default implements IBranchDTO {
  name: string;
  description: string | null;
  categoryId: string | null;
  statusId: string | null;
  userId: string | null;
  branchId: string | null;

  constructor() {
    super();
    this.id = uuidv4();
  }
}
