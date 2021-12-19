import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListCategoryService from '@modules/category/services/ListCategoryService';
import CreateBranchService from '@modules/branch/services/CreateBranchService';
import ShowBranchService from '@modules/branch/services/ShowBranchService';
import UpdateBranchService from '@modules/branch/services/UpdateBranchService';
import DeleteBranchService from '@modules/branch/services/DeleteBranchService';

class BranchController {
  async list(request: Request, response: Response): Promise<Response> {
    const listCategoryService = container.resolve(ListCategoryService);
    return response.json(await listCategoryService.execute());
  }

  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const createBranchService = container.resolve(CreateBranchService);
    return response.json(await createBranchService.execute(data));
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showBranchService = container.resolve(ShowBranchService);
    return response.json(await showBranchService.execute(+id));
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;
    const updateBranchService = container.resolve(UpdateBranchService);
    return response.json(await updateBranchService.execute(+id, data));
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteBranchService = container.resolve(DeleteBranchService);
    return response.json(await deleteBranchService.execute(+id));
  }
}

export default new BranchController();
