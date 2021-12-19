import { inject, injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { StatusRepository } from '@modules/status/infra/typeorm/repositories/StatusRepository';

@injectable()
export default class ShowStatusService {
  constructor(
    @inject(StatusRepository)
    private statusRepository: StatusRepository,
  ) {}

  public async execute(id: number): Promise<IProfileDTO | undefined> {
    return this.statusRepository.find(id);
  }
}
