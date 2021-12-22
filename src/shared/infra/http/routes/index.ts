import { Router } from 'express';
import { ApiConfigurations } from '@config/api';
import { ImagesRoutes } from '@modules/image/infra/http/routes/images.routes';
import { ProfilesRoutes } from '@modules/profile/infra/http/routes/profiles.routes';
import { UserRoutes } from '@modules/users/infra/http/routes/user.routes';
import { StatusRoutes } from '@modules/status/infra/http/routes/status.routes';
import { CategoryRoutes } from '@modules/category/infra/http/routes/category.routes';
import { BranchRoutes } from '@modules/branch/infra/http/routes/branch.routes';

const routes = Router();

const apiConfigurations = new ApiConfigurations();

routes.use(`/${apiConfigurations.baseUrl}/users`, UserRoutes);
routes.use(`/${apiConfigurations.baseUrl}/images`, ImagesRoutes);
routes.use(`/${apiConfigurations.baseUrl}/profiles`, ProfilesRoutes);
routes.use(`/${apiConfigurations.baseUrl}/statuses`, StatusRoutes);
routes.use(`/${apiConfigurations.baseUrl}/categories`, CategoryRoutes);
routes.use(`/${apiConfigurations.baseUrl}/branches`, BranchRoutes);

export default routes;
