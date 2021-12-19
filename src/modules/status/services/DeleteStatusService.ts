import { inject, injectable } from 'tsyringe';
import { StatusRepository } from '@modules/status/infra/typeorm/repositories/StatusRepository';

@injectable()
export default class DeleteStatusService {
  constructor(
    @inject(StatusRepository)
    private statusRepository: StatusRepository,
  ) {}

  public async execute(id: number): Promise<void> {
    return this.statusRepository.delete(id);
  }
}
