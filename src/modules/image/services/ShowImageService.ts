import { inject, injectable } from 'tsyringe';
import { ImageRepository } from '@modules/image/infra/typeorm/repositories/ImageRepository';
import { IImageDTO } from '@modules/image/dtos/IImageDTO';

@injectable()
export default class ShowImageService {
  constructor(
    @inject(ImageRepository)
    private imageRepository: ImageRepository,
  ) {}

  public async execute(id: number): Promise<IImageDTO | undefined> {
    return this.imageRepository.find(id);
  }
}
