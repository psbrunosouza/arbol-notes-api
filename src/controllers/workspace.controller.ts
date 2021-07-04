import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { WorkspaceRepository } from "../repositories/workspace.repository";
import { UserRepository } from '../repositories/user.repository';
export class WorkspaceController {
  constructor() {}

  async index(request: Request, response: Response) {
    const workspaceRepository: WorkspaceRepository = getCustomRepository(WorkspaceRepository);
    const [workspaces, count] = await workspaceRepository.findAndCount({
      withDeleted: false,
    });

    return response.status(200).json({
      response: {
        data: { workspaces, count },
        errors: [],
        status: 201,
        success: true,
      },
    });
  }

  async store(request: Request, response: Response) {
    const workspace = request.body;
    const workspaceRepository: WorkspaceRepository = getCustomRepository(WorkspaceRepository);
    const userRepository: UserRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({where: {id: workspace.userId}})

    if(!user){
      return response.status(404).json({
        response: {
          data: {},
          errors: ["user does not exists"],
          status: 404,
          success: false,
        },
      });
    }

    if(!workspace.name){
      return response.status(422).json({
        response: {
          data: {},
          errors: ["entity 'name' cannot be empty"],
          status: 422,
          success: false,
        },
      });
    }

    await workspaceRepository.save(workspace);

    return response.status(201).json({
      response: {
        data: {workspace},
        errors: [],
        status: 201,
        success: true,
      },
    });
  }

  async edit(request: Request, response: Response) {
    const {id} = request.params;
    const workspace = request.body;
    const workspaceRepository: WorkspaceRepository = getCustomRepository(WorkspaceRepository);
    
    const hasWorkspace = await workspaceRepository.findOne(id)

    if(!hasWorkspace){
      return response.status(404).json({
        response: {
          data: {},
          errors: ["workspace was not found"],
          status: 404,
          success: false,
        },
      });
    }

    await workspaceRepository.save({...hasWorkspace, ...workspace});

    return response.status(200).json({
      response: {
        data: {workspace: {...hasWorkspace, ...workspace}},
        errors: [],
        status: 200,
        success: true,
      },
    });

  }

  async delete(request: Request, response: Response) {}

  async restore(request: Request, response: Response) {}
}
