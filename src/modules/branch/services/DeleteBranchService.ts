import { inject, injectable } from 'tsyringe';
import { BranchRepository } from "@modules/branch/infra/typeorm/repositories/BranchRepository";

@injectable()
export default class DeleteBranchService {
  constructor(
    @inject(BranchRepository)
    private branchRepository: BranchRepository,
  ) {}

  public async execute(id: number): Promise<void> {
    return this.branchRepository.delete(id);
  }
}
