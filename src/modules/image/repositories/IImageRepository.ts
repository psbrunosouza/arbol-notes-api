import { IImageDTO } from '@modules/image/dtos/IImageDTO';

export interface IImageRepository {
  create(data: IImageDTO): Promise<IImageDTO>;
  list(): Promise<IImageDTO[]>;
  find(id: number): Promise<IImageDTO | undefined>;
  delete(id: number): Promise<void>;
  update(id: number, data: IImageDTO): Promise<void>;
}
