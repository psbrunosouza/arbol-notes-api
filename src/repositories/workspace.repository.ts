import { EntityRepository, Repository } from "typeorm";
import { WorkspaceModel } from "../models/workspace.model";

@EntityRepository(WorkspaceModel)
export class WorkspaceRepository extends Repository<WorkspaceModel> {}
