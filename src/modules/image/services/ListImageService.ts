import { inject, injectable } from 'tsyringe';
import { IImageDTO } from '@modules/image/dtos/IImageDTO';
import { PrismaImageRepository } from '@modules/image/infra/prisma/repositories/PrismaImageRepository';
import { IImageRepository } from '@modules/image/repositories/IImageRepository';

@injectable()
export default class ListImageService {
  constructor(
    @inject(PrismaImageRepository)
    private imageRepository: IImageRepository,
  ) {}

  public async execute(): Promise<IImageDTO[]> {
    return this.imageRepository.list();
  }
}
