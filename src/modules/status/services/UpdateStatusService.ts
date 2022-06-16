import { inject, injectable } from 'tsyringe';
import { StatusRepository } from '@modules/status/infra/typeorm/repositories/StatusRepository';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';
import { PrismaStatusRepository } from '@modules/status/infra/prisma/repositories/PrismaStatusRepository';
import { IStatusRepository } from '@modules/status/repositories/IStatusRepository';

@injectable()
export default class UpdateStatusService {
  constructor(
    @inject(PrismaStatusRepository)
    private statusRepository: IStatusRepository,
  ) {}

  public async execute(id: string, status: IStatusDTO): Promise<void> {
    return this.statusRepository.update(id, status);
  }
}
