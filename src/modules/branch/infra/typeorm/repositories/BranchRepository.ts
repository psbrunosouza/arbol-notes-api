import { getRepository, Repository } from 'typeorm';
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
      .leftJoinAndSelect('branches.children', 'child_branch')
      .andWhere('branches.id = :id', { id })
      .getOne();
  }

  listWithoutChildren(): Promise<IBranchDTO[]> {
    return this.repository
      .createQueryBuilder('branches')
      .leftJoinAndSelect('branches.children', 'child_branch')
      .where('branches.parent IS NULL')
      .getMany();
  }

  async update(id: number, data: IBranchDTO): Promise<void> {
    await this.repository.update(id, data);
  }
}
