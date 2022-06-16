import { ICategoryRepository } from '@modules/category/repositories/ICategoryRepository';
import { prisma } from '@shared/infra/prisma';
import { Category } from '@modules/category/infra/prisma/entities/Category';
import { injectable } from 'tsyringe';

@injectable()
export class PrismaCategoryRepository implements ICategoryRepository {
  private category = prisma.category;

  create(data: Category): Promise<Category> {
    const categoryWithData = Object.assign(new Category(), data);

    return this.category.create({
      data: categoryWithData,
    });
  }

  async delete(id: string): Promise<void> {
    await this.category.delete({
      where: { id },
    });
  }

  find(id: string): Promise<Category | null> {
    return this.category.findFirst({
      where: { id },
    });
  }

  list(): Promise<Category[]> {
    return this.category.findMany();
  }

  async update(id: string, data: Category): Promise<Category> {
    const categoryWithData = Object.assign(new Category(), data);

    return this.category.update({
      where: { id },
      data: { ...categoryWithData, id },
    });
  }
}
