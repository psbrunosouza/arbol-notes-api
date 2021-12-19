import { inject, injectable } from 'tsyringe';
import { CategoryRepository } from '@modules/category/infra/typeorm/repositories/CategoryRepository';
import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';

@injectable()
export default class CreateCategoryService {
  constructor(
    @inject(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  public async execute(category: ICategoryDTO): Promise<ICategoryDTO> {
    return this.categoryRepository.create(category);
  }
}
