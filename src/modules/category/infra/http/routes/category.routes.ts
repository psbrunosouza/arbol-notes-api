import Router from 'express';
import { celebrate, Segments } from 'celebrate';
import CategoryController from '@modules/category/infra/http/controllers/CategoryController';
import { categorySchema } from '@modules/category/schemas/category.schema';
import { ensureAuthenticatedMiddleware } from '@shared/middlewares/ensure-authenticated.middleware';

const CategoryRoutes = Router();

CategoryRoutes.post(
  '/',
  ensureAuthenticatedMiddleware,
  CategoryController.create,
  [celebrate({ [Segments.BODY]: categorySchema })],
);
CategoryRoutes.put(
  '/:id',
  ensureAuthenticatedMiddleware,
  CategoryController.update,
  [celebrate({ [Segments.BODY]: categorySchema })],
);
CategoryRoutes.get('/', ensureAuthenticatedMiddleware, CategoryController.list);
CategoryRoutes.get(
  '/:id',
  ensureAuthenticatedMiddleware,
  CategoryController.show,
);
CategoryRoutes.delete(
  '/:id',
  ensureAuthenticatedMiddleware,
  CategoryController.delete,
);

export { CategoryRoutes };
