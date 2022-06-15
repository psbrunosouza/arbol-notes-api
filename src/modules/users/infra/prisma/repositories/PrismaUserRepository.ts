import { injectable } from 'tsyringe';
import { prisma } from '@shared/infra/prisma';
import { IUserRepository } from '@modules/users/repositories/IUserRepository';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { v4 as uuidv4 } from 'uuid';
@injectable()
export class PrismaUserRepository implements IUserRepository {
  private user = prisma.user;

  async create(data: IUserDTO): Promise<IUserDTO> {
    return this.user.create({
      data: {
        ...data,
        id: uuidv4(),
      },
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
    return this.user.update({
      where: {
        id,
      },
      data,
    });
  }
}
