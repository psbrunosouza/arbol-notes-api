import { inject, injectable } from 'tsyringe';
import { IStatusDTO } from '@modules/status/dtos/IStatusDTO';
import { IStatusRepository } from '@modules/status/repositories/IStatusRepository';
import { PrismaStatusRepository } from '@modules/status/infra/prisma/repositories/PrismaStatusRepository';

@injectable()
export default class CreateStatusService {
  constructor(
    @inject(PrismaStatusRepository)
    private statusRepository: IStatusRepository,
  ) {}

  public async execute(profile: IStatusDTO): Promise<IStatusDTO | null> {
    return this.statusRepository.create(profile);
  }
}
