import { inject, injectable } from 'tsyringe';
import { BranchRepository } from '@modules/branch/infra/typeorm/repositories/BranchRepository';
import { IBranchDTO } from '@modules/branch/dtos/IBranchDTO';

@injectable()
export default class ListRootBranchesService {
  constructor(
    @inject(BranchRepository)
    private branchRepository: BranchRepository,
  ) {}

  public async execute(): Promise<IBranchDTO[]> {
    return this.branchRepository.listWithoutChildren();
  }
}
