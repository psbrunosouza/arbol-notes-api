import { inject, injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { IProfileRepository } from '@modules/profile/repositories/IProfileRepository';
import { PrismaProfileRepository } from '@modules/profile/infra/prisma/repositories/PrismaProfileRepository';

@injectable()
export default class CreateProfileService {
  constructor(
    @inject(PrismaProfileRepository)
    private profileRepository: IProfileRepository,
  ) {}

  public async execute(profile: IProfileDTO): Promise<IProfileDTO> {
    return this.profileRepository.create(profile);
  }
}
