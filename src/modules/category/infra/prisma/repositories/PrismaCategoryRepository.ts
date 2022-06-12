import { ICategoryRepository } from '@modules/category/repositories/ICategoryRepository';
import { ICategoryDTO } from '@modules/category/dtos/ICategoryDTO';
import { prisma } from '@shared/infra/prisma';
import { Category } from '@modules/category/infra/prisma/entities/Category';

export class PrismaCategoryRepository implements ICategoryRepository {
  private category = prisma.category;

  create(data: Category): Promise<Category> {
    return this.category.create({
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.category.delete({
      where: { id },
    });
  }

  find(id: string): Promise<Category | undefined | null> {
    return this.category.findFirst({
      where: { id },
    });
  }

  list(): Promise<Category[]> {
    return this.category.findMany();
  }

  async update(id: string, data: Category): Promise<void> {
    await this.category.update({
      where: { id },
      data,
    });
  }
}
