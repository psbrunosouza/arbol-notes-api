import { inject, injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { CategoryRepository } from '@modules/category/infra/typeorm/repositories/CategoryRepository';

@injectable()
export default class ShowCategoryService {
  constructor(
    @inject(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  public async execute(id: number): Promise<IProfileDTO | undefined> {
    return this.categoryRepository.find(id);
  }
}
