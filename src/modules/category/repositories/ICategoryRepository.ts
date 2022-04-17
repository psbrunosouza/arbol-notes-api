import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';

export interface ICategoryRepository {
  create(data: ICategoryDTO): Promise<ICategoryDTO>;
  list(): Promise<ICategoryDTO[]>;
  find(id: number): Promise<ICategoryDTO | undefined>;
  delete(id: number): Promise<void>;
  update(id: number, data: ICategoryDTO): Promise<void>;
}
