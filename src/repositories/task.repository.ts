import { Repository, EntityRepository } from "typeorm";
import { TaskModel } from "../models/task.model";

@EntityRepository(TaskModel)
export class TaskRepository extends Repository<TaskModel> {}
