import { inject, injectable } from 'tsyringe';
import { ProfileRepository } from '@modules/profile/infra/typeorm/repositories/ProfileRepository';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';

@injectable()
export default class CreateProfileService {
  constructor(
    @inject(ProfileRepository)
    private profileRepository: ProfileRepository,
  ) {}

  public async execute(profile: IProfileDTO): Promise<IProfileDTO> {
    return this.profileRepository.create(profile);
  }
}
