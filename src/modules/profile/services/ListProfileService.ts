import { inject, injectable } from 'tsyringe';
import { ProfileRepository } from '@modules/profile/infra/typeorm/repositories/ProfileRepository';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';

@injectable()
export default class ListProfileService {
  constructor(
    @inject(ProfileRepository)
    private profileRepository: ProfileRepository,
  ) {}

  public async execute(): Promise<IProfileDTO[]> {
    return this.profileRepository.list();
  }
}
