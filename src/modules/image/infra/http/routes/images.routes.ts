import Router from 'express';
import ImageController from '@modules/image/infra/http/controllers/ImageController';
import { imageSchema } from '@modules/image/schemas/image.schema';
import { celebrate, Segments } from 'celebrate';

const ImagesRoutes = Router();

ImagesRoutes.post('/', ImageController.create, [
  celebrate({ [Segments.BODY]: imageSchema }),
]);
ImagesRoutes.put('/:id', ImageController.update, [
  celebrate({ [Segments.BODY]: imageSchema }),
]);
ImagesRoutes.get('/', ImageController.list);
ImagesRoutes.get('/:id', ImageController.show);
ImagesRoutes.delete('/:id', ImageController.delete);

export { ImagesRoutes };
