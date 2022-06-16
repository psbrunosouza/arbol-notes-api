import { inject, injectable } from 'tsyringe';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';
import { IStatusRepository } from '@modules/status/repositories/IStatusRepository';
import { PrismaStatusRepository } from '@modules/status/infra/prisma/repositories/PrismaStatusRepository';

@injectable()
export default class ListStatusService {
  constructor(
    @inject(PrismaStatusRepository)
    private statusRepository: IStatusRepository,
  ) {}

  public async execute(): Promise<IStatusDTO[]> {
    return this.statusRepository.list();
  }
}
