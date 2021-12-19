import { inject, injectable } from 'tsyringe';
import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';

@injectable()
export default class CreateUserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository,
  ) {}

  public async execute(user: IUserDTO): Promise<IUserDTO> {
    return this.userRepository.create(user);
  }
}
