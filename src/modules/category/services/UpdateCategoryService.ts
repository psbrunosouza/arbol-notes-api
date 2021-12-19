import { inject, injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { CategoryRepository } from '@modules/category/infra/typeorm/repositories/CategoryRepository';

@injectable()
export default class UpdateCategoryService {
  constructor(
    @inject(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  public async execute(id: number, profile: IProfileDTO): Promise<void> {
    return this.categoryRepository.update(id, profile);
  }
}
