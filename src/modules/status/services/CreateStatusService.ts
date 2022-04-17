import { inject, injectable } from 'tsyringe';
import { StatusRepository } from '@modules/status/infra/typeorm/repositories/StatusRepository';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';

@injectable()
export default class CreateStatusService {
  constructor(
    @inject(StatusRepository)
    private statusRepository: StatusRepository,
  ) {}

  public async execute(profile: IStatusDTO): Promise<IStatusDTO> {
    return this.statusRepository.create(profile);
  }
}
