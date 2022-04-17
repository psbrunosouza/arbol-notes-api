import { inject, injectable } from 'tsyringe';
import { CategoryRepository } from '@modules/category/infra/typeorm/repositories/CategoryRepository';

@injectable()
export default class DeleteCategoryService {
  constructor(
    @inject(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  public async execute(id: number): Promise<void> {
    return this.categoryRepository.delete(id);
  }
}
