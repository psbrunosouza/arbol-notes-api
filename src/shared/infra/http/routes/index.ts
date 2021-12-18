import { Router } from 'express';
import { ImagesRoutes } from '@modules/image/infra/http/routes/images.routes';
import { api } from '@config/api';

const routes = Router();

routes.use(`/${api.baseUrl}/images`, ImagesRoutes);

export default routes;
