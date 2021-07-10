import express from 'express';
import {AuthService} from '../services/auth.service';
import categoryRoutes from './allRoutes/category.routes';
import userRoutes from './allRoutes/user.routes';
import workspaceRoutes from './allRoutes/workspace.routes';
import taskRoutes from './allRoutes/task.routes';

const authService = new AuthService();

const apiRouter = express.Router();
apiRouter.post('/auth', authService.authenticate)
apiRouter.use('/users', userRoutes);
apiRouter.use('/workspaces', workspaceRoutes);
apiRouter.use('/categories', categoryRoutes);
apiRouter.use("/tasks", taskRoutes)
export default apiRouter;