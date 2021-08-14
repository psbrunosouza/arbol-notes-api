import { Repository, EntityRepository } from 'typeorm';
import { TaskModel } from '../entities/task.model';

@EntityRepository(TaskModel)
export class TaskRepository extends Repository<TaskModel> {}
