import { IBranchDTO } from '@modules/branch/dtos/IBranchDTO';

export interface IBranchRepository {
  create(data: IBranchDTO): Promise<IBranchDTO>;
  listWithoutChildren(): Promise<IBranchDTO[]>;
  find(id: number): Promise<IBranchDTO | undefined>;
  delete(id: number): Promise<void>;
  update(id: number, data: IBranchDTO): Promise<void>;
}
