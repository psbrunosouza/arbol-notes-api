import { UserController } from '@modules/user/controllers/user.controller';
import { ensureAuthenticate } from '@shared/authenticate/auth';
import express from 'express';

const apiRouter = express.Router();
const userController = new UserController();

apiRouter.post('/create', userController.store);
apiRouter.use(ensureAuthenticate);
apiRouter.get('/list', userController.index);
apiRouter.delete('/delete/:id', userController.delete);
apiRouter.put('/edit/:id', userController.edit);

export default apiRouter;
