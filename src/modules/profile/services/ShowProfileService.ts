import { inject, injectable } from 'tsyringe';
import { ProfileRepository } from '@modules/profile/infra/typeorm/repositories/ProfileRepository';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';

@injectable()
export default class ShowProfileService {
  constructor(
    @inject(ProfileRepository)
    private profileRepository: ProfileRepository,
  ) {}

  public async execute(id: number): Promise<IProfileDTO | undefined> {
    return this.profileRepository.find(id);
  }
}
