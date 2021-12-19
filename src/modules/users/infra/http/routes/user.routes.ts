import Router from 'express';
import { celebrate, Segments } from 'celebrate';
import UserController from '@modules/users/infra/http/controllers/UserController';
import { userSchema } from '@modules/users/schemas/user.schema';

const UserRoutes = Router();

UserRoutes.post('/', UserController.create, [
  celebrate({ [Segments.BODY]: userSchema }),
]);
UserRoutes.put('/:id', UserController.update, [
  celebrate({ [Segments.BODY]: userSchema }),
]);
UserRoutes.get('/', UserController.list);
UserRoutes.get('/:id', UserController.show);
UserRoutes.delete('/:id', UserController.delete);

export { UserRoutes };
