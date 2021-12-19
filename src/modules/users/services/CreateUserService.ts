import { inject, injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';

@injectable()
export default class CreateUserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository,
  ) {}

  public async execute(profile: IProfileDTO): Promise<IProfileDTO> {
    return this.userRepository.create(profile);
  }
}
