import { inject, injectable } from 'tsyringe';
import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';
import { PrismaCategoryRepository } from '@modules/category/infra/prisma/repositories/PrismaCategoryRepository';
import { ICategoryRepository } from '@modules/category/repositories/ICategoryRepository';

@injectable()
export default class UpdateCategoryService {
  constructor(
    @inject(PrismaCategoryRepository)
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute(
    id: string,
    category: ICategoryDTO,
  ): Promise<ICategoryDTO> {
    return this.categoryRepository.update(id, category);
  }
}
