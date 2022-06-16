import { inject, injectable } from 'tsyringe';
import { IProfileRepository } from '@modules/profile/repositories/IProfileRepository';
import { PrismaProfileRepository } from '@modules/profile/infra/prisma/repositories/PrismaProfileRepository';

@injectable()
export default class DeleteProfileService {
  constructor(
    @inject(PrismaProfileRepository)
    private profileRepository: IProfileRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    return this.profileRepository.delete(id);
  }
}
