import { inject, injectable } from 'tsyringe';
import { StatusRepository } from '@modules/status/infra/typeorm/repositories/StatusRepository';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';

@injectable()
export default class UpdateStatusService {
  constructor(
    @inject(StatusRepository)
    private statusRepository: StatusRepository,
  ) {}

  public async execute(id: number, status: IStatusDTO): Promise<void> {
    return this.statusRepository.update(id, status);
  }
}
