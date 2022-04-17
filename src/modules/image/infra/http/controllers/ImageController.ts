import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListImageService from '@modules/image/services/ListImageService';
import CreateImageService from '@modules/image/services/CreateImageService';
import ShowImageService from '@modules/image/services/ShowImageService';
import UpdateImageService from '@modules/image/services/UpdateImageService';
import DeleteImageService from '@modules/image/services/DeleteImageService';

class ImageController {
  async list(request: Request, response: Response): Promise<Response> {
    const listImageService = container.resolve(ListImageService);
    return response.json(await listImageService.execute());
  }

  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const createImageService = container.resolve(CreateImageService);
    return response.json(await createImageService.execute(data));
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showImageService = container.resolve(ShowImageService);
    return response.json(await showImageService.execute(+id));
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;
    const updateImageService = container.resolve(UpdateImageService);
    return response.json(await updateImageService.execute(+id, data));
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteImageService = container.resolve(DeleteImageService);
    return response.json(await deleteImageService.execute(+id));
  }
}

export default new ImageController();
