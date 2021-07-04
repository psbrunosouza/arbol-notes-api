import express from "express";
import {authMiddleware} from '../middlewares/auth.middleware';
import {WorkspaceController} from '../controllers/workspace.controller';

const apiRouter = express.Router();
const workspaceController = new WorkspaceController();

export default apiRouter.get('/list', workspaceController.index)