import { inject, injectable } from 'tsyringe';
import { IImageDTO } from '@modules/image/dtos/IImageDTO';
import { PrismaImageRepository } from '@modules/image/infra/prisma/repositories/PrismaImageRepository';
import { IImageRepository } from '@modules/image/repositories/IImageRepository';

@injectable()
export default class ShowImageService {
  constructor(
    @inject(PrismaImageRepository)
    private imageRepository: IImageRepository,
  ) {}

  public async execute(id: string): Promise<IImageDTO | null> {
    return this.imageRepository.find(id);
  }
}
