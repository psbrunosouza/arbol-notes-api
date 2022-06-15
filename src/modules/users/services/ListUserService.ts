import { inject, injectable } from 'tsyringe';
import { UserRepository } from '@modules/users/infra/typeorm/repositories/UserRepository';
import { IUserDTO } from '@modules/users/dtos/IUserDTO';
import { PrismaUserRepository } from '@modules/users/infra/prisma/repositories/PrismaUserRepository';

@injectable()
export default class ListUserService {
  constructor(
    @inject(PrismaUserRepository)
    private userRepository: UserRepository,
  ) {}

  public async execute(): Promise<IUserDTO[]> {
    return this.userRepository.list();
  }
}
