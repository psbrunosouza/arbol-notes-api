import { IImageDTO } from '@modules/image/dtos/IImageDTO';

export interface IImageRepository {
  create(data: IImageDTO): Promise<IImageDTO>;
  list(): Promise<IImageDTO[]>;
  find(id: string): Promise<IImageDTO | null | undefined>;
  delete(id: string): Promise<void>;
  update(id: string, data: IImageDTO): Promise<void>;
}
