import { injectable } from 'tsyringe';
import { IUserRepository } from '@modules/users/repositories/IUserRepository';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { User } from '@modules/users/infra/prisma/entities/User';
import { prisma } from '@shared/infra/prisma';

@injectable()
export class PrismaUserRepository implements IUserRepository {
  private user = prisma.user;

  async create(data: User): Promise<User> {
    const userWithData = Object.assign(new User(), data);

    return this.user.create({
      data: userWithData,
    });
  }

  async delete(id: string): Promise<void> {
    await this.user.delete({
      where: {
        id,
      },
    });
  }

  find(id: string): Promise<IUserDTO | null> {
    return this.user.findUnique({
      where: {
        id,
      },
    });
  }

  findUserByEmail(email: string): Promise<IUserDTO | null> {
    return this.user.findUnique({
      where: {
        email,
      },
    });
  }

  list(): Promise<IUserDTO[]> {
    return this.user.findMany({
      include: {
        Branch: true,
      },
    });
  }

  update(id: string, data: IUserDTO): Promise<IUserDTO> {
    const userWithData = Object.assign(new User(), data);

    return this.user.update({
      where: {
        id,
      },
      data: { ...userWithData, id },
    });
  }
}
