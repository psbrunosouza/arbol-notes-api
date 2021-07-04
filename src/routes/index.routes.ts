import express from 'express';
import {AuthService} from '../services/auth.service';
import userRoutes from './user.routes';
import workspaceRoutes from './workspace.routes';
import {authMiddleware} from '../middlewares/auth.middleware';

const authService = new AuthService();

const apiRouter = express.Router();
apiRouter.post('/auth', authService.authenticate)
apiRouter.use('/users', userRoutes);
apiRouter.use('/workspaces', authMiddleware, workspaceRoutes);

export default apiRouter;