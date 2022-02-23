import { getRepository, IsNull, Repository } from "typeorm";
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
    return this.repository.findOne(id, {
      relations: ['children'],
    });
  }

  async listWithoutChildren(loggedUserId: number): Promise<IBranchDTO[]> {
    const branch = await this.repository.find({
      relations: ['children'],
      where: {
        parent: {
          id: IsNull(),
        },
        user: {
          id: loggedUserId,
        },
      },
    });

    return branch;
  }

  async update(id: number, data: IBranchDTO): Promise<void> {
    await this.repository.update(id, data);
  }
}
