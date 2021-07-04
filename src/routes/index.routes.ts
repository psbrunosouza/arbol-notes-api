import express from 'express';
import {AuthService} from '../services/auth.service';
import userRoutes from './user.routes';

const authService = new AuthService();

const apiRouter = express.Router();
apiRouter.post('/auth', authService.authenticate)
apiRouter.use('/users', userRoutes);

export default apiRouter;