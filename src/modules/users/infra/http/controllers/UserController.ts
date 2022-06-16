import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListUserService from '@modules/users/services/ListUserService';
import CreateUserService from '@modules/users/services/CreateUserService';
import ShowUserService from '@modules/users/services/ShowUserService';
import UpdateUserService from '@modules/users/services/UpdateUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';
import { AuthUserService } from '@modules/users/services/AuthUserService';

class UserController {
  async auth(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const authUserService = container.resolve(AuthUserService);

    return response.json(await authUserService.execute(data));
  }

  async list(request: Request, response: Response): Promise<Response> {
    const listUserService = container.resolve(ListUserService);
    return response.json(await listUserService.execute());
  }

  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const createUserService = container.resolve(CreateUserService);
    return response.json(await createUserService.execute(data));
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showUserService = container.resolve(ShowUserService);
    return response.json(await showUserService.execute(id));
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;
    const updateProfileService = container.resolve(UpdateUserService);
    return response.json(await updateProfileService.execute(id, data));
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteUserService = container.resolve(DeleteUserService);
    return response.json(await deleteUserService.execute(id));
  }
}

export default new UserController();
