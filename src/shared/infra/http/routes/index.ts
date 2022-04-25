import { Router } from 'express';
import { ImagesRoutes } from '@modules/image/infra/http/routes/images.routes';
import { ProfilesRoutes } from '@modules/profile/infra/http/routes/profiles.routes';
import { UserRoutes } from '@modules/users/infra/http/routes/user.routes';
import { StatusRoutes } from '@modules/status/infra/http/routes/status.routes';
import { CategoryRoutes } from '@modules/category/infra/http/routes/category.routes';
import { BranchRoutes } from '@modules/branch/infra/http/routes/branch.routes';

const routes = Router();

routes.use(`/users`, UserRoutes);
routes.use(`/images`, ImagesRoutes);
routes.use(`/profiles`, ProfilesRoutes);
routes.use(`/statuses`, StatusRoutes);
routes.use(`/categories`, CategoryRoutes);
routes.use(`/branches`, BranchRoutes);

export { routes };
