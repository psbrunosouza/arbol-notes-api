import { inject, injectable } from 'tsyringe';
import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { hash } from 'bcrypt';

@injectable()
export default class CreateUserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository,
  ) {}

  public async execute(user: IUserDTO): Promise<IUserDTO> {
    user.password = await hash(user.password, 8);
    const createdUser = await this.userRepository.create({ ...user });
    return { ...createdUser, password: undefined } as unknown as IUserDTO;
  }
}
