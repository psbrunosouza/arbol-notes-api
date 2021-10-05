import { EntityRepository, Repository } from 'typeorm';
import { WorkspaceModel } from '../entities/workspace.model';

@EntityRepository(WorkspaceModel)
export class WorkspaceRepository extends Repository<WorkspaceModel> { }
