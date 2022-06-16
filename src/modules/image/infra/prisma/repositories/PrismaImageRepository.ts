import { IImageRepository } from '@modules/image/repositories/IImageRepository';
import { prisma } from '@shared/infra/prisma';
import { Image } from '@modules/image/infra/prisma/entities/Image';

export class PrismaImageRepository implements IImageRepository {
  private image = prisma.image;

  create(data: Image): Promise<Image> {
    const imageWithData = Object.assign(new Image(), data);

    return this.image.create({
      data: imageWithData,
    });
  }

  async delete(id: string): Promise<void> {
    await this.image.delete({
      where: { id },
    });
  }

  find(id: string): Promise<Image | null> {
    return this.image.findFirst({
      where: {
        id,
      },
    });
  }

  list(): Promise<Image[]> {
    return this.image.findMany();
  }

  update(id: string, data: Image): Promise<Image> {
    const imageWithData = Object.assign(new Image(), data);

    return this.image.update({
      where: {
        id,
      },
      data: { ...imageWithData, id },
    });
  }
}
