import { inject, injectable } from 'tsyringe';
import { PrismaCategoryRepository } from '@modules/category/infra/prisma/repositories/PrismaCategoryRepository';
import { ICategoryRepository } from '@modules/category/repositories/ICategoryRepository';

@injectable()
export default class DeleteCategoryService {
  constructor(
    @inject(PrismaCategoryRepository)
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    return this.categoryRepository.delete(id);
  }
}
