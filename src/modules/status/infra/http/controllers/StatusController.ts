import { container } from 'tsyringe';
import { Request, Response } from 'express';
import ListStatusService from '@modules/status/services/ListStatusService';
import CreateStatusService from '@modules/status/services/CreateStatusService';
import ShowStatusService from '@modules/status/services/ShowStatusService';
import UpdateStatusService from '@modules/status/services/UpdateStatusService';
import DeleteStatusService from '@modules/status/services/DeleteStatusService';

class StatusController {
  async list(request: Request, response: Response): Promise<Response> {
    const listStatusService = container.resolve(ListStatusService);
    return response.json(await listStatusService.execute());
  }

  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const createStatusService = container.resolve(CreateStatusService);
    return response.json(await createStatusService.execute(data));
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showStatusService = container.resolve(ShowStatusService);
    return response.json(await showStatusService.execute(+id));
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;
    const updateStatusService = container.resolve(UpdateStatusService);
    return response.json(await updateStatusService.execute(+id, data));
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteStatusService = container.resolve(DeleteStatusService);
    return response.json(await deleteStatusService.execute(+id));
  }
}

export default new StatusController();
