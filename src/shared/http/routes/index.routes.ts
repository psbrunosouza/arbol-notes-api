import express from 'express';
import { AuthService } from '../../../modules/services/auth.service';
import categoryRoutes from './allRoutes/category.routes';
import userRoutes from './allRoutes/user.routes';
import workspaceRoutes from './allRoutes/workspace.routes';
import taskRoutes from './allRoutes/task.routes';

const authService = new AuthService();

const routes = express.Router();
routes.post('/auth', authService.authenticate);
routes.use('/users', userRoutes);
routes.use('/workspaces', workspaceRoutes);
routes.use('/categories', categoryRoutes);
routes.use('/tasks', taskRoutes);
export default routes;
