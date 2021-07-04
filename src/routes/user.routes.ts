import express from "express";
import { UserController } from "../controllers/user.controller";

const apiRouter = express.Router();
const userController = new UserController();

apiRouter.get("/list", userController.index);
apiRouter.post("/create",userController.store);
apiRouter.delete("/delete/:id",userController.delete);
apiRouter.put("/edit/:id", userController.edit);
apiRouter.get("/restore/:id", userController.restore);

export default apiRouter;

