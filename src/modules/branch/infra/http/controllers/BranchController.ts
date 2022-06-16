import { container } from 'tsyringe';
import { Request, Response } from 'express';
import CreateBranchService from '@modules/branch/services/CreateBranchService';
import ShowBranchService from '@modules/branch/services/ShowBranchService';
import UpdateBranchService from '@modules/branch/services/UpdateBranchService';
import DeleteBranchService from '@modules/branch/services/DeleteBranchService';
import ListRootBranchesService from '@modules/branch/services/ListRootBranchesService';

class BranchController {
  async listBranchesWithoutChildren(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const listBranchesWithoutChildrenService = container.resolve(
      ListRootBranchesService,
    );

    const loggedUserId = request.userId;

    return response.json(
      await listBranchesWithoutChildrenService.execute(loggedUserId),
    );
  }

  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const id = request.userId;
    const createBranchService = container.resolve(CreateBranchService);
    return response.json(
      await createBranchService.execute({ ...data, user: { id: id } }),
    );
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showBranchService = container.resolve(ShowBranchService);
    return response.json(await showBranchService.execute(id));
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;
    const updateBranchService = container.resolve(UpdateBranchService);
    return response.json(await updateBranchService.execute(id, data));
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteBranchService = container.resolve(DeleteBranchService);
    return response.json(await deleteBranchService.execute(id));
  }
}

export default new BranchController();
