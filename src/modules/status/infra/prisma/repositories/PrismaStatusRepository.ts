import { IStatusRepository } from '@modules/status/repositories/IStatusRepository';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';
import { prisma } from '@shared/infra/prisma';

export class PrismaStatusRepository implements IStatusRepository {
  private status = prisma.status;

  create(data: IStatusDTO): Promise<IStatusDTO | null> {
    return this.status.create({
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.status.delete({
      where: { id },
    });
  }

  find(id: string): Promise<IStatusDTO | null> {
    return this.status.findFirst({
      where: { id },
    });
  }

  list(): Promise<IStatusDTO[]> {
    return this.status.findMany();
  }

  async update(id: string, data: IStatusDTO): Promise<void> {
    await this.status.update({
      data,
      where: { id },
    });
  }
}
