import { inject, injectable } from 'tsyringe';
import { ImageRepository } from '@modules/image/infra/typeorm/repositories/ImageRepository';
import { IImageDTO } from '@modules/image/dtos/IImageDTO';

@injectable()
export default class CreateImageService {
  constructor(
    @inject(ImageRepository)
    private imageRepository: ImageRepository,
  ) {}

  public async execute(image: IImageDTO): Promise<IImageDTO> {
    return this.imageRepository.create(image);
  }
}
