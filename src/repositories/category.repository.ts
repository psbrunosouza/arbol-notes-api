import { EntityRepository, Repository } from "typeorm";
import { CategoryModel } from "../models/category.model";

@EntityRepository(CategoryModel)
export class CategoryRepository extends Repository<CategoryModel> {}
