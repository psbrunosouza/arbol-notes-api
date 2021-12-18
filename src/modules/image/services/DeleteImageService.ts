import { inject, injectable } from 'tsyringe';
import { ImageRepository } from '@modules/image/infra/typeorm/repositories/ImageRepository';

@injectable()
export default class DeleteImageService {
  constructor(
    @inject(ImageRepository)
    private imageRepository: ImageRepository,
  ) {}

  public async execute(id: number): Promise<void> {
    return this.imageRepository.delete(id);
  }
}
