import express from 'express';
import {TaskController} from '../../controllers/task.controller';
import {authMiddleware} from '../../middlewares/auth.middleware';

const apiRouter = express.Router();
const taskController = new TaskController();

apiRouter.use(authMiddleware);
apiRouter.post("/create", taskController.store);
apiRouter.get("/list", taskController.index);
apiRouter.delete("/delete/:id", taskController.delete);
apiRouter.put("/edit/:id", taskController.edit);
apiRouter.get("/restore/:id", taskController.restore);

export default apiRouter;