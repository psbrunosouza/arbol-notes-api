import { Image } from '@modules/image/infra/prisma/entities/Image';

export interface IImageRepository {
  create(data: Image): Promise<Image>;
  list(): Promise<Image[]>;
  find(id: string): Promise<Image | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: Image): Promise<Image>;
}
