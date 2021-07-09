import express from "express";
import { CategoryController } from "../controllers/category.controller";
import {authMiddleware} from '../middlewares/auth.middleware';

const apiRouter = express.Router();
const categoryController = new CategoryController();

apiRouter.use(authMiddleware);
apiRouter.get('/list', categoryController.index);
apiRouter.post('/create', categoryController.store);
apiRouter.put('/edit/:id', categoryController.edit);
apiRouter.delete('/delete/:id', categoryController.delete);
apiRouter.post('/restore/:id', categoryController.restore);

export default apiRouter;
