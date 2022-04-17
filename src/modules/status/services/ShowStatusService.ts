import { inject, injectable } from 'tsyringe';
import { StatusRepository } from '@modules/status/infra/typeorm/repositories/StatusRepository';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';

@injectable()
export default class ShowStatusService {
  constructor(
    @inject(StatusRepository)
    private statusRepository: StatusRepository,
  ) {}

  public async execute(id: number): Promise<IStatusDTO | undefined> {
    return this.statusRepository.find(id);
  }
}
