import Router from 'express';
import { celebrate, Segments } from 'celebrate';
import ProfileController from '@modules/profile/infra/http/controllers/ProfileController';
import { profileSchema } from '@modules/profile/schemas/profile.schema';

const ProfilesRoutes = Router();

ProfilesRoutes.post('/', ProfileController.create, [
  celebrate({ [Segments.BODY]: profileSchema }),
]);
ProfilesRoutes.put('/:id', ProfileController.update, [
  celebrate({ [Segments.BODY]: profileSchema }),
]);
ProfilesRoutes.get('/', ProfileController.list);
ProfilesRoutes.get('/:id', ProfileController.show);
ProfilesRoutes.delete('/:id', ProfileController.delete);

export { ProfilesRoutes };
