import { EntityRepository, Repository } from 'typeorm';
import { CategoryModel } from '../entities/category.model';

@EntityRepository(CategoryModel)
export class CategoryRepository extends Repository<CategoryModel> { }
