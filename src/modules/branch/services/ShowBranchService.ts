import { inject, injectable } from 'tsyringe';
import { BranchRepository } from '@modules/branch/infra/typeorm/repositories/BranchRepository';
import { IBranchDTO } from '@modules/branch/dtos/IBranchDTO';

@injectable()
export default class ShowBranchService {
  constructor(
    @inject(BranchRepository)
    private branchRepository: BranchRepository,
  ) {}

  public async execute(id: number): Promise<IBranchDTO | undefined> {
    return this.branchRepository.find(id);
  }
}
