import { inject, injectable } from 'tsyringe';
import { CategoryRepository } from '@modules/category/infra/typeorm/repositories/CategoryRepository';
import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';
import { PrismaCategoryRepository } from '@modules/category/infra/prisma/repositories/PrismaCategoryRepository';

@injectable()
export default class ListCategoryService {
  constructor(
    @inject(PrismaCategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  public async execute(): Promise<ICategoryDTO[]> {
    return this.categoryRepository.list();
  }
}
