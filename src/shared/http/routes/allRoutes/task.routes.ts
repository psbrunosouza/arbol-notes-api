import express from "express";
import { TaskController } from "../../../../modules/controllers/task.controller";
import { ensureAuthenticate } from "../../../authenticate/auth";

const apiRouter = express.Router();
const taskController = new TaskController();

apiRouter.use(ensureAuthenticate);
apiRouter.post("/create", taskController.store);
apiRouter.get("/list", taskController.index);
apiRouter.delete("/delete/:id", taskController.delete);
apiRouter.put("/edit/:id", taskController.edit);
apiRouter.get("/restore/:id", taskController.restore);

export default apiRouter;
