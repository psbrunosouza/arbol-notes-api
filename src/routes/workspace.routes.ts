import express from "express";
import {authMiddleware} from '../middlewares/auth.middleware';
import {WorkspaceController} from '../controllers/workspace.controller';

const apiRouter = express.Router();
const workspaceController = new WorkspaceController();

apiRouter.get('/list', workspaceController.index);
apiRouter.post('/create', workspaceController.store);
apiRouter.put('/edit/:id', workspaceController.edit);


export default apiRouter;