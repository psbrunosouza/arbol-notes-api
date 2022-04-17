import { inject, injectable } from 'tsyringe';
import { CategoryRepository } from '@modules/category/infra/typeorm/repositories/CategoryRepository';
import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';

@injectable()
export default class ShowCategoryService {
  constructor(
    @inject(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  public async execute(id: number): Promise<ICategoryDTO | undefined> {
    return this.categoryRepository.find(id);
  }
}
