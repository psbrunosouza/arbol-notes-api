import Router from 'express';
import { celebrate, Segments } from 'celebrate';
import StatusController from '@modules/status/infra/http/controllers/StatusController';
import { statusSchema } from '@modules/status/schemas/status.schema';
import { ensureAuthenticatedMiddleware } from '@shared/middlewares/ensure-authenticated.middleware';

const StatusRoutes = Router();

StatusRoutes.post('/', ensureAuthenticatedMiddleware, StatusController.create, [
  celebrate({ [Segments.BODY]: statusSchema }),
]);
StatusRoutes.put(
  '/:id',
  ensureAuthenticatedMiddleware,
  StatusController.update,
  [celebrate({ [Segments.BODY]: statusSchema })],
);
StatusRoutes.get('/', ensureAuthenticatedMiddleware, StatusController.list);
StatusRoutes.get('/:id', ensureAuthenticatedMiddleware, StatusController.show);
StatusRoutes.delete(
  '/:id',
  ensureAuthenticatedMiddleware,
  StatusController.delete,
);

export { StatusRoutes };
