import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListProfileService from '@modules/profile/services/ListProfileService';
import CreateProfileService from '@modules/profile/services/CreateProfileService';
import ShowProfileService from '@modules/profile/services/ShowProfileService';
import UpdateProfileService from '@modules/profile/services/UpdateProfileService';
import DeleteProfileService from '@modules/profile/services/DeleteProfileService';

class ProfileController {
  async list(request: Request, response: Response): Promise<Response> {
    const listProfileService = container.resolve(ListProfileService);
    return response.json(await listProfileService.execute());
  }

  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const createProfileService = container.resolve(CreateProfileService);
    return response.json(await createProfileService.execute(data));
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showProfileService = container.resolve(ShowProfileService);
    return response.json(await showProfileService.execute(+id));
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;
    const updateProfileService = container.resolve(UpdateProfileService);
    return response.json(await updateProfileService.execute(+id, data));
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteProfileService = container.resolve(DeleteProfileService);
    return response.json(await deleteProfileService.execute(+id));
  }
}

export default new ProfileController();
