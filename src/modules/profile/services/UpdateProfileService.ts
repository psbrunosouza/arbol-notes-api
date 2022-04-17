import { inject, injectable } from 'tsyringe';
import { ProfileRepository } from '@modules/profile/infra/typeorm/repositories/ProfileRepository';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';

@injectable()
export default class UpdateProfileService {
  constructor(
    @inject(ProfileRepository)
    private profileRepository: ProfileRepository,
  ) {}

  public async execute(id: number, profile: IProfileDTO): Promise<void> {
    return this.profileRepository.update(id, profile);
  }
}
