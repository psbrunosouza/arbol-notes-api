import { inject, injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { StatusRepository } from '@modules/status/infra/typeorm/repositories/StatusRepository';

@injectable()
export default class CreateStatusService {
  constructor(
    @inject(StatusRepository)
    private statusRepository: StatusRepository,
  ) {}

  public async execute(profile: IProfileDTO): Promise<IProfileDTO> {
    return this.statusRepository.create(profile);
  }
}
