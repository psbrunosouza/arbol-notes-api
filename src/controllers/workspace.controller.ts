import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { WorkspaceRepository } from "../repositories/workspace.repository";

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
    const {} = request.body;
  }

  async edit(request: Request, response: Response) {}

  async delete(request: Request, response: Response) {}

  async restore(request: Request, response: Response) {}
}
