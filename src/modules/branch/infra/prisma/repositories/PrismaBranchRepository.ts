import { IBranchRepository } from '@modules/branch/repositories/IBranchRepository';
import { Branch } from '@modules/branch/infra/prisma/entities/Branch';
import { prisma } from '@shared/infra/prisma';

export class PrismaBranchRepository implements IBranchRepository {
  private branch = prisma.branch;

  create(data: Branch): Promise<Branch> {
    const BranchWithData = Object.assign(new Branch(), data);

    return this.branch.create({
      data: BranchWithData,
    });
  }

  async delete(id: string): Promise<void> {
    await this.branch.delete({
      where: { id },
    });
  }

  find(id: string): Promise<Branch | null> {
    return this.branch.findFirst({
      where: {
        id,
      },
    });
  }

  listRoots(loggedUserId: string): Promise<Branch[]> {
    return this.branch.findMany({
      where: {
        id: loggedUserId,
      },
    });
  }

  update(id: string, data: Branch): Promise<Branch> {
    const BranchWithData = Object.assign(new Branch(), data);

    return this.branch.update({
      data: BranchWithData,
      where: {
        id,
      },
    });
  }
}
