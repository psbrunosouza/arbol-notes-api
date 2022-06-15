import { inject, injectable } from 'tsyringe';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { hash } from 'bcrypt';
import { PrismaUserRepository } from '@modules/users/infra/prisma/repositories/PrismaUserRepository';

@injectable()
export default class CreateUserService {
  constructor(
    @inject(PrismaUserRepository)
    private userRepository: PrismaUserRepository,
  ) {}

  public async execute(user: IUserDTO): Promise<IUserDTO> {
    user.password = await hash(user.password, 8);
    const createdUser = await this.userRepository.create({ ...user });
    return { ...createdUser, password: undefined } as unknown as IUserDTO;
  }
}
