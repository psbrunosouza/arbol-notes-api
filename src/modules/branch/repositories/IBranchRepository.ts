import { IBranchDTO } from '@modules/branch/dtos/IBranchDTO';

export interface IBranchRepository {
  create(data: IBranchDTO): Promise<IBranchDTO>;
  listRoots(loggedUserId: string): Promise<IBranchDTO[]>;
  find(id: string): Promise<IBranchDTO | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: IBranchDTO): Promise<void>;
}
