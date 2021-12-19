import { inject, injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';

@injectable()
export default class ShowUserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository,
  ) {}

  public async execute(id: number): Promise<IProfileDTO | undefined> {
    return this.userRepository.find(id);
  }
}
