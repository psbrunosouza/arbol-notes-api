import { inject, injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';

@injectable()
export default class UpdateUserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository,
  ) {}

  public async execute(id: number, profile: IProfileDTO): Promise<void> {
    return this.userRepository.update(id, profile);
  }
}
