import { Router } from 'express';
import { api } from '@config/api';
import { ImagesRoutes } from '@modules/image/infra/http/routes/images.routes';
import { ProfilesRoutes } from '@modules/profile/infra/http/routes/profiles.routes';

const routes = Router();

routes.use(`/${api.baseUrl}/images`, ImagesRoutes);
routes.use(`/${api.baseUrl}/profiles`, ProfilesRoutes);

export default routes;
