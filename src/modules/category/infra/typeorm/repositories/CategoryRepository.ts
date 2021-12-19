import { getRepository, Repository } from 'typeorm';
import { injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { ICategoryRepository } from '@modules/category/repositories/ICategoryRepository';
import { Category } from '@modules/category/infra/typeorm/entities/Category';

@injectable()
export class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  create(data: IProfileDTO): Promise<IProfileDTO> {
    return this.repository.save(data);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  find(id: number): Promise<IProfileDTO | undefined> {
    return this.repository.findOne(id);
  }

  list(): Promise<IProfileDTO[]> {
    return this.repository.find();
  }

  async update(id: number, data: IProfileDTO): Promise<void> {
    await this.repository.update(id, data);
  }
}
