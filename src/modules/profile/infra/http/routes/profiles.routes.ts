import Router from 'express';
import { celebrate, Segments } from 'celebrate';
import ProfileController from '@modules/profile/infra/http/controllers/ProfileController';
import { profileSchema } from '@modules/profile/schemas/profile.schema';
import { ensureAuthenticatedMiddleware } from '@shared/middlewares/ensure-authenticated.middleware';

const ProfilesRoutes = Router();

ProfilesRoutes.post(
  '/',
  ensureAuthenticatedMiddleware,
  ProfileController.create,
  [celebrate({ [Segments.BODY]: profileSchema })],
);
ProfilesRoutes.put(
  '/:id',
  ensureAuthenticatedMiddleware,
  ProfileController.update,
  [celebrate({ [Segments.BODY]: profileSchema })],
);
ProfilesRoutes.get('/', ensureAuthenticatedMiddleware, ProfileController.list);
ProfilesRoutes.get(
  '/:id',
  ensureAuthenticatedMiddleware,
  ProfileController.show,
);
ProfilesRoutes.delete(
  '/:id',
  ensureAuthenticatedMiddleware,
  ProfileController.delete,
);

export { ProfilesRoutes };
