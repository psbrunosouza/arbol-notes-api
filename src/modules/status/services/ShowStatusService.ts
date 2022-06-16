import { inject, injectable } from 'tsyringe';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';
import { IStatusRepository } from '@modules/status/repositories/IStatusRepository';
import { PrismaStatusRepository } from '@modules/status/infra/prisma/repositories/PrismaStatusRepository';

@injectable()
export default class ShowStatusService {
  constructor(
    @inject(PrismaStatusRepository)
    private statusRepository: IStatusRepository,
  ) {}

  public async execute(id: string): Promise<IStatusDTO | null> {
    return this.statusRepository.find(id);
  }
}
