import { Category } from '@modules/category/infra/prisma/entities/Category';

export interface ICategoryRepository {
  create(data: Category): Promise<Category>;
  list(): Promise<Category[]>;
  find(id: string): Promise<Category | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: Category): Promise<Category>;
}
