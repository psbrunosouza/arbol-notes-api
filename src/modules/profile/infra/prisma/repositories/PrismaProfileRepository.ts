import { prisma } from '@shared/infra/prisma';
import { IProfileRepository } from '@modules/profile/repositories/IProfileRepository';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';

export class PrismaProfileRepository implements IProfileRepository {
  private profile = prisma.profile;

  create(data: IProfileDTO): Promise<IProfileDTO> {
    return this.profile.create({
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.profile.delete({
      where: {
        id,
      },
    });
  }

  find(id: string): Promise<IProfileDTO | null> {
    return this.profile.findFirst({
      where: {
        id,
      },
    });
  }

  list(): Promise<IProfileDTO[]> {
    return this.profile.findMany();
  }

  async update(id: string, data: IProfileDTO): Promise<void> {
    await this.profile.update({
      data,
      where: {
        id,
      },
    });
  }
}
