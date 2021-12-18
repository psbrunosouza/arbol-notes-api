import { getRepository, Repository } from 'typeorm';
import { injectable } from 'tsyringe';
import { IImageRepository } from '@modules/image/repositories/IImageRepository';
import { Image } from '@modules/image/infra/typeorm/entities/Image';
import { IImageDTO } from '@modules/image/dtos/IImageDTO';

@injectable()
export class ImageRepository implements IImageRepository {
  private repository: Repository<Image>;

  constructor() {
    this.repository = getRepository(Image);
  }

  create(data: IImageDTO): Promise<IImageDTO> {
    return this.repository.save(data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  find(id: number): Promise<IImageDTO | undefined> {
    return this.repository.findOne(id);
  }

  list(): Promise<IImageDTO[]> {
    return this.repository.find();
  }

  async update(id: number, data: IImageDTO): Promise<void> {
    await this.repository.update(id, data);
  }
}
