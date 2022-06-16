import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListCategoryService from '@modules/category/services/ListCategoryService';
import CreateCategoryService from '@modules/category/services/CreateCategoryService';
import ShowCategoryService from '@modules/category/services/ShowCategoryService';
import UpdateCategoryService from '@modules/category/services/UpdateCategoryService';
import DeleteCategoryService from '@modules/category/services/DeleteCategoryService';

class CategoryController {
  async list(request: Request, response: Response): Promise<Response> {
    const listCategoryService = container.resolve(ListCategoryService);
    return response.json(await listCategoryService.execute());
  }

  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const createCategoryService = container.resolve(CreateCategoryService);
    return response.json(await createCategoryService.execute(data));
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showCategoryService = container.resolve(ShowCategoryService);
    return response.json(await showCategoryService.execute(id));
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;
    const updateCategoryService = container.resolve(UpdateCategoryService);
    return response.json(await updateCategoryService.execute(id, data));
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteCategoryService = container.resolve(DeleteCategoryService);
    return response.json(await deleteCategoryService.execute(id));
  }
}

export default new CategoryController();
