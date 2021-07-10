import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repositories/category.repository";
import { TaskRepository } from "../repositories/task.repository";

export class TaskController {
  async index(request: Request, response: Response) {
    const taskRepository: TaskRepository = getCustomRepository(TaskRepository);

    try {
      const [tasks, count] = await taskRepository.findAndCount({
        withDeleted: false,
      });

      return response.status(200).json({
        response: {
          data: { tasks, count },
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
    const task = request.body;
    const taskRepository: TaskRepository = getCustomRepository(TaskRepository);
    const categoryRepository: CategoryRepository =
      getCustomRepository(CategoryRepository);

    try {
      const hasCategory = await categoryRepository.findOne(task.categoryId);

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

      await taskRepository.save(task);

      return response.status(201).json({
        response: {
          data: { task },
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
    const task = request.body;
    const taskRepository: TaskRepository = getCustomRepository(TaskRepository);

    try {
      const hasTask = await taskRepository.findOne(id);

      if (!hasTask) {
        return response.status(404).json({
          response: {
            data: {},
            errors: ["task does not exists"],
            status: 404,
            success: false,
          },
        });
      }

      await taskRepository.save({ ...hasTask, ...task });

      return response.status(200).json({
        response: {
          data: { task },
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
    const taskRepository: TaskRepository = getCustomRepository(TaskRepository);

    try {

      const hasTask = await taskRepository.findOne(id);
      if(!hasTask){
        return response.status(422).json({
          response: {
            data: {},
            errors: ["is not possible delete task"],
            status: 422,
            success: false,
          },
        });
      }

      await taskRepository.softDelete(id);

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
    const {id} = request.params;
    const taskRepository: TaskRepository = getCustomRepository(TaskRepository);


    try{

      const hasTask = await taskRepository.findOne(id);

      if(hasTask){
        return response.status(422).json({
          response: {
            data: {},
            errors: ["is not possible restore task"],
            status: 422,
            success: false,
          },
        });
      }

      await taskRepository.restore(id);

      return response.status(200).json({
        response: {
          data: {},
          errors: [],
          status: 200,
          success: true,
        },
      });
    }catch(err){
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
