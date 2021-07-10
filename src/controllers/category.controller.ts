import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repositories/category.repository";
import { UserRepository } from "../repositories/user.repository";
import { WorkspaceRepository } from "../repositories/workspace.repository";

export class CategoryController {
  async index(request: Request, response: Response) {
    const categoryRepository: CategoryRepository =
      getCustomRepository(CategoryRepository);

    try {
      const [categories, count] = await categoryRepository.findAndCount({
        withDeleted: false,
      });

      return response.status(200).json({
        response: {
          data: { categories, count },
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
    const category = request.body;
    const categoryRepository: CategoryRepository =
      getCustomRepository(CategoryRepository);
    const workspaceRepository: WorkspaceRepository =
      getCustomRepository(WorkspaceRepository);

    try {
      const workspace = await workspaceRepository.findOne({
        where: { id: category.workspaceId },
      });

      if (!workspace) {
        return response.status(404).json({
          response: {
            data: {},
            errors: ["workspace does not exists"],
            status: 404,
            success: false,
          },
        });
      }

      if (!category.name) {
        return response.status(422).json({
          response: {
            data: {},
            errors: ["entity 'name' cannot be empty"],
            status: 422,
            success: false,
          },
        });
      }

      await categoryRepository.save(category);

      return response.status(201).json({
        response: {
          data: { category },
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
    const category = request.body;

    const categoryRepository: CategoryRepository =
      getCustomRepository(CategoryRepository);

    try {
      const hasCategory = await categoryRepository.findOne(id);

      if (!hasCategory) {
        return response.status(404).json({
          response: {
            data: {},
            errors: ["category does not exists"],
            status: 404,
            success: false,
          },
        });
      }

      await categoryRepository.save({ ...hasCategory, ...category });

      return response.status(200).json({
        response: {
          data: { ...hasCategory, ...category },
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
    const categoryRepository: CategoryRepository =
      getCustomRepository(CategoryRepository);

    try {
      const hasCategory = await categoryRepository.findOne(id);
      if (!hasCategory) {
        return response.status(422).json({
          response: {
            data: {},
            errors: ["is not possible delete category"],
            status: 422,
            success: false,
          },
        });
      }

      await categoryRepository.softDelete(id);

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
          errors: ["internal server error", err.message],
          status: 500,
          success: false,
        },
      });
    }
  }

  async restore(request: Request, response: Response) {
    const { id } = request.params;
    const categoryRepository: CategoryRepository =
      getCustomRepository(CategoryRepository);

    try {
      const hasCategory = await categoryRepository.findOne(id);
      if (hasCategory) {
        return response.status(422).json({
          response: {
            data: {},
            errors: ["the category cannot be restored because it already exists"],
            status: 422,
            success: false,
          },
        });
      }

      await categoryRepository.restore(id);

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
          errors: ["internal server error", err.message],
          status: 500,
          success: false,
        },
      });
    }
  }
}
