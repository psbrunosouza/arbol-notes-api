import { inject, injectable } from 'tsyringe';
import { CategoryRepository } from '@modules/category/infra/typeorm/repositories/CategoryRepository';
import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';

@injectable()
export default class ListCategoryService {
  constructor(
    @inject(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  public async execute(): Promise<ICategoryDTO[]> {
    return this.categoryRepository.list();
  }
}
