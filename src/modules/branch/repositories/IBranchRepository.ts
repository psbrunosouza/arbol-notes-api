import { Branch } from '@modules/branch/infra/prisma/entities/Branch';

export interface IBranchRepository {
  create(data: Branch): Promise<Branch>;
  listRoots(loggedUserId: string): Promise<Branch[]>;
  find(id: string): Promise<Branch | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: Branch): Promise<Branch>;
}
