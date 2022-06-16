import { inject, injectable } from 'tsyringe';
import { IBranchDTO } from '@modules/branch/dtos/IBranchDTO';
import { PrismaBranchRepository } from '@modules/branch/infra/prisma/repositories/PrismaBranchRepository';
import { IBranchRepository } from '@modules/branch/repositories/IBranchRepository';

@injectable()
export default class UpdateBranchService {
  constructor(
    @inject(PrismaBranchRepository)
    private branchRepository: IBranchRepository,
  ) {}

  public async execute(id: string, branch: IBranchDTO): Promise<IBranchDTO> {
    return this.branchRepository.update(id, branch);
  }
}
