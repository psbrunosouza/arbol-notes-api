import { inject, injectable } from 'tsyringe';
import { IStatusRepository } from '@modules/status/repositories/IStatusRepository';
import { PrismaStatusRepository } from '@modules/status/infra/prisma/repositories/PrismaStatusRepository';

@injectable()
export default class DeleteStatusService {
  constructor(
    @inject(PrismaStatusRepository)
    private statusRepository: IStatusRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    return this.statusRepository.delete(id);
  }
}
