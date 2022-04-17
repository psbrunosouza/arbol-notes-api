import { inject, injectable } from 'tsyringe';
import { ImageRepository } from '@modules/image/infra/typeorm/repositories/ImageRepository';
import { IImageDTO } from '@modules/image/dtos/IImageDTO';

@injectable()
export default class ListImageService {
  constructor(
    @inject(ImageRepository)
    private imageRepository: ImageRepository,
  ) {}

  public async execute(): Promise<IImageDTO[]> {
    return this.imageRepository.list();
  }
}
