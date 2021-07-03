import express from 'express';
import userRoutes from './user.routes';

const apiRouter = express.Router();
apiRouter.use('/users', userRoutes);

export default apiRouter;