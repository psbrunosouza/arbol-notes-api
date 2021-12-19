import { inject, injectable } from 'tsyringe';
import { IProfileDTO } from '@modules/profile/dtos/IProfileDTO';
import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';

@injectable()
export default class ListUserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository,
  ) {}

  public async execute(): Promise<IProfileDTO[]> {
    return this.userRepository.list();
  }
}
