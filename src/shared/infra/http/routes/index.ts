import { Router } from 'express';
import { api } from '@config/api';
import { ImagesRoutes } from '@modules/image/infra/http/routes/images.routes';
import { ProfilesRoutes } from '@modules/profile/infra/http/routes/profiles.routes';
import { UserRoutes } from '@modules/users/infra/http/routes/user.routes';
import { StatusRoutes } from '@modules/status/infra/http/routes/status.routes';
import { CategoryRoutes } from '@modules/category/infra/http/routes/category.routes';
import { BranchRoutes } from '@modules/branch/infra/http/routes/branch.routes';

const routes = Router();

routes.use(`/${api.baseUrl}/users`, UserRoutes);
routes.use(`/${api.baseUrl}/images`, ImagesRoutes);
routes.use(`/${api.baseUrl}/profiles`, ProfilesRoutes);
routes.use(`/${api.baseUrl}/statuses`, StatusRoutes);
routes.use(`/${api.baseUrl}/categories`, CategoryRoutes);
routes.use(`/${api.baseUrl}/branches`, BranchRoutes);

export default routes;
