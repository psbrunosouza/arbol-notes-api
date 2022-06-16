import { prisma } from '@shared/infra/prisma';
import { IProfileRepository } from '@modules/profile/repositories/IProfileRepository';
import { Profile } from '@modules/profile/infra/prisma/entities/Profile';
import { injectable } from 'tsyringe';

@injectable()
export class PrismaProfileRepository implements IProfileRepository {
  private profile = prisma.profile;

  create(data: Profile): Promise<Profile> {
    const profileWithData = Object.assign(new Profile(), data);

    return this.profile.create({
      data: profileWithData,
    });
  }

  async delete(id: string): Promise<void> {
    await this.profile.delete({
      where: {
        id,
      },
    });
  }

  find(id: string): Promise<Profile | null> {
    return this.profile.findFirst({
      where: {
        id,
      },
    });
  }

  list(): Promise<Profile[]> {
    return this.profile.findMany();
  }

  update(id: string, data: Profile): Promise<Profile> {
    const profileWithData = Object.assign(new Profile(), data);

    return this.profile.update({
      data: { ...profileWithData, id },
      where: {
        id,
      },
    });
  }
}
