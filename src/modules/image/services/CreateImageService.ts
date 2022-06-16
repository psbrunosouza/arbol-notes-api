import { inject, injectable } from 'tsyringe';
import { IImageDTO } from '@modules/image/dtos/IImageDTO';
import { IImageRepository } from '@modules/image/repositories/IImageRepository';
import { PrismaImageRepository } from '@modules/image/infra/prisma/repositories/PrismaImageRepository';

@injectable()
export default class CreateImageService {
  constructor(
    @inject(PrismaImageRepository)
    private imageRepository: IImageRepository,
  ) {}

  public async execute(image: IImageDTO): Promise<IImageDTO> {
    return this.imageRepository.create(image);
  }
}
