import express from "express";
import {WorkspaceController} from '../controllers/workspace.controller';
import {authMiddleware} from '../middlewares/auth.middleware';

const apiRouter = express.Router();
const workspaceController = new WorkspaceController();

apiRouter.use(authMiddleware);
apiRouter.get('/list', workspaceController.index);
apiRouter.post('/store', workspaceController.store);
apiRouter.put('/edit/:id', workspaceController.edit);
apiRouter.delete('/delete/:id', workspaceController.delete);
apiRouter.post('/restore/:id', workspaceController.restore);




export default apiRouter;