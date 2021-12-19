import { inject, injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { CategoryRepository } from '@modules/category/infra/typeorm/repositories/CategoryRepository';

@injectable()
export default class ListCategoryService {
  constructor(
    @inject(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  public async execute(): Promise<IProfileDTO[]> {
    return this.categoryRepository.list();
  }
}
