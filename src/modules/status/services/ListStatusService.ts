import { inject, injectable } from 'tsyringe';
import { StatusRepository } from '@modules/status/infra/typeorm/repositories/StatusRepository';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';

@injectable()
export default class ListStatusService {
  constructor(
    @inject(StatusRepository)
    private statusRepository: StatusRepository,
  ) {}

  public async execute(): Promise<IStatusDTO[]> {
    return this.statusRepository.list();
  }
}
