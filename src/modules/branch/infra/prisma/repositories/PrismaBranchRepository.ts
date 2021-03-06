import { IBranchRepository } from '@modules/branch/repositories/IBranchRepository';
import { Branch } from '@modules/branch/infra/prisma/entities/Branch';
import { prisma } from '@shared/infra/prisma';
import { injectable } from 'tsyringe';

@injectable()
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
      include: {
        children: true,
      },
    });
  }

  async listRoots(loggedUserId: string): Promise<Branch[]> {
    return this.branch.findMany({
      where: {
        userId: loggedUserId,
        branchId: null,
      },
      include: {
        children: true,
      },
    });
  }

  update(id: string, data: Branch): Promise<Branch> {
    const BranchWithData = Object.assign(new Branch(), data);

    return this.branch.update({
      data: { ...BranchWithData, id },
      where: {
        id,
      },
    });
  }
}
