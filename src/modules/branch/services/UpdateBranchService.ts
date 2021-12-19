import { inject, injectable } from 'tsyringe';
import { BranchRepository } from '@modules/branch/infra/typeorm/repositories/BranchRepository';
import { IBranchDTO } from '@modules/branch/dtos/IBranchDTO';

@injectable()
export default class UpdateBranchService {
  constructor(
    @inject(BranchRepository)
    private branchRepository: BranchRepository,
  ) {}

  public async execute(id: number, branch: IBranchDTO): Promise<void> {
    return this.branchRepository.update(id, branch);
  }
}
