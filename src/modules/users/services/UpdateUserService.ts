import { inject, injectable } from 'tsyringe';
import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';

@injectable()
export default class UpdateUserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository,
  ) {}

  public async execute(id: number, user: IUserDTO): Promise<void> {
    return this.userRepository.update(id, user);
  }
}
