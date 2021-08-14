import express from "express";
import { CategoryController } from "../../../../modules/controllers/category.controller";
import { ensureAuthenticate } from "../../../authenticate/auth";

const apiRouter = express.Router();
const categoryController = new CategoryController();

apiRouter.use(ensureAuthenticate);
apiRouter.get("/list", categoryController.index);
apiRouter.post("/create", categoryController.store);
apiRouter.put("/edit/:id", categoryController.edit);
apiRouter.delete("/delete/:id", categoryController.delete);
apiRouter.post("/restore/:id", categoryController.restore);

export default apiRouter;
