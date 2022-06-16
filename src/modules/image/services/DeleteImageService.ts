import { inject, injectable } from 'tsyringe';
import { PrismaImageRepository } from '@modules/image/infra/prisma/repositories/PrismaImageRepository';
import { IImageRepository } from '@modules/image/repositories/IImageRepository';

@injectable()
export default class DeleteImageService {
  constructor(
    @inject(PrismaImageRepository)
    private imageRepository: IImageRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    return this.imageRepository.delete(id);
  }
}
