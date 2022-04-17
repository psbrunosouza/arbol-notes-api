import { getRepository, IsNull, Repository } from 'typeorm';
import { injectable } from 'tsyringe';
import { IBranchRepository } from '@modules/branch/repositories/IBranchRepository';
import { Branch } from '@modules/branch/infra/typeorm/entities/Branch';
import { IBranchDTO } from '@modules/branch/dtos/IBranchDTO';

@injectable()
export class BranchRepository implements IBranchRepository {
  private repository: Repository<Branch>;

  constructor() {
    this.repository = getRepository(Branch);
  }

  create(data: IBranchDTO): Promise<IBranchDTO> {
    return this.repository.save(data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  find(id: number): Promise<IBranchDTO | undefined> {
    return this.repository
      .createQueryBuilder('branches')
      .leftJoinAndSelect('branches.children', 'children')
      .leftJoinAndSelect('branches.status', 'status')
      .leftJoinAndSelect('branches.user', 'user')
      .leftJoinAndSelect('branches.category', 'category')
      .where({ id })
      .getOne();
  }

  async listRoots(loggedUserId: number): Promise<IBranchDTO[]> {
    return this.repository
      .createQueryBuilder('branches')
      .leftJoinAndSelect('branches.children', 'children')
      .leftJoinAndSelect('branches.status', 'status')
      .leftJoinAndSelect('branches.user', 'user')
      .leftJoinAndSelect('branches.category', 'category')
      .where('branches.parent_branch_id IS NULL')
      .andWhere('branches.user_id = :loggedUserId', { loggedUserId })
      .getMany();
  }

  async update(id: number, data: IBranchDTO): Promise<void> {
    await this.repository.update(id, data);
  }
}
