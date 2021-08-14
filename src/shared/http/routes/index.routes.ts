import express from 'express';
import AuthService from '@modules/services/auth.service';
import categoryRoutes from '@shared/http/routes/all-routes/category.routes';
import userRoutes from '@shared/http/routes/all-routes/user.routes';
import workspaceRoutes from '@shared/http/routes/all-routes/workspace.routes';
import taskRoutes from '@shared/http/routes/all-routes/task.routes';

const routes = express.Router();
routes.post('/auth', AuthService.authenticate);
routes.use('/users', userRoutes);
routes.use('/workspaces', workspaceRoutes);
routes.use('/categories', categoryRoutes);
routes.use('/tasks', taskRoutes);
export default routes;
