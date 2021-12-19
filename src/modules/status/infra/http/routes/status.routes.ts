import Router from 'express';
import { celebrate, Segments } from 'celebrate';
import StatusController from '@modules/status/infra/http/controllers/StatusController';
import { statusSchema } from '@modules/status/schemas/status.schema';

const StatusRoutes = Router();

StatusRoutes.post('/', StatusController.create, [
  celebrate({ [Segments.BODY]: statusSchema }),
]);
StatusRoutes.put('/:id', StatusController.update, [
  celebrate({ [Segments.BODY]: statusSchema }),
]);
StatusRoutes.get('/', StatusController.list);
StatusRoutes.get('/:id', StatusController.show);
StatusRoutes.delete('/:id', StatusController.delete);

export { StatusRoutes };
