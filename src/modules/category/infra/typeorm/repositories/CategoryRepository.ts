import { getRepository, Repository } from 'typeorm';
import { injectable } from 'tsyringe';
import { ICategoryRepository } from '@modules/category/repositories/ICategoryRepository';
import { Category } from '@modules/category/infra/typeorm/entities/Category';
import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';

@injectable()
export class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  create(data: ICategoryDTO): Promise<ICategoryDTO> {
    return this.repository.save(data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  find(id: number): Promise<ICategoryDTO | undefined> {
    return this.repository.findOne(id);
  }

  list(): Promise<ICategoryDTO[]> {
    return this.repository.find();
  }

  async update(id: number, data: ICategoryDTO): Promise<void> {
    await this.repository.update(id, data);
  }
}
