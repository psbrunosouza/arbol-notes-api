import { inject, injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { StatusRepository } from '@modules/status/infra/typeorm/repositories/StatusRepository';

@injectable()
export default class ListStatusService {
  constructor(
    @inject(StatusRepository)
    private statusRepository: StatusRepository,
  ) {}

  public async execute(): Promise<IProfileDTO[]> {
    return this.statusRepository.list();
  }
}
