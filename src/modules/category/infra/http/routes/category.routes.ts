import Router from 'express';
import { celebrate, Segments } from 'celebrate';
import CategoryController from '@modules/category/infra/http/controllers/CategoryController';
import { categorySchema } from '@modules/category/schemas/category.schema';

const CategoryRoutes = Router();

CategoryRoutes.post('/', CategoryController.create, [
  celebrate({ [Segments.BODY]: categorySchema }),
]);
CategoryRoutes.put('/:id', CategoryController.update, [
  celebrate({ [Segments.BODY]: categorySchema }),
]);
CategoryRoutes.get('/', CategoryController.list);
CategoryRoutes.get('/:id', CategoryController.show);
CategoryRoutes.delete('/:id', CategoryController.delete);

export { CategoryRoutes };
