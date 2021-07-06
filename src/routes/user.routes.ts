import express from "express";
import { UserController } from "../controllers/user.controller";
import {authMiddleware} from '../middlewares/auth.middleware';

const apiRouter = express.Router();
const userController = new UserController();

apiRouter.post("/create", userController.store);
apiRouter.use(authMiddleware);
apiRouter.get("/list", userController.index);
apiRouter.delete("/delete/:id", userController.delete);
apiRouter.put("/edit/:id", userController.edit);
apiRouter.get("/restore/:id", userController.restore);

export default apiRouter;

