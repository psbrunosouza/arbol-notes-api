import { inject, injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { StatusRepository } from '@modules/status/infra/typeorm/repositories/StatusRepository';

@injectable()
export default class UpdateStatusService {
  constructor(
    @inject(StatusRepository)
    private statusRepository: StatusRepository,
  ) {}

  public async execute(id: number, profile: IProfileDTO): Promise<void> {
    return this.statusRepository.update(id, profile);
  }
}
