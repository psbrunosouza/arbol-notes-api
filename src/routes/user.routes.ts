import express from "express";
import { UserController } from "../controllers/user.controller";
import {authMiddleware} from '../middlewares/auth.middleware';

const apiRouter = express.Router();
const userController = new UserController();

apiRouter.get("/list", authMiddleware, userController.index);
apiRouter.post("/create", userController.store);
apiRouter.delete("/delete/:id", authMiddleware, userController.delete);
apiRouter.put("/edit/:id", authMiddleware, userController.edit);
apiRouter.get("/restore/:id", authMiddleware, userController.restore);

export default apiRouter;

