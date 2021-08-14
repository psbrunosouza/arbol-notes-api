import { UserController } from '@modules/controllers/user.controller';
import { ensureAuthenticate } from '@shared/authenticate/auth';
import express from 'express';

const apiRouter = express.Router();
const userController = new UserController();

apiRouter.post('/create', userController.store);
apiRouter.use(ensureAuthenticate);
apiRouter.get('/list', userController.index);
apiRouter.delete('/delete/:id', userController.delete);
apiRouter.put('/edit/:id', userController.edit);
apiRouter.get('/restore/:id', userController.restore);

export default apiRouter;
