import express from "express";
import { WorkspaceController } from "../../../../modules/controllers/workspace.controller";
import { ensureAuthenticate } from "../../../authenticate/auth";

const apiRouter = express.Router();
const workspaceController = new WorkspaceController();

apiRouter.use(ensureAuthenticate);
apiRouter.get("/list", workspaceController.index);
apiRouter.post("/create", workspaceController.store);
apiRouter.put("/edit/:id", workspaceController.edit);
apiRouter.delete("/delete/:id", workspaceController.delete);
apiRouter.post("/restore/:id", workspaceController.restore);

export default apiRouter;
