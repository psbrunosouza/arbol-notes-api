import { inject, injectable } from 'tsyringe';
import { IBranchDTO } from '@modules/branch/dtos/IBranchDTO';
import { PrismaBranchRepository } from '@modules/branch/infra/prisma/repositories/PrismaBranchRepository';

@injectable()
export default class CreateBranchService {
  constructor(
    @inject(PrismaBranchRepository)
    private prismaBranchRepository: PrismaBranchRepository,
  ) {}

  public async execute(branch: IBranchDTO) {
    return this.prismaBranchRepository.create(branch);
  }
}
