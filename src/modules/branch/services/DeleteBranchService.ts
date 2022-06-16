import { inject, injectable } from 'tsyringe';
import { BranchRepository } from '@modules/branch/infra/typeorm/repositories/BranchRepository';
import { PrismaBranchRepository } from '@modules/branch/infra/prisma/repositories/PrismaBranchRepository';
import { IBranchRepository } from '@modules/branch/repositories/IBranchRepository';

@injectable()
export default class DeleteBranchService {
  constructor(
    @inject(PrismaBranchRepository)
    private branchRepository: IBranchRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    return this.branchRepository.delete(id);
  }
}
