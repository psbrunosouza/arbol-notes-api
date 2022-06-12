import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';

export interface ICategoryRepository {
  create(data: ICategoryDTO): Promise<ICategoryDTO>;
  list(): Promise<ICategoryDTO[]>;
  find(id: string): Promise<ICategoryDTO | undefined | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: ICategoryDTO): Promise<void>;
}
