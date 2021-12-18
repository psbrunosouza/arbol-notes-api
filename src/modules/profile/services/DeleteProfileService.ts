import { inject, injectable } from 'tsyringe';
import { ProfileRepository } from '@modules/profile/infra/typeorm/repositories/ProfileRepository';

@injectable()
export default class DeleteProfileService {
  constructor(
    @inject(ProfileRepository)
    private profileRepository: ProfileRepository,
  ) {}

  public async execute(id: number): Promise<void> {
    return this.profileRepository.delete(id);
  }
}
