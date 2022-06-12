import { IImageRepository } from '@modules/image/repositories/IImageRepository';
import { IImageDTO } from '@modules/image/dtos/IImageDTO';
import { prisma } from '@shared/infra/prisma';
import { Image } from '@modules/image/infra/prisma/entities/Image';

export class PrismaImageRepository implements IImageRepository {
  private image = prisma.image;

  create(data: Image): Promise<IImageDTO> {
    return this.image.create({
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.image.delete({
      where: { id },
    });
  }

  find(id: string): Promise<IImageDTO | null> {
    return this.image.findFirst({
      where: {
        id,
      },
    });
  }

  list(): Promise<IImageDTO[]> {
    return this.image.findMany();
  }

  async update(id: string, data: IImageDTO): Promise<void> {
    await this.image.update({
      where: {
        id,
      },
      data,
    });
  }
}
