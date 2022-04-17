import { inject, injectable } from 'tsyringe';
import { CategoryRepository } from '@modules/category/infra/typeorm/repositories/CategoryRepository';
import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';

@injectable()
export default class UpdateCategoryService {
  constructor(
    @inject(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  public async execute(id: number, category: ICategoryDTO): Promise<void> {
    return this.categoryRepository.update(id, category);
  }
}
