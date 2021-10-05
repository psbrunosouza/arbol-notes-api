import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { WorkspaceRepository } from "../typeorm/repositories/workspace.repository";
import { UserRepository } from "../../user/typeorm/repositories/user.repository";
export class WorkspaceController {
  constructor() { }

  async index(request: Request, response: Response) {
    const workspaceRepository: WorkspaceRepository =
      getCustomRepository(WorkspaceRepository);

    try {
      const [workspaces, count] = await workspaceRepository.findAndCount({
        withDeleted: false,
      });

      return response.status(200).json({
        response: {
          data: { workspaces, count },
          errors: [],
          status: 200,
          success: true,
        },
      });
    } catch (err) {
      return response.status(500).json({
        response: {
          data: {},
          errors: ["internal server error", err.message],
          status: 500,
          success: false,
        },
      });
    }
  }

  async store(request: Request, response: Response) {
    const workspace = request.body;
    const workspaceRepository: WorkspaceRepository =
      getCustomRepository(WorkspaceRepository);
    const userRepository: UserRepository = getCustomRepository(UserRepository);

    try {
      const user = await userRepository.findOne({
        where: { id: workspace.userId },
      });

      if (!user) {
        return response.status(404).json({
          response: {
            data: {},
            errors: ["user does not exists"],
            status: 404,
            success: false,
          },
        });
      }

      if (!workspace.name) {
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
          data: { workspace },
          errors: [],
          status: 201,
          success: true,
        },
      });
    } catch (err) {
      return response.status(500).json({
        response: {
          data: {},
          errors: ["internal server error", err.message],
          status: 500,
          success: false,
        },
      });
    }
  }

  async edit(request: Request, response: Response) {
    const { id } = request.params;
    const workspace = request.body;
    const workspaceRepository: WorkspaceRepository =
      getCustomRepository(WorkspaceRepository);

    try {
      const hasWorkspace = await workspaceRepository.findOne(id);

      if (!hasWorkspace) {
        return response.status(404).json({
          response: {
            data: {},
            errors: ["workspace was not found"],
            status: 404,
            success: false,
          },
        });
      }

      await workspaceRepository.save({ ...hasWorkspace, ...workspace });

      return response.status(200).json({
        response: {
          data: { workspace: { ...hasWorkspace, ...workspace } },
          errors: [],
          status: 200,
          success: true,
        },
      });
    } catch (err) {
      return response.status(500).json({
        response: {
          data: {},
          errors: ["internal server error", err.message],
          status: 500,
          success: false,
        },
      });
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const workspaceRepository: WorkspaceRepository =
      getCustomRepository(WorkspaceRepository);

    try {
      const hasWorkspace = await workspaceRepository.findOne(id);
      if (!hasWorkspace) {
        return response.status(422).json({
          response: {
            data: {},
            errors: ["is not possible delete workspace"],
            status: 422,
            success: false,
          },
        });
      }

      await workspaceRepository.softDelete(id);

      return response.status(200).json({
        response: {
          data: {},
          errors: [],
          status: 200,
          success: true,
        },
      });
    } catch (err) {
      return response.status(500).json({
        response: {
          data: {},
          errors: ["intertal server error", err.message],
          status: 500,
          success: false,
        },
      });
    }
  }

  async restore(request: Request, response: Response) {
    const { id } = request.params;
    const workspaceRepository: WorkspaceRepository =
      getCustomRepository(WorkspaceRepository);

    try {
      const hasWorkspace = await workspaceRepository.findOne(id);

      if (hasWorkspace) {
        return response.status(422).json({
          response: {
            data: {},
            errors: ["is not possible restore workspace"],
            status: 422,
            success: false,
          },
        });
      }

      await workspaceRepository.restore(id);

      return response.status(200).json({
        response: {
          data: {},
          errors: [],
          status: 200,
          success: true,
        },
      });
    } catch (err) {
      return response.status(500).json({
        response: {
          data: {},
          errors: ["intertal server error", err.message],
          status: 500,
          success: false,
        },
      });
    }
  }
}
