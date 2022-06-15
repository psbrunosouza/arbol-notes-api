import { IBranchRepository } from '@modules/branch/repositories/IBranchRepository';
import { IBranchDTO } from '@modules/branch/dtos/IBranchDTO';
import { prisma } from '@shared/infra/prisma';

export class PrismaBranchRepository implements IBranchRepository {
  private branch = prisma.branch;

  create(data: IBranchDTO): Promise<IBranchDTO> {
    return this.branch.create({
      data: data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.branch.delete({
      where: { id },
    });
  }

  find(id: string): Promise<IBranchDTO | null> {
    return this.branch.findFirst({
      where: {
        id,
      },
    });
  }

  listRoots(loggedUserId: string): Promise<IBranchDTO[]> {
    return this.branch.findMany();
  }

  update(id: string, data: IBranchDTO): Promise<IBranchDTO> {
    return this.branch.update({
      data,
      where: {
        id,
      },
    });
  }
}
