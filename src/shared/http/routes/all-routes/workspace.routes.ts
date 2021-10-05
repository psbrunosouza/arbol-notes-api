import { WorkspaceController } from '@modules/workspace/controllers/workspace.controller';
import { ensureAuthenticate } from '@shared/authenticate/auth';
import express from 'express';

const apiRouter = express.Router();
const workspaceController = new WorkspaceController();

apiRouter.use(ensureAuthenticate);
apiRouter.get('/list', workspaceController.index);
apiRouter.post('/create', workspaceController.store);
apiRouter.put('/edit/:id', workspaceController.edit);
apiRouter.delete('/delete/:id', workspaceController.delete);
apiRouter.post('/restore/:id', workspaceController.restore);

export default apiRouter;
