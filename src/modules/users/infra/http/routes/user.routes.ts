import Router from 'express';
import { celebrate, Segments } from 'celebrate';
import { ensureAuthenticatedMiddleware } from '@shared/middlewares/ensure-authenticated.middleware';
import UserController from '@modules/users/infra/http/controllers/UserController';
import { userSchema } from '@modules/users/schemas/user.schema';

const UserRoutes = Router();

UserRoutes.post('/auth', UserController.auth);

UserRoutes.post('/', UserController.create, [
  celebrate({ [Segments.BODY]: userSchema }),
]);

UserRoutes.put('/:id', ensureAuthenticatedMiddleware, UserController.update, [
  celebrate({ [Segments.BODY]: userSchema }),
]);
UserRoutes.get('/', ensureAuthenticatedMiddleware, UserController.list);

UserRoutes.get('/:id', ensureAuthenticatedMiddleware, UserController.show);

UserRoutes.delete('/:id', ensureAuthenticatedMiddleware, UserController.delete);

export { UserRoutes };
