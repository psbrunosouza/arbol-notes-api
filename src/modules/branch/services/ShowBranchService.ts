import { inject, injectable } from 'tsyringe';
import { IBranchDTO } from '@modules/branch/dtos/IBranchDTO';
import { PrismaBranchRepository } from '@modules/branch/infra/prisma/repositories/PrismaBranchRepository';
import { IBranchRepository } from '@modules/branch/repositories/IBranchRepository';

@injectable()
export default class ShowBranchService {
  constructor(
    @inject(PrismaBranchRepository)
    private branchRepository: IBranchRepository,
  ) {}

  public async execute(id: string): Promise<IBranchDTO | null> {
    return this.branchRepository.find(id);
  }
}
