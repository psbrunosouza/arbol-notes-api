import { prisma } from '@shared/infra/prisma';
import { IStatusRepository } from '@modules/status/repositories/IStatusRepository';
import { Status } from '@modules/status/infra/prisma/entities/Status';

export class PrismaStatusRepository implements IStatusRepository {
  private status = prisma.status;

  create(data: Status): Promise<Status> {
    const statusWithData = Object.assign(new Status(), data);

    return this.status.create({
      data: statusWithData,
    });
  }

  async delete(id: string): Promise<void> {
    await this.status.delete({
      where: { id },
    });
  }

  find(id: string): Promise<Status | null> {
    return this.status.findFirst({
      where: { id },
    });
  }

  list(): Promise<Status[]> {
    return this.status.findMany();
  }

  async update(id: string, data: Status): Promise<Status> {
    const statusWithData = Object.assign(new Status(), data);

    return this.status.update({
      data: { ...statusWithData, id },
      where: { id },
    });
  }
}
