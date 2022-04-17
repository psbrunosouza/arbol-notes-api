import Router from 'express';
import ImageController from '@modules/image/infra/http/controllers/ImageController';
import { imageSchema } from '@modules/image/schemas/image.schema';
import { celebrate, Segments } from 'celebrate';
import { ensureAuthenticatedMiddleware } from '@shared/middlewares/ensure-authenticated.middleware';

const ImagesRoutes = Router();

ImagesRoutes.post('/', ensureAuthenticatedMiddleware, ImageController.create, [
  celebrate({ [Segments.BODY]: imageSchema }),
]);
ImagesRoutes.put(
  '/:id',
  ensureAuthenticatedMiddleware,
  ImageController.update,
  [celebrate({ [Segments.BODY]: imageSchema })],
);
ImagesRoutes.get('/', ensureAuthenticatedMiddleware, ImageController.list);
ImagesRoutes.get('/:id', ensureAuthenticatedMiddleware, ImageController.show);
ImagesRoutes.delete(
  '/:id',
  ensureAuthenticatedMiddleware,
  ImageController.delete,
);

export { ImagesRoutes };
